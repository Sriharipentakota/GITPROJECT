import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '../../constants';

function TemplatesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === activeCategory);

  function handleUse(templateId) {
    navigate('/create', { state: { templateId } });
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div className="page-title">Templates</div>
            <div className="page-subtitle">Ready-made QR templates for every use case</div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="tabs" style={{ marginTop: '1rem' }}>
          {TEMPLATE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="page-body">
        <div className="templates-grid">
          {filtered.map(template => (
            <div key={template.id} className="template-card" onClick={() => handleUse(template.id)}>
              <div className={`template-card-icon ${template.colorClass}`}>
                {template.icon}
              </div>
              <div>
                <div className="template-card-name">{template.name}</div>
                <div style={{ marginTop: '0.25rem' }}>
                  <span className="badge badge-gray">{template.category}</span>
                </div>
              </div>
              <p className="template-card-desc">{template.description}</p>
              <div className="template-card-cta">
                Use template
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div style={{ padding: '0 1.5rem 2rem', maxWidth: 760 }}>
          <div className="card">
            <div className="card-body">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                About QR Templates
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Each template pre-fills the correct QR format for its use case. Wi-Fi QR codes use the standard
                <code style={{ background: 'var(--color-bg)', padding: '0 4px', borderRadius: 3, fontSize: '0.8em' }}> WIFI:S:…;T:…;P:…;; </code>
                format. Contact cards use vCard 3.0. Calendar events use the iCal VEVENT format.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                All QR codes are generated locally in your browser — no data is sent to any server except when uploading
                images (Image template). Images are uploaded to ImgBB or PostImages. Do not upload sensitive images.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatesPage;
