const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  formId: mongoose.Schema.Types.ObjectId,
  responses: [
    {
      questionId: mongoose.Schema.Types.ObjectId,
      answer: mongoose.Schema.Types.Mixed,
    },
  ],
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
