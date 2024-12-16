const axios = require("axios");

exports.randomduck = async (req, res) => {
  try {
    // const { city } = req.params;
    const apiURL = `https://random-d.uk/api or https://random-d.uk/api/v2`;
    const response = await axios.get(apiURL);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
