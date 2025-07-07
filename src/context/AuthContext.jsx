import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:5000/api'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token'))

  // Set up axios interceptor for token
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }, [token])

  // Check if user is logged in on app start
  useEffect(() => {
    const checkAuth = async () => {
      const savedToken = localStorage.getItem('token')
      if (savedToken) {
        try {
          const response = await axios.get('/auth/me')
          if (response.data.success) {
            setUser(response.data.user)
            setToken(savedToken)
          } else {
            localStorage.removeItem('token')
          }
        } catch (error) {
          console.error('Auth check failed:', error)
          localStorage.removeItem('token')
        }
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const signup = async (userData) => {
    try {
      const response = await axios.post('/auth/signup', userData)
      
      if (response.data.success) {
        const { token: newToken, user: newUser } = response.data
        localStorage.setItem('token', newToken)
        setToken(newToken)
        setUser(newUser)
        return { success: true, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (error) {
      const message = error.response?.data?.message || 'Signup failed'
      const errors = error.response?.data?.errors || []
      return { success: false, message, errors }
    }
  }

  const signin = async (credentials) => {
    try {
      const response = await axios.post('/auth/signin', credentials)
      
      if (response.data.success) {
        const { token: newToken, user: newUser } = response.data
        localStorage.setItem('token', newToken)
        setToken(newToken)
        setUser(newUser)
        return { success: true, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (error) {
      const message = error.response?.data?.message || 'Signin failed'
      const errors = error.response?.data?.errors || []
      return { success: false, message, errors }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    delete axios.defaults.headers.common['Authorization']
  }

  const value = {
    user,
    loading,
    signup,
    signin,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}