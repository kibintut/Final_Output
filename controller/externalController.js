const axios = require("axios");

exports.getWeatherData = async (req, res) => {
  const city = req.query.city;
  const apiKey = "e7f17156883ff52b90f83d574a3e5a5b"; // Replace with your actual API key
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error fetching weather data:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      console.error("Error fetching weather data:", error.message);
      res.status(500).json({ error: "Failed to fetch data from external API" });
    }
  }
};
