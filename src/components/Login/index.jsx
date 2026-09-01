import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 300000;
const ATTEMPT_RESET_TIME = 60000;

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

  useEffect(() => {
    if (isAuthenticated) navigate('/create');
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const stored = localStorage.getItem('login_lockout');
    if (stored) {
      const data = JSON.parse(stored);
      if (data.endTime > Date.now()) {
        setIsLockedOut(true);
        setLockoutEndTime(data.endTime);
        setAttempts(data.attempts);
      } else {
        localStorage.removeItem('login_lockout');
      }
    }
  }, []);

  useEffect(() => {
    if (!isLockedOut || !lockoutEndTime) return;
    const interval = setInterval(() => {
      const remaining = Math.max(0, lockoutEndTime - Date.now());
      setRemainingTime(remaining);
      if (remaining === 0) {
        setIsLockedOut(false);
        setLockoutEndTime(null);
        setAttempts(0);
        localStorage.removeItem('login_lockout');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isLockedOut, lockoutEndTime]);

  useEffect(() => {
    if (attempts <= 0 || attempts >= MAX_ATTEMPTS) return;
    const timeout = setTimeout(() => {
      if (Date.now() - lastAttemptTime.current >= ATTEMPT_RESET_TIME) {
        setAttempts(0);
        setError('');
      }
    }, ATTEMPT_RESET_TIME);
    return () => clearTimeout(timeout);
  }, [attempts]);

  const formatTime = (ms) => {
    const s = Math.ceil(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLockedOut) return;
    if (!username.trim() || !password) {
      setError('Please enter username and password');
      return;
    }

    setIsLoading(true);
    setError('');
    lastAttemptTime.current = Date.now();

    try {
      const result = await login(username, password);
      if (result.success) {
        setAttempts(0);
        localStorage.removeItem('login_lockout');
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setPassword('');
        if (newAttempts >= MAX_ATTEMPTS) {
          const endTime = Date.now() + LOCKOUT_DURATION;
          setIsLockedOut(true);
          setLockoutEndTime(endTime);
          localStorage.setItem('login_lockout', JSON.stringify({ endTime, attempts: newAttempts }));
          setError(`Too many failed attempts. Account locked for ${formatTime(LOCKOUT_DURATION)}.`);
        } else {
          setError(`${result.error}. ${MAX_ATTEMPTS - newAttempts} attempt${MAX_ATTEMPTS - newAttempts !== 1 ? 's' : ''} remaining.`);
        }
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-card">
          {/* Logo + title */}
          <div className="login-logo-area">
            <div className="login-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <path d="M17 17h.01M14 17h.01M17 14h.01M14 14h.01"/>
              </svg>
            </div>
            <div className="login-title">QR Studio</div>
            <div className="login-subtitle">Sign in to your workspace</div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="field">
              <label className="field-label" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                className="field-input"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                disabled={isLoading || isLockedOut}
                autoComplete="username"
                autoFocus
              />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="password">Password</label>
              <div className="password-field">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="field-input"
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={isLoading || isLockedOut}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  tabIndex="-1"
                  disabled={isLoading || isLockedOut}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="alert alert-error" style={{ fontSize: '0.8125rem' }}>
                <span>⚠</span> {error}
              </div>
            )}

            {/* Attempts warning */}
            {attempts > 0 && attempts < MAX_ATTEMPTS && !error && (
              <div className="alert alert-warning" style={{ fontSize: '0.8125rem' }}>
                {MAX_ATTEMPTS - attempts} attempt{MAX_ATTEMPTS - attempts !== 1 ? 's' : ''} remaining
              </div>
            )}

            {/* Lockout timer */}
            {isLockedOut && (
              <div className="login-lockout-timer">
                🔒 Account locked — {formatTime(remainingTime)} remaining
              </div>
            )}

            <button type="submit" className="login-submit-btn" disabled={isLoading || isLockedOut}>
              {isLoading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          {/* Security note */}
          <div className="login-security-note">
            <strong>Security notice:</strong> Authentication is client-side only (SHA-256 + sessionStorage).
            Not suitable as a sole production security control — use server-side auth for real deployments.
            Rate limiting and lockout state are stored in browser localStorage.
          </div>

          <div className="login-footer">
            Protected by rate-limiting · {MAX_ATTEMPTS} attempts before {LOCKOUT_DURATION / 60000}-minute lockout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
