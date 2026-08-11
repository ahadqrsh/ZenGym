import { useEffect, useRef } from 'react';

export default function ParticleField({ count = 70 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.8 + 0.4) * devicePixelRatio,
      vy: (Math.random() * 0.35 + 0.08) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
      alpha: Math.random() * 0.5 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: count }, makeParticle);
    };

    const draw = () => {
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
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.7 + flicker * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${20 + flicker * 30}, ${20 + flicker * 30}, ${p.alpha * (0.5 + flicker * 0.5)})`;
        ctx.shadowBlur = 8 * devicePixelRatio;
        ctx.shadowColor = 'rgba(255,0,0,0.8)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [count]);

  return <canvas ref={canvasRef} className="particle-field" />;
}
