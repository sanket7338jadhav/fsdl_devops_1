script.js
function filterTable() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let table = document.getElementById("glossaryTable");
  let tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    let rowText = tr[i].textContent.toLowerCase();

    if (rowText.includes(filter)) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}