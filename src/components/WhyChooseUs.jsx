import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { FEATURES } from '../data/features';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why">
      <div className="glow-blob why__glow" />
      <div className="container">
        <Reveal type="up" className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Built For <span className="text-gradient">Serious Results</span>
          </h2>
          <p className="section-subtitle">
            Everything you need under one roof — elite coaching, premium equipment
            and a community that pushes you further, every single day.
          </p>
        </Reveal>

        <div className="why__grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} type="up" delay={i * 0.08}>
              <TiltCard className="why__card glass-card">
                <div className="why__icon">
                  <f.icon size={26} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
