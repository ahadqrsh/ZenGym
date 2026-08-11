// Shared Tailwind utility-class strings reused across sections.
// Kept centralized so common patterns (buttons, glass panels, section
// headers) don't drift between components.

export const container = 'w-[min(1280px,92vw)] mx-auto relative';

export const section = 'relative overflow-hidden py-[clamp(70px,10vw,140px)] max-md:py-[60px]';

export const sectionTag = 'inline-block text-[0.8rem] tracking-[0.35em] uppercase text-red font-semibold mb-4';

export const sectionTitle = 'font-display text-[clamp(2.4rem,6vw,4.5rem)] tracking-[0.02em] leading-[1.02] uppercase mb-5';

export const sectionSubtitle = 'text-white/70 text-[clamp(0.95rem,1.3vw,1.15rem)] max-w-[620px] font-light';

export const sectionHeader = 'text-center flex flex-col items-center mb-[clamp(40px,6vw,72px)]';

export const textGradient = 'bg-gradient-to-r from-white to-red bg-clip-text text-transparent';

export const glass = 'bg-white/[0.04] backdrop-blur-[18px] border border-white/[0.12] rounded-[20px] relative';

export const glassStrong = 'bg-white/[0.07] backdrop-blur-[24px] border border-white/[0.12] rounded-3xl';

export const glassCard =
  'bg-white/[0.04] backdrop-blur-[18px] border border-white/[0.12] rounded-[20px] relative ' +
  'transition-[transform,box-shadow,border-color,background-color] duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] ' +
  'hover:-translate-y-2.5 hover:scale-[1.02] hover:border-red/35 hover:shadow-[0_0_40px_rgba(255,0,0,0.35)] hover:bg-white/[0.07]';

const btnBase =
  'relative inline-flex items-center justify-center gap-2.5 px-9 py-4 text-[0.9rem] font-bold tracking-[0.08em] ' +
  'uppercase rounded-full overflow-hidden isolate whitespace-nowrap ' +
  'transition-transform duration-[350ms] ease-[cubic-bezier(0.19,1,0.22,1)] active:scale-[0.96]';

export const btnPrimary = `${btnBase} bg-gradient-to-br from-red to-dark-red text-white shadow-[0_8px_30px_rgba(255,0,0,0.35)] hover:shadow-[0_8px_45px_rgba(255,0,0,0.6)] hover:-translate-y-[3px]`;

export const btnOutline = `${btnBase} bg-white/5 backdrop-blur-[12px] border border-white/25 text-white hover:border-red hover:shadow-[0_0_30px_rgba(255,0,0,0.35)] hover:-translate-y-[3px] hover:bg-red/[0.08]`;

export const glowBlob = 'absolute rounded-full blur-[90px] pointer-events-none z-0';

export const logo = 'flex items-center gap-2.5 font-display text-2xl tracking-[0.12em]';

export const logoMark =
  'w-[38px] h-[38px] rounded-[10px] flex items-center justify-center bg-gradient-to-br from-red to-dark-red shadow-[0_0_20px_rgba(255,0,0,0.5)] font-display';
