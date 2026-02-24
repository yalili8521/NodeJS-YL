import axiosInstance from './axios.config';

export const authAPI = {
  // Register new user
  register: async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response;
  },

  // Login user
  login: async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response;
  },

  // Logout user
  logout: async () => {
    const response = await axiosInstance.post('/auth/logout');
    return response;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await axiosInstance.get('/auth/me');
    return response;
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    const response = await axiosInstance.post('/auth/refresh-token', { refreshToken });
    return response;
  },
};
