/**
 * Navigation component for the QR code generator application
 * Provides consistent navigation across different pages
 */
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Main navigation component with brand logo and navigation links
 */
function Navigation() {
  // Get current location for active link highlighting
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Brand/Logo Section */}
        <Link to="/" className="nav-brand">
          <span className="brand-icon">📱</span>
          QR Generator
        </Link>
        
        {/* Navigation Links */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            🏠 Home
          </Link>
          <button 
            onClick={handleLogout}
            className="nav-link logout-button"
            title="Logout"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
