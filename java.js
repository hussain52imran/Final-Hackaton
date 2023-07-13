var cartItems = [];

function addToCart(title, price) {
  var item = { title: title, price: price };
  cartItems.push(item);

  updateCart();
}

function updateCart() {
  var cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "Your cart is empty.";
  } else {
    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      var cartItemTitle = document.createElement("div");
      cartItemTitle.classList.add("cart-item-title");
      cartItemTitle.textContent = item.title;

      var cartItemPrice = document.createElement("div");
      cartItemPrice.classList.add("cart-item-price");
      cartItemPrice.textContent = "$" + item.price;

      cartItem.appendChild(cartItemTitle);
      cartItem.appendChild(cartItemPrice);

      cartItemsContainer.appendChild(cartItem);
    }
  }

  showCart();
}

function showCart() {
  var cart = document.getElementById("cart");
  cart.style.display = "block";
}

function checkout() {
  // Perform checkout operation here (e.g., payment processing, order confirmation)

  // Clear the cart
  cartItems = [];

  updateCart();

  // Redirect to the thank you page or any other desired location
  window.location.href = "thankyou.html";
}

