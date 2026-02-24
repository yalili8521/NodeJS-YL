import axiosInstance from './axios.config';

export const analyticsAPI = {
  // Get analytics overview
  getOverview: async () => {
    const response = await axiosInstance.get('/analytics/overview');
    return response;
  },

  // Get revenue data
  getRevenueData: async (period = 'monthly') => {
    const response = await axiosInstance.get('/analytics/revenue', {
      params: { period },
    });
    return response;
  },

  // Get order statistics
  getOrderStats: async () => {
    const response = await axiosInstance.get('/analytics/orders');
    return response;
  },

  // Get transactions
  getTransactions: async (limit = 10) => {
    const response = await axiosInstance.get('/analytics/transactions', {
      params: { limit },
    });
    return response;
  },

  // Get browser statistics
  getBrowserStats: async () => {
    const response = await axiosInstance.get('/analytics/browser-stats');
    return response;
  },
};
