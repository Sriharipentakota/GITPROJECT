import { PATHS } from '../data/paths';
import type { Concept, Progress, InProgressState, AppView } from '../types';

const NAV_ITEMS: { id: AppView; icon: string; label: string }[] = [
  { id: 'dashboard',    icon: '📊', label: 'Dashboard'   },
  { id: 'learn',        icon: '📚', label: 'Learn'       },
  { id: 'skillmap',     icon: '🗺️', label: 'Skill Map'   },
  { id: 'missions',     icon: '🎯', label: 'Missions'    },
  { id: 'analytics',   icon: '📈', label: 'Analytics'   },
  { id: 'achievements', icon: '🏆', label: 'Achievements' },
];

interface Props {
  concepts: Concept[];
  currentId: string;
  progress: Progress;
  inProgress: Record<string, InProgressState>;
  onSelect: (id: string) => void;
  appView: AppView;
  onSetAppView: (view: AppView) => void;
  pathId: string;
  onSwitchPath: (id: string) => void;
  onOpenSearch: () => void;
}

export default function Sidebar({
  concepts, currentId, progress, inProgress, onSelect,
  appView, onSetAppView, pathId, onSwitchPath, onOpenSearch,
}: Props) {
  const total   = concepts.length;
  const learned = concepts.filter(c => progress[c.id]?.learned).length;
  const pct     = total ? Math.round((learned / total) * 100) : 0;

  return (
    <nav className="sidebar" aria-label="Navigation">

      {/* ── App navigation ──────────────────────────────────────────── */}
      <div className="sidebar-app-nav">
        <div className="sidebar-nav-section-label">Navigation</div>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`sidebar-nav-item${appView === item.id ? ' active' : ''}`}
            onClick={() => onSetAppView(item.id)}
            aria-current={appView === item.id ? 'page' : undefined}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span className="sidebar-nav-text">{item.label}</span>
          </button>
        ))}
        <button className="sidebar-nav-item sidebar-search-btn" onClick={onOpenSearch}>
          <span className="sidebar-nav-icon">🔍</span>
          <span className="sidebar-nav-text">Search</span>
          <kbd className="sidebar-kbd">Ctrl+K</kbd>
        </button>
      </div>

      {/* ── Path switcher (learn view only) ─────────────────────────── */}
      {appView === 'learn' && (
        <>
          <div className="sidebar-divider" />
          <div className="sidebar-path-switch">
            {PATHS.map(p => (
              <button
                key={p.id}
                className={`sidebar-path-btn${pathId === p.id ? ' active' : ''}`}
                onClick={() => onSwitchPath(p.id)}
                aria-current={pathId === p.id ? 'page' : undefined}
                title={p.desc}
              >
                {p.icon} {p.label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── Concepts list (learn view only) ─────────────────────────── */}
      {appView === 'learn' && (
        <>
          <div className="sidebar-header">
            <div className="sidebar-label">Concepts</div>
            <div className="sidebar-progress-row">
              <span className="sidebar-progress-text">{learned} of {total} learned</span>
              <span className="sidebar-progress-pct">{pct}%</span>
            </div>
            <div className="sidebar-overall-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} title={`${pct}% learned`}>
              <div className="sidebar-overall-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className="sidebar-items">
            {concepts.map(c => {
              const p          = progress[c.id];
              const score      = p?.total ? Math.round((p.score / p.total) * 100) : null;
              const isLearned  = p?.learned ?? false;
              const active     = c.id === currentId;
              const hasInProgress = !!inProgress[c.id];

              return (
                <button
                  key={c.id}
                  className={`sidebar-item${active ? ' active' : ''}`}
                  onClick={() => onSelect(c.id)}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="sidebar-icon">{c.icon}</span>
                  <span className="sidebar-name">{c.title}</span>
                  <div className="sidebar-badges">
                    {hasInProgress && !isLearned && (
                      <span className="badge badge-in-progress" title="Quiz in progress">▶</span>
                    )}
                    {isLearned && (
                      <span className="badge badge-learned" title="Marked as learned">✓</span>
                    )}
                    {score !== null && (
                      <span
                        className={`badge badge-score ${score >= 80 ? 'good' : score >= 50 ? 'ok' : 'low'}`}
                        title={`Quiz score: ${score}%`}
                      >
                        {score}%
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </nav>
  );
}
