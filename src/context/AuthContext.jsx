import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

/**
 * Authentication context provider
 * Manages user authentication state and related operations
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem('recipeapp_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now().toString(),
        email,
        name: email.split('@')[0],
        avatar: `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`
      };
      
      setUser(userData);
      localStorage.setItem('recipeapp_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials' };
    }
  };

  const signup = async (name, email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now().toString(),
        email,
        name,
        avatar: `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`
      };
      
      setUser(userData);
      localStorage.setItem('recipeapp_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('recipeapp_user');
  };

  const updateProfile = async (updates) => {
    try {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('recipeapp_user', JSON.stringify(updatedUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Profile update failed' };
    }
  };

  const resetPassword = async (email) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Password reset failed' };
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}