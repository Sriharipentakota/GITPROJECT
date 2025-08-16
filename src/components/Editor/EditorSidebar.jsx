import React, { useState } from 'react';
import { Tabs } from 'antd';
import { EditOutlined, BgColorsOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { SectionEditor } from './SectionEditor';
import { ThemeEditor } from './ThemeEditor';

const SidebarContainer = styled.div`
  height: 100vh;
  padding: 16px;
  overflow-y: auto;
`;

export const EditorSidebar = () => {
  const items = [
    {
      key: 'sections',
      label: 'Sections',
      icon: <EditOutlined />,
      children: <SectionEditor />
    },
    {
      key: 'theme',
      label: 'Theme',
      icon: <BgColorsOutlined />,
      children: <ThemeEditor />
    }
  ];

  return (
    <SidebarContainer>
      <Tabs
        items={items}
        defaultActiveKey="sections"
        size="small"
        tabPosition="top"
      />
    </SidebarContainer>
  );
};