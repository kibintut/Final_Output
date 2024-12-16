const axios = require("axios");

exports.weatherstack = async (req, res) => {
  try {
    const { city } = req.params;
    const apiURL = `https://api.weatherstack.com/current?access_key=e7f17156883ff52b90f83d574a3e5a5b&query={city}`;
    const response = await axios.get(apiURL);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
