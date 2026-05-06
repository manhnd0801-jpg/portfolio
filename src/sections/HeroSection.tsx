import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip', backgroundColor: '#0C0C0C' }}
    >
      {/* Heading — dưới navbar fixed (pt-16 = 64px) */}
      <div className="overflow-hidden pt-16 sm:pt-20">
        <FadeIn delay={0.1} y={30}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center
              text-[13vw] sm:text-[13vw] md:text-[13vw] lg:text-[14.5vw]"
          >
            Hi, i&apos;m Mạnh
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — chiếm phần còn lại, dính bottom */}
      <FadeIn
        delay={0.35}
        y={20}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
      >
        <Magnet
          padding={60}
          strength={6}
          activeTransition="transform 0.4s ease-out"
          inactiveTransition="transform 0.7s ease-in-out"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Nguyễn Đức Mạnh"
            className="h-auto object-contain"
            style={{ width: 'clamp(260px, 45vw, 520px)' }}
            loading="eager"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom bar — z-20 để đè lên portrait */}
      <div className="mt-auto flex justify-between items-end pb-6 sm:pb-8 md:pb-10 px-6 md:px-10 xl:px-16 relative z-20 max-w-[1400px] mx-auto w-full">
        <FadeIn delay={0.5} y={16}>
          <p
            className="font-light uppercase tracking-wide leading-snug"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.75rem, 1.6vw, 1.4rem)',
              maxWidth: 'clamp(150px, 22vw, 280px)',
            }}
          >
            ReactJS developer &amp; team lead — 7+ years building scalable web apps
          </p>
        </FadeIn>

        <FadeIn delay={0.6} y={16}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
