import { useState } from 'react';
import { SKILLS } from '../data/skillMap';
import type { Skill } from '../data/skillMap';
import type { Progress } from '../types';

interface Props {
  allProgress: Record<string, Progress>;
  onNavigateToLearn: (conceptId: string, pathId: string) => void;
}

type SkillStatus = 'not-started' | 'in-progress' | 'practicing' | 'mastered';
type FilterPath = 'all' | 'javascript' | 'playwright' | 'tosca';

const PATH_LABELS: Record<string, string> = { javascript: 'JavaScript', playwright: 'Playwright', tosca: 'Tosca' };
const STATUS_LABELS: Record<SkillStatus, string> = { 'not-started': 'Not Started', 'in-progress': 'In Progress', practicing: 'Practicing', mastered: 'Mastered' };
const STATUS_COLORS: Record<SkillStatus, string> = { 'not-started': 'var(--dm)', 'in-progress': 'var(--yw)', practicing: 'var(--bl)', mastered: 'var(--gn)' };
const FILTERS: FilterPath[] = ['all', 'javascript', 'playwright', 'tosca'];
const PATHS = ['javascript', 'playwright', 'tosca'] as const;

const RECOMMENDED: Record<SkillStatus, string> = {
  'not-started': 'Begin by studying the related concepts in the Learn section.',
  'in-progress': 'Keep practicing until each concept is marked as learned.',
  'practicing': 'Aim for a quiz score above 80% across related concepts to master this skill.',
  'mastered': 'Skill mastered — explore prerequisites or advance to the next path.',
};

function getStatus(skill: Skill, allProgress: Record<string, Progress>): SkillStatus {
  const pathProg = allProgress[skill.path];
  const ids = skill.relatedConceptIds;
  if (!ids.length || !pathProg) return 'not-started';
  const entries = ids.map(id => pathProg[id]).filter(Boolean);
  if (!entries.length) return 'not-started';
  const allLearned = ids.every(id => pathProg[id]?.learned);
  const anyLearned = ids.some(id => pathProg[id]?.learned);
  const totalQ = entries.reduce((s, e) => s + e.total, 0);
  const totalSc = entries.reduce((s, e) => s + e.score, 0);
  const avg = totalQ > 0 ? (totalSc / totalQ) * 100 : 0;
  if (allLearned && avg >= 80) return 'mastered';
  if (anyLearned) return 'practicing';
  return 'in-progress';
}

function getProgInfo(skill: Skill, allProgress: Record<string, Progress>) {
  const pathProg = allProgress[skill.path];
  const ids = skill.relatedConceptIds;
  const total = Math.max(ids.length, 1);
  if (!ids.length || !pathProg) return { learned: 0, total };
  const learned = ids.filter(id => pathProg[id]?.learned).length;
  return { learned, total };
}

