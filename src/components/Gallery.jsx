import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';
import Reveal from './Reveal';
import { GALLERY_IMAGES } from '../data/gallery';
import './Gallery.css';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };
  const next = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i + 1) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <Reveal type="up" className="section-header">
          <span className="section-tag">Gym Gallery</span>
          <h2 className="section-title">
            Inside The <span className="text-gradient">Arena</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the space where transformations happen every day.
          </p>
        </Reveal>

        <div className="gallery__masonry">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              type="scale"
              delay={(i % 4) * 0.08}
              className={`gallery__item ${img.tall ? 'gallery__item--tall' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="gallery__overlay glass">
                <FiZoomIn size={22} />
                <span>{img.caption}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="gallery__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className="gallery__lightbox-close" onClick={close}>
              <FiX size={26} />
            </button>
            <button className="gallery__lightbox-nav gallery__lightbox-nav--prev" onClick={prev}>
              <FiChevronLeft size={28} />
            </button>

            <motion.div
              className="gallery__lightbox-content"
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={GALLERY_IMAGES[activeIndex].src} alt={GALLERY_IMAGES[activeIndex].caption} />
              <p>{GALLERY_IMAGES[activeIndex].caption}</p>
            </motion.div>

            <button className="gallery__lightbox-nav gallery__lightbox-nav--next" onClick={next}>
              <FiChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
