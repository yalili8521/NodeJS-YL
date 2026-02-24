const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crm.controller');
const { authenticate } = require('../middleware/auth.middleware');

// All CRM routes require authentication
router.use(authenticate);

router.get('/overview', crmController.getOverview);
router.get('/customers', crmController.getCustomers);
router.get('/leads', crmController.getLeads);
router.get('/sales-by-country', crmController.getSalesByCountry);
router.get('/team-members', crmController.getTeamMembers);

module.exports = router;
