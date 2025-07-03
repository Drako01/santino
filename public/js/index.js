const productContainer = document.getElementById('products');
const cartList = document.getElementById('cart');
const cart = [];
let products = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data;
        renderProducts(products);
    })
    .catch(error => {
        productContainer.innerHTML = '<p class="text-danger">Error al cargar productos</p>';
        console.error(error);
    });

function renderProducts(products) {
    productContainer.innerHTML = '';
    products.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
        <div class="card h-100">
            <div>
                <img src="${p.image}" class="card-img-top product_img" alt="${p.title}">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.title}</h5>
                <p>$${p.price}</p>
                <button class="btn btn-primary mb-2" onclick="showDetails(${p.id})">Ver más</button>
                <button class="btn btn-success" onclick="addToCartById(${p.id})">Agregar al carrito</button>
            </div>
        </div>
        `;
        productContainer.appendChild(col);
    });
}

function showDetails(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            alert(`📦 ${product.title}\n\n${product.description}`);
        });
}

function addToCartById(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        renderCart();
    }
}

function renderCart() {
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
        ${item.title} - $${item.price}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Quitar</button>
        `;
        cartList.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}
