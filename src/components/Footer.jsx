import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiMapPin, FiClock } from 'react-icons/fi';
import { GYM_NAME } from '../constants';
import './Footer.css';

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'About', id: 'about' },
  { label: 'Plans', id: 'membership' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'FAQ', id: 'faq' },
];

const HOURS = [
  { day: 'Monday – Friday', time: '5:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '6:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '7:00 AM – 9:00 PM' },
];

const SOCIALS = [
  { icon: FiInstagram, href: '#' },
  { icon: FiFacebook, href: '#' },
  { icon: FiTwitter, href: '#' },
  { icon: FiYoutube, href: '#' },
];

export default function Footer() {
  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="glow-blob footer__glow" />
      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <div className="navbar__logo">
            <span className="navbar__logo-mark">Z</span>
            <span>{GYM_NAME}</span>
          </div>
          <p>
            A premium fitness club built for people who demand real results —
            elite coaching, modern equipment and a relentless community.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s, i) => (
              <a href={s.href} key={i} className="footer__social glass" aria-label="social link">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => handleNavClick(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>
            <FiClock size={15} /> Opening Hours
          </h4>
          <ul className="footer__hours">
            {HOURS.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <strong>{h.time}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>
            <FiMapPin size={15} /> Address
          </h4>
          <p>
            42 Iron Avenue, MG Road,
            <br />
            Bengaluru, Karnataka 560001
          </p>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} {GYM_NAME}. All rights reserved.</span>
        <span>Designed for those who never settle.</span>
      </div>
    </footer>
  );
}
