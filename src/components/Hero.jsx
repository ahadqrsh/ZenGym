import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FiArrowRight, FiMessageCircle, FiChevronDown } from 'react-icons/fi';
import { getWhatsAppLink } from '../constants';
import ParticleField from './ParticleField';
import './Hero.css';

const HERO_IMG =
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 50, damping: 20 });
  const springY = useSpring(my, { stiffness: 50, damping: 20 });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 30);
    my.set((e.clientY / innerHeight - 0.5) * 30);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero"
      onMouseMove={handleMouseMove}
    >
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <div className="hero__beam hero__beam--1" />
        <div className="hero__beam hero__beam--2" />
        <div className="hero__beam hero__beam--3" />
        <div className="hero__smoke hero__smoke--1" />
        <div className="hero__smoke hero__smoke--2" />
        <motion.div
          className="glow-blob hero__glow hero__glow--1"
          style={{ x: springX, y: springY }}
        />
        <motion.div
          className="glow-blob hero__glow hero__glow--2"
          style={{ x: useTransform(springX, (v) => -v), y: useTransform(springY, (v) => -v) }}
        />
        <ParticleField count={80} />
        <div className="hero__grid" />
        <div className="hero__vignette" />
      </motion.div>

      <motion.div className="container hero__inner" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="hero__content">
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <span className="hero__eyebrow-dot" /> PREMIUM FITNESS EXPERIENCE
          </motion.span>

          <h1 className="hero__title">
            <motion.span
              className="hero__title-line"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              Transform Your Body.
            </motion.span>
            <motion.span
              className="hero__title-line hero__title-line--accent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              Transform Your Life.
            </motion.span>
          </h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            Elite training programs, world-class equipment, and expert coaches
            engineered to push you past every limit. Your strongest self starts today.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href={getWhatsAppLink('Hi I want to join your gym')}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Join Now <FiArrowRight />
            </a>
            <a
              href={getWhatsAppLink('Hi I want to join your gym')}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <FiMessageCircle /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="hero__stat">
              <strong>500+</strong>
              <span>Members</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>10+</strong>
              <span>Years</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>15+</strong>
              <span>Trainers</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            className="hero__image-wrap"
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__image-ring" />
            <img src={HERO_IMG} alt="Athlete training" className="hero__image" />
            <div className="hero__image-glow" />
          </motion.div>

          <motion.div
            className="hero__floating-card glass"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <strong>🔥 Calories Burned</strong>
            <span>820 kcal / session</span>
          </motion.div>

          <motion.div
            className="hero__floating-card hero__floating-card--2 glass"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <strong>💪 Personal Best</strong>
            <span>+18% Strength</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <FiChevronDown size={22} />
      </motion.div>
    </section>
  );
}
