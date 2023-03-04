require("dotenv").config();
require("express-async-handler");

const express = require("express");

const router = require("./router");

const { errorHandler } = require("./middleware/errorHandler.js");

const app = express();

app.use(express.json());

app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found !" });
});

app.use(errorHandler);

module.exports = app;
