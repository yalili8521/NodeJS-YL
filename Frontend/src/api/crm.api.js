import axiosInstance from './axios.config';

export const crmAPI = {
  // Get CRM overview
  getOverview: async () => {
    const response = await axiosInstance.get('/crm/overview');
    return response;
  },

  // Get customers
  getCustomers: async (params = {}) => {
    const response = await axiosInstance.get('/crm/customers', { params });
    return response;
  },

  // Get leads data
  getLeads: async () => {
    const response = await axiosInstance.get('/crm/leads');
    return response;
  },

  // Get sales by country
  getSalesByCountry: async () => {
    const response = await axiosInstance.get('/crm/sales-by-country');
    return response;
  },

  // Get team members
  getTeamMembers: async () => {
    const response = await axiosInstance.get('/crm/team-members');
    return response;
  },
};
