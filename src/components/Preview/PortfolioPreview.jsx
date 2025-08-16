import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { portfolioTemplates } from '../../utils/templates';

const PreviewContainer = styled.div`
  background: ${props => props.theme.background};
  min-height: 100vh;
  padding: 2rem;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.text};
`;

const SectionWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const PortfolioPreview = ({ selectedTemplate }) => {
  const { sections, theme, previewMode } = usePortfolioStore();
  const previewRef = useRef(null);
  const visibleSections = sections.filter(section => section.isVisible);

  useEffect(() => {
    if (previewRef.current && previewRef.current.parentElement) {
      previewRef.current.parentElement.classList.add("portfolio-parent");
    }
  }, []);

  // Use template preview for both preview mode AND editor mode if template is selected
  if (selectedTemplate && portfolioTemplates[selectedTemplate]) {
    const html = portfolioTemplates[selectedTemplate]({
      sections: visibleSections,
      theme,
      title: previewMode ? 'Portfolio Preview' : 'Portfolio Editor Preview'
    });

    return (
      <div
        ref={previewRef}
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ background: theme.background, minHeight: '100vh' }}
      />
    );
  }

  // Fallback to component-based preview only if no template is selected
  const renderSection = (section) => {
    switch (section.type) {
      case 'about':
        return <AboutSection key={section.id} section={section} theme={theme} />;
      case 'projects':
        return <ProjectsSection key={section.id} section={section} theme={theme} />;
      case 'experience':
        return <ExperienceSection key={section.id} section={section} theme={theme} />;
      case 'contact':
        return <ContactSection key={section.id} section={section} theme={theme} />;
      case 'certifications':
        return <CertificationsSection key={section.id} section={section} theme={theme} />;
      case 'education':
        return <EducationSection key={section.id} section={section} theme={theme} />;
      default:
        return null;
    }
  };

  return (
    <PreviewContainer theme={theme} id="portfolio-preview" ref={previewRef}>
      {visibleSections.map(section => (
        <SectionWrapper key={section.id}>
          {renderSection(section)}
        </SectionWrapper>
      ))}
    </PreviewContainer>
  );
};