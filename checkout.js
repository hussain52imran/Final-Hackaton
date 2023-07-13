// Dynamically populate cart items
const cartItems = [];

// Function to add product to cart
function addToCart(product, detail, price) {
    const item = { product, detail, price };
    cartItems.push(item);
    updateCart();
}

// Function to update the cart menu
function updateCart() {
    const cartTable = document.querySelector("#cart-table tbody");
    cartTable.innerHTML = ""; // Clear previous cart items

    cartItems.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.detail}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        cartTable.appendChild(row);
    });

    // Recalculate subtotal and total
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const total = subtotal;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

// Submit form
document.getElementById("billing-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const country = document.getElementById("country").value;
    const region = document.getElementById("region").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const zipcode = document.getElementById("zipcode").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Perform validation - check if at least one billing detail is filled
    if (!fname && !lname && !country && !region && !street && !city && !province && !zipcode && !phone && !email) {
        alert("Please fill at least one billing detail!");
        return;
    }

    // Perform checkout logic here
    alert("Checkout successful!");
});

// Add event listener to "Add to Cart" button
document.getElementById("add-button").addEventListener("click", () => {
    const product = document.getElementById("product").value;
    const detail = document.getElementById("detail").value;
    const price = parseFloat(document.getElementById("price").value);

    if (product && detail && price) {
        addToCart(product, detail, price);
        document.getElementById("product").value = "";
        document.getElementById("detail").value = "";
        document.getElementById("price").value = "";
    }
});



