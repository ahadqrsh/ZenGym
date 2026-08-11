import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import Reveal from './Reveal';
import { getWhatsAppLink } from '../constants';
import './CTA.css';

export default function CTA() {
  return (
    <section className="section cta">
      <div className="glow-blob cta__glow cta__glow--1" />
      <div className="glow-blob cta__glow cta__glow--2" />
      <div className="container">
        <Reveal type="scale" className="cta__box glass-strong">
          <span className="section-tag">Ready When You Are</span>
          <h2 className="cta__title">Start Your Fitness Journey Today</h2>
          <p className="section-subtitle cta__subtitle">
            Stop waiting for the "right time." Your strongest, healthiest self is
            one decision away — join ZEN now and let's build it together.
          </p>
          <div className="cta__actions">
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
              <FiMessageCircle /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
