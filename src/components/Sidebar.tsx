import type { Concept, Progress, InProgressState } from '../types';

interface Props {
  concepts: Concept[];
  currentId: string;
  progress: Progress;
  inProgress: Record<string, InProgressState>;
  onSelect: (id: string) => void;
}

export default function Sidebar({ concepts, currentId, progress, inProgress, onSelect }: Props) {
  const total = concepts.length;
  const learned = concepts.filter(c => progress[c.id]?.learned).length;

  return (
    <nav className="sidebar">
      <div className="sidebar-label">Concepts</div>
      <div className="sidebar-overall-bar" title={`${learned} of ${total} learned`}>
        <div className="sidebar-overall-fill" style={{ width: `${(learned / total) * 100}%` }} />
      </div>
      <div className="sidebar-overall-text">{learned}/{total} learned</div>
      {concepts.map(c => {
        const p = progress[c.id];
        const score = p?.total ? Math.round((p.score / p.total) * 100) : null;
        const learned = p?.learned ?? false;
        const active = c.id === currentId;
        const hasInProgress = !!inProgress[c.id];

        return (
          <button
            key={c.id}
            className={`sidebar-item${active ? ' active' : ''}`}
            onClick={() => onSelect(c.id)}
          >
            <span className="sidebar-icon">{c.icon}</span>
            <span className="sidebar-name">{c.title}</span>
            <div className="sidebar-badges">
              {hasInProgress && !learned && (
                <span className="badge badge-in-progress" title="Quiz in progress">▶</span>
              )}
              {learned && <span className="badge badge-learned" title="Learned">✓</span>}
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
    </nav>
  );
}
