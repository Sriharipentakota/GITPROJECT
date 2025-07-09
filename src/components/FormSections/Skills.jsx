import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';

const Skills = ({ data, onChange, onNext, onPrevious }) => {
  const [newSkill, setNewSkill] = useState({ technical: '', soft: '', language: '' });

  const addSkill = (category) => {
    if (newSkill[category].trim()) {
      const updated = {
        ...data,
        [category]: [...data[category], newSkill[category].trim()]
      };
      onChange(updated);
      setNewSkill({ ...newSkill, [category]: '' });
    }
  };

  const removeSkill = (category, index) => {
    const updated = {
      ...data,
      [category]: data[category].filter((_, i) => i !== index)
    };
    onChange(updated);
  };

  const skillCategories = [
    {
      key: 'technical',
      title: 'Technical Skills',
      placeholder: 'e.g., JavaScript, Python, React, Node.js',
      description: 'Programming languages, frameworks, tools, and technologies'
    },
    {
      key: 'soft',
      title: 'Soft Skills',
      placeholder: 'e.g., Leadership, Communication, Problem Solving',
      description: 'Personal attributes and interpersonal skills'
    },
    {
      key: 'languages',
      title: 'Languages',
      placeholder: 'e.g., English (Native), Spanish (Conversational)',
      description: 'Spoken languages and proficiency levels'
    }
  ];

  return (
    <div className="form-section">
      <h2>Skills</h2>
      <p>Add your technical skills, soft skills, and language proficiencies.</p>
      
      {skillCategories.map(category => (
        <div key={category.key} className="form-group">
          <label>{category.title}</label>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
            {category.description}
          </p>
          
          <div className="dynamic-list">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {data[category.key].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => removeSkill(category.key, index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#ef4444',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={newSkill[category.key]}
                onChange={(e) => setNewSkill({ ...newSkill, [category.key]: e.target.value })}
                placeholder={category.placeholder}
                onKeyPress={(e) => e.key === 'Enter' && addSkill(category.key)}
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => addSkill(category.key)}
              >
                <Plus size={16} />
                Add
              </button>
            </div>
          </div>
        </div>
      ))}

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

export default Skills;