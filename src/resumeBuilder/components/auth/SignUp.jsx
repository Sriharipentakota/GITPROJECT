import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiUserPlus } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [message, setMessage] = useState('')

  const { signup } = useAuth()
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
  }

  const validateForm = () => {
    const newErrors = []

    if (!formData.firstName.trim()) {
      newErrors.push({ field: 'firstName', msg: 'First name is required' })
    } else if (formData.firstName.trim().length < 2) {
      newErrors.push({ field: 'firstName', msg: 'First name must be at least 2 characters' })
    }

    if (!formData.lastName.trim()) {
      newErrors.push({ field: 'lastName', msg: 'Last name is required' })
    } else if (formData.lastName.trim().length < 2) {
      newErrors.push({ field: 'lastName', msg: 'Last name must be at least 2 characters' })
    }

    if (!formData.email.trim()) {
      newErrors.push({ field: 'email', msg: 'Email is required' })
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push({ field: 'email', msg: 'Please enter a valid email address' })
    }

    if (!formData.password) {
      newErrors.push({ field: 'password', msg: 'Password is required' })
    } else if (formData.password.length < 6) {
      newErrors.push({ field: 'password', msg: 'Password must be at least 6 characters' })
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.push({ field: 'password', msg: 'Password must contain at least one uppercase letter, one lowercase letter, and one number' })
    }

    if (!formData.confirmPassword) {
      newErrors.push({ field: 'confirmPassword', msg: 'Please confirm your password' })
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.push({ field: 'confirmPassword', msg: 'Passwords do not match' })
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
      const result = await signup(formData)
      
      if (result.success) {
        setMessage('Account created successfully! Redirecting...')
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
            <FiUserPlus />
          </div>
          <h1>Create Account</h1>
          <p>Join ResumeBuilder Pro and create professional resumes</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <div className="input-group">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`form-input ${getFieldError('firstName') ? 'error' : ''}`}
                  placeholder="Enter your first name"
                  disabled={loading}
                />
              </div>
              {getFieldError('firstName') && (
                <span className="error-message">{getFieldError('firstName')}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <div className="input-group">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`form-input ${getFieldError('lastName') ? 'error' : ''}`}
                  placeholder="Enter your last name"
                  disabled={loading}
                />
              </div>
              {getFieldError('lastName') && (
                <span className="error-message">{getFieldError('lastName')}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address *</label>
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
              />
            </div>
            {getFieldError('email') && (
              <span className="error-message">{getFieldError('email')}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${getFieldError('password') ? 'error' : ''}`}
                placeholder="Create a strong password"
                disabled={loading}
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
            <div className="password-requirements">
              <small>Password must contain at least 6 characters with uppercase, lowercase, and number</small>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password *</label>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${getFieldError('confirmPassword') ? 'error' : ''}`}
                placeholder="Confirm your password"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={loading}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {getFieldError('confirmPassword') && (
              <span className="error-message">{getFieldError('confirmPassword')}</span>
            )}
          </div>

          {message && (
            <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
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
                Creating Account...
              </>
            ) : (
              <>
                <FiUserPlus />
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/signin" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp