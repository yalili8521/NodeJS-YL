const express = require('express');
const router = express.Router();
const ecommerceController = require('../controllers/ecommerce.controller');
const { authenticate } = require('../middleware/auth.middleware');

// All e-commerce routes require authentication
router.use(authenticate);

router.get('/overview', ecommerceController.getOverview);
router.get('/revenue-sales', ecommerceController.getRevenueSales);
router.get('/products/performance', ecommerceController.getProductPerformance);
router.get('/conversion-rate', ecommerceController.getConversionRate);

module.exports = router;
