const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: String,
});

const questionSchema = new mongoose.Schema({
  text: String,
  type: String,
  options: [optionSchema],
});

const formSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
