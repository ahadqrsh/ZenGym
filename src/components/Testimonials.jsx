import { FiStar } from 'react-icons/fi';
import Reveal from './Reveal';
import { TESTIMONIALS } from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="glow-blob testimonials__glow" />
      <div className="container">
        <Reveal type="up" className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            Real Stories, <span className="text-gradient">Real Transformations</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the people who trained with us.
          </p>
        </Reveal>
      </div>

      <div className="testimonials__marquee-wrap">
        <div className="testimonials__marquee">
          {loop.map((t, i) => (
            <div className="testimonial-card glass-card" key={`${t.name}-${i}`}>
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <FiStar key={s} size={14} fill="var(--red)" color="var(--red)" />
                ))}
              </div>
              <p className="testimonial-card__review">"{t.review}"</p>
              <div className="testimonial-card__author">
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
