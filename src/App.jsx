import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Login from './components/Login';
import ViewPage from './components/ViewPage';
import ProtectedRoute from './components/ProtectedRoute';
import CreatePage from './pages/CreatePage';
import LibraryPage from './pages/LibraryPage';
import TemplatesPage from './pages/TemplatesPage';
import SettingsPage from './pages/SettingsPage';
import ShowcasePage from './pages/ShowcasePage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (location.pathname === '/login') {
    return (
      <div className="standalone-wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }

  if (location.pathname === '/view') {
    return (
      <div className="standalone-wrapper">
        <Routes>
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </div>
    );
  }

  if (location.pathname.startsWith('/showcase/')) {
    return (
      <div className="standalone-wrapper">
        <Routes>
          <Route path="/showcase/:id" element={<ShowcasePage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className={`app-shell ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <Navigation sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(o => !o)} />

      <div className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/studio" replace />} />
          <Route path="/create" element={<Navigate to="/studio" replace />} />
          <Route path="/studio" element={
            <ProtectedRoute><CreatePage /></ProtectedRoute>
          } />
          <Route path="/library" element={
            <ProtectedRoute><LibraryPage /></ProtectedRoute>
          } />
          <Route path="/templates" element={
            <ProtectedRoute><TemplatesPage /></ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute><SettingsPage /></ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/studio" replace />} />
        </Routes>
      </div>
    </div>
  );
}

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
