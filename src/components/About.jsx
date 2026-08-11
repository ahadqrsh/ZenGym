import { FiCheck } from 'react-icons/fi';
import Reveal from './Reveal';
import CountUp from './CountUp';
import './About.css';

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80';

const STATS = [
  { value: 500, suffix: '+', label: 'Members' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Certified Trainers' },
  { value: 100, suffix: '%', label: 'Results Driven' },
];

const POINTS = [
  'State-of-the-art training facility',
  'Personalized fitness & nutrition plans',
  'Flexible timings, 7 days a week',
  'Community that keeps you accountable',
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner glass-strong">
        <div className="glow-blob about__glow" />

        <Reveal type="left" className="about__visual">
          <div className="about__image-frame">
            <img src={ABOUT_IMG} alt="Gym interior" />
          </div>
          <div className="about__badge glass">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
        </Reveal>

        <Reveal type="right" className="about__content">
          <span className="section-tag">About Our Gym</span>
          <h2 className="section-title">
            Where Discipline <span className="text-gradient">Meets Results</span>
          </h2>
          <p className="about__text">
            For over a decade, ZEN has been the training ground for people who
            refuse to settle. We blend elite coaching, cutting-edge equipment and
            a relentless community to help you build a body — and a mindset — that
            lasts a lifetime.
          </p>

          <ul className="about__points">
            {POINTS.map((p) => (
              <li key={p}>
                <span className="about__check">
                  <FiCheck size={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="about__stats">
            {STATS.map((s) => (
              <div className="about__stat" key={s.label}>
                <h3>
                  <CountUp to={s.value} suffix={s.suffix} />
                </h3>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
