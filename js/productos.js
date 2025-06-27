// Referencia al contenedor
const contenedor = document.getElementById('contenedor-productos');

// Cargar y renderizar el json
// console.log(fetch('../productos.json'))
fetch('../productos.json')
    .then(response => {
        if(!response.ok) throw new Error("Error al cargar el archivo JSON");
        const data = response.json();
        // console.log(data)
        return data;
    })
    .then(productos => {
        productos.forEach(producto => {
            // console.log(producto)
            const div = document.createElement('div');
            div.classList.add('producto');

            div.innerHTML =  ` 
                <h2>${producto.nombre}</h2>
                <p><strong>Precio: </strong>$${producto.precio}</p>
                <p>${producto.descripcion}</p>
                <button type="button" id="producto-${producto.id}">Comprar</button>
            `;

            contenedor.appendChild(div);
            const boton = document.querySelector(`#producto-${producto.id}`);
            boton.addEventListener('click', () => mostrarDetalles(producto))
        });
    })
    .catch(err => {
        contenedor.innerHTML = `<p style="color: red;">${err.message}</p>`;
    })


function mostrarDetalles(producto){
    let detalles = document.getElementById('detalle-producto');

    if(!detalles){
        detalles = document.createElement('div');
        detalles.id = 'detalle-producto';
        detalles.style.border = '2px solid #000';
        detalles.style.marginTop = '20px';
        detalles.style.padding = '10px';
        document.body.appendChild(detalles);
    }

    detalles.innerHTML = `
        <h2>Detalle del Producto</h2>
        <p><strong>ID </strong>${producto.id}</p>
        <p><strong>Nombre </strong>${producto.nombre}</p>
        <p><strong>Precio </strong>$${producto.precio}.-</p>
        <p><strong>Descripcion </strong>${producto.descripcion}</p>
        <button onclick="document.getElementById('detalle-producto').remove()">Cerrar</button>
    `;

}