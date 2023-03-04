const { decodeJWT } = require("../helper/jwt.helper.js");

const authorization = (req, res, next) => {
  try {
    const headerBearer = req.headers.authorization;

    if (!headerBearer) throw new Error();

    const token = headerBearer.split(" ")[1];

    const data = decodeJWT(token);

    req.userId = data.id;
    req.userName = data.name;

    return next();
  } catch (e) {
    res.sendStatus(401);
  }
};

module.exports = authorization;
