fetch("http://localhost:8080/Reciever")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  })
  .then((data) => {
    const tableBody = document.getElementById("userTable");

    if (Array.isArray(data)) {
      data.forEach((user) => {
        const row = document.createElement("tr");

        Object.values(user).forEach((value) => {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.appendChild(cell);
        });

        tableBody.appendChild(row);
      });
    } else {
      console.log("Invalid data format:", data);
    }
  })
  .catch((error) => {
    console.log("Error loading data:", error);
  });
