const unitPrice = 39.99;

function updatePrice() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    document.getElementById('price').innerText = `R$ ${totalPrice}`;
}

function buyProduct() {
    const quantity = document.getElementById('quantity').value;
    const flavor = document.getElementById('flavor').value;
    alert(`Você comprou ${quantity} Pod(s) Ignite V50 de sabor ${flavor}!`);
}
