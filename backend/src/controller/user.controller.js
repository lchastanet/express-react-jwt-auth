const { findOne, addOne, findAll } = require("../model/user.model.js");
const validateUser = require("../validator/user.validator.js");
const { hashPassword } = require("../helper/argon.helper.js");

const browse = async (req, res) => {
  try {
    const users = await findAll();

    res.send(users);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) throw new Error();

    const [user] = await findOne(userId);

    res.send(user);
  } catch (e) {
    res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  try {
    const errors = validateUser(req.body, true);

    if (errors) return res.status(401).send(errors);

    const hashedPassword = await hashPassword(req.body.password);

    const result = await addOne({ ...req.body, password: hashedPassword });

    res.status(201).send(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { getOne, createOne, browse };
