import api from './api'; // ton axios config

const authService = {
    register: async (userData) => {
        // userData = { name, email, password }
        const response = await api.post('/auth/signup', userData);
        return response; // retourne ce que le backend envoie (ex: token, message)
    },

    login: async (credentials) => {
        // credentials = { email, password }
        const response = await api.post('/auth/login', credentials);
        return response.data;
    }
};

export default authService;
