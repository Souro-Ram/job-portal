const tableBody = document.getElementById("tableBody");
const total = document.getElementById("total");
const message = document.getElementById("message");

async function fetchApplications() {
  try {
    message.textContent = "Loading...";

    const res = await fetch("http://localhost:5000/api/applications");
    const data = await res.json();

    if (!data.success) {
      message.textContent = "Failed to load data";
      return;
    }

    message.textContent = "";
    total.textContent = data.count;

    tableBody.innerHTML = "";

    data.applications.forEach(app => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${app.name || "N/A"}</td>
        <td>${app.email || "N/A"}</td>
        <td>${app.phone || "N/A"}</td>
        <td>${app.address || "N/A"}</td>
        <td>
          ${app.resume && app.resume.public_id
            ? `<a href="${app.resume.public_id}" target="_blank">View Resume</a>` 
            : "No Resume"}
        </td>
      `;

      tableBody.appendChild(row);
    });

  } catch (error) {
    message.textContent = "Server Error";
    console.log(error);
  }
}

fetchApplications();