import { useMemo, useState } from 'react';
import { ACHIEVEMENTS } from '../data/achievements';
import { CONCEPTS } from '../data/concepts';
import { PLAYWRIGHT_CONCEPTS } from '../data/playwrightConcepts';
import { TOSCA_CONCEPTS } from '../data/toscaConcepts';
import type { Progress } from '../types';

interface Props {
  allProgress: Record<string, Progress>; // pathId -> Progress
  missionProgress: Record<string, { status: string; completedTaskIds: number[]; score?: number }>;
}

type FilterMode = 'all' | 'earned' | 'locked';

const RARITY_COLOR: Record<string, string> = {
  common:    'var(--gn)',
  rare:      'var(--bl)',
  epic:      'var(--pu)',
  legendary: 'var(--ac)',
};

const RARITY_LABEL: Record<string, string> = {
  common:    'Common',
  rare:      'Rare',
  epic:      'Epic',
  legendary: 'Legendary',
};

export default function Achievements({ allProgress, missionProgress }: Props) {
  const [filter, setFilter] = useState<FilterMode>('all');

  const unlockedIds = useMemo<Set<string>>(() => {
    const unlocked = new Set<string>();

    // Flatten all concept progress entries across all paths
    const jsProgress   = allProgress['javascript'] ?? {};
    const pwProgress   = allProgress['playwright']  ?? {};
    const tcProgress   = allProgress['tosca']       ?? {};

    const allEntries = [
      ...Object.values(jsProgress),
      ...Object.values(pwProgress),
      ...Object.values(tcProgress),
    ];

    // 'first-concept': any concept learned across any path
    if (allEntries.some(e => e.learned)) {
      unlocked.add('first-concept');
    }

    // 'js-complete': all CONCEPTS learned
    const jsComplete = CONCEPTS.length > 0 && CONCEPTS.every(c => jsProgress[c.id]?.learned === true);
    if (jsComplete) unlocked.add('js-complete');

    // 'pw-complete': all PLAYWRIGHT_CONCEPTS learned
    const pwComplete = PLAYWRIGHT_CONCEPTS.length > 0 && PLAYWRIGHT_CONCEPTS.every(c => pwProgress[c.id]?.learned === true);
    if (pwComplete) unlocked.add('pw-complete');

    // 'tc-complete': all TOSCA_CONCEPTS learned
    const tcComplete = TOSCA_CONCEPTS.length > 0 && TOSCA_CONCEPTS.every(c => tcProgress[c.id]?.learned === true);
    if (tcComplete) unlocked.add('tc-complete');

    // 'all-paths': all three paths complete
    if (jsComplete && pwComplete && tcComplete) unlocked.add('all-paths');

    // Mission-related
    const completedMissions = Object.values(missionProgress).filter(m => m.status === 'completed');
    if (completedMissions.length >= 1) unlocked.add('first-mission');
    if (completedMissions.length >= 5) unlocked.add('five-missions');

    // 'perfect-score': any concept has score === total && total > 0
    if (allEntries.some(e => e.total > 0 && e.score === e.total)) {
      unlocked.add('perfect-score');
    }

    // 'high-achiever': >= 5 concepts with (score/total) >= 0.9 and total > 0
    const highScoreCount = allEntries.filter(e => e.total > 0 && e.score / e.total >= 0.9).length;
    if (highScoreCount >= 5) unlocked.add('high-achiever');

    // 'speed-learner': any concept with learned=true (simplified)
    if (allEntries.some(e => e.learned)) {
      unlocked.add('speed-learner');
    }

    // 'all-tasks': any concept with score === total && total >= 5
    if (allEntries.some(e => e.total >= 5 && e.score === e.total)) {
      unlocked.add('all-tasks');
    }

    // 'cross-path': has any learned concept in each of the 3 paths
    const hasJsLearned = Object.values(jsProgress).some(e => e.learned);
    const hasPwLearned = Object.values(pwProgress).some(e => e.learned);
    const hasTcLearned = Object.values(tcProgress).some(e => e.learned);
    if (hasJsLearned && hasPwLearned && hasTcLearned) unlocked.add('cross-path');

    // 'night-owl': always false (no time tracking)

    // 'ten-concepts': total learned >= 10 across all paths
    const totalLearned = allEntries.filter(e => e.learned).length;
    if (totalLearned >= 10) unlocked.add('ten-concepts');

    // 'streak-7': always false (no streak tracking)

    return unlocked;
  }, [allProgress, missionProgress]);

  const earnedCount = unlockedIds.size;
  const totalCount  = ACHIEVEMENTS.length;

  const displayed = useMemo(() => {
    if (filter === 'earned') return ACHIEVEMENTS.filter(a => unlockedIds.has(a.id));
    if (filter === 'locked')  return ACHIEVEMENTS.filter(a => !unlockedIds.has(a.id));
    return ACHIEVEMENTS;
  }, [filter, unlockedIds]);

  return (
    <div className="ach-root">
      {/* ── Header ── */}
      <div className="ach-header">
        <div className="ach-header-left">
          <h2 className="ach-title">Achievements &amp; Badges</h2>
          <span className="ach-count-badge">{earnedCount} / {totalCount} earned</span>
        </div>
        <div className="ach-filters" role="group" aria-label="Filter achievements">
          {(['all', 'earned', 'locked'] as FilterMode[]).map(f => (
            <button
              key={f}
              className={`ach-filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f === 'all' ? 'All' : f === 'earned' ? 'Earned' : 'Locked'}
            </button>
          ))}
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="ach-progress-wrap" aria-label={`${earnedCount} of ${totalCount} achievements earned`}>
        <div className="ach-progress-track">
          <div
            className="ach-progress-fill"
            style={{ width: `${totalCount > 0 ? (earnedCount / totalCount) * 100 : 0}%` }}
          />
        </div>
        <span className="ach-progress-label">{earnedCount} / {totalCount}</span>
      </div>

      {/* ── Grid ── */}
      {displayed.length === 0 ? (
        <div className="ach-empty">
          {filter === 'earned' ? 'No achievements earned yet. Keep learning!' : 'All achievements are unlocked!'}
        </div>
      ) : (
        <div className="ach-grid">
          {displayed.map(a => {
            const earned = unlockedIds.has(a.id);
            const rarityColor = RARITY_COLOR[a.rarity] ?? 'var(--mt)';
            return (
              <div
                key={a.id}
                className={`ach-card${earned ? ' earned' : ' locked'}`}
                style={earned ? { '--ach-border': rarityColor } as React.CSSProperties : undefined}
                aria-label={`${a.title} — ${earned ? 'Earned' : 'Locked'}`}
              >
                <div className="ach-card-top">
                  <div className={`ach-icon-wrap${earned ? ' earned' : ' locked'}`} aria-hidden="true">
                    {earned ? (
                      <span className="ach-icon">{a.icon}</span>
                    ) : (
                      <span className="ach-lock-icon">🔒</span>
                    )}
                  </div>
                  <span
                    className="ach-rarity-badge"
                    style={{ color: earned ? rarityColor : 'var(--dm)', borderColor: earned ? rarityColor : 'var(--bd)' }}
                  >
                    {RARITY_LABEL[a.rarity]}
                  </span>
                </div>
                <div className="ach-card-body">
                  <p className="ach-card-title">{a.title}</p>
                  <p className="ach-card-desc">{a.description}</p>
                </div>
                {earned && <div className="ach-earned-glow" style={{ background: rarityColor }} />}
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .ach-root {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 24px;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }

        /* Header */
        .ach-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ach-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ach-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--tx);
          letter-spacing: -0.3px;
        }
        .ach-count-badge {
          font-size: 12px;
          font-weight: 600;
          color: var(--ac);
          background: var(--ac-ring);
          border: 1px solid var(--ac-ring);
          border-radius: var(--r-full);
          padding: 3px 10px;
        }

        /* Filters */
        .ach-filters {
          display: flex;
          gap: 4px;
        }
        .ach-filter-btn {
          background: transparent;
          border: 1px solid var(--bd);
          border-radius: var(--r-full);
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 500;
          color: var(--mt);
          cursor: pointer;
          transition: all 0.15s;
        }
        .ach-filter-btn:hover {
          background: var(--s2);
          color: var(--tx);
        }
        .ach-filter-btn.active {
          background: var(--ac-ring);
          border-color: var(--ac);
          color: var(--ac);
          font-weight: 600;
        }

        /* Progress bar */
        .ach-progress-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ach-progress-track {
          flex: 1;
          height: 6px;
          background: var(--s3);
          border-radius: var(--r-full);
          overflow: hidden;
        }
        .ach-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--ac), var(--pu));
          border-radius: var(--r-full);
          transition: width 0.4s ease;
        }
        .ach-progress-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--mt);
          white-space: nowrap;
          min-width: 40px;
          text-align: right;
        }

        /* Grid */
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 768px) {
          .ach-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .ach-grid { grid-template-columns: 1fr; }
          .ach-root { padding: 16px; }
        }

        /* Card */
        .ach-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--r12);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .ach-card.earned {
          background: var(--s2);
          border: 1.5px solid var(--ach-border, var(--bd));
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .ach-card.earned:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        .ach-card.locked {
          background: var(--s1);
          border: 1.5px solid var(--bd);
          opacity: 0.6;
        }

        .ach-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ach-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--r8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .ach-icon-wrap.earned {
          background: var(--s3);
          border: 1px solid var(--bd2);
        }
        .ach-icon-wrap.locked {
          background: var(--s2);
          border: 1px solid var(--bd);
          filter: grayscale(1);
        }
        .ach-icon, .ach-lock-icon {
          line-height: 1;
          user-select: none;
        }

        .ach-rarity-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1px solid;
          border-radius: var(--r-full);
          padding: 2px 8px;
        }

        .ach-card-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ach-card-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--tx);
          line-height: 1.3;
        }
        .ach-card.locked .ach-card-title {
          color: var(--mt);
        }
        .ach-card-desc {
          font-size: 12px;
          color: var(--dm);
          line-height: 1.5;
        }

        /* Subtle glow strip at bottom of earned card */
        .ach-earned-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0.5;
          border-radius: 0 0 var(--r12) var(--r12);
        }

        /* Empty state */
        .ach-empty {
          text-align: center;
          padding: 40px 20px;
          color: var(--mt);
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
