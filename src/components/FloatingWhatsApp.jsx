import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../constants';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppLink('Hi I want to join your gym')}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp glass"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: 1, duration: 0.5 },
        scale: { delay: 1, duration: 0.5 },
        y: { delay: 1.5, duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="floating-whatsapp__pulse" />
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
