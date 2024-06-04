module.exports = {
  ensureAuthenticated: function (res, req, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.flash("error_msg", "Please log in first!");
    res.direct("/auth/login");
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }

    res.redirect("/dashboard");
  },
};
