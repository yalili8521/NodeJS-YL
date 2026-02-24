const { body, param } = require('express-validator');

const updateUserValidator = [
  body('firstName')
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters long'),
  body('lastName')
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage('Last name must be at least 2 characters long'),
  body('avatar')
    .optional()
    .isURL()
    .withMessage('Avatar must be a valid URL'),
];

const userIdValidator = [
  param('id')
    .isMongoId()
    .withMessage('Invalid user ID format'),
];

module.exports = {
  updateUserValidator,
  userIdValidator,
};
