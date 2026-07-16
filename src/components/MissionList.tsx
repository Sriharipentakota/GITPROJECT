import { useState } from 'react';
import { MISSIONS } from '../data/missions';
import type { Mission } from '../data/missions';

interface Props {
  missionProgress: Record<string, { status: string; completedTaskIds: number[]; score?: number }>;
  onSelectMission: (missionId: string) => void;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: '#22c55e',
  Intermediate: '#f59e0b',
  Advanced: '#ef4444',
};

const PATH_OPTIONS = ['All', 'JavaScript', 'Playwright', 'Tosca'];
const DIFFICULTY_OPTIONS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function MissionList({ missionProgress, onSelectMission }: Props) {
  const [pathFilter, setPathFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const filteredMissions = MISSIONS.filter((m: Mission) => {
    const pathMatch = pathFilter === 'All' || m.path === pathFilter.toLowerCase();
    const diffMatch = difficultyFilter === 'All' || m.difficulty === difficultyFilter.toLowerCase();
    return pathMatch && diffMatch;
  });

  const totalMissions = MISSIONS.length;
  const completedCount = Object.values(missionProgress).filter((p) => p.status === 'completed').length;
  const inProgressCount = Object.values(missionProgress).filter((p) => p.status === 'in-progress').length;

  function getMissionStatus(missionId: string) {
    return missionProgress[missionId]?.status ?? 'not-started';
  }

  function getMissionScore(missionId: string) {
    return missionProgress[missionId]?.score;
  }

  function getButtonLabel(status: string) {
    if (status === 'completed') return 'Review';
    if (status === 'in-progress') return 'Continue';
    return 'Start Mission';
  }

  return (
    <div className="mission-list-container">
      <div className="mission-list-header">
        <h1 className="mission-list-title">Real-World Missions</h1>
        <p className="mission-list-subtitle">Apply your skills to realistic scenarios</p>
      </div>

      {/* Path filter tabs */}
      <div className="mission-filter-row">
        {PATH_OPTIONS.map((path) => (
          <button
            key={path}
            className={`mission-filter-tab${pathFilter === path ? ' mission-filter-tab--active' : ''}`}
            onClick={() => setPathFilter(path)}
          >
            {path}
          </button>
        ))}
      </div>

      {/* Difficulty filter tabs */}
      <div className="mission-filter-row mission-filter-row--secondary">
        {DIFFICULTY_OPTIONS.map((diff) => (
          <button
            key={diff}
            className={`mission-filter-tab mission-filter-tab--difficulty${difficultyFilter === diff ? ' mission-filter-tab--active' : ''}`}
            onClick={() => setDifficultyFilter(diff)}
          >
            {diff}
          </button>
        ))}
      </div>

      {/* Stats row */}
      <div className="mission-stats-row">
        <div className="mission-stat">
          <span className="mission-stat-value">{totalMissions}</span>
          <span className="mission-stat-label">Total Missions</span>
        </div>
        <div className="mission-stat">
          <span className="mission-stat-value mission-stat-value--completed">{completedCount}</span>
          <span className="mission-stat-label">Completed</span>
        </div>
        <div className="mission-stat">
          <span className="mission-stat-value mission-stat-value--inprogress">{inProgressCount}</span>
          <span className="mission-stat-label">In Progress</span>
        </div>
      </div>

      {/* Mission cards grid */}
      {filteredMissions.length === 0 ? (
        <div className="mission-empty-state">
          <span className="mission-empty-icon">🔍</span>
          <p className="mission-empty-text">No missions match your current filters.</p>
          <button
            className="mission-empty-reset"
            onClick={() => {
              setPathFilter('All');
              setDifficultyFilter('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="mission-cards-grid">
          {filteredMissions.map((mission: Mission) => {
            const status = getMissionStatus(mission.id);
            const score = getMissionScore(mission.id);
            const diffColor = DIFFICULTY_COLORS[mission.difficulty] ?? '#6b7280';

            return (
              <div
                key={mission.id}
                className={`mission-card mission-card--${status}`}
                onClick={() => onSelectMission(mission.id)}
              >
                <div className="mission-card-top">
                  <span className="mission-card-icon">{mission.icon}</span>
                  <span
                    className="mission-card-difficulty"
                    style={{ backgroundColor: diffColor + '22', color: diffColor, border: `1px solid ${diffColor}` }}
                  >
                    {mission.difficulty}
                  </span>
                </div>

                <div className="mission-card-meta">
                  <span className="mission-card-duration">⏱ {mission.estimatedMinutes} min</span>
                  <span className="mission-card-path-tag">{mission.path}</span>
                </div>

                <h2 className="mission-card-title">{mission.title}</h2>
                <p className="mission-card-description">{mission.description}</p>

                <div className="mission-card-skills">
                  {mission.requiredSkills.map((skill: string) => (
                    <span key={skill} className="mission-skill-chip">{skill}</span>
                  ))}
                </div>

                <div className="mission-card-footer">
                  <div className="mission-card-status-row">
                    <span className={`mission-status-indicator mission-status-indicator--${status}`}>
                      {status === 'completed' && '✅ Completed'}
                      {status === 'in-progress' && '🔄 In Progress'}
                      {status === 'not-started' && '⚪ Not Started'}
                    </span>
                    {status === 'completed' && score !== undefined && (
                      <span className="mission-score-badge">Score: {score}%</span>
                    )}
                  </div>

                  <button
                    className={`mission-card-btn mission-card-btn--${status}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMission(mission.id);
                    }}
                  >
                    {getButtonLabel(status)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .mission-list-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mission-list-header {
          margin-bottom: 1.5rem;
        }
        .mission-list-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }
        .mission-list-subtitle {
          color: #6b7280;
          margin: 0;
        }
        .mission-filter-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }
        .mission-filter-row--secondary {
          margin-bottom: 1.25rem;
        }
        .mission-filter-tab {
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          border: 1px solid #d1d5db;
          background: transparent;
          cursor: pointer;
          font-size: 0.875rem;
          color: #374151;
          transition: all 0.15s;
        }
        .mission-filter-tab:hover {
          border-color: #6366f1;
          color: #6366f1;
        }
        .mission-filter-tab--active {
          background: #6366f1;
          border-color: #6366f1;
          color: #fff;
        }
        .mission-filter-tab--difficulty.mission-filter-tab--active {
          background: #0ea5e9;
          border-color: #0ea5e9;
          color: #fff;
        }
        .mission-stats-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
          padding: 1rem 1.5rem;
          background: #f9fafb;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
        }
        .mission-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mission-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
        }
        .mission-stat-value--completed { color: #22c55e; }
        .mission-stat-value--inprogress { color: #f59e0b; }
        .mission-stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.1rem;
        }
        .mission-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 700px) {
          .mission-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .mission-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.25rem;
          cursor: pointer;
          transition: box-shadow 0.15s, border-color 0.15s;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mission-card:hover {
          box-shadow: 0 4px 16px rgba(99,102,241,0.12);
          border-color: #6366f1;
        }
        .mission-card--completed {
          border-color: #bbf7d0;
          background: #f0fdf4;
        }
        .mission-card--in-progress {
          border-color: #fde68a;
          background: #fffbeb;
        }
        .mission-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mission-card-icon {
          font-size: 1.75rem;
        }
        .mission-card-difficulty {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mission-card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: #6b7280;
        }
        .mission-card-path-tag {
          background: #e0e7ff;
          color: #4338ca;
          border-radius: 9999px;
          padding: 0.1rem 0.6rem;
          font-size: 0.72rem;
          font-weight: 600;
        }
        .mission-card-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          color: #111827;
          line-height: 1.3;
        }
        .mission-card-description {
          font-size: 0.85rem;
          color: #4b5563;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mission-card-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .mission-skill-chip {
          background: #f3f4f6;
          color: #374151;
          border-radius: 9999px;
          padding: 0.15rem 0.55rem;
          font-size: 0.72rem;
          border: 1px solid #e5e7eb;
        }
        .mission-card-footer {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
        }
        .mission-card-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mission-status-indicator {
          font-size: 0.8rem;
          font-weight: 500;
        }
        .mission-status-indicator--completed { color: #16a34a; }
        .mission-status-indicator--in-progress { color: #d97706; }
        .mission-status-indicator--not-started { color: #9ca3af; }
        .mission-score-badge {
          font-size: 0.78rem;
          background: #dcfce7;
          color: #15803d;
          border-radius: 9999px;
          padding: 0.1rem 0.6rem;
          font-weight: 600;
        }
        .mission-card-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background 0.15s;
          align-self: flex-end;
        }
        .mission-card-btn--not-started {
          background: #6366f1;
          color: #fff;
        }
        .mission-card-btn--not-started:hover { background: #4f46e5; }
        .mission-card-btn--in-progress {
          background: #f59e0b;
          color: #fff;
        }
        .mission-card-btn--in-progress:hover { background: #d97706; }
        .mission-card-btn--completed {
          background: #e5e7eb;
          color: #374151;
        }
        .mission-card-btn--completed:hover { background: #d1d5db; }
        .mission-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 1rem;
          color: #6b7280;
          gap: 0.75rem;
        }
        .mission-empty-icon {
          font-size: 2.5rem;
        }
        .mission-empty-text {
          margin: 0;
          font-size: 1rem;
        }
        .mission-empty-reset {
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1.25rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .mission-empty-reset:hover { background: #4f46e5; }
      `}</style>
    </div>
  );
}
