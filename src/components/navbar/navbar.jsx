import React from 'react';
import './navbar.css';

function Navbar({ onResumeUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onResumeUpload) {
      onResumeUpload(file);
    }
  };
  return (
    <nav className="navbar">
      <h1>Srihari Pentakota | User Profile</h1>

    </nav>
  );
}

export default Navbar;