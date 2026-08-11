import { FiCheck, FiX, FiStar } from 'react-icons/fi';
import Reveal from './Reveal';
import { PLANS } from '../data/plans';
import { getWhatsAppLink } from '../constants';
import './Membership.css';

export default function Membership() {
  return (
    <section id="membership" className="section membership">
      <div className="glow-blob membership__glow" />
      <div className="container">
        <Reveal type="up" className="section-header">
          <span className="section-tag">Membership Plans</span>
          <h2 className="section-title">
            Choose Your <span className="text-gradient">Path to Power</span>
          </h2>
          <p className="section-subtitle">
            Flexible plans designed for every stage of your fitness journey.
            No hidden fees. Cancel anytime.
          </p>
        </Reveal>

        <div className="membership__grid">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              type={plan.highlight ? 'scale' : i === 0 ? 'left' : 'right'}
              delay={i * 0.1}
              className={`membership__card-wrap ${plan.highlight ? 'membership__card-wrap--highlight' : ''}`}
            >
              <div className={`membership__card glass-card ${plan.highlight ? 'membership__card--highlight' : ''}`}>
                {plan.highlight && (
                  <span className="membership__badge">
                    <FiStar size={12} /> Most Popular
                  </span>
                )}
                <h3>{plan.name}</h3>
                <div className="membership__price">
                  <span className="membership__currency">₹</span>
                  {plan.price}
                  <span className="membership__period">{plan.period}</span>
                </div>

                <ul className="membership__features">
                  {plan.features.map((f) => (
                    <li key={f.label} className={f.included ? '' : 'membership__feature--off'}>
                      <span className="membership__feature-icon">
                        {f.included ? <FiCheck size={13} /> : <FiX size={13} />}
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink(`Hi, I'm interested in the ${plan.name} Membership.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} membership__btn`}
                >
                  Join on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
