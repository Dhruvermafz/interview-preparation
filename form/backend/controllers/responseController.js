const Response = require("../models/responseModel");

const submitResponse = async (req, res) => {
  try {
    const newResponse = new Response(req.body);
    await newResponse.save();
    res.status(201).json(newResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitResponse };
