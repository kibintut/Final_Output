function send() {
  const carId = document.getElementById("userInput").value;
  if (!carId) {
    alert("Enter a number!");
    return;
  }
  fetch(`/api2/cars?carId=${carId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data contains the expected structure
      if (data) {
        const output = `
                    <h2>Car Details</h2>
                    <p><strong>Car Model:</strong> ${data.model}</p>
                    <p><strong>Car Brand:</strong> ${data.brand}</p>
                    <p><strong>Year:</strong> ${data.year}</p>
                    <p><strong>Price:</strong> $${data.price}</p>
                `;
        document.getElementById("output").innerHTML = output;
      } else {
        document.getElementById("output").innerText = "No car to show up";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("output").innerText =
        "Error fetching data: " + error.message;
    });
}
