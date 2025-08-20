import React from 'react';
import { Form, Input } from 'antd';
import { usePortfolioStore } from '../../../stores/portfolioStore';

export const ContactEditor = ({ section }) => {
  const { updateSection } = usePortfolioStore();
  const data = section.data;

  const handleChange = (changedFields) => {
    const newData = { ...data, ...changedFields };
    updateSection(section.id, newData);
  };

  return (
    <Form
      layout="vertical"
      initialValues={data}
      onValuesChange={(_, values) => handleChange(values)}
      size="small"
    >
      <Form.Item name="email" label="Email">
        <Input placeholder="your@email.com" />
      </Form.Item>
      
      <Form.Item name="phone" label="Phone">
        <Input placeholder="+1 (555) 123-4567" />
      </Form.Item>
      
      <Form.Item name="linkedin" label="LinkedIn">
        <Input placeholder="https://linkedin.com/in/yourprofile" />
      </Form.Item>
      
      <Form.Item name="github" label="GitHub">
        <Input placeholder="https://github.com/yourusername" />
      </Form.Item>
      
      <Form.Item name="website" label="Website">
        <Input placeholder="https://yourwebsite.com" />
      </Form.Item>
    </Form>
  );
};