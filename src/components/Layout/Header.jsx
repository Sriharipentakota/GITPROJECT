import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Book, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/flashcards', label: 'Flashcards' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/notes', label: 'Notes' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="d-flex align-items-center gap-2"
          >
            <div className="p-2 bg-primary rounded">
              <Book className="text-white" style={{ width: '24px', height: '24px' }} />
            </div>
            <span className="fs-4 fw-bold text-dark">
              InterviewPrep
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-pill fw-medium ${location.pathname === item.path ? 'bg-primary text-white' : 'text-secondary'}`}
                style={{ textDecoration: 'none', transition: 'background 0.2s' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="d-flex align-items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="btn btn-light btn-sm rounded-circle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun style={{ width: '20px', height: '20px' }} /> : <Moon style={{ width: '20px', height: '20px' }} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="d-md-none btn btn-light btn-sm rounded-circle"
              aria-label="Toggle menu"
            >
              <Menu style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;