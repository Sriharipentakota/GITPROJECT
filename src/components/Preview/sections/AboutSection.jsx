import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.surface};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  margin: 0 0 ${props => props.theme.spacing.sm} 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.secondary};
  font-weight: normal;
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const Bio = styled.p`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing.lg} auto;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
`;

const Skill = styled.span`
  background: ${props => props.theme.primary};
  color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 500;
`;

export const AboutSection = ({ section, theme }) => {
  const data = section.data;

  return (
    <AboutContainer theme={theme}>
      <Name theme={theme}>{data.name}</Name>
      <Title theme={theme}>{data.title}</Title>
      <Bio theme={theme}>{data.bio}</Bio>
      {data.skills && data.skills.length > 0 && (
        <SkillsContainer theme={theme}>
          {data.skills.map((skill, index) => (
            <Skill key={index} theme={theme}>
              {skill}
            </Skill>
          ))}
        </SkillsContainer>
      )}
    </AboutContainer>
  );
};