import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [message, setMessage] = useState('')

  const { signin } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([])
    }
    if (message) {
      setMessage('')
    }
  }

  const validateForm = () => {
    const newErrors = []

    if (!formData.email.trim()) {
      newErrors.push({ field: 'email', msg: 'Email is required' })
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push({ field: 'email', msg: 'Please enter a valid email address' })
    }

    if (!formData.password) {
      newErrors.push({ field: 'password', msg: 'Password is required' })
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateForm()
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setErrors([])
    setMessage('')

    try {
      const result = await signin(formData)
      
      if (result.success) {
        setMessage('Login successful! Redirecting...')
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      } else {
        if (result.errors && result.errors.length > 0) {
          setErrors(result.errors)
        } else {
          setMessage(result.message)
        }
      }
    } catch (error) {
      setMessage('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getFieldError = (fieldName) => {
    return errors.find(error => error.field === fieldName)?.msg
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <FiLogIn />
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to your ResumeBuilder Pro account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${getFieldError('email') ? 'error' : ''}`}
                placeholder="Enter your email address"
                disabled={loading}
                autoComplete="email"
              />
            </div>
            {getFieldError('email') && (
              <span className="error-message">{getFieldError('email')}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${getFieldError('password') ? 'error' : ''}`}
                placeholder="Enter your password"
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {getFieldError('password') && (
              <span className="error-message">{getFieldError('password')}</span>
            )}
          </div>

          {message && (
            <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="loading"></div>
                Signing In...
              </>
            ) : (
              <>
                <FiLogIn />
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn