const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");

const app = express();
require("./config/passport")(passport);

const db = require("./config/key").MongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Successfully connected to MONGODB"))
  .catch((err) => console.log(err));

app.use(expressLayouts);
app.use("/assets", express.static("./assets"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());

//------------ Connecting flash ------------//
app.use(flash());

//------------ Global variables ------------//
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
//------------ Routes ------------//
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
