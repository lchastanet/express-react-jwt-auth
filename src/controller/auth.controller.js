const { findByEmail } = require("../model/user.model.js");
const { verifyPassword } = require("../helper/argon.helper.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");

const login = async (req, res) => {
  try {
    const errors = validateLogin(req.body);

    if (errors) return res.status(401).send(errors);

    const [user] = await findByEmail(req.body.email);

    if (!user) return res.status(401).send("Invalid Credentials");

    const passwordVerification = verifyPassword(
      user.password,
      req.body.password
    );

    if (!passwordVerification)
      return res.status(401).send("Invalid Credentials");

    delete user.password;

    const token = encodeJWT(user);

    res.json({ token });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const logout = async (req, res) => {};

module.exports = { login, logout };
