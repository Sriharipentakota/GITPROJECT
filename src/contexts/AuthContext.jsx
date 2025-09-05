import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('busapp_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem('busapp_users') || '[]');
      const userData = users.find(u => u.email === email && u.password === password);
      if (userData) {
        localStorage.setItem('busapp_user', JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name, email, phone, password) => {
    setIsLoading(true);
    try {
      let users = JSON.parse(localStorage.getItem('busapp_users') || '[]');
      if (users.find(u => u.email === email)) {
        return { success: false, error: 'Email already exists' };
      }
      const userData = {
        id: Date.now(),
        email,
        name,
        phone,
        password,
        joinDate: new Date().toISOString(),
      };
      users.push(userData);
      localStorage.setItem('busapp_users', JSON.stringify(users));
      localStorage.setItem('busapp_user', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('busapp_user');
    setUser(null);
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    localStorage.setItem('busapp_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
    isLoading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};