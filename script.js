let cart = [];

function addToCart(button) {
    let product = button.parentElement;
    let name = product.getAttribute('data-name');
    let price = parseInt(product.getAttribute('data-price'));
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-list');
    let totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - Rp${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = `Rp${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja kosong!");
        return;
    }
    let message = "Halo, saya ingin membeli:\n";
    cart.forEach(item => {
        message += `- ${item.name} seharga Rp${item.price}\n`;
    });
    let waNumber = "62894326897458"; 
    let url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
