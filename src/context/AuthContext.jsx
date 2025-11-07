import { createContext, useContext, useState } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const register = async (userData) => {
    try {
      const res = await authService.register(userData);
      console.log("Réponse inscription :", res);
      return res;
    } catch (error) {
      console.error("Erreur d'inscription :", error.response?.data || error.message);
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const res = await authService.login(credentials);
      console.log("Réponse login :", res);
          const jwt = res.data.jwt;
    const userData = res.data.user;

      if (jwt) {
        localStorage.setItem("token", res.jwt);
        setToken(res.jwt);
      }

      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      }

      return res;
    } catch (error) {
      console.error("Erreur de connexion :", error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
