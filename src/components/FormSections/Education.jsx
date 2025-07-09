import React from 'react';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';

const Education = ({ data, onChange, onNext, onPrevious }) => {
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      degree: '',
      institution: '',
      location: '',
      graduationDate: '',
      gpa: '',
      relevant: ''
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  const updateEducation = (id, field, value) => {
    onChange(data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
      <p>Add your educational background, starting with the most recent.</p>
      
      <div className="dynamic-list">
        {data.map(education => (
          <div key={education.id} className="list-item">
            <button
              className="remove-btn"
              onClick={() => removeEducation(education.id)}
            >
              <X size={16} />
            </button>
            
            <div className="form-row">
              <div className="form-group">
                <label>Degree *</label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                  placeholder="Bachelor of Science in Computer Science"
                  required
                />
              </div>
              <div className="form-group">
                <label>Institution *</label>
                <input
                  type="text"
                  value={education.institution}
                  onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                  placeholder="University of Technology"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={education.location}
                  onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                  placeholder="Boston, MA"
                />
              </div>
              <div className="form-group">
                <label>Graduation Date</label>
                <input
                  type="month"
                  value={education.graduationDate}
                  onChange={(e) => updateEducation(education.id, 'graduationDate', e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>GPA (Optional)</label>
                <input
                  type="text"
                  value={education.gpa}
                  onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                  placeholder="3.8/4.0"
                />
              </div>
              <div className="form-group">
                <label>Relevant Coursework</label>
                <input
                  type="text"
                  value={education.relevant}
                  onChange={(e) => updateEducation(education.id, 'relevant', e.target.value)}
                  placeholder="Data Structures, Algorithms, Database Systems"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button className="add-btn" onClick={addEducation}>
          <Plus size={20} />
          Add Education
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

export default Education;