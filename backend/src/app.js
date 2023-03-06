require("dotenv").config();
require("express-async-handler");

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const router = require("./router");

const { errorHandler } = require("./middleware/errorHandler.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.use(errorHandler);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found !" });
});

module.exports = app;
