const CLIENT_ID = "884946874812-baqnpk15nensulfifpn1u8j0asoi0cdmk.apps.googleusercontent.com";
const API_KEY = "AIzaSyBCusdfntIswWYpQyzRessL_UxHPNsymgQSg";

const SHEET_ID = "1jCYO_N1oqsdffBl9VhERz2Qu5FdSADxKG04saLervaHk";
const SHEET_NAME = 'Hoja 1';

const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

function initializeGapiClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    }).then(() => {
        gapiInited = true;
        maybeEnableForm();
    });
}

function gisLoaded() {
    if (typeof google === 'undefined' || !google.accounts) {
        console.error("🔴 Google Identity Services no está disponible");
        return;
    }

    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // se define luego
    });

    gisInited = true;
    maybeEnableForm();
}

function maybeEnableForm() {
    if (gapiInited && gisInited) {
        document.getElementById('signin').classList.remove('hidden');
    }
}

function handleAuthClick() {
    if (!tokenClient) {
        alert("Google OAuth no está listo todavía.");
        return;
    }

    tokenClient.callback = (resp) => {
        if (resp.error) {
            console.error(resp);
            alert("❌ Error al iniciar sesión con Google");
            return;
        }

        document.getElementById('myForm').classList.remove('hidden');
        document.getElementById('signin').classList.add('hidden');
        document.getElementById('formCard').classList.remove('hidden');
        document.getElementById('tablaContainer').classList.remove('hidden');
        document.getElementById('clearContainer').classList.remove('hidden');

        cargarDatosDesdeSheets();
        iniciarActualizacionAutomatica();
    };

    tokenClient.requestAccessToken({ prompt: 'consent' });
}

function submitForm(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const params = {
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [[nombre, email, mensaje]],
        },
    };

    gapi.client.sheets.spreadsheets.values.append(params).then(
        () => {
            alert('✅ Datos enviados correctamente.');
            document.getElementById('myForm').reset();
            cargarDatosDesdeSheets()
        },
        (err) => {
            console.error(err);
            alert('❌ Error al enviar los datos.');
        }
    );
}

function cargarDatosDesdeSheets() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A2:C`,
    }).then((response) => {
        const valores = response.result.values;
        const tbody = document.querySelector('#dataTable tbody');
        tbody.innerHTML = '';

        if (!valores || valores.length === 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="3" class="text-center">No hay datos Cargados.!</td>`;
            tbody.appendChild(tr)
            return;
        }

        valores.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row[0] || ''}</td>
                <td>${row[1] || ''}</td>
                <td>${row[2] || ''}</td>
            `;
            tbody.appendChild(tr)
        });
    }, (err) => {
        console.error("Error al leer la hoja ", err)
    })
}

function borrarTodo() {
    const confirmar = confirm("⚠️ ¿Esta seguro de que queres borrar todos los datos? Esto es irreversible.!");
    if (!confirmar) return;

    gapi.client.sheets.spreadsheets.values.clear({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A2:C`,
    }).then(() => {
        alert("✅ Datos borrados exitosamente.!");
        cargarDatosDesdeSheets();
    }, (err) => {
        console.error("Error al intentar borrar los datos. ", err)
    });
}

function iniciarActualizacionAutomatica() {
    setInterval(() => {
        cargarDatosDesdeSheets();
        console.log("Datos actualizados desde Sheets.!")
    }, 1000)
}

