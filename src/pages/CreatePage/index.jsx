import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TEMPLATES, STYLE_PRESETS, ECL_OPTIONS, DEFAULT_CUSTOMIZATION, FILE_SIZE_LIMITS } from '../../constants';
import { generateQRCodeWithLogo, calculateQualityScore } from '../../utils/qrUtils';
import { uploadToCloudStorage } from '../../services/imageUploadService';
import { generateViewUrl, triggerFileDownload } from '../../utils/urlUtils';
import { useQRLibrary } from '../../hooks/useQRLibrary';
import { isValidImageFile, isValidFileSize } from '../../utils/validation';
import { formatFileSize } from '../../utils/fileUtils';

const MOBILE_TABS = ['Configure', 'Preview', 'Actions'];

function CreatePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveQR } = useQRLibrary();

  // Template & fields — read initial template from navigation state (from TemplatesPage)
  const initialTemplateId = location.state?.templateId || 'website';
  const [templateId, setTemplateId] = useState(initialTemplateId);
  const [fields, setFields] = useState({});
  const [qrName, setQrName] = useState('');

  // QR generation state
  const [qrDataURL, setQrDataURL] = useState('');
  const [qrContent, setQrContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState('');

  // Image upload state (for image template)
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [uploadService, setUploadService] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  // Customization
  const [custom, setCustom] = useState({ ...DEFAULT_CUSTOMIZATION });

  // Logo
  const [logoDataURL, setLogoDataURL] = useState(null);
  const logoInputRef = useRef(null);

  // UI state
  const [mobileTab, setMobileTab] = useState(0);
  const [previewView, setPreviewView] = useState('qr'); // 'qr' | 'phone'
  const [savedId, setSavedId] = useState('');
  const [justSaved, setJustSaved] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Debounce ref
  const debounceRef = useRef(null);

  const template = TEMPLATES.find(t => t.id === templateId) || TEMPLATES[0];

  // Auto-generate QR on input change (debounced 600ms)
  const scheduleGenerate = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      generateQR();
    }, 600);
  }, [fields, custom, templateId, logoDataURL, uploadedUrl]); // eslint-disable-line

  useEffect(() => {
    if (templateId === 'image') {
      if (uploadedUrl) scheduleGenerate();
    } else {
      const hasContent = Object.values(fields).some(v => v && String(v).trim());
      if (hasContent) scheduleGenerate();
      else { setQrDataURL(''); setQrContent(''); }
    }
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [fields, custom, templateId, logoDataURL, uploadedUrl]); // eslint-disable-line

  function updateField(id, value) {
    setFields(prev => ({ ...prev, [id]: value }));
  }

  function handleTemplateChange(tid) {
    setTemplateId(tid);
    setFields({});
    setQrDataURL('');
    setQrContent('');
    setGenError('');
    if (tid !== 'image') {
      setSelectedImage(null);
      setImagePreview('');
      setUploadedUrl('');
      setUploadService('');
    }
  }

  function getDeployedUrl() {
    return process.env.REACT_APP_DEPLOYED_URL || window.location.origin;
  }

  async function generateQR() {
    const data = templateId === 'image' ? { imageUrl: uploadedUrl } : fields;
    const validationError = template.validate(data);
    if (validationError) { setQrDataURL(''); setQrContent(''); return; }

    const content = template.format(data, getDeployedUrl());
    if (!content) { setQrDataURL(''); return; }

    setIsGenerating(true);
    setGenError('');

    try {
      const options = {
        width: custom.width,
        margin: custom.margin,
        errorCorrectionLevel: custom.ecl,
        color: { dark: custom.fgColor, light: custom.bgColor }
      };
      const dataURL = await generateQRCodeWithLogo(content, options, logoDataURL, custom.logoSizePercent);
      setQrDataURL(dataURL);
      setQrContent(content);
    } catch (err) {
      setGenError('Failed to generate QR: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleImageFile(file) {
    if (!file) return;
    if (!isValidImageFile(file)) { setUploadError('Please select a valid image (JPG, PNG, GIF, WebP)'); return; }
    if (!isValidFileSize(file, FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB)) {
      setUploadError(`Image must be under ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB`);
      return;
    }

    setUploadError('');
    setSelectedImage(file);

    // Show preview
    const reader = new FileReader();
    reader.onload = e => setImagePreview(e.target.result);
    reader.readAsDataURL(file);

    // Upload
    setIsUploading(true);
    setUploadedUrl('');
    setUploadService('');
    try {
      const result = await uploadToCloudStorage(file);
      setUploadedUrl(result.directUrl || result.url);
      setUploadService(result.service);
    } catch (err) {
      setUploadError('Upload failed: ' + err.message + '. Try a smaller image or different format.');
      setSelectedImage(null);
      setImagePreview('');
    } finally {
      setIsUploading(false);
    }
  }

  function handleImageDrop(e) {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImageFile(file);
  }

  function handleLogoFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!isValidImageFile(file)) return;
    if (!isValidFileSize(file, FILE_SIZE_LIMITS.LOGO_MAX_SIZE_MB)) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setLogoDataURL(ev.target.result);
      if (custom.ecl === 'L' || custom.ecl === 'M') {
        setCustom(p => ({ ...p, ecl: 'Q' }));
      }
    };
    reader.readAsDataURL(file);
  }

  function handleSave() {
    if (!qrDataURL || !qrContent) return;
    const name = qrName.trim() || `${template.name} QR — ${new Date().toLocaleDateString()}`;
    const id = saveQR({
      id: savedId || undefined,
      name,
      description: '',
      templateId,
      content: qrContent,
      dataURL: qrDataURL,
      customization: custom,
      templateData: fields,
      generatedUrl: qrContent,
      uploadService
    });
    setSavedId(id);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  }

  function handleDownload() {
    if (!qrDataURL) return;
    const name = qrName.trim() || `qr-${templateId}-${Date.now()}`;
    triggerFileDownload(qrDataURL, `${name}.png`);
  }

  function handleTest() {
    if (!qrContent) return;
    if (qrContent.startsWith('http') || qrContent.startsWith('mailto:') || qrContent.startsWith('tel:') || qrContent.startsWith('smsto:')) {
      window.open(qrContent, '_blank', 'noopener,noreferrer');
    } else {
      const viewUrl = generateViewUrl(qrContent);
      window.open(viewUrl, '_blank', 'noopener,noreferrer');
    }
  }

  function handleCopy() {
    if (!qrContent) return;
    navigator.clipboard.writeText(qrContent).catch(() => {});
  }

  function updateCustom(key, value) {
    setCustom(prev => ({ ...prev, [key]: value }));
  }

  const quality = qrDataURL ? calculateQualityScore(qrContent, { ...custom, logoDataURL }) : null;

  const qualityBarColor = quality ? (
    quality.score >= 85 ? '#22c55e' :
    quality.score >= 70 ? '#84cc16' :
    quality.score >= 50 ? '#f59e0b' : '#ef4444'
  ) : '#e2e8f0';

  const displayContent = qrContent.length > 100 ? qrContent.slice(0, 97) + '…' : qrContent;

  return (
    <div className="studio-page">
      {/* Studio header */}
      <div className="studio-header">
        <div className="studio-header-title">QR Creation Studio</div>
        <div className="studio-header-actions">
          {qrDataURL && (
            <>
              <button className="btn btn-secondary btn-sm" onClick={handleCopy} title="Copy QR content">Copy Link</button>
              <button className="btn btn-secondary btn-sm" onClick={handleTest}>Test</button>
              <button className="btn btn-success btn-sm" onClick={handleDownload}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download
              </button>
              <button className={`btn btn-sm ${justSaved ? 'btn-success' : 'btn-primary'}`} onClick={handleSave}>
                {justSaved ? '✓ Saved!' : 'Save'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile tab navigation */}
      <div className="mobile-tabs-nav">
        {MOBILE_TABS.map((tab, i) => (
          <button key={tab} className={`tab-btn ${mobileTab === i ? 'active' : ''}`} onClick={() => setMobileTab(i)}>
            {tab}
          </button>
        ))}
      </div>

      {/* Studio 3-column layout */}
      <div className="studio-layout">

        {/* LEFT: Config Panel */}
        <div className={`studio-config ${mobileTab !== 0 ? 'tab-hidden' : ''}`}>

          {/* QR Name */}
          <div className="config-section">
            <div className="config-section-title">QR Name</div>
            <input
              className="field-input"
              placeholder={`${template.name} QR Code`}
              value={qrName}
              onChange={e => setQrName(e.target.value)}
            />
          </div>

          {/* Template Selector */}
          <div className="config-section">
            <div className="config-section-title">Type</div>
            <div className="template-grid">
              {TEMPLATES.map(t => (
                <button
                  key={t.id}
                  className={`template-btn ${templateId === t.id ? 'active' : ''}`}
                  onClick={() => handleTemplateChange(t.id)}
                  title={t.name}
                >
                  <span className="template-btn-icon">{t.icon}</span>
                  <span className="template-btn-name">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Template description */}
          <div className="config-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.1rem' }}>{template.icon}</span>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)' }}>{template.name}</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.875rem' }}>
              {template.description}
            </p>

            {/* Image template */}
            {templateId === 'image' ? (
              <div>
                {!imagePreview ? (
                  <div
                    className={`upload-zone ${isDragOver ? 'drag-over' : ''}`}
                    onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleImageDrop}
                    onClick={() => document.getElementById('studio-image-input').click()}
                  >
                    <div className="upload-icon">🖼️</div>
                    <div className="upload-text"><strong>Click or drag</strong> to upload</div>
                    <div className="upload-sub">JPG, PNG, GIF, WebP · up to {FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB</div>
                    <input
                      id="studio-image-input"
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={e => handleImageFile(e.target.files[0])}
                    />
                  </div>
                ) : (
                  <div className="image-preview-thumb">
                    <img src={imagePreview} alt="Preview" />
                    <div className="image-preview-overlay">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => { setSelectedImage(null); setImagePreview(''); setUploadedUrl(''); setUploadService(''); setQrDataURL(''); }}
                      >Remove</button>
                    </div>
                    {selectedImage && (
                      <div className="image-preview-meta">
                        {selectedImage.name} · {formatFileSize(selectedImage.size)}
                        {uploadService && <span style={{ color: 'var(--color-success)', marginLeft: '0.4rem' }}>✓ {uploadService}</span>}
                        {isUploading && <span style={{ color: 'var(--color-warning)', marginLeft: '0.4rem' }}>Uploading…</span>}
                      </div>
                    )}
                    {isUploading && (
                      <div className="upload-progress-bar"><div className="upload-progress-fill" /></div>
                    )}
                  </div>
                )}
                {uploadError && <div className="alert alert-error" style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>{uploadError}</div>}
              </div>
            ) : (
              /* Regular template fields */
              <div className="fields-stack">
                {template.fields.map(field => (
                  <TemplateField
                    key={field.id}
                    field={field}
                    value={fields[field.id] || (field.type === 'checkbox' ? false : '')}
                    onChange={val => updateField(field.id, val)}
                  />
                ))}
              </div>
            )}

            {genError && <div className="alert alert-error" style={{ marginTop: '0.75rem', fontSize: '0.75rem' }}>{genError}</div>}
          </div>

          {/* Customization */}
          <div className="config-section">
            <button
              className="btn btn-ghost btn-sm"
              style={{ width: '100%', justifyContent: 'space-between', marginBottom: showCustomize ? '0.75rem' : 0 }}
              onClick={() => setShowCustomize(v => !v)}
            >
              <span style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>
                Customize
              </span>
              <span style={{ color: 'var(--color-text-muted)' }}>{showCustomize ? '▲' : '▼'}</span>
            </button>

            {showCustomize && (
              <div>
                {/* Style presets */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Style Preset</div>
                  <div className="color-swatch-row">
                    {STYLE_PRESETS.map(preset => (
                      <div
                        key={preset.id}
                        className={`color-swatch ${custom.fgColor === preset.fgColor && custom.bgColor === preset.bgColor ? 'active' : ''}`}
                        style={{ background: preset.fgColor }}
                        title={preset.name}
                        onClick={() => setCustom(p => ({ ...p, fgColor: preset.fgColor, bgColor: preset.bgColor }))}
                      />
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="customize-row">
                  <span className="customize-label">Foreground</span>
                  <input type="color" className="field-input" value={custom.fgColor} onChange={e => updateCustom('fgColor', e.target.value)} style={{ width: 50, height: 32, padding: 2 }} />
                </div>
                <div className="customize-row">
                  <span className="customize-label">Background</span>
                  <input type="color" className="field-input" value={custom.bgColor} onChange={e => updateCustom('bgColor', e.target.value)} style={{ width: 50, height: 32, padding: 2 }} />
                </div>

                {/* Size */}
                <div className="customize-row" style={{ flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span className="customize-label">Size</span>
                  <span className="customize-value">{custom.width}px</span>
                </div>
                <input type="range" className="field-input" min="150" max="600" step="25" value={custom.width}
                  onChange={e => updateCustom('width', Number(e.target.value))}
                  style={{ width: '100%', marginBottom: '0.75rem' }}
                />

                {/* Margin */}
                <div className="customize-row" style={{ flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span className="customize-label">Quiet Zone</span>
                  <span className="customize-value">{custom.margin}</span>
                </div>
                <input type="range" className="field-input" min="0" max="10" step="1" value={custom.margin}
                  onChange={e => updateCustom('margin', Number(e.target.value))}
                  style={{ width: '100%', marginBottom: '0.75rem' }}
                />

                {/* ECL */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>Error Correction</div>
                  <select className="field-select" value={custom.ecl} onChange={e => updateCustom('ecl', e.target.value)}>
                    {ECL_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Logo */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>Logo (optional)</div>
                  {logoDataURL ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <img src={logoDataURL} alt="Logo" style={{ width: 36, height: 36, objectFit: 'contain', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
                      <div style={{ flex: 1 }}>
                        <input type="range" min="10" max="35" value={custom.logoSizePercent} onChange={e => updateCustom('logoSizePercent', Number(e.target.value))}
                          style={{ width: '100%' }} />
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Size: {custom.logoSizePercent}%</div>
                      </div>
                      <button className="btn btn-ghost btn-sm" onClick={() => setLogoDataURL(null)}>✕</button>
                    </div>
                  ) : (
                    <button className="btn btn-secondary btn-sm btn-full" onClick={() => logoInputRef.current?.click()}>
                      + Add Logo
                    </button>
                  )}
                  <input ref={logoInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleLogoFile} />
                  {logoDataURL && (custom.ecl === 'L' || custom.ecl === 'M') && (
                    <div className="alert alert-warning" style={{ marginTop: '0.4rem', fontSize: '0.72rem' }}>
                      Use ECL Q or H with a logo for reliable scanning.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CENTER: Preview */}
        <div className={`studio-preview ${mobileTab !== 1 ? 'tab-hidden' : ''}`}>
          {/* QR name */}
          <div className="qr-name-input-wrapper">
            <input
              className="qr-name-input"
              placeholder={`${template.name} QR Code`}
              value={qrName}
              onChange={e => setQrName(e.target.value)}
            />
          </div>

          {/* Preview card */}
          <div className="preview-card">
            {/* View toggle */}
            <div className="preview-view-toggle">
              <button className={`preview-view-btn ${previewView === 'qr' ? 'active' : ''}`} onClick={() => setPreviewView('qr')}>QR Code</button>
              <button className={`preview-view-btn ${previewView === 'phone' ? 'active' : ''}`} onClick={() => setPreviewView('phone')}>Phone</button>
            </div>

            {previewView === 'qr' ? (
              <div className="qr-display-area">
                {isGenerating || isUploading ? (
                  <div className="qr-generating">
                    <div className="spinner" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      {isUploading ? 'Uploading image…' : 'Generating…'}
                    </span>
                  </div>
                ) : qrDataURL ? (
                  <img
                    src={qrDataURL}
                    alt="Generated QR Code"
                    style={{ width: Math.min(custom.width, 260), height: Math.min(custom.width, 260) }}
                  />
                ) : (
                  <div className="qr-placeholder">
                    <div className="qr-placeholder-icon">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                        <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17 17h.01M14 17h.01M17 14h.01M14 14h.01"/>
                      </svg>
                    </div>
                    <p className="qr-placeholder-text">Fill in the fields to see your QR code</p>
                  </div>
                )}
              </div>
            ) : (
              <PhonePreview content={qrContent} templateId={templateId} template={template} fields={fields} />
            )}
          </div>

          {/* Content snippet */}
          {qrContent && (
            <div style={{ width: '100%', maxWidth: 380 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Encoded Content
              </div>
              <div className="content-preview-box">{displayContent}</div>
            </div>
          )}
        </div>

        {/* RIGHT: Actions + Quality */}
        <div className={`studio-actions ${mobileTab !== 2 ? 'tab-hidden' : ''}`}>

          {/* Actions */}
          <div className="actions-section">
            <div className="actions-section-title">Actions</div>
            <div className="actions-stack">
              <button className="btn btn-primary btn-full btn-lg" onClick={handleDownload} disabled={!qrDataURL}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PNG
              </button>
              <div className="action-row">
                <button className="btn btn-secondary btn-full" onClick={handleSave} disabled={!qrDataURL}>
                  {justSaved ? '✓ Saved to Library' : 'Save to Library'}
                </button>
              </div>
              <div className="action-row">
                <button className="btn btn-secondary" onClick={handleTest} disabled={!qrContent} style={{ flex: 1 }}>
                  Test / Preview
                </button>
                <button className="btn btn-ghost btn-icon" onClick={handleCopy} disabled={!qrContent} title="Copy QR content to clipboard">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Quality Score */}
          <div className="quality-section">
            <div className="quality-header">
              <div className="quality-title">Scannability</div>
              {quality && (
                <div className="quality-score-badge">
                  <span className={`quality-score-number ${quality.ratingClass}`}>{quality.score}</span>
                  <span className={`quality-rating ${quality.ratingClass}`}>{quality.rating}</span>
                </div>
              )}
            </div>

            {quality ? (
              <>
                <div className="quality-bar-track">
                  <div className="quality-bar-fill" style={{ width: `${quality.score}%`, background: qualityBarColor }} />
                </div>
                <div className="quality-issues">
                  {quality.issues.length === 0 ? (
                    <div className="quality-ok">
                      <span>✓</span> Likely to scan reliably
                    </div>
                  ) : (
                    quality.issues.map((issue, i) => (
                      <div key={i} className={`quality-issue ${issue.level}`}>
                        <div className="quality-issue-dot" />
                        <span>{issue.text}</span>
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : (
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textAlign: 'center', padding: '1.5rem 0' }}>
                Generate a QR code to see quality analysis
              </div>
            )}
          </div>

          {/* Upload service info */}
          {uploadService && (
            <div className="actions-section" style={{ borderBottom: 'none' }}>
              <div className="alert alert-success" style={{ fontSize: '0.75rem' }}>
                Image uploaded via <strong>{uploadService}</strong>
              </div>
            </div>
          )}

          {/* View Library link */}
          {savedId && (
            <div className="actions-section" style={{ borderBottom: 'none' }}>
              <button className="btn btn-ghost btn-full btn-sm" onClick={() => navigate('/library')}>
                View in Library →
              </button>
            </div>
          )}

          {/* Security note (always honest) */}
          <div style={{ padding: '1rem 1.25rem', marginTop: 'auto' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--color-text-secondary)' }}>Security note:</strong>{' '}
              Auth is client-side only (SHA-256, sessionStorage). Suitable for demos; use server-side auth for production.
              Image uploads via third-party APIs (ImgBB / PostImages) — do not upload sensitive content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Template field renderer */
function TemplateField({ field, value, onChange }) {
  const id = `field-${field.id}`;

  if (field.type === 'checkbox') {
    return (
      <div className="field">
        <div className="field-row">
          <input id={id} type="checkbox" className="field-input" checked={!!value} onChange={e => onChange(e.target.checked)}
            style={{ width: 16, height: 16 }} />
          <label htmlFor={id} className="field-label" style={{ marginBottom: 0, cursor: 'pointer' }}>
            {field.label}
          </label>
        </div>
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div className="field">
        <label htmlFor={id} className="field-label">
          {field.label}{field.required && <span className="required">*</span>}
        </label>
        <select id={id} className="field-select" value={value} onChange={e => onChange(e.target.value)}>
          {!value && <option value="">Select…</option>}
          {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <div className="field">
        <label htmlFor={id} className="field-label">
          {field.label}{field.required && <span className="required">*</span>}
        </label>
        <textarea
          id={id}
          className="field-textarea"
          placeholder={field.placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={3}
        />
      </div>
    );
  }

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {field.label}{field.required && <span className="required">*</span>}
      </label>
      <input
        id={id}
        type={field.type}
        className="field-input"
        placeholder={field.placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

/* Phone preview component */
function PhonePreview({ content, templateId, template, fields }) {
  const getPhoneContent = () => {
    if (!content) return <p style={{ fontSize: '0.55rem', color: '#94a3b8', textAlign: 'center' }}>Fill in fields to preview</p>;

    if (templateId === 'wifi') {
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📶</div>
          <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#1e293b' }}>{fields.ssid || 'Wi-Fi Network'}</div>
          <div style={{ fontSize: '0.5rem', color: '#64748b', marginTop: '2px' }}>Tap to connect</div>
        </div>
      );
    }
    if (templateId === 'contact') {
      const name = `${fields.firstName || ''} ${fields.lastName || ''}`.trim() || 'Contact';
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#6366f1', color: 'white', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 4px' }}>
            {name[0] || '?'}
          </div>
          <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#1e293b' }}>{name}</div>
          {fields.org && <div style={{ fontSize: '0.48rem', color: '#64748b' }}>{fields.org}</div>}
          {fields.phone && <div style={{ fontSize: '0.48rem', color: '#3b82f6', marginTop: '2px' }}>{fields.phone}</div>}
        </div>
      );
    }
    if (templateId === 'email') {
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>✉️</div>
          <div style={{ fontSize: '0.5rem', fontWeight: 700, color: '#1e293b' }}>Email</div>
          <div style={{ fontSize: '0.48rem', color: '#64748b', marginTop: '2px', wordBreak: 'break-all' }}>{fields.to}</div>
          {fields.subject && <div style={{ fontSize: '0.46rem', color: '#475569', marginTop: '2px', fontStyle: 'italic' }}>{fields.subject}</div>}
        </div>
      );
    }
    if (templateId === 'phone' || templateId === 'sms') {
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{templateId === 'phone' ? '📞' : '💬'}</div>
          <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#1e293b' }}>{fields.phone || 'Phone'}</div>
          {fields.message && <div style={{ fontSize: '0.46rem', color: '#64748b', marginTop: '2px' }}>{fields.message}</div>}
        </div>
      );
    }
    if (content.startsWith('http')) {
      const host = (() => { try { return new URL(content).hostname; } catch { return content.slice(0, 20); } })();
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>🌐</div>
          <div style={{ fontSize: '0.55rem', fontWeight: 600, color: '#1e293b' }}>{host}</div>
          <div style={{ fontSize: '0.46rem', color: '#64748b', marginTop: '2px' }}>Opening website…</div>
        </div>
      );
    }
    // Text
    return (
      <div className="phone-content-text">{content.slice(0, 120)}</div>
    );
  };

  const urlBarText = content
    ? (content.startsWith('http') ? (() => { try { return new URL(content).hostname; } catch { return 'qr-content'; } })() : 'qr-studio.app/view')
    : 'Fill in fields above';

  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-url-bar">{urlBarText}</div>
        <div className="phone-content">{getPhoneContent()}</div>
      </div>
      <div className="phone-bottom-bar" />
    </div>
  );
}

export default CreatePage;
