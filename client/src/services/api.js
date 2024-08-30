// import axis from 'axios';
import {axios} from '../services/helpers';

const API_URL = '/api/users';

export const getUserProfile = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) throw new Error('No token found');

  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};

// Add other API service functions if needed
