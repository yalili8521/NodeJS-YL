const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const Product = require('../models/Product.model');
const Order = require('../models/Order.model');

// Get e-commerce overview
const getOverview = asyncHandler(async (req, res) => {
  const [totalProducts, totalOrders, activeProducts, lowStockProducts] = await Promise.all([
    Product.countDocuments(),
    Order.countDocuments(),
    Product.countDocuments({ isActive: true }),
    Product.countDocuments({ stock: { $lt: 10 } }),
  ]);

  const totalRevenue = await Order.aggregate([
    { $match: { status: 'delivered' } },
    { $group: { _id: null, total: { $sum: '$totalAmount' } } },
  ]);

  const data = {
    totalProducts,
    totalOrders,
    activeProducts,
    lowStockProducts,
    totalRevenue: totalRevenue[0]?.total || 0,
    visitors: 54230,
    conversionRate: 3.2,
  };

  ApiResponse.success(res, 'E-commerce overview retrieved successfully', data);
});

// Get revenue and sales data
const getRevenueSales = asyncHandler(async (req, res) => {
  const data = {
    revenue: {
      current: 125430,
      previous: 98250,
      growth: 27.6,
    },
    sales: {
      current: 892,
      previous: 754,
      growth: 18.3,
    },
    profit: {
      current: 45230,
      previous: 38150,
      growth: 18.5,
    },
    expenses: {
      current: 28340,
      previous: 24500,
      growth: 15.7,
    },
  };

  ApiResponse.success(res, 'Revenue and sales data retrieved successfully', data);
});

// Get product performance
const getProductPerformance = asyncHandler(async (req, res) => {
  const topProducts = await Product.find({ isActive: true })
    .sort({ sales: -1 })
    .limit(10)
    .select('name price stock sales category imageUrl');

  ApiResponse.success(res, 'Product performance retrieved successfully', { topProducts });
});

// Get conversion rate analytics
const getConversionRate = asyncHandler(async (req, res) => {
  const conversionData = {
    overall: 3.2,
    byCategory: [
      { category: 'Electronics', rate: 4.5, visitors: 12500, orders: 563 },
      { category: 'Fashion', rate: 3.8, visitors: 9800, orders: 372 },
      { category: 'Home', rate: 2.9, visitors: 7600, orders: 220 },
      { category: 'Sports', rate: 2.5, visitors: 5400, orders: 135 },
    ],
    byMonth: [
      { month: 'Jan', rate: 2.8 },
      { month: 'Feb', rate: 3.0 },
      { month: 'Mar', rate: 3.2 },
      { month: 'Apr', rate: 3.5 },
      { month: 'May', rate: 3.8 },
      { month: 'Jun', rate: 3.2 },
    ],
  };

  ApiResponse.success(res, 'Conversion rate data retrieved successfully', conversionData);
});

module.exports = {
  getOverview,
  getRevenueSales,
  getProductPerformance,
  getConversionRate,
};
