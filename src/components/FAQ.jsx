import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import Reveal from './Reveal';
import { FAQS } from '../data/faq';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container faq__inner">
        <Reveal type="left" className="faq__intro">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before starting your journey with us.
            Still unsure? Message us directly on WhatsApp.
          </p>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal type="up" delay={i * 0.06} key={item.q}>
                <div className={`faq__item glass-card ${isOpen ? 'faq__item--open' : ''}`}>
                  <button
                    className="faq__question"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <motion.span
                      className="faq__icon"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <FiPlus size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq__answer-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                      >
                        <p className="faq__answer">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
