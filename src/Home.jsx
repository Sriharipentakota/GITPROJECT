import React, { useState } from 'react';
import { Radio, Button, Card } from 'antd';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #3b82f6 60%, #f59e0b 100%);
`;

const SelectionCard = styled(Card)`
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px #0002;
  min-width: 320px;
  text-align: center;
`;

export default function Home({ onSelect }) {
  const [selected, setSelected] = useState('portfolio');
  return (
    <HomeContainer>
      <SelectionCard>
        <h2 style={{ marginBottom: 24 }}>Welcome! Choose your builder:</h2>
        <Radio.Group
          value={selected}
          onChange={e => setSelected(e.target.value)}
          style={{ marginBottom: 32 }}
        >
          <Radio value="portfolio" style={{ fontSize: 18, marginRight: 24 }}>Portfolio Builder</Radio>
          <Radio value="resume" style={{ fontSize: 18 }}>Resume Builder</Radio>
        </Radio.Group>
        <Button
          type="primary"
          size="large"
          onClick={() => onSelect(selected)}
          style={{ marginTop: 16, width: '100%' }}
        >
          Continue
        </Button>
      </SelectionCard>
    </HomeContainer>
  );
}