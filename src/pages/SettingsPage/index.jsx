import React, { useState } from 'react';
import { DEFAULT_CUSTOMIZATION, ECL_OPTIONS, STYLE_PRESETS, QR_LIBRARY_STORAGE_KEY, QR_SETTINGS_STORAGE_KEY } from '../../constants';

function loadSettings() {
  try {
    const raw = localStorage.getItem(QR_SETTINGS_STORAGE_KEY);
    return raw ? { ...DEFAULT_CUSTOMIZATION, ...JSON.parse(raw) } : { ...DEFAULT_CUSTOMIZATION };
  } catch { return { ...DEFAULT_CUSTOMIZATION }; }
}

function SettingsPage() {
  const [settings, setSettings] = useState(loadSettings);
  const [saved, setSaved] = useState(false);
  const [cleared, setCleared] = useState(false);

  const libraryCount = (() => {
    try {
      const raw = localStorage.getItem(QR_LIBRARY_STORAGE_KEY);
      return raw ? JSON.parse(raw).length : 0;
    } catch { return 0; }
  })();

  function updateSetting(key, value) {
    setSettings(prev => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    try {
      localStorage.setItem(QR_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch { /* ignore */ }
  }

  function handleResetSettings() {
    setSettings({ ...DEFAULT_CUSTOMIZATION });
    try { localStorage.removeItem(QR_SETTINGS_STORAGE_KEY); } catch { /* ignore */ }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleClearLibrary() {
    if (!window.confirm(`Delete all ${libraryCount} saved QR codes? This cannot be undone.`)) return;
    try { localStorage.removeItem(QR_LIBRARY_STORAGE_KEY); } catch { /* ignore */ }
    setCleared(true);
    setTimeout(() => setCleared(false), 3000);
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div className="page-title">Settings</div>
            <div className="page-subtitle">Default QR customization and app preferences</div>
          </div>
          <button className={`btn ${saved ? 'btn-success' : 'btn-primary'}`} onClick={handleSave}>
            {saved ? '✓ Saved' : 'Save Settings'}
          </button>
        </div>
      </div>

      <div className="page-body">
        <div className="settings-body">

          {/* Default Customization */}
          <div className="settings-section">
            <div className="settings-section-title">Default QR Customization</div>
            <div className="settings-section-desc">These values are applied when you open the Create Studio.</div>
            <div className="settings-card">
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">Foreground Color</div>
                  <div className="settings-row-desc">QR module color (dark elements)</div>
                </div>
                <input type="color" value={settings.fgColor} onChange={e => updateSetting('fgColor', e.target.value)}
                  style={{ width: 50, height: 36, padding: 2, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }} />
              </div>
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">Background Color</div>
                  <div className="settings-row-desc">QR background (light elements)</div>
                </div>
                <input type="color" value={settings.bgColor} onChange={e => updateSetting('bgColor', e.target.value)}
                  style={{ width: 50, height: 36, padding: 2, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }} />
              </div>
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">Default Size</div>
                  <div className="settings-row-desc">QR image width in pixels: {settings.width}px</div>
                </div>
                <input type="range" min="150" max="600" step="25" value={settings.width}
                  onChange={e => updateSetting('width', Number(e.target.value))}
                  style={{ width: 140, accentColor: 'var(--color-primary)' }} />
              </div>
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">Quiet Zone (Margin)</div>
                  <div className="settings-row-desc">White space around QR: {settings.margin} modules</div>
                </div>
                <input type="range" min="0" max="10" step="1" value={settings.margin}
                  onChange={e => updateSetting('margin', Number(e.target.value))}
                  style={{ width: 140, accentColor: 'var(--color-primary)' }} />
              </div>
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">Error Correction Level</div>
                  <div className="settings-row-desc">Higher = more reliable but denser</div>
                </div>
                <select className="field-select" value={settings.ecl} onChange={e => updateSetting('ecl', e.target.value)}
                  style={{ width: 140 }}>
                  {ECL_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.value} — {o.label.split('—')[1]?.trim()}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Style Presets */}
          <div className="settings-section">
            <div className="settings-section-title">Color Preset</div>
            <div className="settings-section-desc">Quick-apply a color scheme.</div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {STYLE_PRESETS.map(preset => (
                <button
                  key={preset.id}
                  onClick={() => { updateSetting('fgColor', preset.fgColor); updateSetting('bgColor', preset.bgColor); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 0.875rem',
                    border: `1px solid ${settings.fgColor === preset.fgColor ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-full)',
                    background: settings.fgColor === preset.fgColor ? 'var(--color-primary-muted)' : 'var(--color-surface)',
                    cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500,
                    color: settings.fgColor === preset.fgColor ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    transition: 'all var(--transition)'
                  }}
                >
                  <span style={{ width: 14, height: 14, borderRadius: 3, background: preset.fgColor, border: '1px solid rgba(0,0,0,0.1)', display: 'inline-block' }} />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Data & Storage */}
          <div className="settings-section">
            <div className="settings-section-title">Data & Storage</div>
            <div className="settings-section-desc">Manage locally stored QR codes and settings.</div>
            <div className="settings-card">
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">QR Library</div>
                  <div className="settings-row-desc">{libraryCount} QR code{libraryCount !== 1 ? 's' : ''} saved in browser storage</div>
                </div>
                <button className="btn btn-danger btn-sm" onClick={handleClearLibrary} disabled={libraryCount === 0}>
                  Clear Library
                </button>
              </div>
              <div className="settings-row">
                <div>
                  <div className="settings-row-label">Reset Defaults</div>
                  <div className="settings-row-desc">Restore all customization defaults</div>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={handleResetSettings}>
                  Reset
                </button>
              </div>
            </div>
            {cleared && <div className="alert alert-success" style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>Library cleared.</div>}
          </div>

          {/* Security */}
          <div className="settings-section">
            <div className="settings-section-title">Security Information</div>
            <div className="settings-card">
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="alert alert-warning" style={{ fontSize: '0.8rem' }}>
                  <div>
                    <strong>Client-side authentication only.</strong> This app uses SHA-256 hashing and browser sessionStorage.
                    This is intentionally frontend-only and is not suitable as a complete production security model.
                    For production use, implement:
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                      <li>Server-side credential validation (Argon2id, bcrypt, or scrypt for hashing)</li>
                      <li>HttpOnly, SameSite=Strict session cookies managed by the server</li>
                      <li>Server-side rate limiting and account lockout</li>
                      <li>HTTPS enforcement and CSRF protection</li>
                    </ul>
                  </div>
                </div>
                <div className="alert alert-info" style={{ fontSize: '0.8rem' }}>
                  <div>
                    <strong>Image upload privacy.</strong> Images uploaded in the Image QR mode are sent to
                    third-party APIs (ImgBB, PostImages) and become publicly accessible via URL.
                    Do not upload sensitive, personal, or confidential images.
                    Consider signed/expiring URLs for production image storage.
                  </div>
                </div>
                <div className="alert alert-info" style={{ fontSize: '0.8rem' }}>
                  <strong>QR library storage.</strong> All saved QR codes are stored in your browser's localStorage.
                  They are not synced or backed up. Clearing browser data will delete your library.
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="settings-section">
            <div className="settings-section-title">About</div>
            <div className="settings-card">
              <div className="card-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--color-text)' }}>QR Studio</strong> — a modern QR creation platform.
                  Built with React 18, React Router v6, and the <code>qrcode</code> library.
                  All QR generation runs locally in your browser.
                </p>
                <p>Stack: CRA · React 18 · React Router v6 · qrcode v1.5 · ImgBB API · PostImages API</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
