class ModelValidationError extends Error {
  constructor(details) {
    super();
    this.statusCode = 400;
    this.details = details;
  }
}

module.exports = { ModelValidationError };
