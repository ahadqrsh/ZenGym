import { motion } from 'framer-motion';

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -70 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 70 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  rotate: {
    hidden: { opacity: 0, rotate: -6, y: 40 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(14px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
};

export default function Reveal({
  children,
  type = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className,
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={VARIANTS[type] || VARIANTS.up}
      transition={{ duration, delay, ease: [0.19, 1, 0.22, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
