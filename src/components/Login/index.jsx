import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 300000; // 5 minutes in milliseconds
const ATTEMPT_RESET_TIME = 60000; // 1 minute

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutEndTime, setLockoutEndTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const lastAttemptTime = useRef(Date.now());

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Load lockout state from localStorage
  useEffect(() => {
    const storedLockout = localStorage.getItem('login_lockout');
    if (storedLockout) {
      const lockoutData = JSON.parse(storedLockout);
      const now = Date.now();
      
      if (lockoutData.endTime > now) {
        setIsLockedOut(true);
        setLockoutEndTime(lockoutData.endTime);
        setAttempts(lockoutData.attempts);
      } else {
        // Lockout expired, clear it
        localStorage.removeItem('login_lockout');
      }
    }
  }, []);

  // Countdown timer for lockout
  useEffect(() => {
    if (isLockedOut && lockoutEndTime) {
      const interval = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, lockoutEndTime - now);
        
        setRemainingTime(remaining);
        
        if (remaining === 0) {
          setIsLockedOut(false);
          setLockoutEndTime(null);
          setAttempts(0);
          localStorage.removeItem('login_lockout');
        }
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isLockedOut, lockoutEndTime]);

  // Reset attempts after timeout
  useEffect(() => {
    if (attempts > 0 && attempts < MAX_ATTEMPTS) {
      const timeout = setTimeout(() => {
        const timeSinceLastAttempt = Date.now() - lastAttemptTime.current;
        if (timeSinceLastAttempt >= ATTEMPT_RESET_TIME) {
          setAttempts(0);
          setError('');
        }
      }, ATTEMPT_RESET_TIME);
      
      return () => clearTimeout(timeout);
    }
  }, [attempts]);

  const formatTime = (ms) => {
    const seconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLockedOut) {
      setError(`Too many failed attempts. Please wait ${formatTime(remainingTime)}`);
      return;
    }

    if (!username.trim() || !password) {
      setError('Please enter both username and password');
      return;
    }

    setIsLoading(true);
    setError('');
    lastAttemptTime.current = Date.now();

    try {
      const result = await login(username, password);
      
      if (result.success) {
        // Clear attempts on successful login
        setAttempts(0);
        localStorage.removeItem('login_lockout');
        // Navigation will happen automatically via useEffect
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        if (newAttempts >= MAX_ATTEMPTS) {
          const endTime = Date.now() + LOCKOUT_DURATION;
          setIsLockedOut(true);
          setLockoutEndTime(endTime);
          
          // Store lockout in localStorage
          localStorage.setItem('login_lockout', JSON.stringify({
            endTime,
            attempts: newAttempts
          }));
          
          setError(`Too many failed attempts. Account locked for ${formatTime(LOCKOUT_DURATION)}`);
        } else {
          setError(`${result.error}. ${MAX_ATTEMPTS - newAttempts} attempts remaining.`);
        }
        
        // Clear password field on failed attempt
        setPassword('');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const remainingAttempts = MAX_ATTEMPTS - attempts;

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>QR Code Generator</h1>
          <p>Secure Access Login</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading || isLockedOut}
              autoComplete="username"
              autoFocus
              className="login-input"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading || isLockedOut}
                autoComplete="current-password"
                className="login-input"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex="-1"
                disabled={isLoading || isLockedOut}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          {attempts > 0 && attempts < MAX_ATTEMPTS && !error && (
            <div className="warning-message">
              {remainingAttempts} {remainingAttempts === 1 ? 'attempt' : 'attempts'} remaining
            </div>
          )}

          {isLockedOut && (
            <div className="lockout-message">
              <span className="lockout-icon">🔒</span>
              Account locked. Time remaining: {formatTime(remainingTime)}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={isLoading || isLockedOut}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="login-footer">
          <p className="info-text">
            ℹ️ Default credentials: admin / QRAdmin2024!
          </p>
          <p className="security-note">
            Protected by rate limiting and secure authentication
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
