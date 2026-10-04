import { useEffect, useRef, useState } from 'react';

export function ThreadDrawing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef({ edition: -1, seed: 0, time: 0, pointer: { x: 0, y: 0 } });
  const [edition, setEdition] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const color = getComputedStyle(canvas).getPropertyValue('--accent').trim();
    let frame = 0;
    let visible = false;
    let width = 800;
    let height = 600;
    let previous = 0;
    const state = drawing.current;
    if (state.edition !== edition) {
      state.edition = edition;
      state.seed = Math.random() * Math.PI * 2;
      state.time = 0;
    }
    const { pointer, seed } = state;
    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      context.font = '12px monospace';
      const occupied = new Set<string>();
      for (let strand = 0; strand < 6; strand++) {
        context.globalAlpha = .18 + strand * .035;
        for (let step = 0; step < 72; step++) {
          const angle = step / 72 * Math.PI * 2;
          const offset = strand * .065;
          const radius = .36 + .025 * Math.sin(seed + strand);
          const x = Math.round((width * .5 + Math.cos(angle + offset) * width * radius + Math.sin(angle * 3 + seed + state.time * .08) * 22 + pointer.x * 10) / 12) * 12;
          const y = Math.round((height * .48 + Math.sin(angle) * height * radius + Math.sin(angle * 2 + offset * 5 + state.time * .09) * 24 + pointer.y * 10) / 18) * 18;
          const key = `${x},${y}`;
          if (Math.abs(x - width / 2) < Math.min(270, width * .46) && Math.abs(y - height / 2) < 155) continue;
          if (occupied.has(key) || y < 40 || y > height - 80) continue;
          occupied.add(key);
          context.fillText(step % 11 === 0 ? '+' : step % 3 === 0 ? ':' : '.', x, y);
        }
      }
    };
    const tick = (now: number) => {
      state.time += Math.min((now - previous) / 1000, .04);
      previous = now;
      draw();
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      canvas.dataset.animating = String(visible && !document.hidden && !motion.matches && !paused);
      draw();
      if (canvas.dataset.animating === 'true') { previous = performance.now(); frame = requestAnimationFrame(tick); }
    };
    const resize = new ResizeObserver(() => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    });
    const viewport = new IntersectionObserver(([entry]) => { visible = Boolean(entry?.isIntersecting); sync(); });
    const move = (event: PointerEvent) => {
      if (motion.matches || paused) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width - .5;
      pointer.y = (event.clientY - bounds.top) / bounds.height - .5;
    };
    const reset = () => { pointer.x = 0; pointer.y = 0; };
    resize.observe(canvas);
    viewport.observe(canvas);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', reset);
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect(); viewport.disconnect();
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
    };
  }, [edition, paused]);
  return <figure>
    <canvas ref={canvasRef} className="thread-canvas" width="400" height="400" aria-hidden="true" />
    <figcaption className="thread-caption"><span>a little connectedness</span><button type="button" onClick={() => setEdition(edition + 1)} aria-label="Redraw the thread composition">redraw ↻</button><button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'resume' : 'pause'}</button></figcaption>
  </figure>;
}
