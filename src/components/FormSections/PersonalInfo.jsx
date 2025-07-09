import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PersonalInfo = ({ data, onChange, onNext, onPrevious }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <p>Let's start with your basic information and contact details.</p>
      
      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john.doe@email.com"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={data.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="City, State, Country"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>LinkedIn Profile</label>
          <input
            type="url"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div className="form-group">
          <label>GitHub Profile</label>
          <input
            type="url"
            value={data.github}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="https://github.com/johndoe"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Portfolio/Website</label>
        <input
          type="url"
          value={data.portfolio}
          onChange={(e) => handleChange('portfolio', e.target.value)}
          placeholder="https://johndoe.com"
        />
      </div>

      <div className="form-group">
        <label>Professional Summary</label>
        <textarea
          value={data.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          placeholder="Write a brief summary of your professional background, skills, and career objectives..."
          rows="4"
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={onPrevious}>
          <ArrowLeft size={20} />
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={!data.fullName || !data.email || !data.phone}
        >
          Continue
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;