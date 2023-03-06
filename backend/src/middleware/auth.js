const { decodeJWT } = require("../helper/jwt.helper.js");

const authorization = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) throw new Error();

    const data = decodeJWT(token);

    req.userId = data.id;
    req.userName = data.name;

    return next();
  } catch (e) {
    res.sendStatus(401);
  }
};

module.exports = authorization;
