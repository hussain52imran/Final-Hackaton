const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartCount = document.querySelector('.cart-count');

let itemCount = 0;

addToCartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    itemCount++;
    cartCount.textContent = itemCount;
  });
});


