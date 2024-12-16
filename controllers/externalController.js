const axios = require("axios");

exports.nationalize = async (req, res) => {
  try {
    // const { city } = req.params;
    const apiURL = `https://api.nationalize.io?name=nathaniel`;
    const response = await axios.get(apiURL);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
