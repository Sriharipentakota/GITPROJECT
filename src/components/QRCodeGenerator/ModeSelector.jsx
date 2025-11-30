/**
 * Mode selector component for choosing QR code content type
 * Provides toggle buttons for text, link, and image modes
 */
import React from 'react';
import { Button } from '../UI';
import { QR_MODES, UI_MESSAGES } from '../../constants';

/**
 * Component for selecting QR code generation mode
 * @param {Object} props - Component props
 * @param {string} props.currentMode - Currently selected mode
 * @param {Function} props.onModeChange - Function to call when mode changes
 */
const ModeSelector = ({ currentMode, onModeChange }) => {
  /**
   * Handles mode selection change
   * @param {string} newMode - The newly selected mode
   */
  const handleModeChange = (newMode) => {
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  // Configuration for each mode button
  const modeButtons = [
    {
      mode: QR_MODES.TEXT,
      title: UI_MESSAGES.MODES.TEXT.TITLE,
      color: '#667eea'
    },
    {
      mode: QR_MODES.LINK,
      title: UI_MESSAGES.MODES.LINK.TITLE,
      color: '#667eea'
    },
    {
      mode: QR_MODES.IMAGE,
      title: UI_MESSAGES.MODES.IMAGE.TITLE,
      color: '#667eea'
    }
  ];

  return (
    <div className="mode-selector">
      <label htmlFor="mode-select">Choose QR Content Type:</label>
      
      {/* Mode selection buttons */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '1rem', 
          flexWrap: 'wrap' 
        }}
      >
        {modeButtons.map(({ mode, title, color }) => (
          <Button
            key={mode}
            onClick={() => handleModeChange(mode)}
            active={currentMode === mode}
            style={{
              opacity: currentMode === mode ? 1 : 0.6,
              backgroundColor: currentMode === mode ? color : '#ccc'
            }}
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;
