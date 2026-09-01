import React, { useState } from 'react';
import { MOCKUP_SCENES } from '../../constants';

function PhysicalPreviewLab({ qrDataURL }) {
  const [sceneId, setSceneId] = useState(MOCKUP_SCENES[0].id);
  const [qrSize, setQrSize] = useState(null);
  const [qrX, setQrX] = useState(null);
  const [qrY, setQrY] = useState(null);

  const scene = MOCKUP_SCENES.find(s => s.id === sceneId) || MOCKUP_SCENES[0];

  const size = qrSize !== null ? qrSize : scene.defaultQRSize;
  const x    = qrX   !== null ? qrX   : scene.defaultQRX;
  const y    = qrY   !== null ? qrY   : scene.defaultQRY;

  function handleSceneChange(id) {
    setSceneId(id);
    setQrSize(null);
    setQrX(null);
    setQrY(null);
  }

  const physicalMmSize = Math.round((size / scene.svgWidth) * 210);
  const scanDistanceCm = Math.round(physicalMmSize * 0.1 * 10);
  const tooSmall = physicalMmSize < 20;

  return (
    <div className="physical-stage">
      {/* Scene tabs */}
      <div className="physical-scene-tabs">
        {MOCKUP_SCENES.map(s => (
          <button
            key={s.id}
            className={`scene-tab ${sceneId === s.id ? 'active' : ''}`}
            onClick={() => handleSceneChange(s.id)}
          >
            <span className="scene-tab-icon">{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="physical-body">
        {/* Mockup SVG */}
        <div className="mockup-canvas-wrap">
          <svg
            className="mockup-svg"
            viewBox={`0 0 ${scene.svgWidth} ${scene.svgHeight}`}
            width={Math.min(scene.svgWidth * 1.5, 360)}
            height={Math.min(scene.svgHeight * 1.5, 510)}
            style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10 }}
          >
            {/* Scene background */}
            <rect width={scene.svgWidth} height={scene.svgHeight} fill={scene.bgColor} rx="6" />

            {/* Scene decorative content */}
            <SceneDecorations scene={scene} />

            {/* QR code image */}
            {qrDataURL ? (
              <image
                href={qrDataURL}
                x={x - size / 2}
                y={y - size / 2}
                width={size}
                height={size}
                style={{ imageRendering: 'pixelated' }}
              />
            ) : (
              <g>
                <rect
                  x={x - size / 2}
                  y={y - size / 2}
                  width={size}
                  height={size}
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="3,2"
                  rx="2"
                />
                <text
                  x={x}
                  y={y + 3}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.3)"
                  fontSize="5"
                  fontFamily="sans-serif"
                >
                  QR preview
                </text>
              </g>
            )}
          </svg>
          <div className="mockup-desc">{scene.description}</div>
        </div>

        {/* Controls */}
        <div className="mockup-controls">
          <div>
            <div className="mockup-control-label">
              QR Size
              <span className="mockup-control-value">{size}px</span>
            </div>
            <input
              type="range"
              min={scene.minQRSize || 30}
              max={scene.maxQRSize || Math.min(scene.svgWidth, scene.svgHeight) - 20}
              value={size}
              onChange={e => setQrSize(Number(e.target.value))}
            />
          </div>

          <div>
            <div className="mockup-control-label">
              Horizontal position
              <span className="mockup-control-value">{x}px</span>
            </div>
            <input
              type="range"
              min={size / 2 + 4}
              max={scene.svgWidth - size / 2 - 4}
              value={x}
              onChange={e => setQrX(Number(e.target.value))}
            />
          </div>

          <div>
            <div className="mockup-control-label">
              Vertical position
              <span className="mockup-control-value">{y}px</span>
            </div>
            <input
              type="range"
              min={size / 2 + 4}
              max={scene.svgHeight - size / 2 - 4}
              value={y}
              onChange={e => setQrY(Number(e.target.value))}
            />
          </div>

          {/* Size estimate */}
          <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 6 }}>
              Print size estimate
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              ~{physicalMmSize}mm × {physicalMmSize}mm
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: 2 }}>
              Comfortable scan distance: ~{scanDistanceCm}cm
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 4, fontStyle: 'italic' }}>
              Estimate based on A4 proportions — actual size depends on print settings
            </div>
          </div>

          {tooSmall && (
            <div className="mockup-warning">
              ⚠ This size may be too small for reliable scanning when printed. QR codes generally need at least 20mm × 20mm in print.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SceneDecorations({ scene }) {
  const textColor = scene.bgColor === '#FFFFFF' || scene.bgColor === '#FEF9F0' ? '#334155' : 'rgba(255,255,255,0.5)';
  const lineColor = scene.bgColor === '#FFFFFF' || scene.bgColor === '#FEF9F0' ? '#e2e8f0' : 'rgba(255,255,255,0.1)';
  const accentColor = scene.bgColor === '#FFFFFF' || scene.bgColor === '#FEF9F0' ? '#6366f1' : 'rgba(255,255,255,0.6)';

  if (scene.id === 'business-card') {
    return (
      <g>
        <text x="22" y="80" fill={accentColor} fontSize="9" fontWeight="800" fontFamily="sans-serif">Acme Corp</text>
        <text x="22" y="95" fill={textColor} fontSize="6.5" fontFamily="sans-serif">Jane Smith</text>
        <text x="22" y="107" fill={textColor} opacity="0.6" fontSize="5.5" fontFamily="sans-serif">Product Designer</text>
        <text x="22" y="125" fill={textColor} opacity="0.5" fontSize="5" fontFamily="sans-serif">jane@acme.com</text>
        <text x="22" y="135" fill={textColor} opacity="0.5" fontSize="5" fontFamily="sans-serif">+1 555 0100</text>
        <line x1="22" y1="145" x2="190" y2="145" stroke={lineColor} strokeWidth="0.5" />
        <text x="22" y="175" fill={textColor} opacity="0.25" fontSize="4.5" fontFamily="sans-serif">scan to connect →</text>
      </g>
    );
  }

  if (scene.id === 'a4-poster') {
    return (
      <g>
        <rect x="20" y="20" width="200" height="8" fill={accentColor} opacity="0.15" rx="2" />
        <text x="120" y="45" textAnchor="middle" fill={accentColor} fontSize="10" fontWeight="800" fontFamily="sans-serif">OPEN DAY 2025</text>
        <text x="120" y="60" textAnchor="middle" fill={textColor} fontSize="7" fontFamily="sans-serif">Saturday, 12 July · 10am–4pm</text>
        <rect x="40" y="70" width="160" height="1" fill={lineColor} />
        <text x="120" y="100" textAnchor="middle" fill={textColor} opacity="0.5" fontSize="6" fontFamily="sans-serif">Join us for an afternoon of demos</text>
        <text x="120" y="112" textAnchor="middle" fill={textColor} opacity="0.5" fontSize="6" fontFamily="sans-serif">workshops, and community talks</text>
        <text x="120" y="290" textAnchor="middle" fill={textColor} opacity="0.4" fontSize="5.5" fontFamily="sans-serif">Scan for details and RSVP →</text>
      </g>
    );
  }

  if (scene.id === 'event-badge') {
    return (
      <g>
        <rect x="20" y="18" width="200" height="44" fill="rgba(255,255,255,0.05)" rx="4" />
        <text x="120" y="37" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8" fontWeight="800" fontFamily="sans-serif">DEVCONF 2025</text>
        <text x="120" y="50" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="sans-serif">ATTENDEE</text>
        <text x="120" y="82" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Sam Rivera</text>
        <text x="120" y="96" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="sans-serif">Engineering Lead · Acme Corp</text>
        <text x="120" y="278" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="sans-serif">Session access — scan at door</text>
      </g>
    );
  }

  if (scene.id === 'product-label') {
    return (
      <g>
        <text x="20" y="30" fill={accentColor} fontSize="8" fontWeight="800" fontFamily="sans-serif">Artisan Coffee Co.</text>
        <text x="20" y="44" fill={textColor} fontSize="6" fontFamily="sans-serif">Single Origin — Ethiopian Yirgacheffe</text>
        <line x1="20" y1="52" x2="220" y2="52" stroke={lineColor} strokeWidth="0.5" />
        <text x="20" y="128" fill={textColor} opacity="0.4" fontSize="5" fontFamily="sans-serif">Trace your coffee's journey →</text>
      </g>
    );
  }

  if (scene.id === 'table-card') {
    return (
      <g>
        <text x="110" y="35" textAnchor="middle" fill={accentColor} fontSize="9" fontWeight="800" fontFamily="sans-serif">Table 7</text>
        <text x="110" y="52" textAnchor="middle" fill={textColor} opacity="0.6" fontSize="6" fontFamily="sans-serif">Scan to view menu</text>
        <rect x="20" y="58" width="180" height="0.5" fill={lineColor} />
        <text x="110" y="262" textAnchor="middle" fill={textColor} opacity="0.35" fontSize="5" fontFamily="sans-serif">Order & pay at table</text>
        <text x="110" y="284" textAnchor="middle" fill={textColor} opacity="0.25" fontSize="4.5" fontFamily="sans-serif">Bistro Nouvelle · bistro.menu</text>
      </g>
    );
  }

  if (scene.id === 'sticker') {
    return (
      <g>
        <circle cx="100" cy="100" r="96" fill="none" stroke={lineColor} strokeWidth="1" strokeDasharray="3,2" />
        <text x="100" y="35" textAnchor="middle" fill={accentColor} fontSize="7" fontWeight="800" fontFamily="sans-serif">SCAN ME</text>
        <text x="100" y="174" textAnchor="middle" fill={textColor} opacity="0.4" fontSize="5" fontFamily="sans-serif">Verified product</text>
      </g>
    );
  }

  return null;
}

export default PhysicalPreviewLab;
