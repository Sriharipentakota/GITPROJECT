import { useState, useMemo, useCallback, useRef, useEffect, Suspense, lazy } from 'react';
import { CONCEPTS } from './data/concepts';
import { PLAYWRIGHT_CONCEPTS } from './data/playwrightConcepts';
import { TOSCA_CONCEPTS } from './data/toscaConcepts';
import { JS_TASKS } from './data/jsTasks';
import { PW_TASKS } from './data/playwrightTasks';
import { MISSIONS } from './data/missions';
import type { Question, Task, SaveStatus, InProgressState, Progress, AppView } from './types';
import { useProgress } from './hooks/useProgress';
import { useSession } from './hooks/useSession';
import useMissions from './hooks/useMissions';
import { useImmersiveFeedback } from './hooks/useImmersiveFeedback';
import { useConfetti } from './hooks/useConfetti';
import { withViewTransition } from './utils/viewTransition';
import { recordReviewed } from './utils/reviewClock';
import { getDetailedGuideUrl } from './data/detailedGuides';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConfettiOverlay from './components/ConfettiOverlay';
import './App.css';

type Mode = 'learn' | 'quiz' | 'tasks';

const ConceptView   = lazy(() => import('./components/ConceptView'));
const QuizView      = lazy(() => import('./components/QuizView'));
const TasksView     = lazy(() => import('./components/TasksView'));
const Dashboard     = lazy(() => import('./components/Dashboard'));
const SkillMap      = lazy(() => import('./components/SkillMap'));
const MissionList   = lazy(() => import('./components/MissionList'));
const MissionDetail = lazy(() => import('./components/MissionDetail'));
const Analytics     = lazy(() => import('./components/Analytics'));
const Achievements  = lazy(() => import('./components/Achievements'));
const SearchPalette = lazy(() => import('./components/SearchPalette'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rawToQuestion(r: any[]): Question {
  return { type: r[0] as Question['type'], diff: r[1] as Question['diff'], q: r[2], code: r[3] ?? null, opts: r[4], ans: r[5], hint: r[6] };
}

function getTasksForPath(pathId: string, conceptId: string): Task[] {
  if (pathId === 'javascript') return JS_TASKS[conceptId] ?? [];
  if (pathId === 'playwright') return PW_TASKS[conceptId] ?? [];
  return [];
}

function loadProgressForPath(pathId: string): Progress {
  try {
    const key = pathId === 'javascript' ? 'jml_react_v1' : `jml_progress_${pathId}`;
    return JSON.parse(localStorage.getItem(key) || '{}') as Progress;
  } catch { return {}; }
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('jml_theme') as 'dark' | 'light' | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [pathId, setPathId] = useState<string>(
    () => localStorage.getItem('jml_path') || 'javascript'
  );

  const concepts = pathId === 'playwright' ? PLAYWRIGHT_CONCEPTS : pathId === 'tosca' ? TOSCA_CONCEPTS : CONCEPTS;
  const [questionsRaw, setQuestionsRaw] = useState<Record<string, unknown[][]>>({});
  const [isQuestionsLoaded, setIsQuestionsLoaded] = useState(false);

  const session = useSession(pathId);
  const { progress, markLearned, saveQuiz } = useProgress(pathId);
  const { missionProgress, startMission, completeTask: completeMissionTask, completeMission } = useMissions();
  const feedback = useImmersiveFeedback();
  const confetti = useConfetti();

  const [appView, setAppView] = useState<AppView>('dashboard');
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

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

  useEffect(() => {
    let active = true;
    setIsQuestionsLoaded(false);

    const loadQuestions = async () => {
      const module = pathId === 'playwright'
        ? await import('./data/playwrightQuestions')
        : pathId === 'tosca'
        ? await import('./data/toscaQuestions')
        : await import('./data/questions');

      if (!active) return;

      const data = pathId === 'playwright'
        ? (module as typeof import('./data/playwrightQuestions')).PLAYWRIGHT_QUESTIONS_RAW
        : pathId === 'tosca'
        ? (module as typeof import('./data/toscaQuestions')).TOSCA_QUESTIONS_RAW
        : (module as typeof import('./data/questions')).QUESTIONS_RAW;

      setQuestionsRaw(data as Record<string, unknown[][]>);
      setIsQuestionsLoaded(true);
    };

    void loadQuestions();
    return () => { active = false; };
  }, [pathId]);

  useEffect(() => () => { if (savedTimerRef.current) clearTimeout(savedTimerRef.current); }, []);
  useEffect(() => { localStorage.setItem('jml_theme', theme); }, [theme]);

  // Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Aggregate progress across all paths for dashboard/analytics/achievements
  const allProgress = useMemo<Record<string, Progress>>(() => ({
    javascript: pathId === 'javascript' ? progress : loadProgressForPath('javascript'),
    playwright: pathId === 'playwright' ? progress : loadProgressForPath('playwright'),
    tosca:      pathId === 'tosca'      ? progress : loadProgressForPath('tosca'),
  }), [pathId, progress]);

  const missionCompletedCount = useMemo(
    () => Object.values(missionProgress).filter(m => m.status === 'completed').length,
    [missionProgress]
  );

  const concept = useMemo(() => concepts.find(c => c.id === conceptId) ?? concepts[0], [concepts, conceptId]);
  const guideUrl = useMemo(() => getDetailedGuideUrl(pathId, conceptId), [pathId, conceptId]);
  const questions = useMemo<Question[]>(
    () => ((questionsRaw[conceptId] ?? []) as unknown[][]).map(r => rawToQuestion(r as unknown[])),
    [conceptId, questionsRaw]
  );

  const handleSwitchPath = useCallback((newPathId: string) => {
    feedback.playTick();
    withViewTransition(() => {
      localStorage.setItem('jml_path', newPathId);
      setQuestionsRaw({});
      setIsQuestionsLoaded(false);
      setPathId(newPathId);
      const newConcepts = newPathId === 'playwright' ? PLAYWRIGHT_CONCEPTS : newPathId === 'tosca' ? TOSCA_CONCEPTS : CONCEPTS;
      setConceptId(newConcepts[0].id);
      setMode('learn');
      setAppView('learn');
      setSidebarOpen(false);
    }, 'switch-path');
  }, [feedback]);

  const handleSelectConcept = useCallback((id: string) => {
    feedback.playTick();
    recordReviewed(pathId, id);
    withViewTransition(() => {
      setConceptId(id);
      setMode('learn');
      setAppView('learn');
      setSidebarOpen(false);
      session.setLastConcept(id, 'learn');
    }, 'select-concept');
  }, [session, pathId, feedback]);

  const handleGoToLearn = useCallback((cId: string, pId: string) => {
    feedback.playTick();
    recordReviewed(pId, cId);
    withViewTransition(() => {
      if (pId !== pathId) {
        localStorage.setItem('jml_path', pId);
        setQuestionsRaw({});
        setIsQuestionsLoaded(false);
        setPathId(pId);
      }
      setConceptId(cId);
      setMode('learn');
      setAppView('learn');
      setSidebarOpen(false);
    }, 'go-to-learn');
  }, [pathId, feedback]);

  const handleSetAppView = useCallback((view: AppView) => {
    feedback.playTick();
    withViewTransition(() => {
      setAppView(view);
      if (view !== 'missions') setSelectedMissionId(null);
      setSidebarOpen(false);
    }, 'app-view');
  }, [feedback]);

  const handleSearchNavigate = useCallback((type: string, id: string, pId?: string) => {
    setSearchOpen(false);
    if (type === 'concept') {
      handleGoToLearn(id, pId ?? pathId);
    } else if (type === 'mission') {
      setAppView('missions');
      setSelectedMissionId(id);
    } else {
      setAppView('skillmap');
    }
  }, [handleGoToLearn, pathId]);

  const handleStartQuiz = useCallback(() => {
    setMode('quiz');
    session.setLastConcept(conceptId, 'quiz');
  }, [conceptId, session]);

  const handleStartTasks = useCallback(() => {
    setMode('tasks');
    session.setLastConcept(conceptId, 'learn');
  }, [conceptId, session]);

  const handleBackToLearn = useCallback(() => {
    setMode('learn');
    session.setLastConcept(conceptId, 'learn');
  }, [conceptId, session]);

  const handleComplete = useCallback((answers: (number | null)[], score: number) => {
    saveQuiz(conceptId, answers, score);
    session.clearInProgress(conceptId);
    recordReviewed(pathId, conceptId);
    const pct = answers.length > 0 ? score / answers.length : 0;
    if (pct >= 0.6) feedback.playSuccess(); else feedback.playError();
  }, [conceptId, saveQuiz, session, pathId, feedback]);

  const handleCompleteMission = useCallback((missionId: string, score: number) => {
    completeMission(missionId, score);
    feedback.playSuccess();
    confetti.fire();
  }, [completeMission, feedback, confetti]);

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

  const tasks = useMemo<Task[]>(() => getTasksForPath(pathId, conceptId), [pathId, conceptId]);
  const tasksStorageKey = `jml_tasks_${pathId}_${conceptId}`;
  const showContent = mode !== 'quiz' || isQuestionsLoaded;

  return (
    <div className="app" data-theme={theme} data-track={pathId}>
      <Header
        theme={theme}
        onToggleTheme={() => { feedback.playTick(); setTheme(t => t === 'dark' ? 'light' : 'dark'); }}
        progress={progress}
        conceptCount={concepts.length}
        saveStatus={saveStatus}
        pathId={pathId}
        totalQs={totalQs}
        onSwitchPath={handleSwitchPath}
        onMenuToggle={() => { feedback.playSwoosh(); setSidebarOpen(o => !o); }}
        sidebarOpen={sidebarOpen}
        onOpenSearch={() => { feedback.playTick(); setSearchOpen(true); }}
        appView={appView}
      />
      <div className="layout">
        <div className={`sidebar-wrap${sidebarOpen ? ' open' : ''}`}>
          <Sidebar
            concepts={concepts}
            currentId={conceptId}
            progress={progress}
            inProgress={session.inProgress}
            onSelect={handleSelectConcept}
            appView={appView}
            onSetAppView={handleSetAppView}
            pathId={pathId}
            onSwitchPath={handleSwitchPath}
            onOpenSearch={() => setSearchOpen(true)}
          />
        </div>
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
        <main className="main">
          <Suspense fallback={<div style={{ padding: '2rem', color: 'var(--tx)' }}>Loading…</div>}>
            {appView === 'dashboard' && (
              <Dashboard
                pathId={pathId}
                progress={allProgress}
                onGoToLearn={handleGoToLearn}
                onGoToSkillMap={() => handleSetAppView('skillmap')}
                onGoToMissions={() => handleSetAppView('missions')}
                onSwitchPath={handleSwitchPath}
                missionCompletedCount={missionCompletedCount}
                missionTotalCount={MISSIONS.length}
              />
            )}
            {appView === 'skillmap' && (
              <SkillMap
                allProgress={allProgress}
                onNavigateToLearn={handleGoToLearn}
              />
            )}
            {appView === 'missions' && !selectedMissionId && (
              <MissionList
                missionProgress={missionProgress}
                onSelectMission={setSelectedMissionId}
              />
            )}
            {appView === 'missions' && selectedMissionId && (
              <MissionDetail
                missionId={selectedMissionId}
                missionProgress={missionProgress}
                onBack={() => setSelectedMissionId(null)}
                onStartMission={startMission}
                onCompleteTask={completeMissionTask}
                onCompleteMission={handleCompleteMission}
              />
            )}
            {appView === 'analytics' && (
              <Analytics
                allProgress={allProgress}
                missionProgress={missionProgress}
              />
            )}
            {appView === 'achievements' && (
              <Achievements
                allProgress={allProgress}
                missionProgress={missionProgress}
              />
            )}
            {appView === 'learn' && showContent && (
              mode === 'learn' ? (
                <ConceptView
                  concept={concept}
                  onStartQuiz={handleStartQuiz}
                  onStartTasks={tasks.length > 0 ? handleStartTasks : undefined}
                  isLearned={progress[conceptId]?.learned ?? false}
                  onMarkLearned={() => { feedback.playChime(); markLearned(conceptId); }}
                  questionCount={questions.length}
                  taskCount={tasks.length}
                  hasInProgress={!!session.inProgress[conceptId]}
                  guideUrl={guideUrl}
                />
              ) : mode === 'tasks' ? (
                <TasksView
                  key={`${pathId}-${conceptId}-tasks`}
                  concept={concept}
                  tasks={tasks}
                  onBack={handleBackToLearn}
                  storageKey={tasksStorageKey}
                />
              ) : (
                <QuizView
                  key={conceptId}
                  pathId={pathId}
                  concept={concept}
                  questions={questions}
                  onBack={handleBackToLearn}
                  onComplete={handleComplete}
                  inProgress={session.getInProgress(conceptId)}
                  onSaveInProgress={handleSaveInProgress}
                  onClearInProgress={handleClearInProgress}
                />
              )
            )}
            {appView === 'learn' && !showContent && (
              <div style={{ padding: '2rem', color: 'var(--tx)' }}>Loading questions…</div>
            )}
          </Suspense>
        </main>
      </div>

      {/* Mobile app navigation bar */}
      <nav className="mobile-path-bar" aria-label="App navigation">
        {([
          { id: 'dashboard',    icon: '📊', label: 'Home'     },
          { id: 'learn',        icon: '📚', label: 'Learn'    },
          { id: 'skillmap',     icon: '🗺️', label: 'Skills'   },
          { id: 'missions',     icon: '🎯', label: 'Missions' },
          { id: 'achievements', icon: '🏆', label: 'Badges'   },
        ] as { id: AppView; icon: string; label: string }[]).map(item => (
          <button
            key={item.id}
            className={`mobile-path-btn${appView === item.id ? ' active' : ''}`}
            onClick={() => handleSetAppView(item.id)}
            aria-current={appView === item.id ? 'page' : undefined}
          >
            <span className="mobile-path-icon">{item.icon}</span>
            <span className="mobile-path-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Global search palette */}
      {searchOpen && (
        <Suspense fallback={null}>
          <SearchPalette
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
            onNavigate={handleSearchNavigate}
          />
        </Suspense>
      )}

      {/* Fixed-position canvas for mission-complete confetti bursts */}
      <ConfettiOverlay canvasRef={confetti.canvasRef} active={confetti.active} />
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
