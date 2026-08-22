import { useCallback, useEffect, useRef, useState } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number; vRotation: number;
  size: number;
  color: string;
  shape: 'rect' | 'circle';
  life: number; // 0..1, counts down
}

const COLORS = ['#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ef4444', '#06b6d4'];

/**
 * Pure <canvas> confetti burst, no library. `useConfetti()` returns a
 * `fire()` function and a `<canvas>`-rendering `Overlay` component to mount
 * once near the root — call `fire()` from anywhere (e.g. on mission
 * completion) and particles animate for ~2.2s then the canvas clears itself
 * and goes fully inert (pointer-events: none throughout, so it never blocks
 * clicks on the real UI underneath).
 */
export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  const fire = useCallback((originXRatio = 0.5, originYRatio = 0.35) => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { innerWidth: w, innerHeight: h } = window;
    const originX = w * originXRatio;
    const originY = h * originYRatio;

    const burst: Particle[] = [];
    const count = 140;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 4 + Math.random() * 9;
      burst.push({
        x: originX, y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3, // initial upward bias
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.4,
        size: 5 + Math.random() * 5,
        color: COLORS[i % COLORS.length],
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
        life: 1,
      });
    }
    particlesRef.current = burst;
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const gravity = 0.16;
    const drag = 0.99;

    const step = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      let anyAlive = false;

      for (const p of particlesRef.current) {
        if (p.life <= 0) continue;
        p.vy += gravity;
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRotation;
        p.life -= 0.012;
        if (p.life <= 0 || p.y > window.innerHeight + 40) { p.life = 0; continue; }
        anyAlive = true;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.4));
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (anyAlive) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        setActive(false);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  return { fire, canvasRef, active };
}

export type UseConfettiReturn = ReturnType<typeof useConfetti>;
