function send() {
  const city = document.getElementById("userInput").value;
  if (!city) {
    alert("Enter a fucking city bitch!.");
    return;
  }
  fetch(`/api1/weatherstack?city=${city}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data contains the expected structure
      if (data.current) {
        const output = `
                  <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
                  <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
                  <p><strong>Weather Description:</strong> ${data.current.weather_descriptions[0]}</p>
                  <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                  <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h</p>
              `;
        document.getElementById("output").innerHTML = output;
      } else {
        document.getElementById("output").innerText =
          "No weather data found for this city.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("output").innerText =
        "Error fetching data: " + error.message;
    });
}
