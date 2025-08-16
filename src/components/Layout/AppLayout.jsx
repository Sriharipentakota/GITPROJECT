import React from 'react';
import { Layout, Button, Space, Tooltip, Dropdown } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, DownloadOutlined, ReloadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { templateOptions } from '../../utils/templates';

const { Header, Content, Sider } = Layout;

const StyledHeader = styled(Header)`
  background: ${props => props.theme.surface};
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledSider = styled(Sider)`
  background: ${props => props.theme.surface};
  border-right: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    position: fixed;
    z-index: 1000;
    height: 100vh;
  }
`;

const StyledContent = styled(Content)`
  background: ${props => props.theme.background};
  overflow: auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
`;

export const AppLayout = ({ children, sidebar, onExport, onExportPDF, onExportWord ,selectedTemplate,onTemplateChange}) => {
  const { theme, previewMode, togglePreview, resetToDefault } = usePortfolioStore();
  const [siderCollapsed, setSiderCollapsed] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setSiderCollapsed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const templateMenuItems = templateOptions.map(option => ({
    key: option.key,
    label: (
      <div>
        <div style={{ fontWeight: 500 }}>{option.label}</div>
        <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
          {option.description}
        </div>
      </div>
    ),
    onClick: () => onTemplateChange(option.key),
  }));

  const exportMenuItems = [
    {
      key: 'html',
      label: 'Export as HTML',
      onClick: onExport
    },
    {
      key: 'pdf',
      label: 'Export as PDF',
      onClick: onExportPDF
    },
    {
      key: 'word',
      label: 'Export as Word',
      onClick: onExportWord
    }
  ];

  return (
    <StyledLayout>
      <StyledHeader theme={theme}>
        <Logo theme={theme}>Portfolio Builder</Logo>
        <Space>
          <Tooltip title={previewMode ? "Show Editor" : "Preview Mode"}>
            <Button
              type="text"
              icon={previewMode ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              onClick={togglePreview}
            />
          </Tooltip>
          <Dropdown
            menu={{ items: templateMenuItems }}
            placement="bottomRight"
          >
            <Button type="default">
              Template: {templateOptions.find(opt => opt.key === selectedTemplate)?.label}
            </Button>
          </Dropdown>
          <Dropdown
            menu={{ items: exportMenuItems }}
            placement="bottomRight"
          >
            <Button
              type="primary"
              icon={<DownloadOutlined />}
            >
              Export
            </Button>
          </Dropdown>
          <Tooltip title="Reset to Default">
            <Button
              type="text"
              icon={<ReloadOutlined />}
              onClick={resetToDefault}
            />
          </Tooltip>
        </Space>
      </StyledHeader>
      <Layout>
        {!previewMode && sidebar && (
          <StyledSider
            theme={theme}
            width={350}
            collapsible
            collapsed={siderCollapsed}
            onCollapse={setSiderCollapsed}
            collapsedWidth={0}
            trigger={null}
          >
            {sidebar}
          </StyledSider>
        )}
        <StyledContent theme={theme}>
          {children}
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
};