/**
 * Main App component with routing configuration
 * Handles navigation between QR code generator and view pages
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import QRCodeGenerator from './components/QRCodeGenerator';
import ViewPage from './components/ViewPage';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

/**
 * App content component that handles routing logic
 * Determines whether to show navigation based on current route
 */
function AppContent() {
  // Get current location to determine route
  const location = useLocation();
  const isViewPage = location.pathname === '/view';
  const isLoginPage = location.pathname === '/login';

  // Render login page without navigation
  if (isLoginPage) {
    return (
      <div className="app standalone-app">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    )
  }

  // Render view page without navigation (standalone mode)
  if (isViewPage) {
    return (
      <div className="app standalone-app">
        <Routes>
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </div>
    );
  }

  // Render other pages with navigation (protected)
  return (
    <div className="app">
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <QRCodeGenerator />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

/**
 * Main App component with router wrapper
 */
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