export default function SkillMap({ allProgress, onNavigateToLearn }: Props) {
  const [filter, setFilter] = useState<FilterPath>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const activePaths = filter === 'all' ? PATHS : [filter as typeof PATHS[number]];
  const allStatuses = SKILLS.map(s => getStatus(s, allProgress));
  const mastered = allStatuses.filter(s => s === 'mastered').length;
  const active = allStatuses.filter(s => s === 'in-progress' || s === 'practicing').length;

  const pathCompletion = (path: string) => {
    const ps = SKILLS.filter(s => s.path === path);
    return ps.length ? Math.round(ps.filter(s => getStatus(s, allProgress) === 'mastered').length / ps.length * 100) : 0;
  };

  return (
    <div className="skill-map">
      <style>{`
        .skill-map{display:flex;flex-direction:column;gap:24px;padding:4px}
        .skill-summary{display:flex;gap:12px;flex-wrap:wrap}
        .skill-stat{background:var(--s2);border:1px solid var(--bd);border-radius:var(--r12);padding:12px 20px;display:flex;flex-direction:column;align-items:center;min-width:100px}
        .skill-stat-val{font-size:28px;font-weight:700;line-height:1}
        .skill-stat-lbl{font-size:11px;color:var(--mt);margin-top:4px;text-transform:uppercase;letter-spacing:.5px}
        .skill-filters{display:flex;gap:8px;flex-wrap:wrap}
        .skill-filter-btn{padding:6px 16px;border-radius:var(--r-full);border:1px solid var(--bd);background:var(--s2);color:var(--mt);font-size:13px;cursor:pointer;transition:all .15s;font-family:inherit}
        .skill-filter-btn:hover{border-color:var(--ac);color:var(--tx)}
        .skill-filter-btn.active{background:var(--ac);border-color:var(--ac);color:#000;font-weight:600}
        .skill-path-group{display:flex;flex-direction:column;gap:12px}
        .skill-path-header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-bottom:8px;border-bottom:1px solid var(--bd)}
        .skill-path-title{display:flex;align-items:baseline;gap:8px}
        .skill-path-name{font-size:17px;font-weight:700;color:var(--tx)}
        .skill-path-count{font-size:12px;color:var(--mt)}
        .skill-path-completion{display:flex;align-items:center;gap:10px}
        .skill-path-pct{font-size:13px;color:var(--mt);white-space:nowrap}
        .skill-pct-bar{width:120px;height:6px;background:var(--s3);border-radius:3px;overflow:hidden}
        .skill-pct-fill{height:100%;background:var(--gn);border-radius:3px;transition:width .4s}
        .skill-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        @media(max-width:900px){.skill-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:580px){.skill-grid{grid-template-columns:1fr}}
        .skill-card{background:var(--s2);border:1px solid var(--bd);border-radius:var(--r12);padding:14px;cursor:pointer;transition:border-color .2s,box-shadow .2s;display:flex;flex-direction:column;gap:10px}
        .skill-card:hover{box-shadow:var(--shadow-sm);border-color:var(--bd2)}
        .skill-card.expanded{box-shadow:var(--shadow-md)}
        .skill-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
        .skill-card-labels{display:flex;flex-direction:column;gap:4px}
        .skill-label{font-size:14px;font-weight:600;color:var(--tx);line-height:1.3}
        .skill-category-badge{font-size:11px;color:var(--mt);background:var(--s3);padding:2px 7px;border-radius:var(--r4);width:fit-content}
        .skill-status-chip{font-size:11px;font-weight:600;padding:3px 8px;border-radius:var(--r-full);border:1px solid;white-space:nowrap;flex-shrink:0;background:transparent}
        .skill-mini-progress{display:flex;align-items:center;gap:8px}
        .skill-mini-bar{flex:1;height:4px;background:var(--s3);border-radius:2px;overflow:hidden}
        .skill-mini-fill{height:100%;border-radius:2px;transition:width .3s}
        .skill-mini-label{font-size:11px;color:var(--mt);white-space:nowrap}
        .skill-detail{display:flex;flex-direction:column;gap:10px;padding-top:10px;border-top:1px solid var(--bd)}
        .skill-description{font-size:13px;color:var(--mt);line-height:1.6}
        .skill-detail-row{display:flex;flex-direction:column;gap:5px}
        .skill-detail-lbl{font-size:11px;font-weight:600;color:var(--mt);text-transform:uppercase;letter-spacing:.4px}
        .skill-tags{display:flex;flex-wrap:wrap;gap:5px}
        .skill-tag{font-size:11px;padding:3px 8px;border-radius:var(--r4);background:var(--s3);border:1px solid var(--bd);color:var(--tx)}
        .skill-tag-concept{cursor:pointer;border-color:var(--bl);color:var(--bl);font-family:inherit}
        .skill-tag-concept:hover{background:rgba(59,130,246,.12)}
        .skill-recommended{display:flex;flex-direction:column;gap:4px}
        .skill-rec-text{font-size:12px;color:var(--ac);font-style:italic}
      `}</style>

      {/* Summary row */}
      <div className="skill-summary">
        <div className="skill-stat">
          <span className="skill-stat-val">{SKILLS.length}</span>
          <span className="skill-stat-lbl">Total Skills</span>
        </div>
        <div className="skill-stat">
          <span className="skill-stat-val" style={{ color: 'var(--gn)' }}>{mastered}</span>
          <span className="skill-stat-lbl">Mastered</span>
        </div>
        <div className="skill-stat">
          <span className="skill-stat-val" style={{ color: 'var(--bl)' }}>{active}</span>
          <span className="skill-stat-lbl">In Progress</span>
        </div>
        <div className="skill-stat">
          <span className="skill-stat-val" style={{ color: 'var(--dm)' }}>{SKILLS.length - mastered - active}</span>
          <span className="skill-stat-lbl">Not Started</span>
        </div>
      </div>

      {/* Filter row */}
      <div className="skill-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`skill-filter-btn${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All Paths' : PATH_LABELS[f]}
          </button>
        ))}
      </div>

      {/* Path groups */}
      {activePaths.map(path => {
        const pathSkills = SKILLS.filter(s => s.path === path);
        const pct = pathCompletion(path);
        return (
          <div key={path} className="skill-path-group">
            <div className="skill-path-header">
              <div className="skill-path-title">
                <span className="skill-path-name">{PATH_LABELS[path]}</span>
                <span className="skill-path-count">{pathSkills.length} skills</span>
              </div>
              <div className="skill-path-completion">
                <span className="skill-path-pct">{pct}% complete</span>
                <div className="skill-pct-bar">
                  <div className="skill-pct-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>

            <div className="skill-grid">
              {pathSkills.map(skill => {
                const status = getStatus(skill, allProgress);
                const prog = getProgInfo(skill, allProgress);
                const isOpen = expanded === skill.id;
                const color = STATUS_COLORS[status];
                return (
                  <div
                    key={skill.id}
                    className={`skill-card${isOpen ? ' expanded' : ''}`}
                    onClick={() => setExpanded(prev => prev === skill.id ? null : skill.id)}
                    style={{ borderColor: isOpen ? color : undefined }}
                  >
                    <div className="skill-card-top">
                      <div className="skill-card-labels">
                        <span className="skill-label">{skill.label}</span>
                        <span className="skill-category-badge">{skill.category}</span>
                      </div>
                      <span className="skill-status-chip" style={{ color, borderColor: color }}>
                        {STATUS_LABELS[status]}
                      </span>
                    </div>

                    <div className="skill-mini-progress">
                      <div className="skill-mini-bar">
                        <div
                          className="skill-mini-fill"
                          style={{ width: `${(prog.learned / prog.total) * 100}%`, background: color }}
                        />
                      </div>
                      <span className="skill-mini-label">{prog.learned}/{prog.total} learned</span>
                    </div>

                    {isOpen && (
                      <div className="skill-detail" onClick={e => e.stopPropagation()}>
                        <p className="skill-description">{skill.description}</p>

                        {skill.prerequisites.length > 0 && (
                          <div className="skill-detail-row">
                            <span className="skill-detail-lbl">Prerequisites</span>
                            <div className="skill-tags">
                              {skill.prerequisites.map(pre => (
                                <span key={pre} className="skill-tag">
                                  {SKILLS.find(s => s.id === pre)?.label ?? pre}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {skill.relatedConceptIds.length > 0 && (
                          <div className="skill-detail-row">
                            <span className="skill-detail-lbl">Related Concepts</span>
                            <div className="skill-tags">
                              {skill.relatedConceptIds.map(cid => (
                                <button
                                  key={cid}
                                  className="skill-tag skill-tag-concept"
                                  onClick={() => onNavigateToLearn(cid, skill.path)}
                                >
                                  {cid}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="skill-recommended">
                          <span className="skill-detail-lbl">Recommended Action</span>
                          <span className="skill-rec-text">{RECOMMENDED[status]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
