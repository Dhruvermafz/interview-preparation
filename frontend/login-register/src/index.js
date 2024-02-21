const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const LogInCollection = require("./db");
const port = process.env.PORT || 3000;
const session = require("express-session");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const templatePath = path.join(__dirname, "../templates");
const publicPath = path.join(__dirname, "../public");
console.log(publicPath);

app.use(
  session({
    secret: "sfsvgweg",
    resave: false,
    saveUninitialized: true,
  })
);

function checkLoggedIn(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  next();
}

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(publicPath));

// Router for signup
const signupRouter = express.Router();

signupRouter.get("/", (req, res) => {
  res.render("signup");
});

signupRouter.post("/", async (req, res, next) => {
  try {
    const name = req.body.name;
    const password = req.body.password;

    if (!name || !password) {
      return res.status(400).send("Please provide both name and password.");
    }

    const existingUser = await LogInCollection.findOne({ name });

    if (existingUser) {
      return res.status(409).send("User details already exist.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new LogInCollection({
      name,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).render("home", { naming: name });
  } catch (error) {
    console.error("Error while signing up:", error);
    res.status(500).send("An error occurred while signing up.");
  }
});

app.use("/signup", signupRouter);

// Router for login
const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.render("login");
});

loginRouter.post("/", async (req, res, next) => {
  try {
    const name = req.body.name;
    const password = req.body.password;

    if (!name || !password) {
      return res.status(400).send("Please provide both name and password.");
    }

    const user = await LogInCollection.findOne({ name });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send("Incorrect password.");
    }

    // Store user info in session on successful login
    req.session.user = { name: user.name };
    res.status(201).render("home", { naming: `${password}+${name}` });
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).send("An error occurred while logging in.");
  }
});

app.use("/login", loginRouter);

app.get("/", checkLoggedIn, (req, res) => {
  res.render("home", {
    naming: req.session.user.name,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error occurred.");
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
