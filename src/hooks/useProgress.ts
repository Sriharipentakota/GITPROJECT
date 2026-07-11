import { useState, useCallback, useEffect } from 'react';
import type { Progress } from '../types';

function getKey(pathId: string) {
  return pathId === 'javascript' ? 'jml_react_v1' : `jml_progress_${pathId}`;
}

function load(key: string): Progress {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
}

function save(key: string, p: Progress) {
  localStorage.setItem(key, JSON.stringify(p));
}

export function useProgress(pathId: string) {
  const [progress, setProgress] = useState<Progress>(() => load(getKey(pathId)));

  useEffect(() => {
    setProgress(load(getKey(pathId)));
  }, [pathId]);

  const markLearned = useCallback((conceptId: string) => {
    const key = getKey(pathId);
    setProgress(prev => {
      const next = {
        ...prev,
        [conceptId]: { ...(prev[conceptId] ?? { score: 0, total: 0, answers: [] }), learned: true },
      };
      save(key, next);
      return next;
    });
  }, [pathId]);

  const saveQuiz = useCallback((conceptId: string, answers: (number | null)[], score: number) => {
    const key = getKey(pathId);
    setProgress(prev => {
      const next = {
        ...prev,
        [conceptId]: {
          ...(prev[conceptId] ?? { learned: false }),
          score,
          total: answers.length,
          answers,
        },
      };
      save(key, next);
      return next;
    });
  }, [pathId]);

  const resetConcept = useCallback((conceptId: string) => {
    const key = getKey(pathId);
    setProgress(prev => {
      const next = { ...prev };
      delete next[conceptId];
      save(key, next);
      return next;
    });
  }, [pathId]);

  return { progress, markLearned, saveQuiz, resetConcept };
}
