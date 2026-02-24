const ApiError = require('../utils/ApiError');
const { HTTP_STATUS } = require('../config/constants');

// Authorize based on user roles
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'User not authenticated');
    }

    if (!allowedRoles.includes(req.user.role)) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You do not have permission to perform this action'
      );
    }

    next();
  };
};

module.exports = { authorize };
