import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const ABOUT_TEXT =
  "Self-motivated Web Developer & Team Lead with over 4 years of experience. Passionate about clean code, scalable architecture, and leading teams to success. Currently at VNPT IT, previously Team Lead at FPT Software leading teams of up to 18 members. Eager to take on challenging roles that push the boundaries of modern web development."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 xl:px-16 py-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Constrain decorative images + content to max-width */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto w-full pointer-events-none">
        {/* Top-left: Moon */}
        <FadeIn
          delay={0.1}
          x={-30}
          y={0}
          duration={0.8}
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt=""
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
            loading="lazy"
          />
        </FadeIn>

        {/* Bottom-left: 3D object */}
        <FadeIn
          delay={0.15}
          x={-30}
          y={0}
          duration={0.8}
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt=""
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
            loading="lazy"
          />
        </FadeIn>

        {/* Top-right: Lego */}
        <FadeIn
          delay={0.1}
          x={30}
          y={0}
          duration={0.8}
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt=""
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
            loading="lazy"
          />
        </FadeIn>

        {/* Bottom-right: 3D group */}
        <FadeIn
          delay={0.15}
          x={30}
          y={0}
          duration={0.8}
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt=""
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center text-center z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-10 sm:mt-14 md:mt-16">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed max-w-[560px]"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            }}
          />

          {/* Info cards */}
          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20">
                <span className="font-black text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>6+</span>
                <span className="font-light uppercase tracking-widest text-xs text-[#D7E2EA]/60">Years Exp.</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20">
                <span className="font-black text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>18+</span>
                <span className="font-light uppercase tracking-widest text-xs text-[#D7E2EA]/60">Team Size</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20">
                <span className="font-black text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>5</span>
                <span className="font-light uppercase tracking-widest text-xs text-[#D7E2EA]/60">Companies</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20">
                <span className="font-black text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>2×</span>
                <span className="font-light uppercase tracking-widest text-xs text-[#D7E2EA]/60">Best Award</span>
              </div>
            </div>
          </FadeIn>

          {/* Achievements highlight */}
          <FadeIn delay={0.3} y={20}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-[560px] w-full">
              <div
                className="flex-1 rounded-2xl p-4 text-left"
                style={{ background: 'linear-gradient(135deg, rgba(182,0,168,0.15) 0%, rgba(118,33,176,0.1) 100%)', border: '1px solid rgba(182,0,168,0.25)' }}
              >
                <p className="font-black text-[#D7E2EA] text-sm uppercase tracking-widest mb-1">🏆 2024</p>
                <p className="font-light text-[#D7E2EA]/70 text-xs leading-relaxed">Most Effective Team Lead — on-time delivery, highest-performing team</p>
              </div>
              <div
                className="flex-1 rounded-2xl p-4 text-left"
                style={{ background: 'linear-gradient(135deg, rgba(182,0,168,0.15) 0%, rgba(118,33,176,0.1) 100%)', border: '1px solid rgba(182,0,168,0.25)' }}
              >
                <p className="font-black text-[#D7E2EA] text-sm uppercase tracking-widest mb-1">🏆 2023</p>
                <p className="font-light text-[#D7E2EA]/70 text-xs leading-relaxed">Best Employee of the Project — highest team productivity</p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-6 sm:mt-10 md:mt-14">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  )
}
