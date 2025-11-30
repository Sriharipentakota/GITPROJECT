import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  validateCredentials,
  generateSessionToken,
  storeSession,
  clearSession,
  isAuthenticated as checkAuth
} from '../utils/authUtils';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const authenticated = checkAuth();
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  }, []);

  /**
   * Login with username and password
   * @param {string} username
   * @param {string} password
   * @returns {Promise<{success: boolean, error?: string}>}
   */
  const login = async (username, password) => {
    try {
      const isValid = await validateCredentials(username, password);
      
      if (isValid) {
        const token = generateSessionToken();
        storeSession(token);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, error: 'Invalid username or password' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An error occurred during login' };
    }
  };

  /**
   * Logout user
   */
  const logout = () => {
    clearSession();
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
