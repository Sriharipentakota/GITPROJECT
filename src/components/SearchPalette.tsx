import { useState, useEffect, useRef, useMemo } from 'react';
import { CONCEPTS } from '../data/concepts';
import { PLAYWRIGHT_CONCEPTS } from '../data/playwrightConcepts';
import { TOSCA_CONCEPTS } from '../data/toscaConcepts';
import { MISSIONS } from '../data/missions';
import { SKILLS } from '../data/skillMap';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (type: string, id: string, pathId?: string) => void;
}

interface SearchResult {
  type: 'concept' | 'mission' | 'skill';
  id: string;
  pathId?: string;
  icon: string;
  title: string;
  subtitle: string;
}

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];
  for (const c of CONCEPTS) {
    results.push({ type: 'concept', id: c.id, pathId: 'javascript', icon: c.icon, title: c.title, subtitle: 'JavaScript' });
  }
  for (const c of PLAYWRIGHT_CONCEPTS) {
    results.push({ type: 'concept', id: c.id, pathId: 'playwright', icon: c.icon, title: c.title, subtitle: 'Playwright' });
  }
  for (const c of TOSCA_CONCEPTS) {
    results.push({ type: 'concept', id: c.id, pathId: 'tosca', icon: c.icon, title: c.title, subtitle: 'Tosca' });
  }
  for (const m of MISSIONS) {
    const pathLabel = m.path === 'javascript' ? 'JavaScript' : m.path === 'playwright' ? 'Playwright' : 'Tosca';
    results.push({ type: 'mission', id: m.id, pathId: m.path, icon: m.icon, title: m.title, subtitle: `Mission · ${pathLabel} · ${m.difficulty}` });
  }
  for (const s of SKILLS) {
    const pathLabel = s.path === 'javascript' ? 'JavaScript' : s.path === 'playwright' ? 'Playwright' : 'Tosca';
    results.push({ type: 'skill', id: s.id, pathId: s.path, icon: '⚙️', title: s.label, subtitle: `Skill · ${pathLabel} · ${s.category}` });
  }
  return results;
}

const TYPE_BADGE: Record<string, string> = { concept: 'Concept', mission: 'Mission', skill: 'Skill' };
const TYPE_COLOR: Record<string, string> = { concept: 'var(--bl)', mission: 'var(--pu)', skill: 'var(--gn)' };

export default function SearchPalette({ isOpen, onClose, onNavigate }: Props) {
  const [query, setQuery] = useState('');
  const [focusIdx, setFocusIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const index = useMemo(() => buildIndex(), []);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index.filter(r =>
      r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query, index]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setFocusIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => { setFocusIdx(0); }, [results]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${focusIdx}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [focusIdx]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setFocusIdx(i => Math.min(i + 1, results.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setFocusIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter') {
      const r = results[focusIdx];
      if (r) onNavigate(r.type, r.id, r.pathId);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Search concepts, missions, skills…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="search-esc-hint" onClick={onClose}>Esc</kbd>
        </div>
        {results.length > 0 && (
          <ul className="search-results" ref={listRef} role="listbox">
            {results.map((r, i) => (
              <li
                key={`${r.type}-${r.id}`}
                data-idx={i}
                className={`search-result-item${i === focusIdx ? ' focused' : ''}`}
                role="option"
                aria-selected={i === focusIdx}
                onClick={() => onNavigate(r.type, r.id, r.pathId)}
                onMouseEnter={() => setFocusIdx(i)}
              >
                <span className="search-result-icon">{r.icon}</span>
                <div className="search-result-text">
                  <span className="search-result-title">{r.title}</span>
                  <span className="search-result-sub">{r.subtitle}</span>
                </div>
                <span
                  className="search-result-type"
                  style={{ color: TYPE_COLOR[r.type], borderColor: TYPE_COLOR[r.type] }}
                >
                  {TYPE_BADGE[r.type]}
                </span>
              </li>
            ))}
          </ul>
        )}
        {results.length === 0 && query.trim() && (
          <div className="search-empty">No results for &ldquo;{query}&rdquo;</div>
        )}
        <div className="search-footer">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>Esc close</span>
        </div>
      </div>
    </div>
  );
}
