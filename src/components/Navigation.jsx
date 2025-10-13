import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">QR Code App</Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Generator
          </Link>
          <Link 
            to="/scanner" 
            className={location.pathname === '/scanner' ? 'nav-link active' : 'nav-link'}
          >
            Scanner
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
