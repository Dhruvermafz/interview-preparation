const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");
const responseRoutes = require("./routes/responseRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);
app.use("/api/responses", responseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
