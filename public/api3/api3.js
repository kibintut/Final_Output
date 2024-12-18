function send() {
  fetch(`/api3/jokes`)
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
                      <h1>${data.setup}</h1>
                      <p><strong> Punchline: <strong><p>
                      <h2><strong>${data.punchline}</strong></h2>
                  `;
        document.getElementById("output").innerHTML = output;
      } else {
        document.getElementById("output").innerText = "Failed to fetch joke.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("output").innerText =
        "Error fetching data: " + error.message;
    });
}
