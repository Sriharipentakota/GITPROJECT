import { useState, useCallback, useEffect } from 'react';
import type { InProgressState } from '../types';

interface SessionData {
  lastConceptId: string;
  lastMode: 'learn' | 'quiz';
  inProgress: Record<string, InProgressState>;
}

function getKey(pathId: string) {
  return pathId === 'javascript' ? 'jml_session_v1' : `jml_session_${pathId}`;
}

function loadSession(pathId: string): SessionData {
  try {
    const raw = localStorage.getItem(getKey(pathId));
    if (!raw) return { lastConceptId: '', lastMode: 'learn', inProgress: {} };
    return JSON.parse(raw);
  } catch {
    return { lastConceptId: '', lastMode: 'learn', inProgress: {} };
  }
}

function persist(pathId: string, data: SessionData) {
  localStorage.setItem(getKey(pathId), JSON.stringify(data));
}

export function useSession(pathId: string) {
  const [data, setData] = useState<SessionData>(() => loadSession(pathId));

  useEffect(() => {
    setData(loadSession(pathId));
  }, [pathId]);

  const setLastConcept = useCallback((conceptId: string, mode: 'learn' | 'quiz') => {
    setData(prev => {
      const next = { ...prev, lastConceptId: conceptId, lastMode: mode };
      persist(pathId, next);
      return next;
    });
  }, [pathId]);

  const saveInProgress = useCallback((conceptId: string, state: InProgressState) => {
    setData(prev => {
      const next = { ...prev, inProgress: { ...prev.inProgress, [conceptId]: state } };
      persist(pathId, next);
      return next;
    });
  }, [pathId]);

  const clearInProgress = useCallback((conceptId: string) => {
    setData(prev => {
      const ip = { ...prev.inProgress };
      delete ip[conceptId];
      const next = { ...prev, inProgress: ip };
      persist(pathId, next);
      return next;
    });
  }, [pathId]);

  const getInProgress = useCallback(
    (conceptId: string): InProgressState | null => data.inProgress[conceptId] ?? null,
    [data.inProgress]
  );

  return {
    lastConceptId: data.lastConceptId,
    lastMode: data.lastMode,
    inProgress: data.inProgress,
    setLastConcept,
    saveInProgress,
    clearInProgress,
    getInProgress,
  };
}
