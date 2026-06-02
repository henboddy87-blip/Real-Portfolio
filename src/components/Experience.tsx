import { useInView } from '../hooks/useInView'

// ─── Types ───────────────────────────────────────────────────────────────────
export type ExperienceKind = 'education' | 'work' | 'learning'

export interface ExperienceItem {
  id: string
  kind: ExperienceKind
  period: string
  title: string
  place: string
  location: string
  description: string
  highlights: string[]
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────
const experienceIntro = {
  title: 'Experience & learning journey',
  subtitle:
    'From high school curiosity to professional work, here is how my path in design and development has evolved over time.',
}

const experienceTimeline: ExperienceItem[] = [
  {
    id: 'high-school',
    kind: 'learning',
    period: '2018 – 2024',
    title: 'High school: first lines of code',
    place: 'High School',
    location: 'Banlung City',
    description:
      'Learning general knowledge base on school curriculum, I discovered some new technology release on internet.',
    highlights: [
      'Learn online via YouTube, Facebook, and forums',
    
    ],
  },
  {
    id: 'university',
    kind: 'education',
    period: '2025 – 2028',
    title: 'Bachelor in Information Technology Engineering',
    place: 'State University',
    location: 'Phnom Penh City',
    description:
      'Studied software engineering, algorithms, and human–computer web technologies, database, and more.',
    highlights: [
      'Specialized in web development and UI',
      'Led a small team to build a ecommerce website for local business',
      
    ],
  },
  
]
// ─────────────────────────────────────────────────────────────────────────────

const kindLabel: Record<ExperienceKind, string> = {
  education: 'Education',
  work: 'Work',
  learning: 'Learning',
}

const kindColor: Record<ExperienceKind, string> = {
  education: 'from-sky-400 to-blue-500',
  work: 'from-emerald-400 to-emerald-500',
  learning: 'from-amber-400 to-orange-500',
}

export function Experience() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="experience"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section scroll-mt-24"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Experience</span>
            <h2 className="font-display section-title mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none text-balance">
              {experienceIntro.title}
            </h2>
            <p className="font-body section-intro mt-4 font-light text-balance">
              {experienceIntro.subtitle}
            </p>
          </div>

          <div
            className={`mt-14 grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-zinc-300 to-transparent md:block dark:via-zinc-700" />
              <ol className="space-y-8">
                {experienceTimeline.map((item, index) => (
                  <li key={item.id} className="relative flex gap-4 md:pl-10" style={{ transitionDelay: `${index * 80}ms` }}>
                    {/* Node */}
                    <div className="relative mt-1 hidden md:block">
                      <div className={`h-9 w-9 rounded-2xl bg-gradient-to-br ${kindColor[item.kind]} shadow-glow shadow-accent/40`} />
                      <div className="absolute inset-0 rounded-2xl border border-white/60 dark:border-zinc-900/80" />
                    </div>

                    {/* Card */}
                    <div className="card card-hover w-full p-5 md:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                          <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${kindColor[item.kind]}`} />
                          {kindLabel[item.kind]}
                        </span>
                        <span className="font-body text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-display mt-3 text-xl leading-none text-zinc-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        {item.place} · {item.location}
                      </p>
                      <p className="font-body mt-3 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-1 h-1 w-3 shrink-0 rounded-full bg-accent" />
                            <span className="font-body font-light">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            
          </div>
        </div>
      </section>
    </>
  )
}