const { findByEmail } = require("../model/user.model.js");
const { verifyPassword } = require("../helper/argon.helper.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");
const { ModelValidationError } = require("../errors/ModelValidationError.js");
const {
  InvalidCredentialsError,
} = require("../errors/InvalidCredentialsError.js");

const login = async (req, res, next) => {
  try {
    const errors = validateLogin(req.body);

    if (errors) throw new ModelValidationError(errors);

    const [user] = await findByEmail(req.body.email);

    if (!user) throw new InvalidCredentialsError();

    const passwordVerification = await verifyPassword(
      user.password,
      req.body.password
    );

    if (!passwordVerification) throw new InvalidCredentialsError();

    delete user.password;

    const token = encodeJWT(user);

    res.cookie("auth_token", token, { httpOnly: true, secure: false });

    res.status(200).json({ username: user.name, roles: user.roles });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

module.exports = { login, logout };
