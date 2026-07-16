import React from 'react';
import { INTENTS } from '../../constants';

function IntentSelector({ onSelect, onSkip }) {
  return (
    <div className="intent-screen">
      <div className="intent-header">
        <div className="intent-eyebrow">QR Experience Studio</div>
        <h1 className="intent-title">
          What do you want your<br /><span>QR code to do?</span>
        </h1>
        <p className="intent-subtitle">
          Pick a goal and the studio will set up the right fields and template for you.
        </p>
      </div>

      <div className="intent-grid">
        {INTENTS.map(intent => (
          <button
            key={intent.id}
            className="intent-card"
            onClick={() => onSelect(intent)}
            style={{ '--intent-accent': intent.accentColor }}
          >
            <div
              className="intent-card-icon-wrap"
              style={{ background: intent.accentColor + '18', borderColor: intent.accentColor + '30' }}
            >
              <span role="img" aria-label={intent.label}>{intent.icon}</span>
            </div>
            <div className="intent-card-label">{intent.label}</div>
            <div className="intent-card-desc">{intent.description}</div>
            {intent.hint && <div className="intent-card-hint">{intent.hint}</div>}
            <span className="intent-card-arrow">→</span>
          </button>
        ))}
      </div>

      <button className="intent-skip" onClick={onSkip}>
        Skip — I'll configure manually
      </button>
    </div>
  );
}

export default IntentSelector;
