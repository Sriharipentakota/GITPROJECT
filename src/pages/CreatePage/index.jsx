import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TEMPLATES, STYLE_PRESETS, ECL_OPTIONS, DEFAULT_CUSTOMIZATION, FILE_SIZE_LIMITS } from '../../constants';
import { generateQRCodeWithLogo, calculateQualityScore } from '../../utils/qrUtils';
import { uploadToCloudStorage } from '../../services/imageUploadService';
import { generateViewUrl, triggerFileDownload, openUrlInNewTab } from '../../utils/urlUtils';
import { useQRLibrary } from '../../hooks/useQRLibrary';
import { isValidImageFile, isValidFileSize } from '../../utils/validation';
import { formatFileSize } from '../../utils/fileUtils';
import IntentSelector from '../../components/Studio/IntentSelector';
import QRHealthCenter from '../../components/Studio/QRHealthCenter';
import ScanJourneySimulator from '../../components/Studio/ScanJourneySimulator';
import PhysicalPreviewLab from '../../components/Studio/PhysicalPreviewLab';
import DestinationBuilder from '../../components/Studio/DestinationBuilder';

const CENTER_TABS = ['QR Code', 'Journey', 'Physical', 'Destination'];
const MOBILE_STEPS = ['Intent', 'Build', 'Preview', 'Inspect', 'Save'];

