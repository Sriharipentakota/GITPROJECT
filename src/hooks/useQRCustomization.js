import { useState, useCallback } from 'react';
import { DEFAULT_CUSTOMIZATION, QR_SETTINGS_STORAGE_KEY } from '../constants';

function loadSavedCustomization() {
  try {
    const raw = localStorage.getItem(QR_SETTINGS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_CUSTOMIZATION, ...parsed };
    }
  } catch { /* ignore */ }
  return { ...DEFAULT_CUSTOMIZATION };
}

export function useQRCustomization() {
  const [customization, setCustomization] = useState(loadSavedCustomization);

  const update = useCallback((key, value) => {
    setCustomization(prev => {
      const next = { ...prev, [key]: value };
      try { localStorage.setItem(QR_SETTINGS_STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const applyPreset = useCallback((preset) => {
    setCustomization(prev => {
      const next = { ...prev, fgColor: preset.fgColor, bgColor: preset.bgColor };
      try { localStorage.setItem(QR_SETTINGS_STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setCustomization({ ...DEFAULT_CUSTOMIZATION });
    try { localStorage.removeItem(QR_SETTINGS_STORAGE_KEY); } catch { /* ignore */ }
  }, []);

  const toQROptions = useCallback(() => ({
    width: customization.width,
    margin: customization.margin,
    errorCorrectionLevel: customization.ecl,
    color: {
      dark: customization.fgColor,
      light: customization.bgColor
    }
  }), [customization]);

  return { customization, update, applyPreset, reset, toQROptions };
}
