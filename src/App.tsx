import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { CONCEPTS } from './data/concepts';
import { QUESTIONS_RAW } from './data/questions';
import { PLAYWRIGHT_CONCEPTS } from './data/playwrightConcepts';
import { PLAYWRIGHT_QUESTIONS_RAW } from './data/playwrightQuestions';
import type { Question, SaveStatus, InProgressState } from './types';
import { useProgress } from './hooks/useProgress';
import { useSession } from './hooks/useSession';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConceptView from './components/ConceptView';
import QuizView from './components/QuizView';
import './App.css';

type Mode = 'learn' | 'quiz';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rawToQuestion(r: any[]): Question {
  return { type: r[0] as Question['type'], diff: r[1] as Question['diff'], q: r[2], code: r[3] ?? null, opts: r[4], ans: r[5], hint: r[6] };
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const [pathId, setPathId] = useState<string>(
    () => localStorage.getItem('jml_path') || 'javascript'
  );

  const concepts = pathId === 'playwright' ? PLAYWRIGHT_CONCEPTS : CONCEPTS;
  const questionsRaw: Record<string, unknown[][]> = pathId === 'playwright' ? PLAYWRIGHT_QUESTIONS_RAW : QUESTIONS_RAW;

  const session = useSession(pathId);
  const { progress, markLearned, saveQuiz } = useProgress(pathId);

  const [conceptId, setConceptId] = useState<string>(() => {
    const lastId = localStorage.getItem('jml_path') === 'playwright'
      ? loadSessionLastId('playwright')
      : loadSessionLastId('javascript');
    return concepts.find(c => c.id === lastId) ? lastId : concepts[0].id;
  });
  const [mode, setMode] = useState<Mode>(() => {
    if (session.lastMode === 'quiz' && session.lastConceptId && session.inProgress[session.lastConceptId]) {
      return 'quiz';
    }
    return 'learn';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const savedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (savedTimerRef.current) clearTimeout(savedTimerRef.current); }, []);

  const concept = useMemo(() => concepts.find(c => c.id === conceptId) ?? concepts[0], [concepts, conceptId]);
  const questions = useMemo<Question[]>(
    () => ((questionsRaw[conceptId] ?? []) as unknown[][]).map(r => rawToQuestion(r as unknown[])),
    [conceptId, questionsRaw]
  );

  const handleSwitchPath = useCallback((newPathId: string) => {
    localStorage.setItem('jml_path', newPathId);
    setPathId(newPathId);
    const newConcepts = newPathId === 'playwright' ? PLAYWRIGHT_CONCEPTS : CONCEPTS;
    setConceptId(newConcepts[0].id);
    setMode('learn');
    setSidebarOpen(false);
  }, []);

  const handleSelectConcept = useCallback((id: string) => {
    setConceptId(id);
    setMode('learn');
    setSidebarOpen(false);
    session.setLastConcept(id, 'learn');
  }, [session]);

  const handleStartQuiz = useCallback(() => {
    setMode('quiz');
    session.setLastConcept(conceptId, 'quiz');
  }, [conceptId, session]);

  const handleBackToLearn = useCallback(() => {
    setMode('learn');
    session.setLastConcept(conceptId, 'learn');
  }, [conceptId, session]);

  const handleComplete = useCallback((answers: (number | null)[], score: number) => {
    saveQuiz(conceptId, answers, score);
    session.clearInProgress(conceptId);
  }, [conceptId, saveQuiz, session]);

  const handleSaveInProgress = useCallback((state: InProgressState) => {
    setSaveStatus('saving');
    session.saveInProgress(conceptId, state);
    if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    savedTimerRef.current = setTimeout(() => {
      setSaveStatus('saved');
      savedTimerRef.current = setTimeout(() => setSaveStatus('idle'), 2000);
    }, 350);
  }, [conceptId, session]);

  const handleClearInProgress = useCallback(() => {
    session.clearInProgress(conceptId);
  }, [conceptId, session]);

  const totalQs = useMemo(
    () => Object.values(questionsRaw).reduce((s, qs) => s + qs.length, 0),
    [questionsRaw]
  );

  return (
    <div className="app" data-theme={theme}>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        progress={progress}
        conceptCount={concepts.length}
        saveStatus={saveStatus}
        pathId={pathId}
        totalQs={totalQs}
        onSwitchPath={handleSwitchPath}
      />
      <div className="layout">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(o => !o)}>☰</button>
        <div className={`sidebar-wrap${sidebarOpen ? ' open' : ''}`}>
          <Sidebar
            concepts={concepts}
            currentId={conceptId}
            progress={progress}
            inProgress={session.inProgress}
            onSelect={handleSelectConcept}
          />
        </div>
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
        <main className="main">
          {mode === 'learn' ? (
            <ConceptView
              concept={concept}
              onStartQuiz={handleStartQuiz}
              isLearned={progress[conceptId]?.learned ?? false}
              onMarkLearned={() => markLearned(conceptId)}
              questionCount={questions.length}
              hasInProgress={!!session.inProgress[conceptId]}
            />
          ) : (
            <QuizView
              key={conceptId}
              concept={concept}
              questions={questions}
              onBack={handleBackToLearn}
              onComplete={handleComplete}
              inProgress={session.getInProgress(conceptId)}
              onSaveInProgress={handleSaveInProgress}
              onClearInProgress={handleClearInProgress}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function loadSessionLastId(pathId: string): string {
  try {
    const key = pathId === 'javascript' ? 'jml_session_v1' : `jml_session_${pathId}`;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw).lastConceptId ?? '' : '';
  } catch {
    return '';
  }
}
