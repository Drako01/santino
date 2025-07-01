const cards = document.getElementById('cards');

const peticion1 = async () => {
    // const respuesta = await fetch('../productos.json');
    const respuesta = await fetch('https://6863e6a188359a373e96cb3d.mockapi.io/productos');
    
    const datos = await respuesta.json();
    
    const data = await datos;
    cards.innerHTML = '';

    data.forEach((item) => {
        const card = document.createElement('div');
        card.innerHTML =  ` 
            <div class="card producto-card">
            <div class="producto-img-wrapper">
                <img src="${item.imagen}" alt="${item.nombre}" class="producto-img">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text small text-muted">${item.descripcion}</p>
                </div>
                <div>
                <p class="card-text mb-1"><strong>Precio:</strong> $${item.precio}</p>
                <p class="card-text mb-2"><strong>Stock:</strong> ${item.stock} unid.</p>
                <a href="#" class="btn btn-sm btn-primary w-100">Comprar</a>
                </div>
            </div>
            </div>
        `;
        cards.appendChild(card);
    })
} 


// peticion1();



const peticion2 = async () => {
    // const respuesta = await fetch('../productos.json');
    const respuesta = await fetch('https://fakestoreapi.com/products');
    
    const datos = await respuesta.json();
    
    const data = await datos;
    cards.innerHTML = '';

    data.forEach((item) => {
        const card = document.createElement('div');
        card.innerHTML =  ` 
            <div class="card" style="width:18rem; height:32rem;">
                <img class="card-img-top" src="${item.image}" alt="${item.title}"/>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Descripcion: ${
                        item.description.length > 100 
                            ? `${item.description.substring(0,100)}...
                                <button class="btn btn-sm btn-link p-0 ms-0 view-full"
                                data-message="${encodeURIComponent(item.description)}"
                                ><i class="bi bi-eye">Ver Completo</i>
                                </button>
                            `
                            : `${item.description}`}</p>
                    <p class="card-text">Precio: $${item.price}.-</p>
                    <p class="card-text">Stock: ${item.rating.count} Unid.</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        `;
        cards.appendChild(card);
    })

    attachViewFullEvents();
} 

peticion2();


function attachViewFullEvents() {
    document.querySelectorAll('.view-full').forEach(btn => {
        btn.addEventListener('click', () => {
            const fullMessage = decodeURIComponent(btn.dataset.message);

            // Inserta el mensaje
            document.getElementById('modal-message-body').textContent = fullMessage;

            // Colores de fondo por estado
            const header = document.getElementById('modal-header');
            header.className = 'modal-header'; // limpia clases anteriores        

            const modal = new bootstrap.Modal(document.getElementById('messageModal'));
            modal.show();
        });
    });
}