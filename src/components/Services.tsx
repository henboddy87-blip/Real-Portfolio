import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import {
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  detailedOverview: string
  iconImage: string
  deliverables: string[]
  tools: string[]
}

const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Application Development',
    subtitle: 'High-performance web platforms, APIs, and modern cloud architectures',
    description:
      'From marketing platforms to complex full-stack web applications, I build fast, accessible, secure, and scalable solutions. Using modern frameworks and proven architecture so your digital product grows seamlessly.',
    detailedOverview:
      'End-to-end full-stack engineering tailored to business requirements. I specialize in architecting responsive user interfaces with Next.js & React, backed by robust REST APIs with Python/FastAPI or Node.js, and structured relational database modeling for speed and scalability.',
    iconImage: '/image/web.png',
    deliverables: [
      'Responsive, accessible frontend interfaces with React & Next.js',
      'Robust backend APIs & microservices using Python, FastAPI & Node.js',
      'Database schema modeling, indexing & integration (PostgreSQL / MySQL)',
      'High-performance Core Web Vitals, SEO optimization & clean code',
      'Production deployment, Docker containerization & CI/CD pipeline setup',
      'End-to-end security audits, authentication & state management',
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    subtitle: 'User research, intuitive wireframes, design systems, and high-fidelity prototypes',
    description:
      'I craft user-centered experiences from concept to high-fidelity clickable prototypes. Focusing on clean visual hierarchy, accessibility, and delight to maximize user engagement and business conversion.',
    detailedOverview:
      'Designing products that solve real problems while feeling intuitive and enjoyable. Every design process starts with understanding user workflows, mapping personas, iterating on wireframes, and building comprehensive design systems ready for developer implementation.',
    iconImage: '/image/design.png',
    deliverables: [
      'User research, customer journey maps & empathy personas',
      'Interactive wireframing & clickable high-fidelity Figma prototypes',
      'Design systems, unified token variables & UI component kits',
      'Responsive mobile, tablet & desktop screen designs',
      'Micro-interactions, animations & developer-ready handoff specs',
      'Accessibility (WCAG) compliance & usability evaluations',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Design Systems', 'Wireframing', 'Prototyping', 'Design Tokens', 'User Flow Maps'],
  },
  {
    id: 'ai-consulting',
    title: 'AI Integration & Consulting',
    subtitle: 'Intelligent automation, AI APIs, workflow streamlining, and system audits',
    description:
      'Empower your software systems with AI capabilities and sound technical foundations. I help assess technology stacks, integrate AI models and APIs, and modernize workflows for maximum efficiency.',
    detailedOverview:
      'Harness the transformative power of modern AI and machine intelligence. I assist businesses in embedding LLM interfaces, structured automated data pipelines, smart recommendation engines, and technical system audits into their digital ecosystems.',
    iconImage: '/image/ai.png',
    deliverables: [
      'LLM API integrations (OpenAI, Gemini, Anthropic) into web platforms',
      'Automated intelligent workflows, document processing & data analysis',
      'Technical codebase audits, performance profiling & refactoring roadmap',
      'Custom webhook connections, asynchronous task queues & pipelines',
      'Technical documentation, engineering guidance & team onboarding',
      'AI safety, rate-limiting & prompt engineering architectures',
    ],
    tools: ['Gemini API', 'OpenAI API', 'Python', 'FastAPI', 'Vector Databases', 'Prompt Engineering', 'Workflow Automation', 'Cloud APIs'],
  },
]

