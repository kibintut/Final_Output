const axios = require("axios");

exports.getDogImage = async (req, res) => {
  const url = `https://random.dog/woof.json`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error fetching dog image:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      console.error("Error fetchig dog image:", error.message);
      res.status(500).json({ error: "Failed to fetch data from external API" });
    }
  }
};

exports.getCarData = async (req, res) => {
  const carId = req.query.carId;
  const url = `https://freetestapi.com/api/v1/cars/${carId}`;

  try {
    const response = await axios.get(url);
    res.json(response.data); // Send the car data as JSON response
  } catch (error) {
    if (error.response) {
      console.error("Error fetching car data:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      console.error("Error fetching car data:", error.message);
      res.status(500).json({ error: "Failed to fetch data from external API" });
    }
  }
};

exports.getJokeData = async (req, res) => {
  const url = `https://official-joke-api.appspot.com/random_joke`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error fetching joke data:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      console.error("Error fetching joke data:", error.message);
      res.status(500).json({ error: "Failed to fetch data from external API" });
    }
  }
};