function timeAgo(ts) {
  if (!ts) return '';
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return 'just now';
  if (min < 60) return `${min}m ago`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function CreatePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveQR } = useQRLibrary();

  /* ─── Intent / onboarding ─── */
  const [intent, setIntent] = useState(null);
  const [showIntentScreen, setShowIntentScreen] = useState(true);

  /* ─── Template & fields ─── */
  const initialTemplateId = location.state?.templateId || 'website';
  const [templateId, setTemplateId] = useState(initialTemplateId);
  const [fields, setFields] = useState(location.state?.fields || {});
  const [qrName, setQrName] = useState(location.state?.name || '');

  /* ─── QR generation ─── */
  const [qrDataURL, setQrDataURL]   = useState('');
  const [qrContent, setQrContent]   = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError]     = useState('');

  /* ─── Image upload ─── */
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview]   = useState('');
  const [isUploading, setIsUploading]     = useState(false);
  const [uploadedUrl, setUploadedUrl]     = useState('');
  const [uploadService, setUploadService] = useState('');
  const [uploadError, setUploadError]     = useState('');
  const [isDragOver, setIsDragOver]       = useState(false);

  /* ─── Customization ─── */
  const [custom, setCustom] = useState({ ...DEFAULT_CUSTOMIZATION });
  const [logoDataURL, setLogoDataURL] = useState(null);
  const logoInputRef = useRef(null);
  const [showCustomize, setShowCustomize] = useState(false);

  /* ─── UI state ─── */
  const [centerTab, setCenterTab] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);
  const [savedId, setSavedId]         = useState('');
  const [justSaved, setJustSaved]     = useState(false);
  const [timeline, setTimeline]       = useState([]);

  /* ─── Debounce ─── */
  const debounceRef = useRef(null);

  const template = TEMPLATES.find(t => t.id === templateId) || TEMPLATES[0];

  /* Load from library edit state */
  useEffect(() => {
    if (location.state?.editItem) {
      const item = location.state.editItem;
      setTemplateId(item.templateId || 'website');
      setFields(item.templateData || {});
      setQrName(item.name || '');
      setSavedId(item.id || '');
      if (item.customization) setCustom({ ...DEFAULT_CUSTOMIZATION, ...item.customization });
      if (item.dataURL) {
        setQrDataURL(item.dataURL);
        setQrContent(item.content || '');
      }
      setShowIntentScreen(false);
    } else if (location.state?.templateId) {
      setShowIntentScreen(false);
    }
  }, []); // eslint-disable-line

  /* Debounced auto-generate */
  const scheduleGenerate = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => generateQR(), 600);
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

  function handleIntentSelect(selectedIntent) {
    setIntent(selectedIntent);
    setShowIntentScreen(false);
    const tid = selectedIntent.templateId;
    if (TEMPLATES.find(t => t.id === tid)) {
      handleTemplateChange(tid);
    }
    addTimelineEvent('created', `Goal: ${selectedIntent.label}`);
  }

  function handleIntentSkip() {
    setShowIntentScreen(false);
    addTimelineEvent('created', 'Manual configuration');
  }

  function addTimelineEvent(type, detail) {
    setTimeline(prev => [
      { type, detail, ts: Date.now() },
      ...prev.slice(0, 9)
    ]);
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
      addTimelineEvent('updated', 'QR regenerated');
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
    const reader = new FileReader();
    reader.onload = e => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
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
    if (!file || !isValidImageFile(file) || !isValidFileSize(file, FILE_SIZE_LIMITS.LOGO_MAX_SIZE_MB)) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setLogoDataURL(ev.target.result);
      if (custom.ecl === 'L' || custom.ecl === 'M') setCustom(p => ({ ...p, ecl: 'Q' }));
      addTimelineEvent('styled', 'Logo added');
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
      customization: { ...custom, logoDataURL },
      templateData: fields,
      generatedUrl: qrContent,
      uploadService
    });
    setSavedId(id);
    setJustSaved(true);
    addTimelineEvent('saved', name);
    setTimeout(() => setJustSaved(false), 2500);
  }

  function handleDownload() {
    if (!qrDataURL) return;
    const name = qrName.trim() || `qr-${templateId}-${Date.now()}`;
    triggerFileDownload(qrDataURL, `${name}.png`);
    addTimelineEvent('downloaded', `${name}.png`);
  }

  function handleTest() {
    if (!qrContent) return;
    const isDirectUrl =
      qrContent.startsWith('http') ||
      qrContent.startsWith('mailto:') ||
      qrContent.startsWith('tel:') ||
      qrContent.startsWith('smsto:');
    const url = isDirectUrl ? qrContent : generateViewUrl(qrContent);
    openUrlInNewTab(url);
    addTimelineEvent('tested', 'Opened in browser');
  }

  function handleCopy() {
    if (!qrContent) return;
    navigator.clipboard.writeText(qrContent).catch(() => {
      // Fallback for WebView environments where clipboard API may be blocked
      const el = document.createElement('textarea');
      el.value = qrContent;
      el.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(el);
      el.focus();
      el.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(el);
    });
  }

  function handleShowcase() {
    if (!savedId) { handleSave(); return; }
    navigate(`/showcase/${savedId}`);
  }

  function updateCustom(key, value) {
    setCustom(prev => ({ ...prev, [key]: value }));
  }

  const displayContent = qrContent.length > 80 ? qrContent.slice(0, 77) + '…' : qrContent;
  const qualityCustom  = { ...custom, logoDataURL };

  /* ── Intent screen ── */
  if (showIntentScreen) {
    return <IntentSelector onSelect={handleIntentSelect} onSkip={handleIntentSkip} />;
  }

  return (
    <div className="studio-page">

      {/* Studio topbar */}
      <div className="studio-topbar">
        <div className="studio-topbar-left">
          <div className="studio-title">QR Experience Studio</div>
          {intent && (
            <button className="studio-intent-pill" onClick={() => setShowIntentScreen(true)}>
              <span className="studio-intent-pill-icon">{intent.icon}</span>
              <span className="studio-intent-pill-label">{intent.label}</span>
              <span className="studio-intent-pill-change">Change</span>
            </button>
          )}
          {!intent && (
            <button className="studio-intent-pill" onClick={() => setShowIntentScreen(true)}>
              <span style={{ fontSize: '0.75rem' }}>+ Set intent</span>
            </button>
          )}
        </div>
        <div className="studio-topbar-right">
          {savedId && (
            <button className="btn btn-secondary btn-sm" onClick={handleShowcase}>
              Showcase ↗
            </button>
          )}
        </div>
      </div>

      {/* Mobile step navigation */}
      <div className="mobile-step-nav">
        {MOBILE_STEPS.map((step, i) => (
          <button
            key={step}
            className={`mobile-step-btn ${mobileStep === i ? 'active' : ''}`}
            onClick={() => setMobileStep(i)}
          >
            {step}
          </button>
        ))}
      </div>

      {/* 3-panel workspace */}
      <div className="studio-workspace">

        {/* ─── LEFT: Build Panel ─── */}
        <div className={`panel-left ${mobileStep !== 1 ? 'step-hidden' : ''}`}>
          <div className="panel-left-scroll">

            {/* QR Type selector */}
            <div className="panel-section">
              <div className="panel-section-header">
                <div className="panel-section-title">QR Type</div>
                <span className="panel-section-badge">{template.name}</span>
              </div>
              <div className="type-grid">
                {TEMPLATES.map(t => (
                  <button
                    key={t.id}
                    className={`type-btn ${templateId === t.id ? 'active' : ''}`}
                    onClick={() => handleTemplateChange(t.id)}
                    title={t.name}
                  >
                    <span className="type-btn-icon">{t.icon}</span>
                    <span className="type-btn-name">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Template description + fields */}
            <div className="panel-section">
              <div className="template-desc-row">
                <span className="template-desc-icon">{template.icon}</span>
                <span className="template-desc-text">{template.description}</span>
              </div>

              {/* Image template upload */}
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
                      <div className="upload-sub">JPG, PNG, GIF, WebP · max {FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB</div>
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
                          onClick={() => {
                            setSelectedImage(null); setImagePreview('');
                            setUploadedUrl(''); setUploadService(''); setQrDataURL('');
                          }}
                        >
                          Remove
                        </button>
                      </div>
                      {selectedImage && (
                        <div className="image-preview-meta">
                          {selectedImage.name} · {formatFileSize(selectedImage.size)}
                          {uploadService && <span style={{ color: 'var(--success)', marginLeft: '0.4rem' }}>✓ {uploadService}</span>}
                          {isUploading && <span style={{ color: 'var(--warning)', marginLeft: '0.4rem' }}>Uploading…</span>}
                        </div>
                      )}
                      {isUploading && (
                        <div className="upload-progress-bar"><div className="upload-progress-fill" /></div>
                      )}
                    </div>
                  )}
                  {uploadError && (
                    <div className="alert alert-error" style={{ marginTop: 8, fontSize: '0.75rem' }}>{uploadError}</div>
                  )}
                </div>
              ) : (
                /* Regular fields */
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

              {genError && (
                <div className="alert alert-error" style={{ marginTop: 8, fontSize: '0.75rem' }}>{genError}</div>
              )}
            </div>

            {/* Customization */}
            <div className="panel-section">
              <button className="customize-toggle" onClick={() => setShowCustomize(v => !v)}>
                <span>Design</span>
                <span className={`customize-toggle-arrow ${showCustomize ? 'open' : ''}`}>▼</span>
              </button>

              {showCustomize && (
                <div className="customize-body">
                  {/* Style presets */}
                  <div>
                    <div className="field-label" style={{ marginBottom: 6 }}>Color Preset</div>
                    <div className="preset-row">
                      {STYLE_PRESETS.map(preset => (
                        <div
                          key={preset.id}
                          className={`preset-swatch ${custom.fgColor === preset.fgColor && custom.bgColor === preset.bgColor ? 'active' : ''}`}
                          style={{ background: preset.fgColor, border: preset.bgColor === '#ffffff' ? '2px solid var(--border-strong)' : undefined }}
                          title={preset.name}
                          onClick={() => {
                            setCustom(p => ({ ...p, fgColor: preset.fgColor, bgColor: preset.bgColor }));
                            addTimelineEvent('styled', `Preset: ${preset.name}`);
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="customize-colors">
                    <div className="color-picker-group">
                      <label className="color-picker-label">FG</label>
                      <input type="color" value={custom.fgColor} onChange={e => updateCustom('fgColor', e.target.value)} style={{ width: 40, height: 28 }} />
                      <span className="customize-value">{custom.fgColor}</span>
                    </div>
                    <div className="color-picker-group">
                      <label className="color-picker-label">BG</label>
                      <input type="color" value={custom.bgColor} onChange={e => updateCustom('bgColor', e.target.value)} style={{ width: 40, height: 28 }} />
                      <span className="customize-value">{custom.bgColor}</span>
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <div className="customize-row">
                      <span className="customize-label">Output size</span>
                      <span className="customize-value">{custom.width}px</span>
                    </div>
                    <input type="range" min="150" max="600" step="25" value={custom.width}
                      onChange={e => updateCustom('width', Number(e.target.value))} />
                  </div>

                  {/* Margin */}
                  <div>
                    <div className="customize-row">
                      <span className="customize-label">Quiet zone</span>
                      <span className="customize-value">{custom.margin} modules</span>
                    </div>
                    <input type="range" min="0" max="10" step="1" value={custom.margin}
                      onChange={e => updateCustom('margin', Number(e.target.value))} />
                  </div>

                  {/* ECL */}
                  <div className="field">
                    <label className="field-label">Error Correction</label>
                    <select className="field-select" value={custom.ecl} onChange={e => updateCustom('ecl', e.target.value)}>
                      {ECL_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>

                  {/* Logo */}
                  <div className="field">
                    <label className="field-label">Logo (optional)</label>
                    {logoDataURL ? (
                      <div className="logo-preview-row">
                        <img src={logoDataURL} alt="Logo" className="logo-thumb" />
                        <div style={{ flex: 1 }}>
                          <div className="customize-row">
                            <span className="customize-label">Size</span>
                            <span className="customize-value">{custom.logoSizePercent}%</span>
                          </div>
                          <input type="range" min="10" max="35" value={custom.logoSizePercent}
                            onChange={e => updateCustom('logoSizePercent', Number(e.target.value))} />
                        </div>
                        <button className="btn btn-ghost btn-sm btn-icon" onClick={() => setLogoDataURL(null)}>✕</button>
                      </div>
                    ) : (
                      <button className="btn btn-secondary btn-sm btn-full" onClick={() => logoInputRef.current?.click()}>
                        + Add Logo
                      </button>
                    )}
                    <input ref={logoInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleLogoFile} />
                    {logoDataURL && (custom.ecl === 'L' || custom.ecl === 'M') && (
                      <div className="alert alert-warning" style={{ marginTop: 6, fontSize: '0.72rem' }}>
                        Use ECL Q or H with a logo for reliable scanning.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Upload info */}
            {uploadService && (
              <div className="panel-section">
                <div className="alert alert-success" style={{ fontSize: '0.75rem' }}>
                  Image hosted via <strong>{uploadService}</strong>. Do not upload sensitive content to third-party APIs.
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ─── CENTER: Experience Panel ─── */}
        <div className={`panel-center ${mobileStep !== 2 ? 'step-hidden' : ''}`}>
          {/* Tab bar — desktop only (CSS hides on mobile) */}
          <div className="center-tab-bar">
            {CENTER_TABS.map((tab, i) => (
              <button
                key={tab}
                className={`center-tab ${centerTab === i ? 'active' : ''}`}
                onClick={() => setCenterTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab 0: QR Code */}
          {centerTab === 0 && (
            <div className="center-tab-content">
              <div className="qr-stage">
                {qrName && <div className="qr-name-display">{qrName}</div>}

                <div className="qr-artifact-wrap">
                  {isGenerating || isUploading ? (
                    <div className="qr-generating-state">
                      <div className="spinner" />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {isUploading ? 'Uploading image…' : 'Generating…'}
                      </span>
                    </div>
                  ) : qrDataURL ? (
                    <img
                      src={qrDataURL}
                      alt="Generated QR Code"
                      className="qr-artifact"
                      style={{ width: Math.min(custom.width, 300), height: Math.min(custom.width, 300) }}
                    />
                  ) : (
                    <div className="qr-empty-state">
                      <EmptyQRGrid />
                      <div className="qr-empty-title">No QR code yet</div>
                      <div className="qr-empty-sub">Fill in the fields in the Build panel to generate your QR code</div>
                    </div>
                  )}
                </div>

                {qrContent && (
                  <div className="qr-content-snippet">
                    <div className="qr-content-label">Encoded content</div>
                    <div className="qr-content-value" title={qrContent}>{displayContent}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 1: Scan Journey */}
          {centerTab === 1 && (
            <div className="center-tab-content" style={{ padding: 0 }}>
              <ScanJourneySimulator qrDataURL={qrDataURL} qrContent={qrContent} />
            </div>
          )}

          {/* Tab 2: Physical Preview */}
          {centerTab === 2 && (
            <div className="center-tab-content" style={{ padding: 0 }}>
              <PhysicalPreviewLab qrDataURL={qrDataURL} />
            </div>
          )}

          {/* Tab 3: Destination */}
          {centerTab === 3 && (
            <div className="center-tab-content" style={{ padding: 0 }}>
              <DestinationBuilder
                templateId={templateId}
                fields={fields}
                qrContent={qrContent}
              />
            </div>
          )}
        </div>

        {/* ─── RIGHT: Inspect Panel ─── */}
        <div className={`panel-right ${mobileStep !== 3 ? 'step-hidden' : ''}`}>
          <div className="panel-right-scroll">

            {/* QR Health Center */}
            <QRHealthCenter
              customization={qualityCustom}
              qrContent={qrContent}
              hasQR={!!qrDataURL}
            />

            {/* Timeline */}
            <div className="timeline-section">
              <div className="panel-section-header" style={{ padding: '0 0 8px' }}>
                <div className="panel-section-title">Project Timeline</div>
              </div>

              {timeline.length === 0 ? (
                <div className="timeline-empty">No events yet — start building your QR code</div>
              ) : (
                <div className="timeline-events">
                  {timeline.map((event, i) => (
                    <div key={i} className="timeline-event">
                      <div className={`timeline-dot dot-${event.type}`}>
                        {event.type === 'saved' && '💾'}
                        {event.type === 'created' && '✦'}
                        {event.type === 'updated' && '↻'}
                        {event.type === 'styled' && '🎨'}
                        {event.type === 'tested' && '✓'}
                        {event.type === 'downloaded' && '↓'}
                      </div>
                      <div className="timeline-body">
                        <div className="timeline-label">
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </div>
                        <div className="timeline-time">{event.detail} · {timeAgo(event.ts)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Security note */}
            <div className="panel-section" style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Security note:</strong>{' '}
                Auth uses client-side SHA-256 + sessionStorage — demo-grade only, not production security.
                Images uploaded via third-party APIs (ImgBB/PostImages) — do not upload sensitive content.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── STICKY ACTION BAR ─── */}
      <div className={`studio-actionbar ${mobileStep !== 4 ? 'step-hidden' : ''}`}>
        <div className="actionbar-name-wrap">
          <input
            className="actionbar-name"
            placeholder={`${template.name} QR Code`}
            value={qrName}
            onChange={e => setQrName(e.target.value)}
          />
        </div>

        <div className="actionbar-actions">
          <button className="btn btn-secondary btn-sm" onClick={handleTest} disabled={!qrContent} title="Test QR in new tab">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Test
          </button>

          <button className="btn btn-secondary btn-sm" onClick={handleCopy} disabled={!qrContent} title="Copy QR content">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy
          </button>

          <div className="actionbar-divider" />

          <button className="btn btn-secondary btn-sm" onClick={handleDownload} disabled={!qrDataURL}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </button>

          <button
            className={`btn btn-sm ${justSaved ? 'btn-success' : 'btn-primary'}`}
            onClick={handleSave}
            disabled={!qrDataURL}
          >
            {justSaved ? '✓ Saved!' : 'Save'}
          </button>

          {savedId && (
            <button className="btn btn-ghost btn-sm" onClick={handleShowcase} title="Open in Showcase mode">
              Showcase ↗
            </button>
          )}
        </div>
      </div>

    </div>
  );
}

/* ── Template field renderer ── */
function TemplateField({ field, value, onChange }) {
  const id = `field-${field.id}`;

  if (field.type === 'checkbox') {
    return (
      <div className="field">
        <div className="field-row">
          <input id={id} type="checkbox" checked={!!value} onChange={e => onChange(e.target.checked)}
            style={{ width: 15, height: 15, cursor: 'pointer', accentColor: 'var(--accent)' }} />
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

/* ── Empty QR grid placeholder ── */
function EmptyQRGrid() {
  const PATTERN = [
    1,1,1,0,0,
    1,0,1,0,1,
    1,1,1,1,0,
    0,0,0,1,1,
    0,1,0,0,1
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 10px)', gap: 3, opacity: 0.08 }}>
      {PATTERN.map((on, i) => (
        <div key={i} style={{ width: 10, height: 10, background: on ? 'var(--text-primary)' : 'transparent', borderRadius: 2 }} />
      ))}
    </div>
  );
}

export default CreatePage;