export function Services() {
  const { ref: sectionRef, inView } = useInView()
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section relative bg-zinc-50/70 dark:bg-[#08170F]"
    >
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#ffaa00]" />
              <span className="font-display text-sm font-extrabold tracking-widest uppercase text-forest-900 dark:text-[#ffaa00]">
                Services
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-forest-950 dark:text-white">
              <span className="text-[#ffaa00]">Services </span>I Provide
            </h2>
          </div>

          <a href="#contact" className="btn-pill-action self-start md:self-auto text-base font-bold px-7 py-3">
            <span>Inquire for Project</span>
            <span className="btn-arrow-badge">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* 3 Services Cards */}
        <div
          className={`mt-14 grid gap-8 md:grid-cols-3 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {servicesData.map((s, index) => (
            <div
              key={s.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="card-styled group flex flex-col justify-between p-8 sm:p-9"
            >
              <div>
                {/* PNG Icon Badge — visible in both themes + on hover */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ffaa00]/15 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffaa00] group-hover:shadow-md dark:border-[#ffaa00]/40 dark:bg-[#11261b] dark:group-hover:bg-[#ffaa00] dark:group-hover:shadow-lg dark:group-hover:shadow-[#ffaa00]/25">
                  <img
                    src={s.iconImage}
                    alt={s.title}
                    className="relative z-10 h-8 w-8 object-contain transition-all duration-300
                      dark:brightness-0 dark:invert dark:[filter:brightness(0)_invert(1)_sepia(1)_saturate(5)_hue-rotate(10deg)_brightness(1.1)]
                      group-hover:[filter:brightness(0)_invert(0)]
                      dark:group-hover:[filter:brightness(0)_invert(0)]"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold text-forest-950 transition-colors group-hover:text-[#ffaa00] dark:text-white dark:group-hover:text-[#ffaa00]">
                  {s.title}
                </h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {s.description}
                </p>

                {/* Deliverables snippet */}
                <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                  {s.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#ffaa00]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read more button */}
              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedService(s)}
                  className="group/link inline-flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-wider text-[#143826] transition hover:text-[#ffaa00] dark:text-zinc-200 dark:hover:text-[#ffaa00]"
                >
                  <span>Read more</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1.5 text-[#ffaa00]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal */}
          <div className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl sm:rounded-[2.5rem] bg-white p-7 sm:p-10 md:p-12 shadow-2xl border border-zinc-200/90 transition-all dark:bg-[#0B1710] dark:border-2 dark:border-[#1e4a34] dark:shadow-black/90">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-6 border-b border-zinc-200/80 pb-6 dark:border-[#1e4a34]">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Modal icon using the PNG image */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#ffaa00] shadow-md">
                  <img
                    src={selectedService.iconImage}
                    alt={selectedService.title}
                    className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#ffaa00]">
                    <Sparkles size={14} />
                    <span>Service Overview</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#143826] dark:text-white">
                    {selectedService.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-300">
                    {selectedService.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-zinc-200 hover:text-zinc-900 hover:scale-105 dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-zinc-200 dark:hover:bg-[#1a4a33] dark:hover:text-white"
              >
                <X size={20} strokeWidth={2.3} />
              </button>
            </div>

            {/* Detailed Overview */}
            <div className="mt-7 sm:mt-8">
              <h4 className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]">
                About This Service
              </h4>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-zinc-700 dark:text-zinc-200">
                {selectedService.detailedOverview}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="mt-8 sm:mt-10">
              <h4 className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]">
                Key Deliverables & Scope
              </h4>
              <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-2xl border border-zinc-100 bg-zinc-50/90 p-4 transition hover:border-[#ffaa00]/40 dark:border-[#1e4a34]/60 dark:bg-[#11261b]/80"
                  >
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#ffaa00]" />
                    <span className="text-sm sm:text-base font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="mt-8 sm:mt-10">
              <h4 className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]">
                Technologies & Tools Used
              </h4>
              <div className="mt-3.5 flex flex-wrap gap-2.5">
                {selectedService.tools.map((tool) => (
                  <span
                    key={tool}
                    className="tag-gold-solid text-xs sm:text-sm font-bold px-4 py-2"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-zinc-200/80 pt-6 dark:border-[#1e4a34]">
              <p className="text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-400">
                Ready to collaborate or discuss scope? Let's talk.
              </p>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="btn-pill-action w-full sm:w-auto text-base sm:text-lg font-bold px-8 py-3.5 justify-center shadow-xl text-center"
              >
                <span>Inquire About This Service</span>
                <span className="btn-arrow-badge">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}