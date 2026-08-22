import { useCallback, useRef, useSyncExternalStore } from 'react';

/**
 * Synthesizes short, professional UI sounds with the native Web Audio API
 * (no audio files, no library) and pairs them with `navigator.vibrate` haptics
 * on devices that support it. A single shared AudioContext is created lazily —
 * browsers refuse to start an AudioContext before a user gesture, so it is
 * constructed (and resumed) the first time a play* function actually runs
 * inside a click/tap handler.
 */

type SoundName = 'tick' | 'success' | 'error' | 'swoosh' | 'chime';

const SOUND_PREF_KEY = 'jml_sound_enabled';

let sharedCtx: AudioContext | null = null;
function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null; // Web Audio unsupported — fail silently, never break the UI
  if (!sharedCtx) sharedCtx = new Ctor();
  if (sharedCtx.state === 'suspended') void sharedCtx.resume();
  return sharedCtx;
}

/** A single volume-enveloped oscillator — the basic building block for every sound. */
function tone(ctx: AudioContext, dest: AudioNode, freq: number, startAt: number, duration: number, opts: { type?: OscillatorType; peak?: number; attack?: number } = {}) {
  const { type = 'sine', peak = 0.18, attack = 0.008 } = opts;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startAt);
  gain.gain.setValueAtTime(0, startAt);
  gain.gain.linearRampToValueAtTime(peak, startAt + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  osc.connect(gain).connect(dest);
  osc.start(startAt);
  osc.stop(startAt + duration + 0.02);
}

function isSoundEnabled(): boolean {
  try {
    return localStorage.getItem(SOUND_PREF_KEY) !== 'off';
  } catch {
    return true;
  }
}

// A tiny external store so any component can reactively read the current
// sound-on/off preference (e.g. to render a mute toggle) without prop drilling.
const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function notify() {
  for (const l of listeners) l();
}

export function setSoundEnabled(enabled: boolean) {
  try {
    localStorage.setItem(SOUND_PREF_KEY, enabled ? 'on' : 'off');
  } catch {
    /* ignore quota/private-mode errors */
  }
  notify();
}

/** Reactive read of the current preference — re-renders the caller when it changes. */
export function useSoundEnabled(): boolean {
  return useSyncExternalStore(subscribe, isSoundEnabled, () => true);
}

export function useImmersiveFeedback() {
  // Debounce identical rapid-fire triggers (e.g. arrow-key nav) so sounds don't stack into noise.
  const lastPlayedAt = useRef<Record<SoundName, number>>({ tick: 0, success: 0, error: 0, swoosh: 0, chime: 0 });

  const guard = useCallback((name: SoundName, minGapMs: number) => {
    const now = performance.now();
    if (now - lastPlayedAt.current[name] < minGapMs) return false;
    lastPlayedAt.current[name] = now;
    return true;
  }, []);

  const play = useCallback((name: SoundName) => {
    if (!isSoundEnabled()) return;
    const ctx = getContext();
    if (!ctx) return;
    const master = ctx.createGain();
    master.gain.value = 1;
    master.connect(ctx.destination);
    const t0 = ctx.currentTime;

    switch (name) {
      case 'tick': // low-frequency click for plain navigation
        if (!guard('tick', 70)) return;
        tone(ctx, master, 220, t0, 0.05, { type: 'triangle', peak: 0.1, attack: 0.002 });
        break;
      case 'swoosh': { // soft noise-less "whoosh" via a fast downward sweep, for the sidebar drawer
        if (!guard('swoosh', 150)) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, t0);
        osc.frequency.exponentialRampToValueAtTime(140, t0 + 0.22);
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.linearRampToValueAtTime(0.09, t0 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.24);
        osc.connect(gain).connect(master);
        osc.start(t0);
        osc.stop(t0 + 0.26);
        break;
      }
      case 'success': { // pleasant major-triad "marimba" chord for passing a quiz
        if (!guard('success', 250)) return;
        const root = 523.25; // C5
        [1, 5 / 4, 3 / 2, 2].forEach((ratio, i) => {
          tone(ctx, master, root * ratio, t0 + i * 0.045, 0.5, { type: 'triangle', peak: 0.14 - i * 0.02, attack: 0.005 });
        });
        break;
      }
      case 'chime': // shorter two-note chime for smaller wins (task complete, mark-as-learned)
        if (!guard('chime', 200)) return;
        tone(ctx, master, 659.25, t0, 0.16, { type: 'sine', peak: 0.14 });
        tone(ctx, master, 987.77, t0 + 0.07, 0.22, { type: 'sine', peak: 0.12 });
        break;
      case 'error': { // gentle minor-second dip — noticeable but not harsh
        if (!guard('error', 200)) return;
        tone(ctx, master, 220, t0, 0.16, { type: 'sine', peak: 0.12 });
        tone(ctx, master, 196, t0 + 0.09, 0.2, { type: 'sine', peak: 0.1 });
        break;
      }
    }
  }, [guard]);

  const vibrate = useCallback((pattern: number | number[]) => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator && isSoundEnabled()) {
      try { navigator.vibrate(pattern); } catch { /* ignore */ }
    }
  }, []);

  return {
    playTick: useCallback(() => play('tick'), [play]),
    playSwoosh: useCallback(() => play('swoosh'), [play]),
    playSuccess: useCallback(() => { play('success'); vibrate([0, 30, 40, 30]); }, [play, vibrate]),
    playChime: useCallback(() => { play('chime'); vibrate(20); }, [play, vibrate]),
    playError: useCallback(() => { play('error'); vibrate(60); }, [play, vibrate]),
    vibrate,
  };
}
