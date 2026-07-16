import { useState } from 'react';
import type { Concept } from '../types';

interface Props {
  concept: Concept;
  onStartQuiz: () => void;
  onStartTasks?: () => void;
  isLearned: boolean;
  onMarkLearned: () => void;
  questionCount: number;
  taskCount?: number;
  hasInProgress: boolean;
}

export default function ConceptView({ concept, onStartQuiz, onStartTasks, isLearned, onMarkLearned, questionCount, taskCount, hasInProgress }: Props) {
  const [openExample, setOpenExample] = useState<number | null>(null);

  return (
    <div className="concept-view">
      {/* Hero */}
      <div className="concept-hero">
        <div className="concept-hero-left">
          <span className="concept-hero-icon">{concept.icon}</span>
          <div>
            <h2 className="concept-hero-title">{concept.title}</h2>
            <p className="concept-hero-sub">Explanation · Syntax · Examples · Visual · Analogy · Flow</p>
          </div>
        </div>
        <div className="concept-hero-actions">
          {!isLearned && (
            <button className="btn btn-secondary" onClick={onMarkLearned}>Mark as Learned</button>
          )}
          {isLearned && <span className="learned-chip">✓ Learned</span>}
          {onStartTasks && (
            <button className="btn btn-tasks" onClick={onStartTasks}>
              🛠 Tasks ({taskCount})
            </button>
          )}
          <button className="btn btn-primary resume-btn" onClick={onStartQuiz}>
            {hasInProgress ? '▶ Resume Quiz' : `Practice (${questionCount} Qs)`}
          </button>
          {hasInProgress && (
            <span className="in-progress-chip" title="You have a quiz in progress for this concept">In Progress</span>
          )}
        </div>
      </div>

      {/* Sections */}
      <div className="sections-grid">
        {/* Explanation */}
        <section className="section full-width">
          <div className="section-label">📖 Explanation</div>
          <div
            className="section-body explain-body"
            dangerouslySetInnerHTML={{ __html: concept.explain }}
          />
        </section>

        {/* Syntax */}
        <section className="section">
          <div className="section-label">✍️ Syntax Reference</div>
          <pre
            className="code-block"
            dangerouslySetInnerHTML={{ __html: concept.syntax }}
          />
        </section>

        {/* Visual */}
        <section className="section">
          <div className="section-label">🎨 Visual Diagram</div>
          <div
            className="svg-wrap"
            dangerouslySetInnerHTML={{ __html: concept.svgHTML }}
          />
        </section>

        {/* Examples */}
        <section className="section full-width">
          <div className="section-label">💡 Worked Examples</div>
          <div className="examples-list">
            {concept.examples.map((ex, i) => (
              <div key={i} className="example-card">
                <button
                  className="example-header"
                  onClick={() => setOpenExample(openExample === i ? null : i)}
                >
                  <span className="example-num">#{i + 1}</span>
                  <span className="example-label">{ex.label}</span>
                  <span className="example-chevron">{openExample === i ? '▲' : '▼'}</span>
                </button>
                {openExample === i && (
                  <div className="example-body">
                    <pre className="code-block" dangerouslySetInnerHTML={{ __html: ex.code }} />
                    <div className="example-out">
                      <span className="example-out-label">Output:</span>
                      <code>{ex.out}</code>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Analogy */}
        <section className="section">
          <div className="section-label">🧠 Analogy</div>
          <div
            className="section-body analogy-body"
            dangerouslySetInnerHTML={{ __html: concept.analogy }}
          />
        </section>

        {/* Flow */}
        <section className="section">
          <div className="section-label">🔄 Step-by-Step Flow</div>
          <ol className="flow-list">
            {concept.flow.map((step, i) => (
              <li key={i} className="flow-item">
                <span className="flow-num">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
