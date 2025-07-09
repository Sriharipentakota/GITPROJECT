import React from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';
import Template4 from './Templates/Template4';
import Template5 from './Templates/Template5';
import Template6 from './Templates/Template6';
import Template7 from './Templates/Template7';
import Template8 from './Templates/Template8';
import Template9 from './Templates/Template9';
import Template10 from './Templates/Template10';
import Template11 from './Templates/Template11';
import Template12 from './Templates/Template12';
import Template13 from './Templates/Template13';
import Template14 from './Templates/Template14';
import Template15 from './Templates/Template15';
import Template16 from './Templates/Template16';
import Template17 from './Templates/Template17';
import Template18 from './Templates/Template18';
import Template19 from './Templates/Template19';
import Template20 from './Templates/Template20';

const TemplateSelector = ({ selectedTemplate, onSelect, onNext, onPrevious }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const templatesPerPage = 6;

  const templates = [
    { 
      id: 1, 
      name: 'Classic Professional', 
      description: 'Single column, clean layout with blue accents',
      component: Template1
    },
    { 
      id: 2, 
      name: 'Executive Two-Column', 
      description: 'Two-column layout with elegant typography',
      component: Template2
    },
    { 
      id: 3, 
      name: 'Modern Creative', 
      description: 'Colorful header with timeline design',
      component: Template3
    },
    { 
      id: 4, 
      name: 'Sidebar with Photo', 
      description: 'Dark sidebar layout with profile photo',
      component: Template4
    },
    { 
      id: 5, 
      name: 'Executive Premium', 
      description: 'Formal executive style with gold accents',
      component: Template5
    },
    { 
      id: 6, 
      name: 'ATS Friendly', 
      description: 'Simple, clean format optimized for ATS systems',
      component: Template6
    },
    { 
      id: 7, 
      name: 'Creative Red Accent', 
      description: 'Two-column with vibrant red color scheme',
      component: Template7
    },
    { 
      id: 8, 
      name: 'Professional Lines', 
      description: 'Clean design with accent lines and borders',
      component: Template8
    },
    { 
      id: 9, 
      name: 'Healthcare Professional', 
      description: 'Medical/healthcare industry focused design',
      component: Template9
    },
    { 
      id: 10, 
      name: 'Tech Gradient', 
      description: 'Modern tech design with colorful accents',
      component: Template10
    },
    { 
      id: 11, 
      name: 'Marketing Purple', 
      description: 'Creative marketing template with purple gradient',
      component: Template11
    },
    { 
      id: 12, 
      name: 'Minimal Center', 
      description: 'Clean centered layout with minimal design',
      component: Template12
    },
    { 
      id: 13, 
      name: 'Banking Traditional', 
      description: 'Conservative design for finance professionals',
      component: Template13
    },
    { 
      id: 14, 
      name: 'Creative Asymmetric', 
      description: 'Bold creative design with geometric elements',
      component: Template14
    },
    { 
      id: 15, 
      name: 'Industrial Corporate', 
      description: 'Strong corporate design for operations roles',
      component: Template15
    },
    { 
      id: 16, 
      name: 'UX Research', 
      description: 'Modern card-style design for UX professionals',
      component: Template16
    },
    { 
      id: 17, 
      name: 'Cybersecurity Dark', 
      description: 'Tech-focused dark theme for security roles',
      component: Template17
    },
    { 
      id: 18, 
      name: 'Designer Elegant', 
      description: 'Sophisticated design for creative professionals',
      component: Template18
    },
    { 
      id: 19, 
      name: 'DevOps GitHub', 
      description: 'Developer-focused dark theme with code styling',
      component: Template19
    },
    { 
      id: 20, 
      name: 'Executive Luxury', 
      description: 'Premium executive design with gold accents',
      component: Template20
    }
  ];

  const totalPages = Math.ceil(templates.length / templatesPerPage);
  const startIndex = currentPage * templatesPerPage;
  const endIndex = startIndex + templatesPerPage;
  const currentTemplates = templates.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="form-section">
      <h2>Choose Your Resume Template</h2>
      <p>Select from 20 professional templates that best fit your industry and personal style. Each template includes sample data and is optimized for ATS systems.</p>
      
      {/* Pagination Info */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem',
        padding: '0.75rem 1rem',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
          Showing {startIndex + 1}-{Math.min(endIndex, templates.length)} of {templates.length} templates
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: currentPage === 0 ? '#f1f5f9' : '#2563eb',
              color: currentPage === 0 ? '#94a3b8' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <span style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0.5rem 0.75rem',
            fontSize: '0.875rem',
            color: '#475569'
          }}>
            {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: currentPage === totalPages - 1 ? '#f1f5f9' : '#2563eb',
              color: currentPage === totalPages - 1 ? '#94a3b8' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {currentTemplates.map(template => {
          const TemplateComponent = template.component;
          return (
            <div
              key={template.id}
              style={{
                border: selectedTemplate === template.id ? '3px solid #2563eb' : '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: 'white',
                boxShadow: selectedTemplate === template.id ? '0 8px 25px rgba(37, 99, 235, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
              onClick={() => onSelect(template.id)}
            >
              {/* Template Preview */}
              <div style={{
                height: '350px',
                overflow: 'hidden',
                borderRadius: '8px',
                marginBottom: '1rem',
                border: '1px solid #f1f5f9',
                position: 'relative'
              }}>
                <div style={{
                  transform: 'scale(0.25)',
                  transformOrigin: 'top left',
                  width: '400%',
                  height: '400%'
                }}>
                  <TemplateComponent data={{}} isPreview={true} />
                </div>
                
                {/* Overlay for better visibility */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: selectedTemplate === template.id 
                    ? 'linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.05))' 
                    : 'transparent',
                  pointerEvents: 'none'
                }} />
              </div>
              
              {/* Template Info */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: selectedTemplate === template.id ? '#2563eb' : '#1e293b',
                  margin: '0 0 0.5rem 0'
                }}>
                  {template.name}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  margin: '0',
                  lineHeight: '1.4'
                }}>
                  {template.description}
                </p>
              </div>
              
              {/* Selection Indicator */}
              {selectedTemplate === template.id && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  ✓
                </div>
              )}
            </div>
          );
        })}
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

export default TemplateSelector;