const { ModelValidationError } = require("../errors/ModelValidationError.js");
const {
  InvalidCredentialsError,
} = require("../errors/InvalidCredentialsError.js");
const { SQLGenericError } = require("../errors/SQLGenericError.js");

const errorHandler = (err, req, res, next) => {
  const errorTypes = [
    ModelValidationError,
    InvalidCredentialsError,
    SQLGenericError,
  ];

  if (errorTypes.some((errorType) => errorType.prototype.isPrototypeOf(err))) {
    res.status(err.statusCode).send(err.details);
  } else {
    return res.sendStatus(500);
  }
};

module.exports = { errorHandler };
