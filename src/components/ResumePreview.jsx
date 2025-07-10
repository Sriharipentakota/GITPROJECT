import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
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

const ResumePreview = ({ formData, template, onPrevious, onExport }) => {
  const renderTemplate = () => {
    switch (template) {
      case 1:
        return <Template1 data={formData} />;
      case 2:
        return <Template2 data={formData} />;
      case 3:
        return <Template3 data={formData} />;
      case 4:
        return <Template4 data={formData} />;
      case 5:
        return <Template5 data={formData} />;
      case 6:
        return <Template6 data={formData} />;
      case 7:
        return <Template7 data={formData} />;
      case 8:
        return <Template8 data={formData} />;
      case 9:
        return <Template9 data={formData} />;
      case 10:
        return <Template10 data={formData} />;
      case 11:
        return <Template11 data={formData} />;
      case 12:
        return <Template12 data={formData} />;
      case 13:
        return <Template13 data={formData} />;
      case 14:
        return <Template14 data={formData} />;
      case 15:
        return <Template15 data={formData} />;
      case 16:
        return <Template16 data={formData} />;
      case 17:
        return <Template17 data={formData} />;
      case 18:
        return <Template18 data={formData} />;
      case 19:
        return <Template19 data={formData} />;
      case 20:
        return <Template20 data={formData} />;
      default:
        return <Template1 data={formData} />;
    }
  };

  return (
    <div className="form-section">
      <div className="preview-header">
        <h2>Resume Preview</h2>
        <button className="btn btn-success" onClick={onExport}>
          <Download size={20} />
          Export to PDF
        </button>
      </div>
      
      <div className="resume-preview">
        <div 
          className="preview-content" 
          id="resume-content"
          style={{
            width: '210mm',
            minHeight: '297mm',
            margin: '0 auto',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}
        >
          {renderTemplate()}
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={onPrevious}>
          <ArrowLeft size={20} />
          Previous
        </button>
        <button className="btn btn-success" onClick={onExport}>
          <Download size={20} />
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;