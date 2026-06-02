import { useInView } from '../hooks/useInView'

// ─── Data ────────────────────────────────────────────────────────────────────
const skillGroups: { category: string; items: { name: string; level: number }[] }[] = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'React / Next.js',         level: 90 },
      { name: 'Python / FastAPI',        level: 75 },
    ],
  },
  {
    category: 'Design & Tools',
    items: [
      { name: 'HTML / CSS / Tailwind', level: 95 },
      { name: 'Figma / UI/UX',         level: 80 },
      { name: 'MySQL',  level: 75 },
      { name: 'Github',           level: 85 },
    ],
  },
]

const skillTags = [
  'JavaScript', 'TypeScript', 'React', 'Python', 'FastAPI',
  'Figma', 'CSS', 'Tailwind',
]
// ─────────────────────────────────────────────────────────────────────────────

export function Skills() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="skills"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section scroll-mt-24"
      >
        <div className="container-narrow">
          <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Skills</span>
          <h2 className="font-display section-title section-title-center mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
            What I work with
          </h2>
          <p className="font-body section-intro mt-4 font-light">
            I combine frontend, backend, design, and tooling to ship full products.
          </p>

          {/* Skill groups with progress bars */}
          <div className={`mt-16 grid gap-10 transition-all duration-700 md:grid-cols-2 md:gap-16 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-display mb-6 text-lg leading-none text-zinc-900 dark:text-white">
                  {group.category}
                </h3>
                <div className="space-y-5">
                  {group.items.map((item, i) => (
                    <div key={item.name} style={{ transitionDelay: `${i * 80}ms` }}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="font-body text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {item.name}
                        </span>
                        <span className="font-body text-xs font-semibold text-accent">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${item.level}%` : '0%',
                            transitionDelay: `${i * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div
            className={`mt-16 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="font-body rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-600 transition hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-accent dark:hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}