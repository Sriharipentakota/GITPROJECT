import React from 'react';
import styled from '@emotion/styled';

const SectionContainer = styled.div`
  padding: ${props => props.theme.spacing.xl} 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-align: center;
  margin: 0 0 ${props => props.theme.spacing.xl} 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.surface};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px -3px rgb(0 0 0 / 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${props => props.theme.text};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
  line-height: 1.6;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TechTag = styled.span`
  background: ${props => props.theme.accent};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 500;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectsSection = ({ section, theme }) => {
  const projects = section.data;

  if (!projects || projects.length === 0) return null;

  return (
    <SectionContainer theme={theme}>
      <SectionTitle theme={theme}>{section.title}</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} theme={theme}>
            <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
            <ProjectDescription theme={theme}>{project.description}</ProjectDescription>
            
            {project.technologies && project.technologies.length > 0 && (
              <TechContainer theme={theme}>
                {project.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex} theme={theme}>
                    {tech}
                  </TechTag>
                ))}
              </TechContainer>
            )}
            
            {project.link && (
              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                View Project →
              </ProjectLink>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
};