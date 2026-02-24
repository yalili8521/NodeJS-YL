const { validationResult } = require('express-validator');
const ApiError = require('../utils/ApiError');
const { HTTP_STATUS } = require('../config/constants');

// Middleware to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((error) => ({
      field: error.path || error.param,
      message: error.msg,
    }));

    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Validation failed', formattedErrors);
  }

  next();
};

module.exports = { validate };
