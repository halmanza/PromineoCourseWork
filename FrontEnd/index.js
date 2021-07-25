let id = 0;
let tableElm = document.getElementById("mainTable");
let tableVal = tableElm.children;
let formValues = document.getElementById("formTableValues");

const createDeleteButton = (id) => {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.textContent = "Delete";
  btn.onclick = () => {
    console.log(`Delete row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
};

addRow.addEventListener("click", (e) => {
  e.preventDefault();
  let row = tableElm.insertRow(-1);

  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).textContent = document.getElementById("firstName").value;
  row.insertCell(1).textContent = document.getElementById("lastName").value;
  row.insertCell(2).textContent = document.getElementById("emailItem").value;
  let actions = row.insertCell(3);

  actions.append(createDeleteButton(id++));
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("emailItem").value = "";
});
