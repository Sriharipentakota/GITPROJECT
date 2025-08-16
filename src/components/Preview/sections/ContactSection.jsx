import React from 'react';
import styled from '@emotion/styled';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

const SectionContainer = styled.div`
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.surface};
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  margin: 0 0 ${props => props.theme.spacing.xl} 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.background};
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  color: ${props => props.theme.text};
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.primary};
    color: white;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  ${ContactItem}:hover & {
    background: white;
    color: ${props => props.theme.primary};
  }
`;

const ContactText = styled.span`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
`;

export const ContactSection = ({ section, theme }) => {
  const data = section.data;

  const contactItems = [
    { key: 'email', value: data.email, icon: Mail, href: `mailto:${data.email}` },
    { key: 'phone', value: data.phone, icon: Phone, href: `tel:${data.phone}` },
    { key: 'linkedin', value: data.linkedin, icon: Linkedin, href: data.linkedin },
    { key: 'github', value: data.github, icon: Github, href: data.github },
    { key: 'website', value: data.website, icon: Globe, href: data.website }
  ].filter(item => item.value);

  if (contactItems.length === 0) return null;

  return (
    <SectionContainer theme={theme}>
      <SectionTitle theme={theme}>{section.title}</SectionTitle>
      <ContactGrid>
        {contactItems.map(item => {
          const IconComponent = item.icon;
          return (
            <ContactItem
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <IconWrapper theme={theme}>
                <IconComponent size={20} />
              </IconWrapper>
              <ContactText theme={theme}>
                {item.key === 'email' || item.key === 'phone' 
                  ? item.value 
                  : item.value?.replace(/https?:\/\//, '').split('/')[0]
                }
              </ContactText>
            </ContactItem>
          );
        })}
      </ContactGrid>
    </SectionContainer>
  );
};