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

const ExperienceList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceItem = styled.div`
  background: ${props => props.theme.surface};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.1);
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.theme.primary};
    border-radius: 2px;
  }
`;

const ExperienceHeader = styled.div`
  margin-bottom: 1rem;
`;

const Company = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${props => props.theme.text};
  margin: 0;
`;

const Position = styled.h4`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.secondary};
  font-weight: 600;
  margin: 0.25rem 0;
`;

const Duration = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: ${props => props.theme.fontSize.sm};
  margin: 0;
  font-weight: 500;
`;

const Description = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

export const ExperienceSection = ({ section, theme }) => {
  const experiences = section.data;

  if (!experiences || experiences.length === 0) return null;

  return (
    <SectionContainer theme={theme}>
      <SectionTitle theme={theme}>{section.title}</SectionTitle>
      <ExperienceList>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} theme={theme}>
            <ExperienceHeader>
              <Company theme={theme}>{experience.company}</Company>
              <Position theme={theme}>{experience.position}</Position>
              <Duration theme={theme}>{experience.duration}</Duration>
            </ExperienceHeader>
            <Description theme={theme}>{experience.description}</Description>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </SectionContainer>
  );
};