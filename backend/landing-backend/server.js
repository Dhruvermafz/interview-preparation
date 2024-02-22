import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
const bodyParser = require("body-parser");
import connectDB from "./config/db.js";
import cors from "cors";
import registrationRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/", registrationRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
