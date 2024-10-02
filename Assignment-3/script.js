//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

var table = document.getElementById("myTable");
var lastIndex = 0;
function addStudent(Popup = false) {
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);
  let cell8 = row.insertCell(7);
  cell1.innerHTML =
    "<input type='checkbox' onChange='handleCheckbox(this)'/> <br/>  <br/><img src='down.png' width='25px'  onclick='handleTextArea(this)'/>";
  cell2.innerHTML = `Student ${lastIndex + 1}`;
  cell3.innerHTML = `Teacher ${lastIndex + 1}`;
  cell4.innerHTML = "Approved";
  cell5.innerHTML = "Fall";
  cell6.innerHTML = "TA";
  cell7.innerHTML = "12345";
  cell8.innerHTML = "100%";
  let textAreaRow = table.insertRow();
  textAreaRow.classList.add("dropDownTextArea");
  let textAreaCell = textAreaRow.insertCell(0);
  textAreaCell.colSpan = 8;
  textAreaCell.innerHTML =
    "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
  if (Popup) showPopup(`Student ${lastIndex + 1} added successfully`);
  lastIndex++;
}
function handleCheckbox(checkbox) {
  let row = checkbox.parentElement.parentElement;
  let button = document.getElementById("button");
  let editCol = document.getElementById("editCol");
  let deleteCol = document.getElementById("deleteCol");

  if (checkbox.checked) {
    row.classList.add("deleteRow");

    deleteCol.style.display = "";
    editCol.style.display = "";

    if (row.cells.length === 8) {
      let cell9 = row.insertCell(8);
      let cell10 = row.insertCell(9);
      cell9.innerHTML =
        "<button id='deleteButton' onclick='deleteRow(this)'>Delete</button>";
      cell10.innerHTML =
        "<button id='editButton' onclick='editRow(this)'>Edit</button>";
      button.style.backgroundColor = "orange";
      button.disabled = false;
      button.style.cursor = "pointer";
    }
  } else {
    if (row.cells.length === 10) {
      row.deleteCell(9);
      row.deleteCell(8);
    }
    row.classList.remove("deleteRow");
    let anyChecked = Array.from(
      document.querySelectorAll("input[type='checkbox']")
    ).some((checkbox) => checkbox.checked);
    if (!anyChecked) {
      deleteCol.style.display = "none";
      editCol.style.display = "none";
      button.style.backgroundColor = "gray";
      button.disabled = true;
      button.style.cursor = "not-allowed";
    }
  }
}

function manageDeleteColumns() {
  let editCol = document.getElementById("editCol");
  let deleteCol = document.getElementById("deleteCol");
  let anyChecked = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  ).some((checkbox) => checkbox.checked);
  if (!anyChecked) {
    deleteCol.style.display = "none";
    editCol.style.display = "none";
  }
}
manageDeleteColumns();

function deleteRow(button) {
  if (confirm("Are you sure you want to delete this student?", "Yes", "No")) {
    let row = button.parentElement.parentElement;
    let textArea = row.nextSibling;
    const name = row.cells[1].innerHTML;
    table.deleteRow(row.rowIndex);
    table.deleteRow(textArea.rowIndex);
    manageDeleteColumns();
    showPopup(`${name} deleted successfully`);
  }
}

function handleTextArea(img) {
  let row = img.parentElement.parentElement.nextSibling;
  row.classList.toggle("dropDownTextArea");
}

function showPopup(message) {
  alert(message);
}

function editRow(button) {
  let row = button.parentElement.parentElement;
  const name = row.cells[1].innerHTML;
  prompt(`Edit details of ${name}`, "Enter new name");
}

function submitStudent() {
  showPopup("Submitted successfully");
}
