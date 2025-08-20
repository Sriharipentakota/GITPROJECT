import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { usePortfolioStore } from '../../../stores/portfolioStore';

export const EducationEditor = ({ section }) => {
  const { updateSection } = usePortfolioStore();
  const education =  Array.isArray(section.data) ? section.data : [];

  const addEducation = () => {
    const newEducation = {
      institution: '',
      degree: '',
      field: '',
      duration: '',
      gpa: '',
      location: ''
    };
    updateSection(section.id, [...education, newEducation]);
  };

  const updateEducation = (index, updatedEducation) => {
    const newEducation = education.map((edu, i) =>
      i === index ? { ...edu, ...updatedEducation } : edu
    );
    updateSection(section.id, newEducation);
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    updateSection(section.id, newEducation);
  };

  return (
    <div>
      {education.map((edu, index) => (
        <Card
          key={index}
          size="small"
          title={`Education ${index + 1}`}
          extra={
            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => removeEducation(index)}
              danger
            />
          }
          style={{ marginBottom: 12 }}
        >
          <Form layout="vertical" size="small">
            <Form.Item label="Institution">
              <Input
                value={edu.institution}
                onChange={(e) => updateEducation(index, { institution: e.target.value })}
                placeholder="University/College name"
              />
            </Form.Item>
            
            <Form.Item label="Degree">
              <Input
                value={edu.degree}
                onChange={(e) => updateEducation(index, { degree: e.target.value })}
                placeholder="Bachelor's, Master's, PhD, etc."
              />
            </Form.Item>
            
            <Form.Item label="Field of Study">
              <Input
                value={edu.field}
                onChange={(e) => updateEducation(index, { field: e.target.value })}
                placeholder="Computer Science, Engineering, etc."
              />
            </Form.Item>
            
            <Form.Item label="Duration">
              <Input
                value={edu.duration}
                onChange={(e) => updateEducation(index, { duration: e.target.value })}
                placeholder="2020 - 2024"
              />
            </Form.Item>
            
            <Form.Item label="GPA (Optional)">
              <Input
                value={edu.gpa}
                onChange={(e) => updateEducation(index, { gpa: e.target.value })}
                placeholder="3.8/4.0"
              />
            </Form.Item>
            
            <Form.Item label="Location">
              <Input
                value={edu.location}
                onChange={(e) => updateEducation(index, { location: e.target.value })}
                placeholder="City, State/Country"
              />
            </Form.Item>
          </Form>
        </Card>
      ))}
      
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={addEducation}
        block
        size="small"
      >
        Add Education
      </Button>
    </div>
  );
};