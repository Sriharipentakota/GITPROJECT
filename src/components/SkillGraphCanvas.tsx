import { useEffect, useRef, useState, useCallback } from 'react';

export interface GraphNode {
  id: string;
  label: string;
  color: string;
}

export interface GraphEdge {
  from: string; // prerequisite
  to: string;   // dependent skill
}

interface Props {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  height?: number;
}

interface SimNode extends GraphNode {
  x: number; y: number;
  vx: number; vy: number;
  fx: number | null; fy: number | null; // pinned position while dragging
}

const REPULSION = 2600;
const SPRING_LEN = 110;
const SPRING_K = 0.02;
const CENTER_K = 0.006;
const DAMPING = 0.86;
const NODE_R = 16;

/**
 * A minimal force-directed graph renderer: pure <canvas> + a hand-rolled
 * physics step (repulsion + spring edges + weak centering), no D3/vis
 * library. Nodes are draggable via pointer events; dragging pins a node
 * (fx/fy) so the rest of the graph settles around it, exactly like standard
 * force-directed layouts (D3-force, ngraph, etc.) behave — just implemented
 * directly since the whole simulation is ~60 lines of vector math.
 */
export default function SkillGraphCanvas({ nodes, edges, selectedId, onSelect, height = 480 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const simRef = useRef<Map<string, SimNode>>(new Map());
  const draggingRef = useRef<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const [size, setSize] = useState({ w: 800, h: height });

  // (Re)seed the simulation whenever the node/edge set changes (e.g. filter switch).
  useEffect(() => {
    const prev = simRef.current;
    const next = new Map<string, SimNode>();
    nodes.forEach((n, i) => {
      const existing = prev.get(n.id);
      const angle = (i / nodes.length) * Math.PI * 2;
      next.set(n.id, existing
        ? { ...existing, ...n }
        : {
            ...n,
            x: size.w / 2 + Math.cos(angle) * 120,
            y: size.h / 2 + Math.sin(angle) * 120,
            vx: 0, vy: 0, fx: null, fy: null,
          });
    });
    simRef.current = next;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges]);

  // Track container width responsively (canvas itself stays crisp via devicePixelRatio scaling).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width ?? 800;
      setSize(s => ({ ...s, w }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;
    const ctx = ctx2d; // narrowed, non-null `const` — stays non-null inside the `step` closure below
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size.w * dpr;
    canvas.height = size.h * dpr;
    canvas.style.width = `${size.w}px`;
    canvas.style.height = `${size.h}px`;
    ctx.scale(dpr, dpr);

    const isDark = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim().startsWith('#0')
      || getComputedStyle(document.documentElement).getPropertyValue('--bg').trim().startsWith('#07');
    const edgeColor = isDark ? 'rgba(148,163,184,0.35)' : 'rgba(71,85,105,0.35)';
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--tx').trim() || '#eee';

    function step() {
      const sim = simRef.current;
      const list = [...sim.values()];

      // Repulsion between every pair (O(n^2) — fine for the skill-map's node count).
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const a = list[i], b = list[j];
          let dx = a.x - b.x, dy = a.y - b.y;
          let distSq = dx * dx + dy * dy;
          if (distSq < 1) { dx = Math.random() - 0.5; dy = Math.random() - 0.5; distSq = 1; }
          const dist = Math.sqrt(distSq);
          const force = REPULSION / distSq;
          const fx = (dx / dist) * force, fy = (dy / dist) * force;
          a.vx += fx; a.vy += fy;
          b.vx -= fx; b.vy -= fy;
        }
      }

      // Spring attraction along prerequisite edges.
      for (const e of edges) {
        const a = sim.get(e.from), b = sim.get(e.to);
        if (!a || !b) continue;
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
        const stretch = dist - SPRING_LEN;
        const fx = (dx / dist) * stretch * SPRING_K, fy = (dy / dist) * stretch * SPRING_K;
        a.vx += fx; a.vy += fy;
        b.vx -= fx; b.vy -= fy;
      }

      // Weak centering so the whole graph doesn't drift off-canvas.
      for (const n of list) {
        n.vx += (size.w / 2 - n.x) * CENTER_K;
        n.vy += (size.h / 2 - n.y) * CENTER_K;
        n.vx *= DAMPING; n.vy *= DAMPING;
        if (n.fx !== null && n.fy !== null) { n.x = n.fx; n.y = n.fy; n.vx = 0; n.vy = 0; }
        else { n.x += n.vx; n.y += n.vy; }
        n.x = Math.max(NODE_R, Math.min(size.w - NODE_R, n.x));
        n.y = Math.max(NODE_R, Math.min(size.h - NODE_R, n.y));
      }

      // ── Render ──
      ctx.clearRect(0, 0, size.w, size.h);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = edgeColor;
      for (const e of edges) {
        const a = sim.get(e.from), b = sim.get(e.to);
        if (!a || !b) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        // small arrowhead near the dependent node
        const angle = Math.atan2(b.y - a.y, b.x - a.x);
        const ax = b.x - Math.cos(angle) * (NODE_R + 6), ay = b.y - Math.sin(angle) * (NODE_R + 6);
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax - Math.cos(angle - 0.4) * 7, ay - Math.sin(angle - 0.4) * 7);
        ctx.lineTo(ax - Math.cos(angle + 0.4) * 7, ay - Math.sin(angle + 0.4) * 7);
        ctx.closePath();
        ctx.fillStyle = edgeColor;
        ctx.fill();
      }
      for (const n of list) {
        const isSelected = n.id === selectedId;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isSelected ? NODE_R + 3 : NODE_R, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
        if (isSelected) {
          ctx.lineWidth = 2.5;
          ctx.strokeStyle = textColor;
          ctx.stroke();
        }
        ctx.fillStyle = textColor;
        ctx.font = '11px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y + NODE_R + 14);
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [size, edges, selectedId]);

  const nodeAt = useCallback((px: number, py: number): SimNode | null => {
    for (const n of simRef.current.values()) {
      if ((n.x - px) ** 2 + (n.y - py) ** 2 <= (NODE_R + 4) ** 2) return n;
    }
    return null;
  }, []);

  const toLocal = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', touchAction: 'none', cursor: draggingRef.current ? 'grabbing' : 'grab' }}
        onPointerDown={e => {
          const { x, y } = toLocal(e);
          const n = nodeAt(x, y);
          if (n) {
            draggingRef.current = n.id;
            n.fx = n.x; n.fy = n.y;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
          }
        }}
        onPointerMove={e => {
          if (!draggingRef.current) return;
          const n = simRef.current.get(draggingRef.current);
          if (!n) return;
          const { x, y } = toLocal(e);
          n.fx = x; n.fy = y;
        }}
        onPointerUp={e => {
          const id = draggingRef.current;
          if (id) {
            const n = simRef.current.get(id);
            const { x, y } = toLocal(e);
            // A drag shorter than ~4px counts as a click/tap, not a pan.
            if (n && Math.hypot((n.fx ?? x) - x, (n.fy ?? y) - y) < 4) onSelect(id);
            if (n) { n.fx = null; n.fy = null; }
          }
          draggingRef.current = null;
        }}
      />
    </div>
  );
}
