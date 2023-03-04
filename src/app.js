require("dotenv").config();
require("express-async-handler");

const express = require("express");

const router = require("./router");

const { errorHandler } = require("./middleware/errorHandler.js");

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found !" });
});

module.exports = app;
