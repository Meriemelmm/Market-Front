import api from './api'; // ton axios config

const userService = {
  getprofil: async () => {
    const response = await api.get('/me');
    return response.data; 
  },
  updateProfile: async (profileData) => {
    const response = await api.put('/me', profileData);
    return response.data; 
  }

 
};

export default userService;