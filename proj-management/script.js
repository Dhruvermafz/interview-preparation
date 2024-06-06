// Function to show specific sections based on the sidebar selection
function showSection(section) {
  const mainContent = document.getElementById("main-content");

  switch (section) {
    case "project":
      mainContent.innerHTML = `
            <div id="project-table-container">
              <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-success" onclick="addTableRow()">Add Row</button>
                <input type="text" class="form-control w-50" id="searchInput" placeholder="Search by category...">
                <button class="btn btn-secondary" onclick="printTable()">Print</button>
              </div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>WORK ORDER NO</th>
                    <th>PROJECT NAME</th>
                    <th>START DATE</th>
                    <th>END DATE</th>
                    <th>CUSTOMER NAME</th>
                    <th>STATUS</th>
                    <th>REMARKS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody id="project-table-body">
                  <!-- Rows will be added here -->
                </tbody>
              </table>
              <nav>
                <ul class="pagination justify-content-center" id="pagination">
                  <!-- Pagination will be added here -->
                </ul>
              </nav>
            </div>
          `;
      loadTableData();
      break;

    case "projectInfo":
      mainContent.innerHTML = `<h4>Project Info Content</h4>`;
      break;

    case "manageAccess":
      mainContent.innerHTML = `<h4>Manage Access Content</h4>`;
      break;

    case "notifications":
      mainContent.innerHTML = `<h4>Notifications Content</h4>`;
      break;

    default:
      mainContent.innerHTML = "";
  }
}

// Function to add a new row to the table
function addTableRow() {
  const tableBody = document.getElementById("project-table-body");
  const row = document.createElement("tr");

  row.innerHTML = `
        <td><input type="text" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td><input type="date" class="form-control"></td>
        <td><input type="date" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td class="row-actions">
          <button class="btn btn-success btn-sm" onclick="saveRow(this)">Save</button>
          <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
        </td>
      `;

  tableBody.appendChild(row);
}

// Function to save row data to local storage
function saveRow(button) {
  if (!checkEmptyRecords()) {
    return;
  }

  const row = button.parentElement.parentElement;
  const cells = row.querySelectorAll("td");
  const rowData = [];

  cells.forEach((cell, index) => {
    if (index < cells.length - 1) {
      rowData.push(cell.querySelector("input").value);
    }
  });

  let tableData = JSON.parse(localStorage.getItem("projectTableData")) || [];
  tableData.push(rowData);
  localStorage.setItem("projectTableData", JSON.stringify(tableData));

  loadTableData();
}

// Function to delete a row
function deleteRow(button) {
  const row = button.parentElement.parentElement;
  const rowIndex = row.rowIndex - 1; // Adjust for header row

  let tableData = JSON.parse(localStorage.getItem("projectTableData")) || [];
  tableData.splice(rowIndex, 1);
  localStorage.setItem("projectTableData", JSON.stringify(tableData));

  loadTableData();
}

// Function to load table data from local storage
function loadTableData() {
  const tableBody = document.getElementById("project-table-body");
  tableBody.innerHTML = "";

  const tableData = JSON.parse(localStorage.getItem("projectTableData")) || [];
  tableData.forEach((data) => {
    const row = document.createElement("tr");

    data.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    actionCell.className = "row-actions";
    actionCell.innerHTML = `
          <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
        `;
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });

  displayPage(1); // Initialize the display with the first page
}

// Function to print the table
function printTable() {
  const printContents = document.getElementById(
    "project-table-container"
  ).innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

// Function to search table by category
document.addEventListener("input", function (event) {
  if (event.target.id === "searchInput") {
    const searchValue = event.target.value.toLowerCase();
    const tableBody = document.getElementById("project-table-body");
    const rows = tableBody.getElementsByTagName("tr");

    Array.from(rows).forEach((row) => {
      const cells = row.getElementsByTagName("td");
      const category = cells[1].textContent.toLowerCase(); // Assuming category is in the second column
      if (category.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
});

// Pagination logic
let currentPage = 1;
const rowsPerPage = 7;

function displayPage(page) {
  const tableBody = document.getElementById("project-table-body");
  const rows = tableBody.getElementsByTagName("tr");
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  Array.from(rows).forEach((row, index) => {
    row.style.display = "none";
    if (index >= (page - 1) * rowsPerPage && index < page * rowsPerPage) {
      row.style.display = "";
    }
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.className = "page-item" + (i === currentPage ? " active" : "");
    pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    pageItem.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = i;
      displayPage(currentPage);
    });
    pagination.appendChild(pageItem);
  }
}

function checkEmptyRecords() {
  const tableBody = document.getElementById("project-table-body");
  const rows = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const inputs = rows[i].getElementsByTagName("input");
    let isEmpty = false;
    for (let j = 0; j < inputs.length; j++) {
      const inputs = rows[i].getElementsByTagName("input");
      let isEmpty = false;
      for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].value.trim() === "") {
          isEmpty = true;
          break;
        }
      }
      if (isEmpty) {
        alert("Please fill all fields before proceeding.");
        return false;
      }
    }
    return true;
  }

  // Function to initialize the application
  document.addEventListener("DOMContentLoaded", function () {
    showSection("project"); // Load the default section
    displayPage(currentPage); // Display the first page of the table
  });
}
