import React from 'react';

// Animation variants for sidebar and overlay
const sidebarVariants = {
  closed: { x: '-100%', transition: { duration: 0.3 } },
  open: { x: '0%', transition: { duration: 0.3 } },
};

const overlayVariants = {
  closed: { opacity: 0, pointerEvents: 'none', transition: { duration: 0.2 } },
  open: { opacity: 1, pointerEvents: 'auto', transition: { duration: 0.2 } },
};
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  BookOpen, 
  Brain, 
  StickyNote, 
  X,
  Home
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/flashcards', label: 'Flashcards', icon: BookOpen },
    { path: '/quiz', label: 'Quiz', icon: Brain },
    { path: '/notes', label: 'Notes', icon: StickyNote },
  ];
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
            style={{ zIndex: 200 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>
      {/* Sidebar */}
      <motion.aside
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={sidebarVariants}
        className="position-fixed top-0 start-0 h-100 bg-white shadow-lg d-flex flex-column d-md-static d-md-block"
        style={{ width: '256px', zIndex: 201 }}
      >
        <div className="d-flex align-items-center justify-content-between px-3 py-3 border-bottom d-md-none">
          <span className="fs-5 fw-bold text-dark">Menu</span>
          <button onClick={onClose} className="btn btn-link text-dark">
            <X size={24} />
          </button>
        </div>
        {/* Navigation */}
        <nav className="px-3 pb-3">
          <div className="d-flex flex-column gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-dark'} ${!isActive ? 'hover-bg-light' : ''}`}
                  style={{ textDecoration: 'none', transition: 'background 0.2s' }}
                >
                  <Icon style={{ width: '20px', height: '20px' }} />
                  <span className="fw-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Study Stats */}
        <div className="px-3 mt-4">
          <div className="bg-primary rounded p-3 text-white">
            <h3 className="fs-6 fw-medium mb-2">Today's Progress</h3>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between fs-6">
                <span>Flashcards</span>
                <span>12/25</span>
              </div>
              <div className="w-100 bg-white bg-opacity-25 rounded-pill" style={{ height: '8px' }}>
                <div className="bg-white rounded-pill" style={{ height: '8px', width: '48%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;