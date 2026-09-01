import React, { useMemo } from 'react';

const CHECKS = [
  {
    id: 'contrast',
    label: 'Color Contrast',
    weight: 25,
    evaluate: ({ fgColor, bgColor }) => {
      const toLinear = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        const lin = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
      };
      try {
        const L1 = toLinear(fgColor);
        const L2 = toLinear(bgColor);
        const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        if (ratio >= 4.5) return { status: 'ready', score: 25, detail: `Contrast ratio ${ratio.toFixed(1)}:1 — excellent` };
        if (ratio >= 3.0) return { status: 'attention', score: 16, detail: `Contrast ratio ${ratio.toFixed(1)}:1 — may have trouble in low light` };
        return { status: 'risk', score: 6, detail: `Contrast ratio ${ratio.toFixed(1)}:1 — too low, scanners may fail` };
      } catch {
        return { status: 'attention', score: 16, detail: 'Could not evaluate contrast' };
      }
    }
  },
  {
    id: 'size',
    label: 'Output Size',
    weight: 20,
    evaluate: ({ width }) => {
      if (width >= 300) return { status: 'ready', score: 20, detail: `${width}px — suitable for most uses` };
      if (width >= 200) return { status: 'attention', score: 13, detail: `${width}px — may blur when printed at large sizes` };
      return { status: 'risk', score: 5, detail: `${width}px — too small for reliable print output` };
    }
  },
  {
    id: 'quiet-zone',
    label: 'Quiet Zone',
    weight: 15,
    evaluate: ({ margin }) => {
      if (margin >= 4) return { status: 'ready', score: 15, detail: `${margin} modules — meets specification` };
      if (margin >= 2) return { status: 'attention', score: 9, detail: `${margin} modules — border tight, may affect edge scanners` };
      return { status: 'risk', score: 3, detail: `${margin} modules — QR standard requires at least 4` };
    }
  },
  {
    id: 'ecl',
    label: 'Error Correction',
    weight: 15,
    evaluate: ({ ecl, hasLogo }) => {
      if (ecl === 'H') return { status: 'ready', score: 15, detail: 'Level H — 30% data recovery, ideal with logos' };
      if (ecl === 'Q') return { status: 'ready', score: 14, detail: 'Level Q — 25% data recovery' };
      if (ecl === 'M' && !hasLogo) return { status: 'ready', score: 13, detail: 'Level M — 15% data recovery' };
      if (ecl === 'M' && hasLogo) return { status: 'attention', score: 9, detail: 'Level M with logo — use Q or H for reliability' };
      if (ecl === 'L' && hasLogo) return { status: 'risk', score: 3, detail: 'Level L with logo — high scan failure risk' };
      return { status: 'attention', score: 10, detail: 'Level L — minimal recovery, use in clean environments only' };
    }
  },
  {
    id: 'logo',
    label: 'Logo Coverage',
    weight: 10,
    evaluate: ({ hasLogo, logoSizePercent, ecl }) => {
      if (!hasLogo) return { status: 'ready', score: 10, detail: 'No logo — full scan surface available' };
      if (logoSizePercent <= 20 && (ecl === 'Q' || ecl === 'H')) return { status: 'ready', score: 10, detail: `${logoSizePercent}% logo with ECL ${ecl} — well balanced` };
      if (logoSizePercent <= 25) return { status: 'attention', score: 7, detail: `${logoSizePercent}% logo — near the safe limit` };
      return { status: 'risk', score: 3, detail: `${logoSizePercent}% logo — too large, may block critical data modules` };
    }
  },
  {
    id: 'data-density',
    label: 'Data Density',
    weight: 15,
    evaluate: ({ content }) => {
      if (!content) return { status: 'incomplete', score: 0, detail: 'No QR content yet' };
      const len = content.length;
      if (len <= 100) return { status: 'ready', score: 15, detail: `${len} chars — low density, fast scan` };
      if (len <= 300) return { status: 'ready', score: 13, detail: `${len} chars — moderate density` };
      if (len <= 500) return { status: 'attention', score: 9, detail: `${len} chars — high density, use ECL M or higher` };
      return { status: 'risk', score: 4, detail: `${len} chars — very dense, reduce content or use URL shortener` };
    }
  }
];

