const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));
// app.use(helmet());
// app.use(compression());
// Init DB
require("./dbs/init.mongoDB");
// Trước khi require routes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Init routes
app.use("", require("./routes"));

// Handling errors
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = app;
