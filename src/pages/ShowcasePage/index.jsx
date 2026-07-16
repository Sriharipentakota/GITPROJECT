import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQRLibrary } from '../../hooks/useQRLibrary';
import { TEMPLATES } from '../../constants';
import { triggerFileDownload } from '../../utils/urlUtils';

function timeLabel(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function ShowcasePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items } = useQRLibrary();

  const item = items.find(i => i.id === id);

  if (!item) {
    return (
      <div className="showcase-page">
        <div className="showcase-topbar">
          <div className="showcase-brand">
            <div className="showcase-brand-dot" />
            QR Experience Studio
          </div>
          <button className="showcase-back-btn" onClick={() => navigate('/library')}>
            ← Back to Library
          </button>
        </div>
        <div className="showcase-not-found">
          <div style={{ fontSize: 48, opacity: 0.15 }}>◫</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-secondary)' }}>QR not found</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: 320, textAlign: 'center', lineHeight: 1.6 }}>
            This QR code may have been deleted, or the ID is incorrect.
            Save a QR code from the Studio to view it in Showcase mode.
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/studio')}>
            Open Studio
          </button>
        </div>
      </div>
    );
  }

  const template = TEMPLATES.find(t => t.id === item.templateId);
  const custom = item.customization || {};
  const hasLogo = !!custom.logoDataURL;
  const ecl = custom.ecl || 'M';

  function handleDownload() {
    if (item.dataURL) triggerFileDownload(item.dataURL, `${item.name}.png`);
  }

  function handleTest() {
    if (!item.content) return;
    if (item.content.startsWith('http') || item.content.startsWith('mailto:') || item.content.startsWith('tel:')) {
      window.open(item.content, '_blank', 'noopener,noreferrer');
    } else {
      const base = process.env.REACT_APP_DEPLOYED_URL || window.location.origin;
      window.open(`${base}/view?data=${encodeURIComponent(item.content)}`, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className="showcase-page">
      {/* Topbar */}
      <div className="showcase-topbar">
        <div className="showcase-brand">
          <div className="showcase-brand-dot" />
          QR Experience Studio
        </div>
        <button className="showcase-back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* Hero */}
      <div className="showcase-hero">
        <div className="showcase-hero-label">Showcase Mode</div>
        <h1 className="showcase-hero-title">{item.name}</h1>
        <p className="showcase-hero-desc">
          {template ? `${template.icon} ${template.name} QR code` : 'QR Code'} — created in QR Experience Studio
        </p>

        {/* QR feature */}
        <div className="showcase-qr-feature">
          {item.dataURL ? (
            <img
              src={item.dataURL}
              alt={item.name}
              className="showcase-qr-img"
              style={{ width: 220, height: 220, imageRendering: 'pixelated' }}
            />
          ) : (
            <div style={{
              width: 220, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)', fontSize: '0.8rem'
            }}>
              No QR image
            </div>
          )}
          <div className="showcase-qr-label">
            Scan with any QR reader · {item.content ? `${item.content.length} chars encoded` : '—'}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="showcase-body">
        <div className="showcase-grid">

          {/* Purpose card */}
          <div className="showcase-section-card">
            <div className="showcase-section-title">Purpose</div>
            <div className="showcase-meta-grid">
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Type</span>
                <span className="showcase-meta-value">
                  {template ? `${template.icon} ${template.name}` : item.templateId}
                </span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Created</span>
                <span className="showcase-meta-value">{timeLabel(item.createdAt)}</span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Last updated</span>
                <span className="showcase-meta-value">{timeLabel(item.updatedAt)}</span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Favorite</span>
                <span className="showcase-meta-value">{item.favorite ? '★ Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          {/* Design card */}
          <div className="showcase-section-card">
            <div className="showcase-section-title">Design</div>
            <div className="showcase-meta-grid">
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Foreground</span>
                <span className="showcase-meta-value" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 14, height: 14, background: custom.fgColor || '#000', borderRadius: 3, border: '1px solid rgba(255,255,255,0.15)', display: 'inline-block' }} />
                  {custom.fgColor || '#000000'}
                </span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Background</span>
                <span className="showcase-meta-value" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 14, height: 14, background: custom.bgColor || '#fff', borderRadius: 3, border: '1px solid rgba(255,255,255,0.15)', display: 'inline-block' }} />
                  {custom.bgColor || '#ffffff'}
                </span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Output size</span>
                <span className="showcase-meta-value">{custom.width || 300}px</span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Error correction</span>
                <span className="showcase-meta-value">Level {ecl}</span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Quiet zone</span>
                <span className="showcase-meta-value">{custom.margin ?? 4} modules</span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Logo overlay</span>
                <span className="showcase-meta-value">{hasLogo ? `${custom.logoSizePercent || 20}%` : 'None'}</span>
              </div>
            </div>
          </div>

          {/* Encoded content card */}
          <div className="showcase-section-card">
            <div className="showcase-section-title">Encoded Content</div>
            {item.content ? (
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)',
                  background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)', padding: '10px 12px', wordBreak: 'break-all',
                  lineHeight: 1.6, maxHeight: 120, overflow: 'auto'
                }}>
                  {item.content}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 6 }}>
                  {item.content.length} characters
                </div>
              </div>
            ) : (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Content not available</div>
            )}
          </div>

          {/* Quality summary card */}
          <div className="showcase-section-card">
            <div className="showcase-section-title">Quality Summary</div>
            <div className="showcase-meta-grid">
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">ECL level</span>
                <span className="showcase-meta-value" style={{ color: (ecl === 'H' || ecl === 'Q') ? 'var(--success)' : ecl === 'M' ? 'var(--warning)' : 'var(--error)' }}>
                  {ecl === 'H' ? 'H — 30% recovery' : ecl === 'Q' ? 'Q — 25% recovery' : ecl === 'M' ? 'M — 15% recovery' : 'L — 7% recovery'}
                </span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Logo risk</span>
                <span className="showcase-meta-value" style={{ color: hasLogo && (ecl === 'L' || ecl === 'M') ? 'var(--warning)' : 'var(--success)' }}>
                  {hasLogo ? (ecl === 'L' || ecl === 'M') ? 'Review ECL' : 'Balanced' : 'No logo'}
                </span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Data length</span>
                <span className="showcase-meta-value">
                  {item.content
                    ? item.content.length <= 100 ? 'Low density' : item.content.length <= 300 ? 'Moderate' : 'High density'
                    : '—'}
                </span>
              </div>
              <div className="showcase-meta-item">
                <span className="showcase-meta-label">Upload service</span>
                <span className="showcase-meta-value">{item.uploadService || 'N/A'}</span>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: '0.68rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.5 }}>
              Quality summary based on saved settings — not a guarantee of scan success.
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="showcase-actions">
          <button className="btn btn-primary btn-lg" onClick={handleDownload} disabled={!item.dataURL}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PNG
          </button>

          <button className="btn btn-secondary btn-lg" onClick={handleTest} disabled={!item.content}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Test QR Code
          </button>

          <button className="btn btn-secondary btn-lg" onClick={() => navigate(`/studio`, { state: { editItem: item } })}>
            Edit in Studio
          </button>

          <button className="btn btn-ghost btn-lg" onClick={() => navigate('/library')}>
            ← Library
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 40 }}>
          Showcase mode reads saved data from your browser's local storage. No data is sent to any server.
        </div>
      </div>
    </div>
  );
}

export default ShowcasePage;
