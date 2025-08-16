import React, { useState } from 'react';
import { ConfigProvider, message } from 'antd';
import { AppLayout } from './components/Layout/AppLayout';
import { EditorSidebar } from './components/Editor/EditorSidebar';
import { PortfolioPreview } from './components/Preview/PortfolioPreview';
import { usePortfolioStore } from './stores/portfolioStore';
import { exportToPDF } from './utils/exportPDF';
import { exportToWord } from './utils/exportWord';
import { portfolioTemplates } from './utils/templates';

function App() {
  const { sections, theme } = usePortfolioStore();
  const [selectedTemplate, setSelectedTemplate] = useState('modernCard');

  const handleExport = () => {
    try {
      const html = portfolioTemplates[selectedTemplate]({
        sections,
        theme,
        title: 'My Portfolio'
      });

      // Create and download the HTML file
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


  const handleExportPDF = async () => {
    try {
      message.loading('Generating PDF...', 0);
      
      const html = portfolioTemplates[selectedTemplate]({
        sections,
        theme,
        title: 'My Portfolio'
      });

      await exportToPDF(html, 'portfolio.pdf');
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
      
      const html = portfolioTemplates[selectedTemplate]({
        sections,
        theme,
        title: 'My Portfolio'
      });

      await exportToWord(html, 'portfolio.docx');
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
      >
        <PortfolioPreview selectedTemplate={selectedTemplate} />
      </AppLayout>
    </ConfigProvider>
  );
}

export default App;