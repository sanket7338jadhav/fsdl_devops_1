function togglePricing() {
  let isYearly = document.getElementById("toggle").checked;

  if (isYearly) {
    document.getElementById("basicPrice").innerText = "₹1999/yr";
    document.getElementById("standardPrice").innerText = "₹3999/yr";
    document.getElementById("premiumPrice").innerText = "₹6999/yr";
  } else {
    document.getElementById("basicPrice").innerText = "₹199/mo";
    document.getElementById("standardPrice").innerText = "₹399/mo";
    document.getElementById("premiumPrice").innerText = "₹699/mo";
  }
}
