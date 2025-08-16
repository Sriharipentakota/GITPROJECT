import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Button, Typography, Space, Popconfirm } from 'antd';
import { PlusOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { AboutEditor } from './sections/AboutEditor';
import { ProjectsEditor } from './sections/ProjectsEditor';
import { ExperienceEditor } from './sections/ExperienceEditor';
import { ContactEditor } from './sections/ContactEditor';
import { EducationEditor } from './sections/EducationEditor';
import { CertificationsEditor } from './sections/CertificationsEditor';

const { Title } = Typography;

const SectionCard = styled(Card)`
  margin-bottom: 12px;
  .ant-card-head {
    padding: 8px 16px;
    min-height: auto;
  }
  .ant-card-body {
    padding: 16px;
  }
`;

const DragHandle = styled.div`
  display: flex;
  align-items: center;
  color: #8c8c8c;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AddSectionCard = styled(Card)`
  border: 2px dashed #d9d9d9;
  .ant-card-body {
    text-align: center;
    padding: 20px;
  }
`;

const ALL_SECTIONS = [
  { type: 'about', label: 'About' },
  { type: 'experience', label: 'Experience' },
  { type: 'projects', label: 'Projects' },
  { type: 'certifications', label: 'Certifications' },
  { type: 'education', label: 'Education' },
  { type: 'contact', label: 'Contact' },
];
export const SectionEditor = () => {
  const { sections, reorderSections, addSection, removeSection } = usePortfolioStore();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newSections = Array.from(sections);
    const [reorderedItem] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, reorderedItem);

    reorderSections(newSections);
  };
  const addedSectionTypes = sections.map(section => section.type);
  const availableSections = ALL_SECTIONS.filter(
    section => !addedSectionTypes.includes(section.type)
  );

  const renderSectionEditor = (section) => {
    switch (section.type) {
      case 'about':
        return <AboutEditor section={section} />;
      case 'projects':
        return <ProjectsEditor section={section} />;
      case 'experience':
        return <ExperienceEditor section={section} />;
      case 'contact':
        return <ContactEditor section={section} />;
      case 'education':
        return <EducationEditor section={section} />;
      case 'certifications':
        return <CertificationsEditor section={section} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Title level={5}>Portfolio Sections</Title>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.8 : 1
                      }}
                    >
                      <SectionCard
                        title={
                          <SectionHeader>
                            <div {...provided.dragHandleProps}>
                              <DragHandle>
                                <DragOutlined style={{ marginRight: 8 }} />
                                {section.title}
                              </DragHandle>
                            </div>
                            <Popconfirm
                              title="Delete this section?"
                              onConfirm={() => removeSection(section.id)}
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button
                                type="text"
                                size="small"
                                icon={<DeleteOutlined />}
                                danger
                              />
                            </Popconfirm>
                          </SectionHeader>
                        }
                        size="small"
                      >
                        {renderSectionEditor(section)}
                      </SectionCard>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddSectionCard>
        <Title level={5} style={{ margin: 0, marginBottom: 16 }}>Add New Section</Title>
        <Space wrap>
          {availableSections.map(section => (
            <Button
              key={section.type}
              icon={<PlusOutlined />}
              onClick={() => addSection(section.type)}
              size="small"
            >
              {section.label}
            </Button>
          ))}
        </Space>
      </AddSectionCard>
    </div>
  );
};