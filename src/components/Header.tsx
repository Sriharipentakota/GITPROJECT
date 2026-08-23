import { PATHS } from '../data/paths';
import type { Progress, SaveStatus, AppView } from '../types';
import { useSoundEnabled, setSoundEnabled } from '../hooks/useImmersiveFeedback';

interface Props {
  theme: string;
  onToggleTheme: () => void;
  progress: Progress;
  conceptCount: number;
  saveStatus: SaveStatus;
  pathId: string;
  totalQs: number;
  onSwitchPath: (id: string) => void;
  onMenuToggle: () => void;
  sidebarOpen: boolean;
  onOpenSearch: () => void;
  appView: AppView;
}

export default function Header({
  theme, onToggleTheme, progress, conceptCount, saveStatus,
  pathId, totalQs, onSwitchPath, onMenuToggle, sidebarOpen,
  onOpenSearch, appView,
}: Props) {
  const learned   = Object.values(progress).filter(p => p.learned).length;
  const practiced = Object.values(progress).filter(p => p.total > 0).length;
  const currentPath = PATHS.find(p => p.id === pathId);
  const soundEnabled = useSoundEnabled();

  return (
    <header className="header">
      {/* Brand — fixed width matching sidebar */}
      <div className="header-brand">
        <button
          className="sidebar-toggle"
          onClick={onMenuToggle}
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <div className="header-logo">{currentPath?.icon ?? '⚡'}</div>
        <div className="header-brand-text">
          <h1 className="header-title">
            <span className="header-title-full">Mastery Lab</span>
            <span className="header-title-short">Lab</span>
          </h1>
          <p className="header-sub">{currentPath?.label ?? 'Learning'} · {conceptCount} concepts · {totalQs.toLocaleString()} Qs</p>
        </div>
      </div>

      {/* Centered path switcher — only visible in learn view on desktop */}
      <nav className={`path-tabs${appView !== 'learn' ? ' path-tabs--dim' : ''}`} aria-label="Learning paths">
        {PATHS.map(p => (
          <button
            key={p.id}
            className={`path-tab${pathId === p.id ? ' active' : ''}`}
            onClick={() => onSwitchPath(p.id)}
            title={p.desc}
            aria-current={pathId === p.id ? 'page' : undefined}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </nav>

      {/* Right: stats + search + save + theme */}
      <div className="header-right">
        <div className="header-stats">
          <Stat label="Learned"   value={`${learned}/${conceptCount}`}   color="var(--gn)" />
          <Stat label="Practiced" value={`${practiced}/${conceptCount}`} color="var(--bl)" />
        </div>
        <button className="header-search-btn" onClick={onOpenSearch} title="Search (Ctrl+K)">
          🔍
        </button>
        <div className="save-status-wrap" aria-live="polite">
          {saveStatus === 'saving' && (
            <span className="save-indicator saving">
              <span className="save-spinner" />Saving…
            </span>
          )}
          {saveStatus === 'saved' && (
            <span className="save-indicator saved">✓ Saved</span>
          )}
        </div>
        <button
          className={`sound-toggle-btn${soundEnabled ? '' : ' muted'}`}
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? 'Mute UI sounds' : 'Unmute UI sounds'}
          aria-pressed={soundEnabled}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
        <button className="theme-btn" onClick={onToggleTheme} title="Toggle light / dark theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
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
