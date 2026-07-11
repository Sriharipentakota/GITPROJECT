import { PATHS } from '../data/paths';
import type { Progress, SaveStatus } from '../types';

interface Props {
  theme: string;
  onToggleTheme: () => void;
  progress: Progress;
  conceptCount: number;
  saveStatus: SaveStatus;
  pathId: string;
  totalQs: number;
  onSwitchPath: (id: string) => void;
}

export default function Header({
  theme, onToggleTheme, progress, conceptCount, saveStatus,
  pathId, totalQs, onSwitchPath,
}: Props) {
  const learned = Object.values(progress).filter(p => p.learned).length;
  const practiced = Object.values(progress).filter(p => p.total > 0).length;

  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">{PATHS.find(p => p.id === pathId)?.icon ?? '⚡'}</span>
        <div>
          <h1 className="header-title">Mastery Lab</h1>
          <p className="header-sub">{conceptCount} concepts · {totalQs.toLocaleString()} questions</p>
        </div>
      </div>

      <div className="path-tabs">
        {PATHS.map(p => (
          <button
            key={p.id}
            className={`path-tab${pathId === p.id ? ' active' : ''}`}
            onClick={() => onSwitchPath(p.id)}
            title={p.desc}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      <div className="header-stats">
        <Stat label="Learned" value={`${learned}/${conceptCount}`} color="var(--gn)" />
        <Stat label="Practiced" value={`${practiced}/${conceptCount}`} color="var(--bl)" />
      </div>
      <div className="save-status-wrap" aria-live="polite">
        {saveStatus === 'saving' && (
          <span className="save-indicator saving">
            <span className="save-spinner" />
            Saving…
          </span>
        )}
        {saveStatus === 'saved' && (
          <span className="save-indicator saved">✓ Saved</span>
        )}
      </div>
      <button className="theme-btn" onClick={onToggleTheme} title="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="header-stat">
      <span className="header-stat-val" style={{ color }}>{value}</span>
      <span className="header-stat-label">{label}</span>
    </div>
  );
}
