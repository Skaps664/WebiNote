var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayout = require("express-ejs-layouts");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dashboardRouter = require("./routes/dashboard");
var authRouter = require("./routes/auth");

const connectDB = require("./config/db");
const passport = require("passport");
const express_session = require("express-session");
const mongo_connect = require("connect-mongo");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  express_session({
    resave: false,
    saveUninitialized: false,
    secret: "thisisasecret",
  })
);

app.use(passport.initialize()); // This is required to initialize passport
app.use(passport.session()); // This is required for persistent login sessions (optional, but recommended)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayout);

connectDB();

app.set("layout", "./layouts/main");

app.use("/", indexRouter);
app.use("/dashboard", dashboardRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
