const express = require("express");

const {
  getOne,
  createOne,
  browse,
} = require("../controller/user.controller.js");

const auth = require("../middleware/auth.js");
const rolesCheck = require("../middleware/rolesCheck.js");

const router = express.Router();

router.get("/", auth, rolesCheck("admin"), browse);
router.get("/:id", auth, rolesCheck("admin"), getOne);
router.post("/", createOne);

module.exports = router;
