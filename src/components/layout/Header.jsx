import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { User, Menu, X, Bus } from 'lucide-react';
import AuthModal from '../Auth/AuthModal';
import styles from './Header.module.css';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      setShowAuthModal(true);
    }
    setShowMobileMenu(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link to="/" className={styles.logo}>
              <Bus size={28} />
              <span>BusGo</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <Link to="/" className={styles.navLink}>Home</Link>
              {isAuthenticated && (
                <Link to="/bookings" className={styles.navLink}>My Bookings</Link>
              )}
            </nav>

            <div className={styles.userSection}>
              {isAuthenticated ? (
                <div className={styles.userMenu}>
                  <button 
                    className={styles.userButton}
                    onClick={handleProfileClick}
                  >
                    <User size={20} />
                    <span className={styles.userName}>{user.name}</span>
                  </button>
                  <button 
                    className={`${styles.logoutButton} ${styles.desktopOnly}`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  className={`btn btn-primary ${styles.loginButton}`}
                  onClick={() => setShowAuthModal(true)}
                >
                  Login / Sign Up
                </button>
              )}

              {/* Mobile Menu Button */}
              <button 
                className={styles.mobileMenuButton}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className={styles.mobileNav}>
              <Link 
                to="/" 
                className={styles.mobileNavLink}
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link 
                    to="/bookings" 
                    className={styles.mobileNavLink}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    My Bookings
                  </Link>
                  <Link 
                    to="/profile" 
                    className={styles.mobileNavLink}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Profile
                  </Link>
                  <button 
                    className={styles.mobileLogoutButton}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <button 
                  className={`btn btn-primary ${styles.mobileLoginButton}`}
                  onClick={() => {
                    setShowAuthModal(true);
                    setShowMobileMenu(false);
                  }}
                >
                  Login / Sign Up
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

export default Header;