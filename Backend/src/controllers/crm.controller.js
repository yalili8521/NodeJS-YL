const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const Customer = require('../models/Customer.model');
const Order = require('../models/Order.model');

// Get CRM overview
const getOverview = asyncHandler(async (req, res) => {
  const [totalCustomers, activeCustomers, totalOrders] = await Promise.all([
    Customer.countDocuments(),
    Customer.countDocuments({ status: 'active' }),
    Order.countDocuments(),
  ]);

  const data = {
    totalCustomers,
    activeCustomers,
    inactiveCustomers: totalCustomers - activeCustomers,
    totalOrders,
    averageRating: 4.5,
    newCustomersThisMonth: 45,
  };

  ApiResponse.success(res, 'CRM overview retrieved successfully', data);
});

// Get customer list
const getCustomers = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, status } = req.query;

  const query = {};
  if (status) query.status = status;

  const customers = await Customer.find(query)
    .populate('user', 'firstName lastName email avatar')
    .sort({ createdAt: -1 })
    .limit(parseInt(limit))
    .skip((parseInt(page) - 1) * parseInt(limit));

  const total = await Customer.countDocuments(query);

  ApiResponse.success(res, 'Customers retrieved successfully', {
    customers,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / parseInt(limit)),
    },
  });
});

// Get leads data
const getLeads = asyncHandler(async (req, res) => {
  const leadsData = {
    totalLeads: 234,
    convertedLeads: 187,
    pendingLeads: 47,
    conversionRate: 79.9,
    leadsBySource: [
      { source: 'Website', count: 98, percentage: 41.9 },
      { source: 'Referral', count: 76, percentage: 32.5 },
      { source: 'Social Media', count: 45, percentage: 19.2 },
      { source: 'Email Campaign', count: 15, percentage: 6.4 },
    ],
  };

  ApiResponse.success(res, 'Leads data retrieved successfully', leadsData);
});

// Get sales by country
const getSalesByCountry = asyncHandler(async (req, res) => {
  const salesByCountry = await Customer.aggregate([
    {
      $match: { country: { $ne: null } },
    },
    {
      $group: {
        _id: '$country',
        totalSales: { $sum: '$totalSpent' },
        customerCount: { $sum: 1 },
      },
    },
    {
      $sort: { totalSales: -1 },
    },
    {
      $limit: 10,
    },
  ]);

  ApiResponse.success(res, 'Sales by country retrieved successfully', { salesByCountry });
});

// Get team members
const getTeamMembers = asyncHandler(async (req, res) => {
  const teamMembers = [
    { name: 'John Doe', role: 'Sales Manager', avatar: null, sales: 125000, customers: 45 },
    { name: 'Jane Smith', role: 'Account Executive', avatar: null, sales: 98000, customers: 38 },
    { name: 'Mike Johnson', role: 'Sales Representative', avatar: null, sales: 76000, customers: 29 },
  ];

  ApiResponse.success(res, 'Team members retrieved successfully', { teamMembers });
});

module.exports = {
  getOverview,
  getCustomers,
  getLeads,
  getSalesByCountry,
  getTeamMembers,
};
