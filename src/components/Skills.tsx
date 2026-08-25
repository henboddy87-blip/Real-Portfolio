import { useInView } from '../hooks/useInView'
import { Code, Database, Layout, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend & UI Engineering',
    icon: Layout,
    items: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'Tailwind CSS / HTML5', level: 95 },
     
    ],
  },
  {
    title: 'Backend & Systems',
    icon: Database,
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
          {skillCategories.map((cat, i) => {
            return (
              <div key={cat.title} className="card-styled p-8 sm:p-10">
                <div className="flex items-center gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800">
                  <div className='size-12'>
                    <img className='w-full h-full object-cover' src="./image/frontend.png" alt="" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-forest-950 dark:text-white">
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
            )
          })}
        </div>

        {/* Quick Tag Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 ">
          {quickTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border text-black dark:text-black dark:border-zinc-200/90 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-700 shadow-sm transition hover:border-[#ffaa00] hover:text-[#ffaa00] dark:border-forest-900 dark:bg-forest-950/80 dark:text-zinc-300 dark:hover:border-[#ffaa00] dark:hover:text-[#ffaa00]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}