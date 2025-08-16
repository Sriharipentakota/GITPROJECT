import React, { useState } from 'react';
import { Form, Input, Tag,Card } from 'antd';
import { usePortfolioStore } from '../../../stores/portfolioStore';

const { TextArea } = Input;

export const AboutEditor = ({ section }) => {
  const { updateSection } = usePortfolioStore();
  const [skillInput, setSkillInput] = useState('');
  const [form] = Form.useForm();
  const data = section.data;

  const handleChange = (changedFields) => {
    const newData = { ...data, ...changedFields };
    updateSection(section.id, newData);
  };

  const handleSkillsChange = (skills) => {
    handleChange({ skills });
  };
  const handleAddSkill = () => {
    const value = skillInput.trim();
    if (value && !data.skills?.includes(value)) {
      handleSkillsChange([...(data.skills || []), value]);
      setSkillInput('');
    }
  };

  return (
    <Card className="profile-form-card" bordered={false}>
      <Form
        form={form}
        layout="vertical"
        initialValues={data}
        onValuesChange={(_, values) => handleChange(values)}
        size="middle"
        className="profile-form"
      >
        <Form.Item
          name="name"
          label={<span className="form-label">Name</span>}
          className="form-item"
        >
          <Input placeholder="Your name" className="form-input" />
        </Form.Item>

        <Form.Item
          name="title"
          label={<span className="form-label">Professional Title</span>}
          className="form-item"
        >
          <Input placeholder="e.g. Full Stack Developer" className="form-input" />
        </Form.Item>

        <Form.Item
          name="bio"
          label={<span className="form-label">Bio</span>}
          className="form-item"
        >
          <TextArea
            rows={3}
            placeholder="Brief description about yourself"
            className="form-textarea"
          />
        </Form.Item>

        <Form.Item label={<span className="form-label">Skills</span>} className="form-item">
          <div className="skills-container">
            {data.skills?.map((skill, index) => (
              <Tag
                key={index}
                closable
                onClose={() => {
                  const newSkills = data.skills.filter((_, i) => i !== index);
                  handleSkillsChange(newSkills);
                }}
                className="skill-tag"
              >
                {skill}
              </Tag>
            ))}
            <Input
              placeholder="Add skill and press Enter"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onPressEnter={handleAddSkill}
              className="skill-input"
              size="small"
            />
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};