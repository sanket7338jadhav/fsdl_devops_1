// JSON Dataset
const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹50,000",
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Smartphone",
    price: "₹20,000",
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹3,000",
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "₹5,000",
    image: "https://picsum.photos/200?random=4",
  },
];

// Display Products
const container = document.getElementById("productContainer");

products.forEach((product) => {
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="buyProduct('${product.name}')">Buy Now</button>
    `;

  container.appendChild(card);
});

// Buy Interaction
function buyProduct(name) {
  alert(name + " purchased successfully!");
}
