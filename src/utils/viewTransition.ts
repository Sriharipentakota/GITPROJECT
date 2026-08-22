/**
 * Thin wrapper around the native CSS View Transitions API.
 *
 * There is no router here — "navigation" is just a handful of setState calls
 * in App.tsx. `document.startViewTransition(callback)` lets us wrap exactly
 * those calls: the browser snapshots the DOM before `callback` runs, lets
 * React re-render synchronously inside it, snapshots the DOM again, then
 * cross-fades/morphs between the two snapshots automatically — all on the
 * compositor thread, so it stays smooth even while React is doing work.
 *
 * Falls back to calling the update function directly (no animation) in any
 * browser that doesn't support it yet, and respects prefers-reduced-motion.
 */

type UpdateFn = () => void;

// TS's DOM lib already types `document.startViewTransition` for browsers that
// support it, but as a required (non-optional) member — so runtime feature
// detection still needs an `unknown` cast rather than an optional-extends
// interface (which TS rejects as an incompatible override).
type StartViewTransitionFn = (callback: () => void | Promise<void>) => { finished: Promise<void>; ready: Promise<void> };

function getStartViewTransition(): StartViewTransitionFn | undefined {
  const fn = (document as unknown as { startViewTransition?: unknown }).startViewTransition;
  return typeof fn === 'function' ? (fn.bind(document) as StartViewTransitionFn) : undefined;
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Runs `update` (a synchronous React state update) inside a View Transition
 * when the browser supports it, tagging the transition with `name` so CSS
 * can target it via `::view-transition-old(name)` / `::view-transition-new(name)`
 * if a specific per-transition animation is defined; otherwise the default
 * root cross-fade in index.css applies.
 */
export function withViewTransition(update: UpdateFn, name?: string): void {
  const startViewTransition = getStartViewTransition();
  if (!startViewTransition || prefersReducedMotion()) {
    update();
    return;
  }
  if (name) document.documentElement.setAttribute('data-vt', name);
  const transition = startViewTransition(() => {
    update();
  });
  // The API exposes three promises (updateCallbackDone/ready/finished). Any of
  // them can reject — most commonly `ready`, when the browser can't capture a
  // valid "before" snapshot (invisible tab, a transition already in flight, an
  // unsupported DOM mutation) — and an unhandled rejection on ANY of them
  // surfaces as a console error even though the fallback (instant, unanimated
  // update) already happened correctly via `update()` above. Both are caught
  // defensively so a transition that can't animate never becomes a JS error.
  transition.ready.catch(() => { /* couldn't animate this time — expected in some environments/edge cases */ });
  transition.finished
    .catch(() => { /* aborted/interrupted — expected, not an error */ })
    .finally(() => {
      if (name) document.documentElement.removeAttribute('data-vt');
    });
}
