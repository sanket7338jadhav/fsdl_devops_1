// Product Data
const products = [
  {
    name: "Laptop",
    category: "electronics",
    image: "https://picsum.photos/200?1",
  },
  {
    name: "Phone",
    category: "electronics",
    image: "https://picsum.photos/200?2",
  },
  { name: "Shirt", category: "fashion", image: "https://picsum.photos/200?3" },
  { name: "Shoes", category: "fashion", image: "https://picsum.photos/200?4" },
  { name: "Book 1", category: "books", image: "https://picsum.photos/200?5" },
  { name: "Book 2", category: "books", image: "https://picsum.photos/200?6" },
];

const container = document.getElementById("productContainer");

// Display products
function displayProducts(list) {
  container.innerHTML = "";

  list.forEach((p) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.category}</p>
        `;

    container.appendChild(card);
  });
}

// Filter function
function filterProducts(category) {
  let buttons = document.querySelectorAll(".filters button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  event.target.classList.add("active");

  if (category === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter((p) => p.category === category);
    displayProducts(filtered);
  }
}

// Initial load
displayProducts(products);
