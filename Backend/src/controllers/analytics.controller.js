const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const Order = require('../models/Order.model');
const User = require('../models/User.model');
const Product = require('../models/Product.model');
const Transaction = require('../models/Transaction.model');

// Get analytics overview
const getOverview = asyncHandler(async (req, res) => {
  const [
    totalUsers,
    totalOrders,
    totalProducts,
    completedOrders,
    totalRevenue,
  ] = await Promise.all([
    User.countDocuments(),
    Order.countDocuments(),
    Product.countDocuments(),
    Order.countDocuments({ status: 'delivered' }),
    Order.aggregate([
      { $match: { status: 'delivered' } },
      { $group: { _id: null, total: { $sum: '$totalAmount' } } },
    ]),
  ]);

  const data = {
    totalUsers,
    totalOrders,
    totalProducts,
    completedOrders,
    totalRevenue: totalRevenue[0]?.total || 0,
    growthRate: {
      users: 12.5,
      orders: 8.3,
      revenue: 15.7,
    },
  };

  ApiResponse.success(res, 'Analytics overview retrieved successfully', data);
});

// Get revenue data
const getRevenueData = asyncHandler(async (req, res) => {
  const { period = 'monthly' } = req.query;

  // Mock data for revenue chart
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [45000, 52000, 48000, 62000, 55000, 58000, 70000, 65000, 72000, 68000, 75000, 80000],
      },
      {
        label: 'Profit',
        data: [15000, 18000, 16000, 22000, 19000, 21000, 25000, 23000, 26000, 24000, 27000, 30000],
      },
    ],
  };

  ApiResponse.success(res, 'Revenue data retrieved successfully', revenueData);
});

// Get order statistics
const getOrderStats = asyncHandler(async (req, res) => {
  const ordersByStatus = await Order.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalAmount: { $sum: '$totalAmount' },
      },
    },
  ]);

  const data = {
    ordersByStatus,
    topPaymentMethods: [
      { method: 'Credit Card', count: 145, percentage: 45 },
      { method: 'PayPal', count: 98, percentage: 30 },
      { method: 'Debit Card', count: 65, percentage: 20 },
      { method: 'Bank Transfer', count: 16, percentage: 5 },
    ],
  };

  ApiResponse.success(res, 'Order statistics retrieved successfully', data);
});

// Get recent transactions
const getTransactions = asyncHandler(async (req, res) => {
  const { limit = 10 } = req.query;

  const transactions = await Transaction.find()
    .populate('user', 'firstName lastName email avatar')
    .populate('order', 'totalAmount status')
    .sort({ createdAt: -1 })
    .limit(parseInt(limit));

  ApiResponse.success(res, 'Transactions retrieved successfully', { transactions });
});

// Get browser statistics
const getBrowserStats = asyncHandler(async (req, res) => {
  const browserStats = [
    { browser: 'Chrome', visits: 8.92, percentage: 64.91 },
    { browser: 'Safari', visits: 1.29, percentage: 19.03 },
    { browser: 'Firefox', visits: 0.85, percentage: 9.47 },
    { browser: 'Edge', visits: 0.34, percentage: 6.59 },
  ];

  ApiResponse.success(res, 'Browser statistics retrieved successfully', { browserStats });
});

module.exports = {
  getOverview,
  getRevenueData,
  getOrderStats,
  getTransactions,
  getBrowserStats,
};
