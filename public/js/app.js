function fetchUsers() {
    fetch('/api/api/users?page=1', {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
        }
    })
        .then(res => {
            console.log('Status: ', res.status);
            return res.json()
        })
        .then(data => {
            const container = document.getElementById('userList');
            container.innerHTML = '';
            console.log(data);
            data.data.forEach(user => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-3';
                col.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${user.avatar}" alt="${user.first_name}"/>
                    <div class="card-body">
                        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                        <p>${user.email}</p>
                        <button class="btn btn-warning btn-sm me-2" onclick="editUser(${user.id})">✏️ Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">🗑️ Eliminar</button>          
                    </div>
                </div>
            `;
                container.appendChild(col);
            })
        })
        .catch(err => {
            console.error(err);
            Swal.fire('Error', 'No se pudieron cargar los usuarios', 'error');
        })
} // Metodo GET

function createUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;

    fetch('api/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify({ name, job })
    })
        .then(res => res.json())
        .then(data => {
            Swal.fire('Usuario Creado', `ID: ${data.id} - ${data.name}`, 'success');
            document.getElementById('name').value = '';
            document.getElementById('job').value = '';
        })
        .catch(err => {
            console.error(err);
            Swal.fire('Error', 'No se pudieron crear el usuario', 'error');
        })
} // Metodo POST

function editUser(id) {
    Swal.fire({
        title: 'Editar Usuario',
        html: `
            <input id="swal-name" class="swal2-input" placeholder="Nuevo nombre">
            <input id="swal-job" class="swal2-input" placeholder="Nuevo trabajo">
        `,
        confirmButtonText: 'Guardar cambios',
        showCancelButton: true,
        preConfirm: () => {
            const name = document.getElementById('swal-name').value;
            const job = document.getElementById('swal-job').value;

            return fetch(`/api/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'reqres-free-v1',
                },
                body: JSON.stringify({ name, job })
            })
        }
    })
        .then(res => res.json())
        .then(data => {
            Swal.fire('✅ Usuario actualizado', `Nombre: ${data.name}<br>Trabajo: ${data.job}`, 'success')
        })
        .catch(err => {
            console.error(err);
            Swal.fire('Error', 'No se pudo editar el usuario', 'error');
        });
} // Metodo PUT

function deleteUser(id) {
    Swal.fire({
        title: '¿Eliminar usuario?',
        text: `Esta acción es irreversible (pero mentira 😅)`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    })
        .then(result => {
            if (result.isConfirmed) {
                fetch(`/api/api/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'x-api-key': 'reqres-free-v1',
                    }
                })
            }
        })
        .then(res => {
            if (res.status === 204) {
                Swal.fire('🗑️ Eliminado', 'Usuario eliminado correctamente (simulado)', 'success');
                fetchUsers();
            } else {
                throw new Error('Error inesperado');
            }
        })
        .catch(err => {
            console.error(err);
            Swal.fire('Error', 'No se pudo eliminar el usuario', 'error');
        });
} // Metodo DELETE