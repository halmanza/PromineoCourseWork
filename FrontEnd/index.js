let id = 0;
let tableElm = document.getElementById("mainTable");
let tableVal= tableElm.children;
let formValues = document.getElementById("formTableValues");

addRow.addEventListener("click", (e) => {
    e.preventDefault()
  let row = tableElm.insertRow(-1);

  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).textContent = document.getElementById("firstName").value;
  row.insertCell(1).textContent = document.getElementById("lastName").value;
  row.insertCell(2).textContent = document.getElementById("emailItem").value;
  let actions = row.insertCell(3);
  actions.append(' ');
  document.getElementById("firstName").value='';
  document.getElementById("lastName").value='';
  document.getElementById("emailItem").value='';

 
});


