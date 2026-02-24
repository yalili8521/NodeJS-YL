const express = require('express');
const router = express.Router();

console.log('✅ Routes index.js loaded');

// Import route modules
const authRoutes = require('./auth.routes');
const analyticsRoutes = require('./analytics.routes');
const crmRoutes = require('./crm.routes');
const ecommerceRoutes = require('./ecommerce.routes');

console.log('✅ All route modules loaded successfully');

// Health check route
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// Mount routes
router.use('/auth', authRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/crm', crmRoutes);
router.use('/ecommerce', ecommerceRoutes);

module.exports = router;
