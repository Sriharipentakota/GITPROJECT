import { useState, useCallback, useEffect, useRef } from 'react';
import type { Question, Concept, InProgressState } from '../types';
import { TYPE_LABELS, DIFF_LABELS } from '../types';

interface Props {
  concept: Concept;
  questions: Question[];
  onBack: () => void;
  onComplete: (answers: (number | null)[], score: number) => void;
  inProgress: InProgressState | null;
  onSaveInProgress: (state: InProgressState) => void;
  onClearInProgress: () => void;
}

export default function QuizView({
  concept, questions, onBack, onComplete,
  inProgress, onSaveInProgress, onClearInProgress,
}: Props) {
  const [idx, setIdx] = useState(() => inProgress?.idx ?? 0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => {
    if (!inProgress) return Array(questions.length).fill(null);
    // Guard against question count changes after session was saved
    return Array(questions.length).fill(null).map((_, i) => inProgress.answers[i] ?? null);
  });
  const [selected, setSelected] = useState<number | null>(() =>
    inProgress ? (inProgress.answers[inProgress.idx] ?? null) : null
  );
  const [revealed, setRevealed] = useState(() =>
    inProgress ? inProgress.answers[inProgress.idx] !== null : false
  );
  const [showHint, setShowHint] = useState(false);
  const [skipped, setSkipped] = useState<Set<number>>(() =>
    new Set(inProgress?.skipped ?? [])
  );
  const [done, setDone] = useState(false);

  const q = questions[idx];
  const isAnswered = answers[idx] !== null;
  const isCorrect = isAnswered && answers[idx] === q.ans;
  const isSkipped = skipped.has(idx);

  // Auto-save: persist in-progress state on every meaningful change
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) { mountedRef.current = true; return; }
    if (done) return;
    const hasProgress = answers.some(a => a !== null) || skipped.size > 0 || idx > 0;
    if (hasProgress) {
      onSaveInProgress({ answers, skipped: [...skipped], idx });
    } else {
      onClearInProgress();
    }
    // stable callbacks — intentionally omitted from deps to avoid loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, idx, skipped, done]);

  // Unsaved-changes warning: browser dialog if user tries to close mid-quiz
  useEffect(() => {
    const hasProgress = answers.some(a => a !== null);
    if (!hasProgress || done) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [answers, done]);

  /* ── Navigate to any question ── */
  const jump = useCallback((i: number) => {
    setIdx(i);
    setSelected(answers[i]);
    setRevealed(answers[i] !== null);
    setShowHint(false);
  }, [answers]);

  /* ── Previous ── */
  const prev = useCallback(() => {
    if (idx === 0) return;
    jump(idx - 1);
  }, [idx, jump]);

  /* ── Next / Finish ── */
  const goNext = useCallback((currentAnswers: (number | null)[]) => {
    if (idx + 1 >= questions.length) {
      const score = currentAnswers.filter((a, i) => a === questions[i].ans).length;
      setDone(true);
      onComplete(currentAnswers, score);
    } else {
      const nextIdx = idx + 1;
      setIdx(nextIdx);
      setSelected(currentAnswers[nextIdx]);
      setRevealed(currentAnswers[nextIdx] !== null);
      setShowHint(false);
    }
  }, [idx, questions, onComplete]);

  /* ── Check answer ── */
  const check = useCallback(() => {
    if (selected === null) return;
    const next = [...answers];
    next[idx] = selected;
    setAnswers(next);
    setSkipped(s => { const ns = new Set(s); ns.delete(idx); return ns; });
    setRevealed(true);
  }, [selected, answers, idx]);

  /* ── Skip ── */
  const skip = useCallback(() => {
    setSkipped(s => new Set(s).add(idx));
    goNext(answers);
  }, [idx, answers, goNext]);

  /* ── After revealing, move on ── */
  const advance = useCallback(() => {
    goNext(answers);
  }, [answers, goNext]);

  const score = answers.filter((a, i) => a === questions[i].ans).length;
  const skippedCount = skipped.size;
  const unanswered = answers.filter(a => a === null).length;

  /* ── Done screen ── */
  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-done">
        <div className="quiz-done-icon">{pct >= 80 ? '🏆' : pct >= 50 ? '📈' : '📚'}</div>
        <h2 className="quiz-done-title">Quiz Complete!</h2>
        <p className="quiz-done-concept">{concept.icon} {concept.title}</p>
        <div className="quiz-done-score" style={{ color: pct >= 80 ? 'var(--gn)' : pct >= 50 ? 'var(--yw)' : 'var(--rd)' }}>
          {score} / {questions.length}
          <span className="quiz-done-pct">{pct}%</span>
        </div>
        {unanswered > 0 && (
          <p className="quiz-done-skipped">⚠️ {unanswered} question{unanswered > 1 ? 's' : ''} skipped / unanswered</p>
        )}
        <div className="quiz-done-breakdown">
          {questions.map((q, i) => {
            let cls = 'breakdown-dot';
            if (answers[i] === null) cls += ' skipped';
            else if (answers[i] === q.ans) cls += ' correct';
            else cls += ' wrong';
            return (
              <span
                key={i}
                className={cls}
                title={`Q${i + 1}: ${answers[i] === null ? 'Skipped' : answers[i] === q.ans ? 'Correct' : 'Wrong'}`}
              />
            );
          })}
        </div>
        <div className="quiz-done-actions">
          <button className="btn btn-secondary" onClick={onBack}>Back to Learn</button>
          <button className="btn btn-primary" onClick={() => {
            onClearInProgress();
            setIdx(0);
            setAnswers(Array(questions.length).fill(null));
            setSelected(null);
            setRevealed(false);
            setDone(false);
            setSkipped(new Set());
          }}>Retry Quiz</button>
        </div>
      </div>
    );
  }

  const diffColor = q.diff === 'B' ? 'var(--gn)' : q.diff === 'I' ? 'var(--yw)' : 'var(--rd)';

  return (
    <div className="quiz-view">
      {/* Top bar */}
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onBack}>← Leave</button>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
        </div>
        <span className="quiz-counter">{idx + 1} / {questions.length}</span>
      </div>

      {/* Live score strip */}
      <div className="quiz-live-score">
        <span style={{ color: 'var(--gn)' }}>✓ {score} correct</span>
        <span style={{ color: 'var(--rd)' }}>✗ {answers.filter((a, i) => a !== null && a !== questions[i].ans).length} wrong</span>
        <span style={{ color: 'var(--dm)' }}>⊘ {unanswered} left</span>
        {skippedCount > 0 && <span style={{ color: 'var(--yw)' }}>↷ {skippedCount} skipped</span>}
      </div>

      {/* Question card */}
      <div className="question-card">
        <div className="question-badges">
          <span className="badge-type">{TYPE_LABELS[q.type]}</span>
          <span className="badge-diff" style={{ color: diffColor }}>{DIFF_LABELS[q.diff]}</span>
          {isSkipped && <span className="badge-skipped">Skipped</span>}
        </div>

        <p className="question-text">{q.q}</p>

        {q.code && <pre className="question-code">{q.code}</pre>}

        <div className="options-list">
          {q.opts.map((opt, i) => {
            let cls = 'option';
            if (selected === i && !revealed) cls += ' selected';
            if (revealed) {
              if (i === q.ans) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            }
            return (
              <button key={i} className={cls} onClick={() => { if (!revealed) setSelected(i); }} disabled={revealed}>
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt}</span>
                {revealed && i === q.ans && <span className="option-tick">✓</span>}
                {revealed && i === selected && i !== q.ans && <span className="option-cross">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Hint after reveal */}
        {revealed && (
          <div className={`hint-box ${isCorrect ? 'hint-correct' : 'hint-wrong'}`}>
            <span className="hint-icon">{isCorrect ? '✅' : '❌'}</span>
            {showHint
              ? <span className="hint-text">{q.hint}</span>
              : <button className="hint-toggle" onClick={() => setShowHint(true)}>Show explanation</button>
            }
          </div>
        )}

        {/* Action row: Prev | Skip | Check/Next */}
        <div className="question-actions">
          <button
            className="btn btn-secondary"
            onClick={prev}
            disabled={idx === 0}
            title="Go to previous question"
          >
            ← Prev
          </button>

          <div className="question-actions-right">
            {!revealed ? (
              <>
                <button
                  className="btn btn-skip"
                  onClick={skip}
                  title="Skip this question and come back later"
                >
                  Skip ↷
                </button>
                <button
                  className="btn btn-primary"
                  onClick={check}
                  disabled={selected === null}
                >
                  Check Answer
                </button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={advance}>
                {idx + 1 < questions.length ? 'Next →' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Question navigator dots */}
      <div className="q-nav">
        {questions.map((q, i) => {
          let cls = 'q-nav-dot';
          if (i === idx) cls += ' current';
          else if (skipped.has(i)) cls += ' skipped';
          else if (answers[i] !== null) cls += answers[i] === q.ans ? ' correct' : ' wrong';
          return <button key={i} className={cls} onClick={() => jump(i)} title={`Q${i + 1}`} />;
        })}
      </div>
    </div>
  );
}
