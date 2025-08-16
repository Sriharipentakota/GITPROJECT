import React from 'react';
import { Card, ColorPicker, Select, Slider, Typography, Space } from 'antd';
import styled from '@emotion/styled';
import { usePortfolioStore } from '../../stores/portfolioStore';

const { Title, Text } = Typography;

const EditorCard = styled(Card)`
  margin-bottom: 16px;
  .ant-card-body {
    padding: 16px;
  }
`;

const ColorSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
`;

const ColorControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .ant-typography {
    font-size: 12px;
    margin: 0;
    min-width: 60px;
  }
`;

export const ThemeEditor = () => {
  const { theme, updateTheme } = usePortfolioStore();

  const fontOptions = [
    { value: 'Inter, system-ui, sans-serif', label: 'Inter' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Monaco, monospace', label: 'Monaco' },
    { value: 'Helvetica, Arial, sans-serif', label: 'Helvetica' }
  ];

  return (
    <div>
      <Title level={5}>Theme Customization</Title>
      
      <EditorCard title="Colors" size="small">
        <ColorSection>
          <ColorControl>
            <Text>Primary</Text>
            <ColorPicker
              value={theme.primary}
              onChange={(color) => updateTheme({ primary: color.toHexString() })}
              size="small"
            />
          </ColorControl>
          <ColorControl>
            <Text>Secondary</Text>
            <ColorPicker
              value={theme.secondary}
              onChange={(color) => updateTheme({ secondary: color.toHexString() })}
              size="small"
            />
          </ColorControl>
          <ColorControl>
            <Text>Accent</Text>
            <ColorPicker
              value={theme.accent}
              onChange={(color) => updateTheme({ accent: color.toHexString() })}
              size="small"
            />
          </ColorControl>
          <ColorControl>
            <Text>Background</Text>
            <ColorPicker
              value={theme.background}
              onChange={(color) => updateTheme({ background: color.toHexString() })}
              size="small"
            />
          </ColorControl>
        </ColorSection>
      </EditorCard>

      <EditorCard title="Typography" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text>Font Family</Text>
            <Select
              value={theme.fontFamily}
              onChange={(value) => updateTheme({ fontFamily: value })}
              options={fontOptions}
              style={{ width: '100%', marginTop: 4 }}
              size="small"
            />
          </div>
        </Space>
      </EditorCard>

      <EditorCard title="Layout" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text>Border Radius</Text>
            <Slider
              min={0}
              max={20}
              value={parseInt(theme.borderRadius.replace('rem', '')) * 8}
              onChange={(value) => updateTheme({ borderRadius: `${value / 8}rem` })}
              marks={{ 0: '0px', 8: '4px', 16: '8px' }}
              style={{ marginTop: 8 }}
            />
          </div>
        </Space>
      </EditorCard>
    </div>
  );
};