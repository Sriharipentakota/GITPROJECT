import React ,{useState}from 'react';
import { Form, Input, Button, Space, Card, Tag } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { usePortfolioStore } from '../../../stores/portfolioStore';

const { TextArea } = Input;

export const ProjectsEditor = ({ section }) => {
  const { updateSection } = usePortfolioStore();
 const [skillInput, setSkillInput] = useState('');
  const projects = section.data || [];

  const addProject = () => {
    const newProject = {
      title: '',
      description: '',
      technologies: [],
      link: ''
    };
    updateSection(section.id, [...projects, newProject]);
  };

  const updateProject = (index, updatedProject) => {
    const newProjects = projects.map((project, i) =>
      i === index ? { ...project, ...updatedProject } : project
    );
    updateSection(section.id, newProjects);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    updateSection(section.id, newProjects);
  };

  const handleTechChange = (index, technologies) => {
    updateProject(index, { technologies });
  };
// const handleAddSkill = () => {
//   const value = skillInput.trim();
//   if (value && !data.skills?.includes(value)) {
//     handleSkillsChange([...(data.skills || []), value]);
//     setSkillInput('');
//   }
// };
  return (
    <div>
      {projects.map((project, index) => (
        <Card
          key={index}
          size="small"
          title={`Project ${index + 1}`}
          extra={
            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => removeProject(index)}
              danger
            />
          }
          style={{ marginBottom: 12 }}
        >
          <Form layout="vertical" size="small">
            <Form.Item label="Title">
              <Input
                value={project.title}
                onChange={(e) => updateProject(index, { title: e.target.value })}
                placeholder="Project title"
              />
            </Form.Item>
            
            <Form.Item label="Description">
              <TextArea
                rows={2}
                value={project.description}
                onChange={(e) => updateProject(index, { description: e.target.value })}
                placeholder="Project description"
              />
            </Form.Item>
            
            <Form.Item label="Link">
              <Input
                value={project.link}
                onChange={(e) => updateProject(index, { link: e.target.value })}
                placeholder="https://github.com/..."
              />
            </Form.Item>
            
            <Form.Item label="Technologies">
              <div>
                {project.technologies.map((tech, techIndex) => (
                  <Tag
                    key={techIndex}
                    closable
                    onClose={() => {
                      const newTech = project.technologies.filter((_, i) => i !== techIndex);
                      handleTechChange(index, newTech);
                    }}
                    style={{ marginBottom: 4 }}
                  >
                    {tech}
                  </Tag>
                ))}
                <Input
                  placeholder="Add technology and press Enter"
 value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
                  onPressEnter={(e) => {
                    const value = e.currentTarget.value.trim();
                    if (value && !project.technologies.includes(value)) {
                      handleTechChange(index, [...project.technologies, value]);
                       setSkillInput('');
                    }
                  }}
                  style={{ width: 150, marginTop: 4 }}
                  size="small"
                />
              </div>
            </Form.Item>
          </Form>
        </Card>
      ))}
      
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={addProject}
        block
        size="small"
      >
        Add Project
      </Button>
    </div>
  );
};