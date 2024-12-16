const axios = require("axios");

exports.getWeatherData = async (req, res) => {
  const city = req.query.city;
  const apiKey = "API_KEY";
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
