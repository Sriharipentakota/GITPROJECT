import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import PortfolioBuilder from './PortfolioBuilder';
import ResumeBuilder from './ResumeBuilder';
import './index.css';

function HomeWithNavigation() {
  const navigate = useNavigate();
  return (
    <Home
      onSelect={selected => {
        if (selected === 'portfolio') navigate('/portfolioBuilder');
        else if (selected === 'resume') navigate('/resumeBuilder');
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithNavigation />} />
        <Route path="/portfolioBuilder" element={<PortfolioBuilder />} />
        <Route path="/resumeBuilder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;