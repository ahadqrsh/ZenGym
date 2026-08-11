import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';
import Reveal from './Reveal';
import './BMICalculator.css';

const getCategory = (bmi) => {
  if (bmi < 18.5) return { label: 'Underweight', color: '#4fb0ff' };
  if (bmi < 25) return { label: 'Normal', color: '#33e08a' };
  if (bmi < 30) return { label: 'Overweight', color: '#ffb84f' };
  return { label: 'Obese', color: '#ff4f4f' };
};

export default function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [result, setResult] = useState(null);

  const bmi = useMemo(() => {
    if (!height || !weight) return 0;
    const h = height / 100;
    return weight / (h * h);
  }, [height, weight]);

  const category = getCategory(result ?? 0);
  const gaugePercent = Math.min(100, ((result ?? 0) / 40) * 100);

  const handleCalculate = () => setResult(bmi);

  return (
    <section id="bmi" className="section bmi">
      <div className="glow-blob bmi__glow" />
      <div className="container bmi__inner">
        <Reveal type="up" className="section-header">
          <span className="section-tag">BMI Calculator</span>
          <h2 className="section-title">
            Know Your <span className="text-gradient">Body Metrics</span>
          </h2>
          <p className="section-subtitle">
            Calculate your Body Mass Index instantly and track where you stand.
          </p>
        </Reveal>

        <Reveal type="scale" className="bmi__card glass-strong">
          <div className="bmi__inputs">
            <div className="bmi__field">
              <div className="bmi__field-label">
                <span>Height</span>
                <strong>{height} cm</strong>
              </div>
              <input
                type="range"
                min="120"
                max="220"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="bmi__slider"
              />
            </div>

            <div className="bmi__field">
              <div className="bmi__field-label">
                <span>Weight</span>
                <strong>{weight} kg</strong>
              </div>
              <input
                type="range"
                min="30"
                max="180"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="bmi__slider"
              />
            </div>

            <button className="btn btn-primary bmi__btn" onClick={handleCalculate}>
              <FiActivity /> Calculate BMI
            </button>
          </div>

          <div className="bmi__result-panel">
            <div className="bmi__gauge">
              <svg viewBox="0 0 200 120" className="bmi__gauge-svg">
                <path
                  d="M 20 110 A 90 90 0 0 1 180 110"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M 20 110 A 90 90 0 0 1 180 110"
                  fill="none"
                  stroke={result !== null ? category.color : 'var(--red)'}
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="251"
                  initial={{ strokeDashoffset: 251 }}
                  animate={{ strokeDashoffset: 251 - (251 * gaugePercent) / 100 }}
                  transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                  style={{ filter: `drop-shadow(0 0 10px ${result !== null ? category.color : 'var(--red)'})` }}
                />
              </svg>

              <div className="bmi__gauge-value">
                <AnimatePresence mode="wait">
                  <motion.strong
                    key={result ?? 'empty'}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {result !== null ? result.toFixed(1) : '--'}
                  </motion.strong>
                </AnimatePresence>
                <span>BMI Score</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {result !== null && (
                <motion.div
                  key={category.label}
                  className="bmi__category"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderColor: category.color, color: category.color }}
                >
                  {category.label}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bmi__scale">
              <div className="bmi__scale-item"><i style={{ background: '#4fb0ff' }} /> Underweight</div>
              <div className="bmi__scale-item"><i style={{ background: '#33e08a' }} /> Normal</div>
              <div className="bmi__scale-item"><i style={{ background: '#ffb84f' }} /> Overweight</div>
              <div className="bmi__scale-item"><i style={{ background: '#ff4f4f' }} /> Obese</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
