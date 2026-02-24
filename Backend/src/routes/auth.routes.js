const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { validate } = require('../middleware/validate.middleware');
const { authLimiter } = require('../middleware/rateLimiter.middleware');
const {
  registerValidator,
  loginValidator,
  refreshTokenValidator,
} = require('../validators/auth.validator');

console.log('✅ Auth routes loaded');

// Public routes with rate limiting
router.post('/register',
  (req, res, next) => {
    console.log('🔹 Register route hit');
    next();
  },
  authLimiter,
  registerValidator,
  validate,
  authController.register
);
router.post('/login',
  (req, res, next) => {
    console.log('🔹 Login route hit');
    next();
  },
  authLimiter,
  loginValidator,
  validate,
  authController.login
);
router.post('/refresh-token', refreshTokenValidator, validate, authController.refreshToken);

// Protected routes
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.getCurrentUser);

module.exports = router;
