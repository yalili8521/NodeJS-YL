import axios from 'axios';

const api = axios.create({
  baseURL: '/data',
});

export const fetchChartData = async () => {
  try {
    const response = await api.get('/chartData.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};

export const fetchRoles = async () => {
  try {
    const response = await api.get('/roles.json');
    return response.data.roles;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default api;
