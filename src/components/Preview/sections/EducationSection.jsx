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

const EducationList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const EducationItem = styled.div`
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
    background: ${props => props.theme.secondary};
    border-radius: 2px;
  }
`;

const EducationHeader = styled.div`
  margin-bottom: 1rem;
`;

const Institution = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${props => props.theme.text};
  margin: 0;
`;

const Degree = styled.h4`
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

const EducationDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  margin-top: 0.5rem;
`;

const DetailItem = styled.span`
  color: ${props => props.theme.textSecondary};
  font-size: ${props => props.theme.fontSize.sm};
  background: ${props => props.theme.background};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const EducationSection = ({ section, theme }) => {
  const education = section.data;

  if (!education || education.length === 0) return null;

  return (
    <SectionContainer theme={theme}>
      <SectionTitle theme={theme}>{section.title}</SectionTitle>
      <EducationList>
        {education.map((edu, index) => (
          <EducationItem key={index} theme={theme}>
            <EducationHeader>
              <Institution theme={theme}>{edu.institution}</Institution>
              <Degree theme={theme}>
                {edu.degree} {edu.field && `in ${edu.field}`}
              </Degree>
              <Duration theme={theme}>{edu.duration}</Duration>
            </EducationHeader>
            <EducationDetails theme={theme}>
              {edu.gpa && <DetailItem theme={theme}>GPA: {edu.gpa}</DetailItem>}
              {edu.location && <DetailItem theme={theme}>{edu.location}</DetailItem>}
            </EducationDetails>
          </EducationItem>
        ))}
      </EducationList>
    </SectionContainer>
  );
};