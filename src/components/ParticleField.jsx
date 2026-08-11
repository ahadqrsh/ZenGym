import { useEffect, useRef } from 'react';

export default function ParticleField({ count = 70 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let raf;
    let width, height;
    let particles = [];
    let running = false;
    let sprite = null;

    const isSmallScreen = window.innerWidth < 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Cap DPR so retina/mobile screens don't blow up canvas resolution (main cost driver).
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const activeCount = reducedMotion ? 0 : isSmallScreen ? Math.round(count * 0.35) : count;

    // Pre-render a soft glow sprite once instead of using ctx.shadowBlur per particle per frame.
    const makeSprite = () => {
      const size = 24;
      const off = document.createElement('canvas');
      off.width = off.height = size;
      const octx = off.getContext('2d');
      const grad = octx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, 'rgba(255,80,80,0.9)');
      grad.addColorStop(0.5, 'rgba(255,30,30,0.35)');
      grad.addColorStop(1, 'rgba(255,0,0,0)');
      octx.fillStyle = grad;
      octx.fillRect(0, 0, size, size);
      return off;
    };

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
    };

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.8 + 0.4) * dpr,
      vy: (Math.random() * 0.35 + 0.08) * dpr,
      vx: (Math.random() - 0.5) * 0.15 * dpr,
      alpha: Math.random() * 0.5 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    });

    const init = () => {
      resize();
      sprite = makeSprite();
      particles = Array.from({ length: activeCount }, makeParticle);
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.vy;
        p.x += p.vx;
        p.pulse += 0.02;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        const flicker = (Math.sin(p.pulse) + 1) / 2;
        const size = p.r * 8 * (0.7 + flicker * 0.6);
        ctx.globalAlpha = p.alpha * (0.5 + flicker * 0.5);
        ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || activeCount === 0) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    init();
    if (activeCount > 0) start();

    // Pause the animation loop when the tab isn't visible or the field scrolls off-screen —
    // this was previously running forever and competing with scroll compositing on every frame.
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    observer.observe(canvas);

    const onResize = () => init();
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
    };
  }, [count]);

  return <canvas ref={canvasRef} className="particle-field" />;
}
