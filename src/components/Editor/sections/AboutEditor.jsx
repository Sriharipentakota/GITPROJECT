import React, { useState } from 'react';
import { Form, Input, Tag, Card } from 'antd';
import { usePortfolioStore } from '../../../stores/portfolioStore';

const { TextArea } = Input;

export const AboutEditor = ({ section }) => {
  const { updateSection, selectedTemplate } = usePortfolioStore();
  console.log(selectedTemplate, "hello");
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

        {(selectedTemplate === 'classic' || selectedTemplate === 'modernCard') && (
          <Form.Item
            label={<span className="form-label">Profile Photo</span>}
            className="form-item"
            valuePropName="photo"
          >
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    handleChange({ photo: ev.target.result });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              style={{ display: 'block', margin: '0 auto' }}
            />
            {data.photo && (
              <div
                style={{
                  marginTop: 12,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={data.photo}
                  alt="Profile Preview"
                  style={{
                    width: 180,
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
                    display: 'block',
                    margin: '0 auto',
                    background: '#fff',
                  }}
                />
              </div>
            )}
          </Form.Item>
        )}

      </Form>
    </Card>
  );
};