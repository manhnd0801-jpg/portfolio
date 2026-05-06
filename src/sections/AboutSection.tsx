import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import ReactLogo from '../components/ReactLogo'

// Thời gian thực tế: GO Solutions Dec 2018 → nay (May 2026) = 7+ năm
const ABOUT_TEXT =
  "Self-motivated Web Developer & Team Lead with over 7 years of experience building high-quality web applications. Passionate about clean code, scalable architecture, and leading teams to success. Currently at VNPT IT, previously Team Lead at FPT Software leading teams of up to 18 members."

// Tech icon SVGs — inline, không cần external image, đúng chủ đề dev
const DEV_ICONS = {
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
      <path d="M14.5 11H17M14.5 11V17M14.5 11H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13.5C7 12.1 8 11 9.5 11C11 11 12 12.1 12 13.5C12 14.9 11 16 9.5 16C8 16 7 15 7 13.5Z" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  // GitHub logo (top-right)
  github: (
    <svg viewBox="0 0 24 24" fill="#D7E2EA" className="w-full h-full" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M8 6L3 12L8 18" stroke="#D7E2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6L21 12L16 18" stroke="#D7E2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4L10 20" stroke="#D7E2EA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 xl:px-16 py-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Decorative dev icons — constrained to max-width */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto w-full pointer-events-none overflow-hidden">

        {/* Top-left: React logo — animated */}
        <FadeIn delay={0.1} x={-30} y={0} duration={0.8}
          className="absolute top-[6%] left-[2%] md:left-[4%]">
          <div className="w-[80px] sm:w-[110px] md:w-[140px] opacity-[0.18]">
            <ReactLogo className="w-full h-full" />
          </div>
        </FadeIn>

        {/* Bottom-left: TypeScript */}
        <FadeIn delay={0.15} x={-30} y={0} duration={0.8}
          className="absolute bottom-[8%] left-[3%] md:left-[6%]">
          <div className="w-[70px] sm:w-[95px] md:w-[120px] opacity-[0.12]">
            {DEV_ICONS.typescript}
          </div>
        </FadeIn>

        {/* Top-right: GitHub */}
        <FadeIn delay={0.1} x={30} y={0} duration={0.8}
          className="absolute top-[6%] right-[2%] md:right-[4%]">
          <div className="w-[80px] sm:w-[110px] md:w-[140px] opacity-[0.12]">
            {DEV_ICONS.github}
          </div>
        </FadeIn>

        {/* Bottom-right: Code brackets */}
        <FadeIn delay={0.15} x={30} y={0} duration={0.8}
          className="absolute bottom-[8%] right-[3%] md:right-[6%]">
          <div className="w-[80px] sm:w-[110px] md:w-[140px] opacity-[0.12]">
            {DEV_ICONS.code}
          </div>
        </FadeIn>

      </div>

      {/* Center content */}
      <div className="flex flex-col items-center text-center z-10">
        <FadeIn delay={0} y={16}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14 mt-10 sm:mt-12 md:mt-14">

          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed max-w-[580px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Stats */}
          <FadeIn delay={0.2} y={16}>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {[
                { value: '7+', label: 'Years Exp.' },
                { value: '18+', label: 'Team Size' },
                { value: '5',   label: 'Companies' },
                { value: '2×',  label: 'Best Award' },
              ].map(({ value, label }) => (
                <div key={label}
                  className="flex flex-col items-center gap-1 px-5 py-4 rounded-2xl border border-[#D7E2EA]/15"
                >
                  <span className="font-black text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}>
                    {value}
                  </span>
                  <span className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                    style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.72rem)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Achievements */}
          <FadeIn delay={0.25} y={16}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[580px] w-full">
              <div className="flex-1 rounded-2xl p-4 text-left"
                style={{
                  background: 'linear-gradient(135deg, rgba(182,0,168,0.12) 0%, rgba(118,33,176,0.08) 100%)',
                  border: '1px solid rgba(182,0,168,0.2)',
                }}>
                <p className="font-black text-[#D7E2EA] uppercase tracking-widest mb-1.5"
                  style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}>
                  🏆 2024 — FPT Software
                </p>
                <p className="font-light text-[#D7E2EA]/60 leading-relaxed"
                  style={{ fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)' }}>
                  Most Effective Team Lead — on-time delivery, highest-performing team of 18 members
                </p>
              </div>
              <div className="flex-1 rounded-2xl p-4 text-left"
                style={{
                  background: 'linear-gradient(135deg, rgba(182,0,168,0.12) 0%, rgba(118,33,176,0.08) 100%)',
                  border: '1px solid rgba(182,0,168,0.2)',
                }}>
                <p className="font-black text-[#D7E2EA] uppercase tracking-widest mb-1.5"
                  style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}>
                  🏆 2023 — FPT Software
                </p>
                <p className="font-light text-[#D7E2EA]/60 leading-relaxed"
                  style={{ fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)' }}>
                  Best Employee of the Project — led team with highest productivity
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Soft skills row */}
          <FadeIn delay={0.3} y={16}>
            <div className="flex flex-wrap justify-center gap-2">
              {['Leadership', 'Mentoring', 'Communication', 'Problem Solving', 'Agile'].map((s) => (
                <span key={s}
                  className="px-4 py-1.5 rounded-full font-light uppercase tracking-widest"
                  style={{
                    border: '1px solid rgba(215,226,234,0.15)',
                    color: '#D7E2EA',
                    fontSize: 'clamp(0.6rem, 0.95vw, 0.78rem)',
                    opacity: 0.55,
                  }}>
                  {s}
                </span>
              ))}
            </div>
          </FadeIn>

          <ContactButton />

        </div>
      </div>
    </section>
  )
}
