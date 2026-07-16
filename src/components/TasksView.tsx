import { useState } from 'react';
import type { Concept, Task } from '../types';

const LEVEL_META: Record<number, { label: string; color: string; emoji: string }> = {
  1: { label: 'Foundation',  color: 'var(--gn)',  emoji: '🟢' },
  2: { label: 'Application', color: 'var(--ac)',  emoji: '🟡' },
  3: { label: 'Real-World',  color: '#60a5fa',    emoji: '🔵' },
  4: { label: 'Advanced',    color: 'var(--yw)',  emoji: '🟠' },
  5: { label: 'Expert',      color: 'var(--rd)',  emoji: '🔴' },
};

interface Props {
  concept: Concept;
  tasks: Task[];
  onBack: () => void;
  storageKey: string;
}

export default function TasksView({ concept, tasks, onBack, storageKey }: Props) {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [completedIds, setCompletedIds] = useState<Set<number>>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? new Set<number>(JSON.parse(raw) as number[]) : new Set<number>();
    } catch {
      return new Set<number>();
    }
  });

  const levelTasks = tasks.filter(t => t.level === activeLevel);
  const totalCompleted = completedIds.size;
  const pct = tasks.length ? Math.round((totalCompleted / tasks.length) * 100) : 0;

  const toggleComplete = (id: number) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  };

  return (
    <div className="tasks-view">
      {/* Header */}
      <div className="tasks-header">
        <button className="btn btn-ghost tasks-back-btn" onClick={onBack}>← Back</button>
        <div className="tasks-header-center">
          <span className="tasks-header-icon">{concept.icon}</span>
          <div>
            <div className="tasks-header-title">{concept.title}</div>
            <div className="tasks-header-sub">Hands-on Coding Tasks</div>
          </div>
        </div>
        <div className="tasks-done-chip">
          <span className="tasks-done-num">{totalCompleted}</span>
          <span className="tasks-done-sep">/</span>
          <span className="tasks-done-total">{tasks.length}</span>
          <span className="tasks-done-label">Done</span>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="tasks-overall-bar">
        <div className="tasks-overall-fill" style={{ width: `${pct}%` }} />
        <span className="tasks-overall-pct">{pct}%</span>
      </div>

      {/* Level Tabs */}
      <div className="tasks-level-tabs">
        {([1, 2, 3, 4, 5] as const).map(lvl => {
          const meta = LEVEL_META[lvl];
          const lvlTasks = tasks.filter(t => t.level === lvl);
          const lvlDone = lvlTasks.filter(t => completedIds.has(t.id)).length;
          const isActive = activeLevel === lvl;
          return (
            <button
              key={lvl}
              className={`tasks-level-tab${isActive ? ' active' : ''}`}
              style={isActive ? { borderColor: meta.color, color: meta.color } : undefined}
              onClick={() => { setActiveLevel(lvl); setExpandedId(null); }}
            >
              <span className="tasks-level-emoji">{meta.emoji}</span>
              <span className="tasks-level-name">{meta.label}</span>
              <span
                className="tasks-level-badge"
                style={{ background: lvlDone === lvlTasks.length && lvlTasks.length > 0
                  ? 'rgba(74,222,128,0.15)' : 'var(--s3)',
                  color: lvlDone === lvlTasks.length && lvlTasks.length > 0
                  ? 'var(--gn)' : 'var(--dm)' }}
              >
                {lvlDone}/{lvlTasks.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Level header */}
      <div className="tasks-level-header">
        <span style={{ color: LEVEL_META[activeLevel].color }}>{LEVEL_META[activeLevel].emoji} Level {activeLevel} — {LEVEL_META[activeLevel].label}</span>
        <span className="tasks-level-hint">
          {activeLevel === 1 && 'Syntax, declarations, and simple operations'}
          {activeLevel === 2 && 'Scope, hoisting, and combining structures'}
          {activeLevel === 3 && 'Real-world patterns engineers use daily'}
          {activeLevel === 4 && 'Edge cases, closures, and tricky behavior'}
          {activeLevel === 5 && 'Architecture, debugging, and refactoring'}
        </span>
      </div>

      {/* Task cards */}
      <div className="tasks-list">
        {levelTasks.map(task => {
          const isDone = completedIds.has(task.id);
          const isOpen = expandedId === task.id;
          return (
            <div key={task.id} className={`task-card${isDone ? ' done' : ''}${isOpen ? ' open' : ''}`}>
              {/* Card header */}
              <button
                className="task-card-header"
                onClick={() => setExpandedId(isOpen ? null : task.id)}
              >
                <span className={`task-num-badge${isDone ? ' done' : ''}`} style={isDone ? { background: 'var(--gn)', color: '#000' } : undefined}>
                  {isDone ? '✓' : task.id}
                </span>
                <span className="task-card-title">{task.title}</span>
                {isDone && <span className="task-done-chip">Complete</span>}
                <span className="task-chevron">{isOpen ? '▲' : '▼'}</span>
              </button>

              {/* Expanded body */}
              {isOpen && (
                <div className="task-card-body">
                  <div className="task-fields">
                    <div className="task-field">
                      <div className="task-field-label">📍 Scenario</div>
                      <div className="task-field-value">{task.scenario}</div>
                    </div>
                    <div className="task-field accent-obj">
                      <div className="task-field-label">🎯 Objective</div>
                      <div className="task-field-value">{task.objective}</div>
                    </div>
                    <div className="task-field accent-con">
                      <div className="task-field-label">⚠️ Constraints / Rules</div>
                      <div className="task-field-value">{task.constraints}</div>
                    </div>
                    <div className="task-field accent-exp">
                      <div className="task-field-label">✅ Expected Output / Behavior</div>
                      <div className="task-field-value">{task.expectedOutput}</div>
                    </div>
                    <div className="task-field accent-chk">
                      <div className="task-field-label">🔍 Check / Assertion</div>
                      <div className="task-field-value">{task.check}</div>
                    </div>
                  </div>
                  <div className="task-card-footer">
                    <button
                      className={`btn ${isDone ? 'btn-secondary' : 'btn-primary'} task-complete-btn`}
                      onClick={() => toggleComplete(task.id)}
                    >
                      {isDone ? '↩ Mark Incomplete' : '✓ Mark as Complete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty state for concepts with no tasks yet */}
      {levelTasks.length === 0 && (
        <div className="tasks-empty">
          <div className="tasks-empty-icon">🚧</div>
          <div className="tasks-empty-title">Tasks coming soon</div>
          <div className="tasks-empty-sub">Hands-on tasks for this level are being added.</div>
        </div>
      )}
    </div>
  );
}
