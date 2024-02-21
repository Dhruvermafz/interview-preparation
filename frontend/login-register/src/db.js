const mongoose = require("mongoose");

const dbUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/LoginFormPractice";

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose connected to the database.");
  })
  .catch((e) => {
    console.error("Failed to connect to the database:", e.message);
  });

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Example: Password should be at least 6 characters long.
    // Add more validation rules as per your requirements.
  },
});

const LogInCollection = mongoose.model("LogInCollection", logInSchema);

module.exports = LogInCollection;
