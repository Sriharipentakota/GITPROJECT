import { useState } from 'react';

interface MissionProgressEntry {
  status: 'not-started' | 'in-progress' | 'completed';
  completedTaskIds: number[];
  startedAt?: number;
  completedAt?: number;
  score?: number;
}

const STORAGE_KEY = 'jml_missions_v1';

function loadFromStorage(): Record<string, MissionProgressEntry> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, MissionProgressEntry>;
  } catch {
    return {};
  }
}

function saveToStorage(data: Record<string, MissionProgressEntry>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore write errors
  }
}

export default function useMissions() {
  const [missionProgress, setMissionProgress] = useState<Record<string, MissionProgressEntry>>(
    () => loadFromStorage()
  );

  function update(next: Record<string, MissionProgressEntry>): void {
    saveToStorage(next);
    setMissionProgress(next);
  }

  function startMission(missionId: string): void {
    const current = loadFromStorage();
    const existing = current[missionId] ?? { status: 'not-started', completedTaskIds: [] };
    const next: Record<string, MissionProgressEntry> = {
      ...current,
      [missionId]: {
        ...existing,
        status: 'in-progress',
        startedAt: Date.now(),
      },
    };
    update(next);
  }

  function completeTask(missionId: string, taskId: number): void {
    const current = loadFromStorage();
    const existing = current[missionId] ?? { status: 'not-started', completedTaskIds: [] };
    const completedTaskIds = existing.completedTaskIds.includes(taskId)
      ? existing.completedTaskIds
      : [...existing.completedTaskIds, taskId];
    const next: Record<string, MissionProgressEntry> = {
      ...current,
      [missionId]: {
        ...existing,
        completedTaskIds,
      },
    };
    update(next);
  }

  function completeMission(missionId: string, score: number): void {
    const current = loadFromStorage();
    const existing = current[missionId] ?? { status: 'not-started', completedTaskIds: [] };
    const next: Record<string, MissionProgressEntry> = {
      ...current,
      [missionId]: {
        ...existing,
        status: 'completed',
        completedAt: Date.now(),
        score,
      },
    };
    update(next);
  }

  function resetMission(missionId: string): void {
    const current = loadFromStorage();
    const next: Record<string, MissionProgressEntry> = { ...current };
    delete next[missionId];
    update(next);
  }

  function getMissionEntry(missionId: string): MissionProgressEntry | null {
    return missionProgress[missionId] ?? null;
  }

  return {
    missionProgress,
    startMission,
    completeTask,
    completeMission,
    resetMission,
    getMissionEntry,
  };
}
