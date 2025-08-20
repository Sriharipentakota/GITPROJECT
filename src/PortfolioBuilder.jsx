import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, message } from 'antd';
import { AppLayout } from './portfolio/components/Layout/AppLayout';
import { EditorSidebar } from './portfolio/components/Editor/EditorSidebar';
import { PortfolioPreview } from './portfolio/components/Preview/PortfolioPreview';
import { usePortfolioStore } from './portfolio/stores/portfolioStore';
import { exportToPDF } from './portfolio/utils/exportPDF';
import { exportToWord } from './portfolio/utils/exportWord';
import { portfolioTemplates } from './portfolio/utils/templates';

function PortfolioBuilder() {
  const { sections, theme, selectedTemplate, setSelectedTemplate, previewMode } = usePortfolioStore();
  const [mobileView, setMobileView] = useState('preview');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const handleExport = () => {
    try {
      const html = portfolioTemplates[selectedTemplate]({
        sections,
        theme,
        title: 'My Portfolio'
      });

      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'portfolio.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      message.success('Portfolio exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      message.error('Failed to export portfolio. Please try again.');
    }
  };
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExportPDF = async () => {
    try {
      message.loading('Generating PDF...', 0);

      // Pass sections and theme instead of HTML
      await exportToPDF(sections, theme, 'portfolio.pdf');
      message.destroy();
      message.success('PDF exported successfully!');
    } catch (error) {
      message.destroy();
      console.error('PDF export failed:', error);
      message.error('Failed to export PDF. Please try again.');
    }
  };

  const handleExportWord = async () => {
    try {
      message.loading('Generating Word document...', 0);

      // Pass sections and theme instead of HTML
      await exportToWord(sections, theme, 'portfolio.docx');
      message.destroy();
      message.success('Word document exported successfully!');
    } catch (error) {
      message.destroy();
      console.error('Word export failed:', error);
      message.error('Failed to export Word document. Please try again.');
    }
  };

  const handleTemplateChange = (templateKey) => {
    setSelectedTemplate(templateKey);
    message.success(`Template changed to ${templateKey}`);
  };

  return (
    <>
      {/* <div style={{ padding: '16px', textAlign: 'right' }}>
      
      </div> */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.primary,
            borderRadius: 8,
          },
        }}
      >
        <AppLayout
          sidebar={<EditorSidebar />}
          onExport={handleExport}
          onExportPDF={handleExportPDF}
          onExportWord={handleExportWord}
          selectedTemplate={selectedTemplate}
          onTemplateChange={handleTemplateChange}
          mobileView={mobileView}
          setMobileView={setMobileView}
          isMobile={isMobile}
        >
          {!isMobile || mobileView === 'preview' ? (
            <PortfolioPreview selectedTemplate={selectedTemplate} />
          ) : null}
        </AppLayout>
      </ConfigProvider>
    </>
  );
}

export default PortfolioBuilder;