const defaultDetails = {
  message: "Invalid Credentials !",
};

class InvalidCredentialsError extends Error {
  constructor(details = defaultDetails) {
    super();
    this.statusCode = 401;
    this.details = details;
  }
}

module.exports = { InvalidCredentialsError };
