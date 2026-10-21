// Product Data (JSON)
const products = [
  { id: 1, name: "Laptop", price: 50000, image: "https://picsum.photos/200?1" },
  { id: 2, name: "Phone", price: 20000, image: "https://picsum.photos/200?2" },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://picsum.photos/200?3",
  },
];

let cart = [];

// Display products
const productList = document.getElementById("productList");

products.forEach((p) => {
  let div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

  productList.appendChild(div);
});

// Add to cart
function addToCart(id) {
  let item = cart.find((p) => p.id === id);

  if (item) {
    item.qty++;
  } else {
    let product = products.find((p) => p.id === id);
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

// Render cart
function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Cart is empty</p>";
    document.getElementById("total").innerText = 0;
    return;
  }

  cart.forEach((item) => {
    let div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <div>
                <button onclick="changeQty(${item.id}, -1)">-</button>
                ${item.qty}
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;

    cartDiv.appendChild(div);
  });

  updateTotal();
}

// Change quantity
function changeQty(id, change) {
  let item = cart.find((p) => p.id === id);
  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter((p) => p.id !== id);
  }

  renderCart();
}

// Remove item
function removeItem(id) {
  cart = cart.filter((p) => p.id !== id);
  renderCart();
}

// Total
function updateTotal() {
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;
  });

  document.getElementById("total").innerText = total;
}
