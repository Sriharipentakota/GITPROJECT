import axios from 'axios';

// Mock API configuration - replace with real backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

class AuthService {
  constructor() {
    this.token = localStorage.getItem('token');
    this.setupAxiosInterceptors();
  }

  setupAxiosInterceptors() {
    // Request interceptor to add token
    axios.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle token expiration
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.logout();
        }
        return Promise.reject(error);
      }
    );
  }

  async login(credentials) {
    try {
      // For demo purposes, simulate API call
      const response = await this.simulateLogin(credentials);
      
      this.token = response.token;
      localStorage.setItem('token', this.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      return response.user;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  }

  async register(userData) {
    try {
      // For demo purposes, simulate API call
      const response = await this.simulateRegister(userData);
      
      this.token = response.token;
      localStorage.setItem('token', this.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      return response.user;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  }

  async logout() {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async getCurrentUser() {
    if (!this.token) return null;
    
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // OAuth simulation methods
  async loginWithGoogle() {
    return new Promise((resolve) => {
      // Simulate OAuth flow
      setTimeout(() => {
        const user = {
          id: 'google_' + Date.now(),
          name: 'Google User',
          email: 'user@gmail.com',
          avatar: 'https://via.placeholder.com/150/4285f4/ffffff?text=G',
          provider: 'google',
          skills: [],
          bio: '',
          location: '',
          hourlyRate: 0
        };
        
        const token = 'mock_google_token_' + Date.now();
        
        this.token = token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        resolve(user);
      }, 1000);
    });
  }

  async loginWithGitHub() {
    return new Promise((resolve) => {
      // Simulate OAuth flow
      setTimeout(() => {
        const user = {
          id: 'github_' + Date.now(),
          name: 'GitHub User',
          email: 'user@github.com',
          avatar: 'https://via.placeholder.com/150/24292e/ffffff?text=GH',
          provider: 'github',
          skills: [],
          bio: '',
          location: '',
          hourlyRate: 0
        };
        
        const token = 'mock_github_token_' + Date.now();
        
        this.token = token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        resolve(user);
      }, 1000);
    });
  }

  // Simulation methods for development
  async simulateLogin(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
          resolve({
            user: {
              id: '1',
              name: 'John Doe',
              email: credentials.email,
              avatar: 'https://via.placeholder.com/150/6366f1/ffffff?text=JD',
              provider: 'local',
              skills: [
                { id: '1', name: 'React Development', category: 'Programming', level: 'Expert', hourlyRate: 75 },
                { id: '2', name: 'UI/UX Design', category: 'Design', level: 'Advanced', hourlyRate: 60 }
              ],
              bio: 'Full-stack developer with 5+ years of experience',
              location: 'San Francisco, CA',
              hourlyRate: 75,
              rating: 4.8,
              completedLessons: 127,
              totalEarnings: 15420
            },
            token: 'mock_token_12345'
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  async simulateRegister(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.password && userData.name) {
          resolve({
            user: {
              id: Date.now().toString(),
              name: userData.name,
              email: userData.email,
              avatar: `https://via.placeholder.com/150/6366f1/ffffff?text=${userData.name.charAt(0)}`,
              provider: 'local',
              skills: [],
              bio: '',
              location: '',
              hourlyRate: 0,
              rating: 0,
              completedLessons: 0,
              totalEarnings: 0
            },
            token: `mock_token_${Date.now()}`
          });
        } else {
          reject(new Error('Missing required fields'));
        }
      }, 1000);
    });
  }

  isAuthenticated() {
    return !!this.token;
  }

  getToken() {
    return this.token;
  }
}

export const authService = new AuthService();