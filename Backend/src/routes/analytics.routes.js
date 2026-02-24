const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller');
const { authenticate } = require('../middleware/auth.middleware');

// All analytics routes require authentication
router.use(authenticate);

router.get('/overview', analyticsController.getOverview);
router.get('/revenue', analyticsController.getRevenueData);
router.get('/orders', analyticsController.getOrderStats);
router.get('/transactions', analyticsController.getTransactions);
router.get('/browser-stats', analyticsController.getBrowserStats);

module.exports = router;
