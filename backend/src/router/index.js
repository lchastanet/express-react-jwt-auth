const express = require("express");

const movieRoutes = require("./movie.routes.js");
const userRoutes = require("./user.routes.js");
const authRoutes = require("./auth.routes.js");
const authorization = require("../middleware/auth.js");

const router = express.Router();

router.use("/movie", authorization, movieRoutes);
router.use("/user", userRoutes);
router.use(authRoutes);

module.exports = router;
