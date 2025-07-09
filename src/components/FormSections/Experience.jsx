import React from 'react';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';

const Experience = ({ data, userType, onChange, onNext, onPrevious }) => {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    onChange(data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <div className="form-section">
      <h2>Work Experience</h2>
      <p>
        {userType === 'fresher' 
          ? "Add any internships, part-time jobs, or volunteer work you've done."
          : "List your professional work experience, starting with the most recent."
        }
      </p>
      
      <div className="dynamic-list">
        {data.map(experience => (
          <div key={experience.id} className="list-item">
            <button
              className="remove-btn"
              onClick={() => removeExperience(experience.id)}
            >
              <X size={16} />
            </button>
            
            <div className="form-row">
              <div className="form-group">
                <label>Job Title *</label>
                <input
                  type="text"
                  value={experience.jobTitle}
                  onChange={(e) => updateExperience(experience.id, 'jobTitle', e.target.value)}
                  placeholder="Software Developer"
                  required
                />
              </div>
              <div className="form-group">
                <label>Company *</label>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  placeholder="Tech Company Inc."
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={experience.location}
                  onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                  placeholder="San Francisco, CA"
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                  />
                  <span>to</span>
                  <input
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                    disabled={experience.current}
                  />
                  <label style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <input
                      type="checkbox"
                      checked={experience.current}
                      onChange={(e) => updateExperience(experience.id, 'current', e.target.checked)}
                    />
                    Current
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Job Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                placeholder="Describe your key responsibilities and achievements..."
                rows="3"
              />
            </div>
          </div>
        ))}
        
        <button className="add-btn" onClick={addExperience}>
          <Plus size={20} />
          Add Experience
        </button>
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={onPrevious}>
          <ArrowLeft size={20} />
          Previous
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          Continue
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Experience;