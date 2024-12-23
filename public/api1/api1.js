function send() {
  const img = document.getElementById("img_elem");
  fetch(`/api1/dogs`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data contains the expected structure
      if (data) {
        img.src = data.url;
        img.style.display = "block";
      } else {
        document.getElementById("output").innerText = "No dog image to show up";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("output").innerText =
        "Error fetching data: " + error.message;
    });
}
