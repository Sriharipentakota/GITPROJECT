import React, { useState } from 'react';

const STEPS = [
  {
    id: 'print',
    icon: '🖨️',
    label: 'QR Printed',
    title: 'QR code is printed or displayed',
    desc: 'The QR code appears on a physical or digital surface — a poster, business card, screen, label, or product packaging.',
    phoneLine: null
  },
  {
    id: 'scan',
    icon: '📷',
    label: 'Camera Scans',
    title: 'User points camera at the QR code',
    desc: 'The device camera identifies the QR pattern, decodes the data modules, and checks error-correction parity.',
    phoneLine: '🔍 Scanning QR code…'
  },
  {
    id: 'decode',
    icon: '🔓',
    label: 'Content Decoded',
    title: 'Encoded content is extracted',
    desc: 'The scanner reads the raw content string — a URL, Wi-Fi credential, contact record, or plain text.',
    phoneLine: '✓ QR decoded'
  },
  {
    id: 'navigate',
    icon: '🌐',
    label: 'Destination Loads',
    title: 'Browser or app handles the content',
    desc: 'URLs open in the browser. Wi-Fi strings trigger system prompts. vCards save to contacts. Text is displayed.',
    phoneLine: 'Opening destination…'
  },
  {
    id: 'arrive',
    icon: '✅',
    label: 'User Sees Content',
    title: 'User reaches the destination',
    desc: 'The scan journey is complete. The user sees the content you encoded — a website, form, contact card, or message.',
    phoneLine: '🎉 Content arrived'
  }
];

function ScanJourneySimulator({ qrDataURL, qrContent }) {
  const [activeStep, setActiveStep] = useState(0);

  function next() { setActiveStep(s => Math.min(s + 1, STEPS.length - 1)); }
  function restart() { setActiveStep(0); }

  const step = STEPS[activeStep];

  return (
    <div className="journey-stage">
      <div className="journey-disclaimer">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        Simulation only — this visualizes how a real scan journey works, it does not perform an actual scan
      </div>

      <div className="journey-body">
        {/* Step bubbles */}
        <div className="journey-steps-row">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="journey-step-wrap">
                <div
                  className={`journey-step-bubble ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'done' : ''}`}
                  onClick={() => setActiveStep(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveStep(i)}
                >
                  {i < activeStep ? '✓' : s.icon}
                </div>
                <div className={`journey-step-label ${i === activeStep ? 'active' : ''}`}>{s.label}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`journey-step-connector ${i < activeStep ? 'done' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Detail panel */}
        <div className="journey-detail">
          <div className="journey-detail-title">
            <span style={{ marginRight: 8 }}>{step.icon}</span>
            {step.title}
          </div>
          <div className="journey-detail-desc">{step.desc}</div>

          {/* Phone mockup for scan step */}
          {(activeStep === 1 || activeStep === 2) && qrDataURL && (
            <div className="journey-phone-demo" style={{ marginTop: 16 }}>
              <div className="phone-frame" style={{ width: 120, height: 220 }}>
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-url-bar">camera</div>
                  <div className="phone-content" style={{ background: '#000', flexDirection: 'column', gap: 8 }}>
                    <img src={qrDataURL} alt="QR" style={{ width: 80, height: 80, objectFit: 'contain', opacity: 0.9 }} />
                    {activeStep === 2 && (
                      <div style={{ fontSize: '0.4rem', color: '#34D399', textAlign: 'center', fontWeight: 700 }}>✓ Decoded</div>
                    )}
                  </div>
                </div>
                <div className="phone-bottom-bar" />
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="journey-phone-demo" style={{ marginTop: 16 }}>
              <div className="phone-frame" style={{ width: 120, height: 220 }}>
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-url-bar">
                    {qrContent?.startsWith('http')
                      ? (() => { try { return new URL(qrContent).hostname; } catch { return 'destination'; } })()
                      : 'qr-studio.app/view'}
                  </div>
                  <div className="phone-content">
                    <div style={{ fontSize: '0.42rem', color: '#374151', textAlign: 'center' }}>
                      {qrContent ? '⏳ Loading…' : 'Destination loading…'}
                    </div>
                  </div>
                </div>
                <div className="phone-bottom-bar" />
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="journey-phone-demo" style={{ marginTop: 16 }}>
              <div className="phone-frame" style={{ width: 120, height: 220 }}>
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-url-bar">
                    {qrContent?.startsWith('http')
                      ? (() => { try { return new URL(qrContent).hostname; } catch { return 'destination'; } })()
                      : 'qr-studio.app/view'}
                  </div>
                  <div className="phone-content" style={{ flexDirection: 'column', gap: 4, alignItems: 'flex-start', padding: 8 }}>
                    <div style={{ fontSize: '0.48rem', fontWeight: 700, color: '#1e293b' }}>Content arrived ✓</div>
                    <div style={{ fontSize: '0.42rem', color: '#64748b', lineHeight: 1.4 }}>
                      {qrContent ? qrContent.slice(0, 60) + (qrContent.length > 60 ? '…' : '') : 'Your destination content'}
                    </div>
                  </div>
                </div>
                <div className="phone-bottom-bar" />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        {activeStep < STEPS.length - 1 ? (
          <button className="btn btn-primary journey-next-btn" onClick={next}>
            Next step →
          </button>
        ) : (
          <button className="journey-restart-btn" onClick={restart}>
            ↩ Restart simulation
          </button>
        )}

        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 4 }}>
          Step {activeStep + 1} of {STEPS.length} — click steps or Next to advance
        </div>
      </div>
    </div>
  );
}

export default ScanJourneySimulator;
