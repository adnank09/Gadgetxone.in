let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCounter = document.getElementById('cartCounter');

function updateCartCount() {
    cartCounter.textContent = cart.length;
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
    updateCartCount();
}

updateCartCount();