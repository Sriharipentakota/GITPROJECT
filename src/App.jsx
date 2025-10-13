import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import QRCodeGenerator from './components/QRCodeGenerator';
import ViewPage from './components/ViewPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isViewPage = location.pathname === '/view';

  // If it's the view page, render it without navigation
  if (isViewPage) {
    return (
      <div className="app standalone-app">
        <Routes>
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </div>
    );
  }

  // For all other pages, render with navigation
  return (
    <div className="app">
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<QRCodeGenerator />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
