import FadeIn from '../components/FadeIn'

const SKILL_GROUPS = [
  {
    number: '01',
    name: 'Frontend Development',
    description: 'Building high-performance, scalable web applications with modern React ecosystem.',
    tags: ['ReactJS', 'TypeScript', 'JavaScript', 'JSX', 'Redux Saga', 'Redux Thunk', 'React Hooks', 'React Router', 'React Hook Form', 'Context API'],
  },
  {
    number: '02',
    name: 'Styling & UI Systems',
    description: 'Crafting pixel-perfect, accessible interfaces with consistent design systems.',
    tags: ['HTML5', 'CSS3', 'SASS', 'Styled-Components', 'Material UI', 'Ant Design', 'Storybook'],
  },
  {
    number: '03',
    name: 'Architecture & Code Quality',
    description: 'Designing scalable source architecture, enforcing conventions, and ensuring maintainability.',
    tags: ['System Design', 'Code Review', 'Coding Conventions', 'Performance', 'Security', '.NET 6.0', 'WebRTC'],
  },
  {
    number: '04',
    name: 'DevOps & Version Control',
    description: 'Streamlining delivery pipelines and managing source control across large teams.',
    tags: ['Azure', 'GitLab', 'GitHub', 'CI/CD', 'Trello'],
  },
  {
    number: '05',
    name: 'Leadership & Management',
    description: 'Leading teams of up to 18 members — from planning and mentoring to risk management and delivery.',
    tags: ['Team Lead', 'Sub-PM', 'WBS Planning', 'Risk Assessment', 'Team Evaluation', 'Mentoring', 'Agile', 'Estimation'],
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILL_GROUPS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>

              {/* Content */}
              <div className="flex flex-col justify-center pt-2 gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.55,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {skill.description}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-light uppercase tracking-wider"
                      style={{
                        backgroundColor: 'rgba(12,12,12,0.06)',
                        color: '#0C0C0C',
                        fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
                        border: '1px solid rgba(12,12,12,0.12)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
