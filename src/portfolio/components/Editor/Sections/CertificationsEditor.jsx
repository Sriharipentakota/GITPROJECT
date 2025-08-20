import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { usePortfolioStore } from '../../../stores/portfolioStore';

export const CertificationsEditor = ({ section }) => {
  const { updateSection } = usePortfolioStore();
  const certifications = Array.isArray(section.data) ? section.data : [];

  const addCertification = () => {
    const newCertification = {
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
      link: ''
    };
    updateSection(section.id, [...certifications, newCertification]);
  };

  const updateCertification = (index, updatedCertification) => {
    const newCertifications = certifications.map((cert, i) =>
      i === index ? { ...cert, ...updatedCertification } : cert
    );
    updateSection(section.id, newCertifications);
  };

  const removeCertification = (index) => {
    const newCertifications = certifications.filter((_, i) => i !== index);
    updateSection(section.id, newCertifications);
  };

  return (
    <div>
      {certifications.map((cert, index) => (
        <Card
          key={index}
          size="small"
          title={`Certification ${index + 1}`}
          extra={
            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => removeCertification(index)}
              danger
            />
          }
          style={{ marginBottom: 12 }}
        >
          <Form layout="vertical" size="small">
            <Form.Item label="Certification Name">
              <Input
                value={cert.name}
                onChange={(e) => updateCertification(index, { name: e.target.value })}
                placeholder="AWS Solutions Architect, Google Cloud Professional, etc."
              />
            </Form.Item>
            
            <Form.Item label="Issuing Organization">
              <Input
                value={cert.issuer}
                onChange={(e) => updateCertification(index, { issuer: e.target.value })}
                placeholder="Amazon Web Services, Google, Microsoft, etc."
              />
            </Form.Item>
            
            <Form.Item label="Issue Date">
              <Input
                value={cert.date}
                onChange={(e) => updateCertification(index, { date: e.target.value })}
                placeholder="January 2024"
              />
            </Form.Item>
            
            <Form.Item label="Credential ID (Optional)">
              <Input
                value={cert.credentialId}
                onChange={(e) => updateCertification(index, { credentialId: e.target.value })}
                placeholder="Certificate ID or Badge Number"
              />
            </Form.Item>
            
            <Form.Item label="Verification Link (Optional)">
              <Input
                value={cert.link}
                onChange={(e) => updateCertification(index, { link: e.target.value })}
                placeholder="https://verify.certificate.com/..."
              />
            </Form.Item>
          </Form>
        </Card>
      ))}
      
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={addCertification}
        block
        size="small"
      >
        Add Certification
      </Button>
    </div>
  );
};