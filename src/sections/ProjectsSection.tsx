import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const EXPERIENCES = [
  {
    number: '01',
    period: 'Dec 2025 – Present',
    company: 'VNPT IT',
    role: 'Developer FE ReactJS',
    type: 'Full-time',
    description:
      'Building VNPT Composable Platform — a comprehensive low-code development platform based on Lowcoder, enabling users to create software applications with minimal coding.',
    responsibilities: [
      'Develop and maintain the main low-code platform',
      'Build DSL-to-standalone conversion service',
      'Ensure platform performance and scalability',
    ],
    tags: ['ReactJS', 'TypeScript', 'Low-Code', 'Lowcoder', 'DSL'],
  },
  {
    number: '02',
    period: 'Jan 2024 – Dec 2025',
    company: 'FPT Software',
    role: 'Team Lead & Sub-PM',
    type: 'Team: 13 → 18 members',
    description:
      'Led a growing team of 13–18 developers. Defined architecture, enforced coding standards, mentored juniors, managed WBS plans, tracked delivery, and reported to PM. Recognized as most effective Team Lead in 2024.',
    responsibilities: [
      'Design and shape source code architecture',
      'Review system design for functional & non-functional requirements',
      'Create WBS, track progress, identify & mitigate risks',
      'Mentor junior members, evaluate performance',
      'Support PM in rewards proposals and resource adjustments',
    ],
    tags: ['ReactJS', 'TypeScript', 'Architecture', 'WBS', 'Mentoring', 'Risk Management'],
    award: '🏆 Most Effective Team Lead 2024',
  },
  {
    number: '03',
    period: 'May 2022 – Dec 2023',
    company: 'FPT Software',
    role: 'Senior Developer ReactJS',
    type: 'Team: up to 7 members',
    description:
      'Developed high-performance customer-facing accountant applications. Created detailed design documents, reviewed code, implemented features, and led a sub-team. Awarded Best Employee of the Project in 2023.',
    responsibilities: [
      'Develop high-performance accountant applications',
      'Create detailed design documents',
      'Code review and common function development',
      'Monitor and evaluate team performance',
    ],
    tags: ['ReactJS', 'Redux-Saga', 'TypeScript', 'Material UI', 'Styled-Components', 'Storybook', 'React Hook Form', 'Azure', '.NET 6.0'],
    award: '🏆 Best Employee of the Project 2023',
  },
  {
    number: '04',
    period: 'Apr 2021 – Apr 2022',
    company: 'FPT Software',
    role: 'Junior Developer ReactJS',
    type: 'Full-time',
    description:
      'Built websites adhering to Web 2.0 standards. Customized UI/UX, fixed bugs, and implemented CI/CD pipelines. Gained hands-on experience with real-time communication via WebRTC.',
    responsibilities: [
      'Build websites to Web 2.0 industry standards',
      'Customize UI/UX components',
      'Implement CI/CD pipelines on Azure',
      'Bug fixing and quality assurance',
    ],
    tags: ['ReactJS', 'Redux Toolkit', 'Styled-Components', 'Azure', 'WebRTC', 'CI/CD'],
  },
  {
    number: '05',
    period: 'Dec 2018 – Mar 2021',
    company: 'GO Solutions JSC',
    role: 'Junior Developer ReactJS',
    type: 'Full-time · Agile',
    description:
      'Developed business management software using Agile methodologies. Managed and coordinated dev team activities, conducted code reviews, implemented features, and ensured project quality and on-time delivery.',
    responsibilities: [
      'Develop business management software',
      'Manage and coordinate Dev team activities',
      'Code review and common function development',
      'Analyze issues and propose improvements',
      'Monitor and evaluate project risks',
    ],
    tags: ['ReactJS', 'Redux-Saga', 'React Hooks', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Ant Design', 'GitLab', 'Trello', 'Agile'],
  },
]

const TOTAL_CARDS = EXPERIENCES.length

function ExperienceCard({
  exp,
  index,
  containerRef,
}: {
  exp: (typeof EXPERIENCES)[0]
  index: number
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.015 // giảm từ 0.025 → 0.015, scale ít hơn
  const scale = useTransform(
    scrollYProgress,
    [index / TOTAL_CARDS, 1],
    [1, targetScale]
  )

  const borderRadius = 'clamp(32px, 4vw, 50px)'

  return (
    <div
      className="h-[80vh] flex items-start justify-center" // giảm từ 90vh → 80vh, scroll ngắn hơn
      style={{ paddingTop: `${index * 20}px` }} // giảm từ 24 → 20
    >
      <motion.div
        className="sticky top-20 md:top-28 w-full border-2 border-[#D7E2EA]/60 p-5 sm:p-7 md:p-9"
        style={{
          scale,
          borderRadius,
          backgroundColor: '#111111',
          transformOrigin: 'top center',
        }}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div className="flex items-start gap-4 md:gap-5">
            {/* Number */}
            <span
              className="font-black leading-none flex-shrink-0"
              style={{ color: '#D7E2EA', opacity: 0.25, fontSize: 'clamp(2rem, 6vw, 80px)' }}
            >
              {exp.number}
            </span>
            <div className="flex flex-col gap-0.5 pt-1">
              <span
                className="font-light uppercase tracking-widest"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.6rem, 1vw, 0.85rem)', opacity: 0.45 }}
              >
                {exp.period}
              </span>
              <span
                className="font-black uppercase"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2.8vw, 2.2rem)', lineHeight: 1.1 }}
              >
                {exp.company}
              </span>
              <span
                className="font-medium"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.8rem, 1.6vw, 1.2rem)', opacity: 0.65 }}
              >
                {exp.role}
              </span>
              <span
                className="font-light uppercase tracking-widest mt-0.5"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)', opacity: 0.4 }}
              >
                {exp.type}
              </span>
            </div>
          </div>

          {/* Award badge */}
          {'award' in exp && exp.award && (
            <span
              className="self-start sm:self-center px-4 py-2 rounded-full font-medium text-center"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                color: 'white',
                fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
                whiteSpace: 'nowrap',
              }}
            >
              {exp.award}
            </span>
          )}
        </div>

        {/* Two-column layout: description + responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <p
              className="font-light leading-relaxed"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.82rem, 1.4vw, 1.05rem)', opacity: 0.75 }}
            >
              {exp.description}
            </p>
          </div>
          <div>
            <p
              className="font-medium uppercase tracking-widest mb-2"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.55rem, 0.9vw, 0.72rem)', opacity: 0.4 }}
            >
              Key Responsibilities
            </p>
            <ul className="flex flex-col gap-1.5">
              {exp.responsibilities.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-light leading-snug"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.78rem, 1.3vw, 1rem)', opacity: 0.7 }}
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D7E2EA]/40 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full font-light uppercase tracking-wider"
              style={{
                border: '1px solid rgba(215,226,234,0.2)',
                color: '#D7E2EA',
                fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)',
                opacity: 0.65,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="experience"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 xl:px-16 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Inner max-width wrapper */}
      <div className="max-w-[1400px] mx-auto">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* Sticky cards */}
      <div ref={containerRef}>
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard
            key={exp.number}
            exp={exp}
            index={index}
            containerRef={containerRef}
          />
        ))}
      </div>

      {/* Education block */}
      <FadeIn delay={0.1} y={30}>
        <div className="mt-24 sm:mt-32 max-w-4xl mx-auto">
          <p
            className="font-medium uppercase tracking-widest mb-6 text-center"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.65rem, 1.1vw, 0.9rem)', opacity: 0.4 }}
          >
            Education
          </p>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 sm:p-8 rounded-[28px] border border-[#D7E2EA]/15"
          >
            <div className="flex flex-col gap-1">
              <span
                className="font-black uppercase"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
              >
                Electric Power University
              </span>
              <span
                className="font-light"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.82rem, 1.4vw, 1.1rem)', opacity: 0.6 }}
              >
                Bachelor of Software Technology
              </span>
              <span
                className="font-light"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', opacity: 0.35 }}
              >
                235 Hoang Quoc Viet, Co Nhue, Bac Tu Liem, Hà Nội
              </span>
            </div>
            <span
              className="font-black self-start sm:self-center flex-shrink-0"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem, 3vw, 2rem)', opacity: 0.3 }}
            >
              2015 – 2020
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Contact footer */}
      <FadeIn delay={0.2} y={30}>
        <div
          id="contact"
          className="mt-20 sm:mt-28 text-center flex flex-col items-center gap-6"
        >
          <h3
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}
          >
            Let&apos;s work together
          </h3>
          <p
            className="font-light max-w-md"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)', opacity: 0.55 }}
          >
            Open to new opportunities, collaborations, and challenging projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
            <a
              href="mailto:manhnd0801@gmail.com"
              className="font-medium tracking-wide transition-opacity hover:opacity-70 underline underline-offset-4"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}
            >
              manhnd0801@gmail.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D7E2EA]/30" />
            <a
              href="tel:0974636884"
              className="font-medium tracking-wide transition-opacity hover:opacity-70"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}
            >
              0974 636 884
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D7E2EA]/30" />
            <span
              className="font-light"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)', opacity: 0.5 }}
            >
              Hà Nội, Việt Nam
            </span>
          </div>
        </div>
      </FadeIn>
      </div> {/* end inner max-width wrapper */}
    </section>
  )
}
