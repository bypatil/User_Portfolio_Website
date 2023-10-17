let cart = [];
let cartTotal=0;

function addToCart(productName, price){
cart.push({name: productName, Price: price});
cartTotal += price;
updateCart();
}

function updateCart(){
const cartItems=document.getElementById('cart-item');
const cartTotalElement=document.getElementById('cart-total');

cartItems.innerHTML='';
cart.forEach(item => {
    const li= document.createElement('li');
    li.textContent = '${item.name} - $${item.price}';
    cartItems.appendChild(li);
});

cartTotalElement.textContent = cartTotal;
}

function checkout(){
    alert('Total Amount : $${cartTotal}');
}