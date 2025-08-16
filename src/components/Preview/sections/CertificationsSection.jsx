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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background: ${props => props.theme.surface};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid ${props => props.theme.accent};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px -3px rgb(0 0 0 / 0.1);
  }
`;

const CertificationName = styled.h3`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: bold;
  color: ${props => props.theme.text};
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
`;

const Issuer = styled.p`
  color: ${props => props.theme.secondary};
  font-weight: 600;
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
`;

const CertificationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DetailText = styled.span`
  color: ${props => props.theme.textSecondary};
  font-size: ${props => props.theme.fontSize.sm};
`;

const CertificationLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.sm};
  
  &:hover {
    text-decoration: underline;
  }
`;

export const CertificationsSection = ({ section, theme }) => {
  const certifications = section.data;

  if (!certifications || certifications.length === 0) return null;

  return (
    <SectionContainer theme={theme}>
      <SectionTitle theme={theme}>{section.title}</SectionTitle>
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard key={index} theme={theme}>
            <CertificationName theme={theme}>{cert.name}</CertificationName>
            <Issuer theme={theme}>{cert.issuer}</Issuer>
            <CertificationDetails>
              {cert.date && <DetailText theme={theme}>Issued: {cert.date}</DetailText>}
              {cert.credentialId && <DetailText theme={theme}>ID: {cert.credentialId}</DetailText>}
              {cert.link && (
                <CertificationLink
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  theme={theme}
                >
                  Verify Certificate →
                </CertificationLink>
              )}
            </CertificationDetails>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </SectionContainer>
  );
};