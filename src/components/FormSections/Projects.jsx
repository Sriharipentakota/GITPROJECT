import React from 'react';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';

const Projects = ({ data, userType, onChange, onNext, onPrevious }) => {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: '',
      description: '',
      technologies: '',
      link: '',
      github: '',
      duration: ''
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id) => {
    onChange(data.filter(project => project.id !== id));
  };

  const updateProject = (id, field, value) => {
    onChange(data.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  return (
    <div className="form-section">
      <h2>Projects</h2>
      <p>
        {userType === 'fresher' 
          ? "Showcase your academic projects, personal projects, or any work you've done to demonstrate your skills."
          : "Add significant projects that demonstrate your expertise and impact."
        }
      </p>
      
      <div className="dynamic-list">
        {data.map(project => (
          <div key={project.id} className="list-item">
            <button
              className="remove-btn"
              onClick={() => removeProject(project.id)}
            >
              <X size={16} />
            </button>
            
            <div className="form-row">
              <div className="form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                  placeholder="E-commerce Web Application"
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  value={project.duration}
                  onChange={(e) => updateProject(project.id, 'duration', e.target.value)}
                  placeholder="3 months"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                placeholder="Describe what the project does, your role, and key achievements..."
                rows="3"
                required
              />
            </div>

            <div className="form-group">
              <label>Technologies Used</label>
              <input
                type="text"
                value={project.technologies}
                onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                placeholder="React, Node.js, MongoDB, Express"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Live Demo Link</label>
                <input
                  type="url"
                  value={project.link}
                  onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                  placeholder="https://myproject.com"
                />
              </div>
              <div className="form-group">
                <label>GitHub Repository</label>
                <input
                  type="url"
                  value={project.github}
                  onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button className="add-btn" onClick={addProject}>
          <Plus size={20} />
          Add Project
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

export default Projects;