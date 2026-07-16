import { useState } from 'react';
import { MISSIONS } from '../data/missions';

interface Props {
  missionId: string;
  missionProgress: Record<string, { status: string; completedTaskIds: number[]; startedAt?: number; score?: number }>;
  onBack: () => void;
  onStartMission: (missionId: string) => void;
  onCompleteTask: (missionId: string, taskId: number) => void;
  onCompleteMission: (missionId: string, score: number) => void;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: '#22c55e',
  Intermediate: '#f59e0b',
  Advanced: '#ef4444',
};

export default function MissionDetail({
  missionId,
  missionProgress,
  onBack,
  onStartMission,
  onCompleteTask,
  onCompleteMission,
}: Props) {
  const [expandedHints, setExpandedHints] = useState<Record<number, boolean>>({});

  const mission = MISSIONS.find((m) => m.id === missionId);
  const progress = missionProgress[missionId];
  const status = progress?.status ?? 'not-started';
  const completedTaskIds = progress?.completedTaskIds ?? [];

  if (!mission) {
    return (
      <div className="mission-detail-container">
        <button className="mission-back-btn" onClick={onBack}>← Back</button>
        <p className="mission-not-found">Mission not found.</p>
      </div>
    );
  }

  const totalTasks = mission.tasks?.length ?? 0;
  const completedCount = completedTaskIds.length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  const allTasksDone = totalTasks > 0 && completedCount >= totalTasks;
  const diffColor = DIFFICULTY_COLORS[mission.difficulty] ?? '#6b7280';

  function toggleHint(taskId: number) {
    setExpandedHints((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  }

  function handleCompleteTask(taskId: number) {
    if (!completedTaskIds.includes(taskId)) {
      onCompleteTask(missionId, taskId);
    }
  }

  function handleCompleteMission() {
    const score = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 100;
    onCompleteMission(missionId, score);
  }

  return (
    <div className="mission-detail-container">
      {/* Back button and breadcrumb */}
      <div className="mission-breadcrumb">
        <button className="mission-back-btn" onClick={onBack}>← Back</button>
        <span className="mission-breadcrumb-sep">/</span>
        <span className="mission-breadcrumb-current">{mission.title}</span>
      </div>

      {/* Mission header card */}
      <div className="mission-header-card">
        <div className="mission-header-top">
          <span className="mission-header-icon">{mission.icon}</span>
          <div className="mission-header-badges">
            <span
              className="mission-difficulty-badge"
              style={{ backgroundColor: diffColor + '22', color: diffColor, border: `1px solid ${diffColor}` }}
            >
              {mission.difficulty}
            </span>
            <span className="mission-path-tag">{mission.path}</span>
          </div>
        </div>
        <h1 className="mission-header-title">{mission.title}</h1>
        <div className="mission-header-meta">
          <span className="mission-header-duration">⏱ {mission.estimatedMinutes} min</span>
        </div>
      </div>

      {/* Not started CTA */}
      {status === 'not-started' && (
        <div className="mission-start-cta">
          <p className="mission-start-cta-text">
            Ready to take on this mission? Start now to track your progress and earn a score.
          </p>
          <button className="mission-start-btn mission-start-btn--primary" onClick={() => onStartMission(missionId)}>
            Start Mission
          </button>
        </div>
      )}

      {/* Completed state */}
      {status === 'completed' && (
        <div className="mission-completed-banner">
          <span className="mission-completed-trophy">🏆</span>
          <div>
            <p className="mission-completed-title">Mission Complete!</p>
            <p className="mission-completed-subtitle">
              You scored <strong>{progress?.score ?? 100}%</strong> on this mission.
            </p>
          </div>
        </div>
      )}

      {/* Scenario */}
      {mission.scenario && (
        <section className="mission-section">
          <h2 className="mission-section-heading">Scenario</h2>
          <div className="mission-scenario-box">
            <p className="mission-scenario-text">{mission.scenario}</p>
          </div>
        </section>
      )}

      {/* Objectives */}
      {mission.objectives && mission.objectives.length > 0 && (
        <section className="mission-section">
          <h2 className="mission-section-heading">Objectives</h2>
          <ul className="mission-objectives-list">
            {mission.objectives.map((obj: string, i: number) => (
              <li key={i} className="mission-objective-item">
                <span className="mission-objective-bullet">→</span>
                {obj}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Required skills */}
      {mission.requiredSkills && mission.requiredSkills.length > 0 && (
        <section className="mission-section">
          <h2 className="mission-section-heading">Required Skills</h2>
          <div className="mission-skills-row">
            {mission.requiredSkills.map((skill: string) => (
              <span key={skill} className="mission-skill-chip">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Tasks */}
      {mission.tasks && mission.tasks.length > 0 && (
        <section className="mission-section">
          <h2 className="mission-section-heading">Tasks</h2>

          {/* Progress bar */}
          <div className="mission-progress-bar-wrap">
            <div className="mission-progress-bar-track">
              <div
                className="mission-progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="mission-progress-label">
              {completedCount} / {totalTasks} tasks completed
            </span>
          </div>

          <div className="mission-tasks-list">
            {mission.tasks.map((task: any, idx: number) => {
              const isCompleted = completedTaskIds.includes(task.id);
              const hintOpen = expandedHints[task.id] ?? false;
              const canInteract = status === 'in-progress' || status === 'completed';

              return (
                <div
                  key={task.id}
                  className={`mission-task-card${isCompleted ? ' mission-task-card--completed' : ''}`}
                >
                  <div className="mission-task-header">
                    <div className="mission-task-left">
                      <span className="mission-task-number">{idx + 1}</span>
                      <div>
                        <p className="mission-task-title">{task.title}</p>
                        <p className="mission-task-description">{task.description}</p>
                      </div>
                    </div>
                    <div className="mission-task-right">
                      {isCompleted ? (
                        <span className="mission-task-check">✅</span>
                      ) : (
                        canInteract && (
                          <button
                            className="mission-task-complete-btn"
                            onClick={() => handleCompleteTask(task.id)}
                          >
                            Mark Complete
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Hint toggle */}
                  {task.hint && (
                    <div className="mission-task-hint-section">
                      <button
                        className="mission-hint-toggle"
                        onClick={() => toggleHint(task.id)}
                      >
                        {hintOpen ? '▲ Hide Hint' : '▼ Show Hint'}
                      </button>
                      {hintOpen && (
                        <div className="mission-hint-box">
                          <span className="mission-hint-label">Hint:</span> {task.hint}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Validation criteria */}
                  {task.validationCriteria && task.validationCriteria.length > 0 && (
                    <div className="mission-task-validation">
                      <p className="mission-validation-label">Validation Criteria:</p>
                      <ul className="mission-validation-list">
                        {task.validationCriteria.map((criterion: string, ci: number) => (
                          <li key={ci} className="mission-validation-item">{criterion}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Complete Mission button */}
          {allTasksDone && status === 'in-progress' && (
            <div className="mission-complete-wrap">
              <button className="mission-complete-btn" onClick={handleCompleteMission}>
                Complete Mission 🎉
              </button>
            </div>
          )}

          {/* Solution notes on completed */}
          {status === 'completed' && mission.solutionNotes && (
            <div className="mission-solution-notes">
              <h3 className="mission-solution-heading">Solution Notes</h3>
              <p className="mission-solution-text">{mission.solutionNotes}</p>
            </div>
          )}
        </section>
      )}

      <style>{`
        .mission-detail-container {
          padding: 2rem;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .mission-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        .mission-back-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #6366f1;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0;
        }
        .mission-back-btn:hover { text-decoration: underline; }
        .mission-breadcrumb-sep { color: #d1d5db; }
        .mission-breadcrumb-current {
          color: #111827;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 300px;
        }
        .mission-not-found {
          color: #ef4444;
          font-size: 1rem;
        }
        .mission-header-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mission-header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mission-header-icon {
          font-size: 2.5rem;
        }
        .mission-header-badges {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .mission-difficulty-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mission-path-tag {
          background: #e0e7ff;
          color: #4338ca;
          border-radius: 9999px;
          padding: 0.2rem 0.65rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .mission-header-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
          color: #111827;
          line-height: 1.3;
        }
        .mission-header-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: #6b7280;
        }
        .mission-start-cta {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .mission-start-cta-text {
          margin: 0;
          color: #0c4a6e;
          font-size: 0.9rem;
          flex: 1;
        }
        .mission-start-btn {
          border: none;
          cursor: pointer;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.6rem 1.4rem;
          white-space: nowrap;
        }
        .mission-start-btn--primary {
          background: #6366f1;
          color: #fff;
        }
        .mission-start-btn--primary:hover { background: #4f46e5; }
        .mission-completed-banner {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mission-completed-trophy { font-size: 2rem; }
        .mission-completed-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #15803d;
          margin: 0 0 0.25rem 0;
        }
        .mission-completed-subtitle {
          margin: 0;
          color: #166534;
          font-size: 0.875rem;
        }
        .mission-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mission-section-heading {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          color: #111827;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.4rem;
        }
        .mission-scenario-box {
          background: #f9fafb;
          border-left: 4px solid #6366f1;
          border-radius: 0.5rem;
          padding: 1rem 1.25rem;
        }
        .mission-scenario-text {
          margin: 0;
          color: #374151;
          font-size: 0.925rem;
          line-height: 1.6;
        }
        .mission-objectives-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .mission-objective-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #374151;
        }
        .mission-objective-bullet {
          color: #6366f1;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mission-skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .mission-skill-chip {
          background: #f3f4f6;
          color: #374151;
          border-radius: 9999px;
          padding: 0.2rem 0.65rem;
          font-size: 0.78rem;
          border: 1px solid #e5e7eb;
        }
        .mission-progress-bar-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .mission-progress-bar-track {
          flex: 1;
          height: 8px;
          background: #e5e7eb;
          border-radius: 9999px;
          overflow: hidden;
        }
        .mission-progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #22c55e);
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .mission-progress-label {
          font-size: 0.8rem;
          color: #6b7280;
          white-space: nowrap;
        }
        .mission-tasks-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mission-task-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mission-task-card--completed {
          border-color: #bbf7d0;
          background: #f0fdf4;
        }
        .mission-task-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .mission-task-left {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          flex: 1;
        }
        .mission-task-number {
          background: #6366f1;
          color: #fff;
          border-radius: 9999px;
          width: 1.6rem;
          height: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mission-task-card--completed .mission-task-number {
          background: #22c55e;
        }
        .mission-task-title {
          font-weight: 600;
          font-size: 0.925rem;
          margin: 0 0 0.2rem 0;
          color: #111827;
        }
        .mission-task-description {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }
        .mission-task-right {
          flex-shrink: 0;
        }
        .mission-task-check {
          font-size: 1.25rem;
        }
        .mission-task-complete-btn {
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 0.4rem;
          padding: 0.35rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
        }
        .mission-task-complete-btn:hover { background: #4f46e5; }
        .mission-task-hint-section {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-left: 2.35rem;
        }
        .mission-hint-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #6366f1;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0;
          text-align: left;
        }
        .mission-hint-toggle:hover { text-decoration: underline; }
        .mission-hint-box {
          background: #fef9c3;
          border: 1px solid #fde68a;
          border-radius: 0.4rem;
          padding: 0.6rem 0.9rem;
          font-size: 0.82rem;
          color: #92400e;
          line-height: 1.5;
        }
        .mission-hint-label {
          font-weight: 700;
        }
        .mission-task-validation {
          padding-left: 2.35rem;
        }
        .mission-validation-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 0.25rem 0;
        }
        .mission-validation-list {
          list-style: disc;
          padding-left: 1.1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .mission-validation-item {
          font-size: 0.8rem;
          color: #6b7280;
        }
        .mission-complete-wrap {
          display: flex;
          justify-content: center;
          margin-top: 0.5rem;
        }
        .mission-complete-btn {
          background: #22c55e;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s;
        }
        .mission-complete-btn:hover { background: #16a34a; }
        .mission-solution-notes {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          margin-top: 0.5rem;
        }
        .mission-solution-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          margin: 0 0 0.5rem 0;
        }
        .mission-solution-text {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
