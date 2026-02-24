import axiosInstance from './axios.config';

export const ecommerceAPI = {
  // Get e-commerce overview
  getOverview: async () => {
    const response = await axiosInstance.get('/ecommerce/overview');
    return response;
  },

  // Get revenue and sales
  getRevenueSales: async () => {
    const response = await axiosInstance.get('/ecommerce/revenue-sales');
    return response;
  },

  // Get product performance
  getProductPerformance: async () => {
    const response = await axiosInstance.get('/ecommerce/products/performance');
    return response;
  },

  // Get conversion rate
  getConversionRate: async () => {
    const response = await axiosInstance.get('/ecommerce/conversion-rate');
    return response;
  },
};
