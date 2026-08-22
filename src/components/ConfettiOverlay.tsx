import type { RefObject } from 'react';

interface Props {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  active: boolean;
}

/**
 * Mount once near the app root (sibling to everything else, not inside any
 * scrollable/overflow-hidden container) so the canvas can cover the full
 * viewport. Stays in the DOM at all times but only receives width/height and
 * paints when `active` — otherwise it's a zero-cost, invisible 0-alpha layer.
 */
export default function ConfettiOverlay({ canvasRef, active }: Props) {
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 10000,
        opacity: active ? 1 : 0,
        transition: active ? 'none' : 'opacity 0.3s ease',
      }}
    />
  );
}
