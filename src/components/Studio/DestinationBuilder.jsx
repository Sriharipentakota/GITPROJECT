import React, { useState } from 'react';

function DestinationBuilder({ templateId, fields, qrContent }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [ctaLabel, setCtaLabel] = useState('Learn More');
  const [brandColor, setBrandColor] = useState('#6D6AFC');

  const isSupported = templateId === 'text' || templateId === 'website' || templateId === 'image';
  const displayTitle = title || fields?.name || fields?.ssid || 'Your Title';
  const displaySubtitle = subtitle || fields?.message || fields?.text || 'A short description of what the user will find here.';
  const displayUrl = qrContent?.startsWith('http') ? qrContent : null;

  if (!isSupported) {
    return (
      <div className="microsite-stage" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 32, maxWidth: 320 }}>
          <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>🖼️</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8 }}>
            Destination builder
          </div>
          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            The destination microsite preview is available for Website, Text, and Image QR types.
            Switch the QR type in the Build panel to use this feature.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="microsite-stage">
      {/* Editor */}
      <div className="microsite-editor">
        <div className="microsite-label">Destination Preview</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 4 }}>
          This preview shows how your destination might look.
          It is a <strong style={{ color: 'var(--text-secondary)' }}>local simulation only</strong> — no page is actually created or hosted.
        </div>

        <div className="field" style={{ marginBottom: 0 }}>
          <label className="field-label">Page Title</label>
          <input
            className="field-input"
            placeholder={displayTitle}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="field" style={{ marginBottom: 0 }}>
          <label className="field-label">Subtitle / Description</label>
          <textarea
            className="field-textarea"
            placeholder={displaySubtitle}
            value={subtitle}
            onChange={e => setSubtitle(e.target.value)}
            rows={2}
            style={{ minHeight: 52 }}
          />
        </div>

        <div className="field" style={{ marginBottom: 0 }}>
          <label className="field-label">CTA Button Label</label>
          <input
            className="field-input"
            placeholder="Learn More"
            value={ctaLabel}
            onChange={e => setCtaLabel(e.target.value)}
          />
        </div>

        <div className="field" style={{ marginBottom: 0 }}>
          <div className="customize-row">
            <label className="field-label" style={{ marginBottom: 0 }}>Brand Color</label>
            <input
              type="color"
              value={brandColor}
              onChange={e => setBrandColor(e.target.value)}
              style={{ width: 36, height: 28, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: 2 }}
            />
          </div>
        </div>
      </div>

      {/* Phone preview */}
      <div className="microsite-preview-wrap">
        <div className="microsite-phone-wrap">
          <div className="microsite-phone">
            <div className="microsite-phone-notch" />
            <div className="microsite-phone-content">
              {/* Brand header bar */}
              <div style={{
                background: brandColor,
                borderRadius: 6,
                padding: '8px 10px',
                marginBottom: 8
              }}>
                <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>
                  Destination
                </div>
                <div style={{ fontSize: '0.65rem', color: '#fff', fontWeight: 800, lineHeight: 1.2 }}>
                  {displayTitle}
                </div>
              </div>

              {/* Content */}
              <div style={{ fontSize: '0.5rem', color: '#475569', lineHeight: 1.5, marginBottom: 8 }}>
                {displaySubtitle.slice(0, 120)}{displaySubtitle.length > 120 ? '…' : ''}
              </div>

              {/* URL if available */}
              {displayUrl && (
                <div style={{
                  background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 4,
                  padding: '4px 6px', marginBottom: 6
                }}>
                  <div style={{ fontSize: '0.42rem', color: '#64748b', lineHeight: 1.3, wordBreak: 'break-all' }}>
                    🔗 {displayUrl.length > 60 ? displayUrl.slice(0, 60) + '…' : displayUrl}
                  </div>
                </div>
              )}

              {/* CTA button */}
              <div style={{
                background: brandColor, borderRadius: 4, padding: '5px 0',
                textAlign: 'center', marginTop: 4
              }}>
                <span style={{ fontSize: '0.52rem', color: '#fff', fontWeight: 700 }}>
                  {ctaLabel || 'Learn More'}
                </span>
              </div>

              {/* Footer watermark */}
              <div style={{ textAlign: 'center', marginTop: 8 }}>
                <div style={{ fontSize: '0.38rem', color: '#cbd5e1' }}>
                  Powered by QR Experience Studio
                </div>
              </div>
            </div>
          </div>
          <div className="microsite-sim-note">
            Preview only — no page is published or hosted
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationBuilder;