const STATUS_META = {
  ready:      { icon: '✓', label: 'Ready' },
  attention:  { icon: '!', label: 'Needs attention' },
  risk:       { icon: '✕', label: 'High risk' },
  incomplete: { icon: '○', label: 'Incomplete' }
};

function getRingColor(score) {
  if (score >= 85) return '#34D399';
  if (score >= 70) return '#84cc16';
  if (score >= 50) return '#FBBF24';
  return '#F87171';
}

function getRatingLabel(score) {
  if (score >= 85) return { text: 'Excellent', cls: 'excellent' };
  if (score >= 70) return { text: 'Good', cls: 'good' };
  if (score >= 50) return { text: 'Fair', cls: 'fair' };
  return { text: 'Needs work', cls: 'poor' };
}

function QRHealthCenter({ customization, qrContent, hasQR }) {
  const results = useMemo(() => {
    if (!hasQR) return null;
    const ctx = {
      fgColor: customization.fgColor,
      bgColor: customization.bgColor,
      width: customization.width,
      margin: customization.margin,
      ecl: customization.ecl,
      hasLogo: !!customization.logoDataURL,
      logoSizePercent: customization.logoSizePercent || 20,
      content: qrContent || ''
    };
    return CHECKS.map(check => ({
      ...check,
      result: check.evaluate(ctx)
    }));
  }, [customization, qrContent, hasQR]);

  const totalScore = useMemo(() => {
    if (!results) return 0;
    return Math.round(results.reduce((sum, c) => sum + (c.result.score || 0), 0) /
      results.reduce((sum, c) => sum + c.weight, 0) * 100);
  }, [results]);

  if (!hasQR) {
    return (
      <div className="health-section">
        <div className="panel-section-header">
          <div className="panel-section-title">QR Health</div>
        </div>
        <div className="health-empty">
          <div className="health-empty-icon">◎</div>
          <div className="health-empty-text">Health analysis runs when you generate a QR code.</div>
        </div>
      </div>
    );
  }

  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (totalScore / 100) * circumference;
  const rating = getRatingLabel(totalScore);

  return (
    <div className="health-section">
      <div className="panel-section-header">
        <div className="panel-section-title">QR Health Center</div>
        <div className="panel-section-badge">Live</div>
      </div>

      <div className="health-score-area">
        <div className="health-ring-wrap">
          <svg viewBox="0 0 72 72" width="72" height="72">
            <circle className="health-ring-bg" cx="36" cy="36" r="30" />
            <circle
              className="health-ring-fill"
              cx="36" cy="36" r="30"
              stroke={getRingColor(totalScore)}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="health-score-label">
            <span className="health-score-num">{totalScore}</span>
            <span className="health-score-max">/100</span>
          </div>
        </div>
        <div className="health-score-meta">
          <div className={`health-rating-text ${rating.cls}`}>{rating.text}</div>
          <div className="health-guidance">
            {totalScore >= 85 && 'This QR code should scan reliably in most environments.'}
            {totalScore >= 70 && totalScore < 85 && 'Minor issues detected. Review the checks below.'}
            {totalScore >= 50 && totalScore < 70 && 'Several issues may affect scan reliability.'}
            {totalScore < 50 && 'High risk of scan failures. Address the issues below.'}
          </div>
          <div className="health-guidance-note">Based on current settings — not a scan guarantee</div>
        </div>
      </div>

      <div className="health-check-list">
        {results.map(check => {
          const meta = STATUS_META[check.result.status] || STATUS_META.attention;
          return (
            <div key={check.id} className={`health-check-item status-${check.result.status}`}>
              <span className="health-check-icon">{meta.icon}</span>
              <div className="health-check-body">
                <div className="health-check-label">{check.label}</div>
                <div className="health-check-detail">{check.result.detail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QRHealthCenter;
