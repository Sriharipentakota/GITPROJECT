import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const UserTypeSelector = ({ userType, onSelect, onNext }) => {
  const userTypes = [
    {
      id: 'fresher',
      title: 'Fresher',
      description: 'Recent graduate or entry-level professional',
      icon: GraduationCap
    },
    {
      id: 'experienced',
      title: 'Experienced',
      description: 'Professional with work experience',
      icon: Briefcase
    }
  ];

  return (
    <div className="form-section">
      <h2>What's your career level?</h2>
      <p>This helps us customize your resume sections and recommendations.</p>
      
      <div className="user-type-grid">
        {userTypes.map(type => {
          const Icon = type.icon;
          return (
            <div
              key={type.id}
              className={`user-type-card ${userType === type.id ? 'selected' : ''}`}
              onClick={() => onSelect(type.id)}
            >
              <div className="user-type-icon">
                <Icon size={24} />
              </div>
              <h3 className="user-type-title">{type.title}</h3>
              <p className="user-type-description">{type.description}</p>
            </div>
          );
        })}
      </div>

      <div className="form-actions">
        <div></div>
        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={!userType}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelector;