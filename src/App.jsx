import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRScannerPage from './components/QRScannerPage';
import DisplayPage from './components/DisplayPage';
import ViewPage from './components/ViewPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<QRCodeGenerator />} />
            <Route path="/scanner" element={<QRScannerPage />} />
            <Route path="/display" element={<DisplayPage />} />
            <Route path="/view" element={<ViewPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
