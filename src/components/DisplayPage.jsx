import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DisplayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { text } = location.state || { text: 'No content available' };

  const handleGoBack = () => {
    navigate('/scanner');
  };

  return (
    <div className="display-page">
      <div className="display-container">
        <h1>Scanned Content</h1>
        <div className="content-display">
          <p>{text}</p>
        </div>
        <button onClick={handleGoBack} className="back-btn">
          Back to Scanner
        </button>
      </div>
    </div>
  );
}

export default DisplayPage;
