import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    title: 'Frontend & UI Engineering',
    iconImage: '/image/frontend.png',
    items: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'Tailwind CSS / HTML5', level: 95 },
    ],
  },
  {
    title: 'Backend & Systems',
    iconImage: '/image/backend.png',
    items: [
      { name: 'Python / FastAPI', level: 82 },
      { name: 'MySQL & PostgreSQL', level: 80 },
      { name: 'REST APIs & Cloud Deployment', level: 88 },
    ],
  },
]

const quickTags = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Python',
  'FastAPI',
  'Node.js',
  'MySQL',
  'PostgreSQL',
  'Tailwind CSS',
  'Git / GitHub',
  'REST APIs',
  'AI Integration',
]

export function Skills() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section relative bg-white dark:bg-[#0B1710]"
    >
      <div className="container-custom">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-6 bg-[#ffaa00]" />
            <span className="font-display text-sm font-extrabold tracking-widest uppercase text-forest-900 dark:text-[#ffaa00]">
              Core Stack
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-forest-950 dark:text-white">
            Technologies <span className="text-[#ffaa00]">& Capabilities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal">
            A balanced combination of modern frontend performance, reliable backend logic, and user-centered design.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div
          className={`mt-16 grid gap-10 md:grid-cols-2 lg:gap-14 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card-styled group p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800">
                {/* PNG Icon Badge with high-contrast filter in dark mode */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#ffaa00]/30 bg-[#ffaa00]/15 p-2.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#ffaa00] dark:border-[#ffaa00]/40 dark:bg-[#143826] dark:group-hover:bg-[#ffaa00]">
                  <img
                    src={cat.iconImage}
                    alt={cat.title}
                    className="h-8 w-8 object-contain transition-all duration-300
                      dark:brightness-0 dark:invert dark:[filter:brightness(0)_invert(1)_sepia(1)_saturate(5)_hue-rotate(10deg)_brightness(1.1)]
                      group-hover:[filter:brightness(0)]
                      dark:group-hover:[filter:brightness(0)]"
                  />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-forest-950 transition-colors group-hover:text-[#ffaa00] dark:text-white dark:group-hover:text-[#ffaa00]">
                  {cat.title}
                </h3>
              </div>

              <div className="mt-7 space-y-5">
                {cat.items.map((item, idx) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-sm sm:text-base font-bold text-forest-950 dark:text-zinc-200">
                      <span>{item.name}</span>
                      <span className="text-[#ffaa00] font-black">{item.level}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-forest-900">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ffaa00] to-amber-500 transition-all duration-1000"
                        style={{
                          width: inView ? `${item.level}%` : '0%',
                          transitionDelay: `${idx * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tag Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {quickTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200/90 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-700 shadow-sm transition hover:border-[#ffaa00] hover:text-[#ffaa00] dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-zinc-200 dark:hover:border-[#ffaa00] dark:hover:text-[#ffaa00]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}