import { createContext, useContext } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const register = async (userData) => {
        return await authService.register(userData);
    };

    const login = async (credentials) => {
        return await authService.login(credentials);
    };

    return (
        <AuthContext.Provider value={{ register, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
