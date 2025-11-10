import api from './api'; // ton axios config

const authService = {
  register: async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data; 
  },

  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  logout:async()=>{
      const response =await api.post('auth/logout');
      return response.data;
  }
};

export default authService;
