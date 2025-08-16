import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { usePortfolioStore } from '../../../stores/portfolioStore';

const { TextArea } = Input;

export const ExperienceEditor = ({ section }) => {
  const { updateSection } = usePortfolioStore();
  const experiences = section.data || [];

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    updateSection(section.id, [...experiences, newExperience]);
  };

  const updateExperience = (index, updatedExperience) => {
    const newExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, ...updatedExperience } : exp
    );
    updateSection(section.id, newExperiences);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    updateSection(section.id, newExperiences);
  };

  return (
    <div>
      {experiences.map((experience, index) => (
        <Card
          key={index}
          size="small"
          title={`Experience ${index + 1}`}
          extra={
            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => removeExperience(index)}
              danger
            />
          }
          style={{ marginBottom: 12 }}
        >
          <Form layout="vertical" size="small">
            <Form.Item label="Company">
              <Input
                value={experience.company}
                onChange={(e) => updateExperience(index, { company: e.target.value })}
                placeholder="Company name"
className="form-input"
              />
            </Form.Item>
            
            <Form.Item label="Position">
              <Input
                value={experience.position}
                onChange={(e) => updateExperience(index, { position: e.target.value })}
                placeholder="Job title"
className="form-input"
              />
            </Form.Item>
            
            <Form.Item label="Duration">
              <Input
                value={experience.duration}
                onChange={(e) => updateExperience(index, { duration: e.target.value })}
                placeholder="2020 - 2023"
className="form-input"
              />
            </Form.Item>
            
            <Form.Item label="Description">
              <TextArea
                rows={3}
                value={experience.description}
                onChange={(e) => updateExperience(index, { description: e.target.value })}
                placeholder="Job responsibilities and achievements"
className="form-input"
              />
            </Form.Item>
          </Form>
        </Card>
      ))}
      
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={addExperience}
        block
        size="small"
      >
        Add Experience
      </Button>
    </div>
  );
};