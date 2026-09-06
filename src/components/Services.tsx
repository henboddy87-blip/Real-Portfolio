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
      'End-to-end full-stack engineering tailored to business requirements. I specialize in architecting responsive user interfaces with React, backed by robust REST APIs with Python/FastAPI, and structured relational database modeling for speed and scalability.',
    iconImage: '/image/web.png',
    deliverables: [
      'Responsive, accessible frontend interfaces with React',
      'Robust backend APIs & microservices using Python, FastAPI',
      'Database schema modeling, indexing & integration (PostgreSQL / MySQL)',
      'High-performance Core Web Vitals, SEO optimization & clean code',
      'Production deployment, Docker containerization & CI/CD pipeline setup',
      'End-to-end security audits, authentication & state management',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Exploration',
    subtitle: 'Exploratory data analysis (EDA), data cleaning, SQL queries, and visual dashboards',
    description:
      'Actively exploring and learning data analytics to uncover hidden patterns and trends in data. Transforming raw, messy datasets into structured insights through exploratory analysis (EDA), SQL queries, and visual dashboards.',
    detailedOverview:
      'Currently diving deep into the world of Data Analytics, I focus on the practical end-to-end data journey: ingesting, cleaning, preprocessing, and exploring raw datasets to find clear answers. By leveraging Python data libraries (Pandas, NumPy, Matplotlib, Seaborn) and relational SQL queries, I examine data distributions, detect anomalies, calculate key business metrics, and craft visual charts that translate complex numbers into understandable, actionable insights.',
    iconImage: '/image/analytics.png',
    deliverables: [
      'Exploratory Data Analysis (EDA) & structured summary statistical reports',
      'Data cleaning, preprocessing, missing value handling & anomaly detection',
      'Interactive visual dashboards & KPI metric charts for business tracking',
      'Relational SQL queries, data aggregation & multi-table joins',
      'Data transformation, feature structuring & statistical summaries with Python/Pandas',
      'Visual storytelling through clear chart design & actionable trend insights',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'MySQL', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Excel'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Exploration',
    subtitle: 'AI-chatbot integration into web apps, curious exploration of modern AI tools, and custom utilities',
    description:
      'Bringing practical AI into websites and web apps. Specializing in integrating conversational AI chatbots, actively exploring emerging AI tools, and creating custom utilities with fresh graduate curiosity and passion.',
    detailedOverview:
      'Driven by intense curiosity for the rapid evolution of artificial intelligence, I explore and experiment with emerging AI tools and LLM frameworks to see how they can solve real-world problems. I integrate smart conversational AI chatbots directly into websites and web apps (leveraging Google Gemini and OpenAI APIs), continuously test new AI tools and agent workflows, and build tailored developer helpers, automation scripts, and utilities with the energetic drive of a fresh graduate eager to innovate.',
    iconImage: '/image/ai.png',
    deliverables: [
      'Intelligent AI-chatbot integration directly into websites & web apps',
      'API integrations with Google Gemini, OpenAI & modern LLM providers',
      'Curious exploration & hands-on evaluation of new AI developer tools',
      'Building custom automation utilities, CLI helpers & workflow tools',
      'Prompt crafting, context management & structured response streaming',
      'Rapid prototyping of AI-powered features with fresh curiosity & agile iteration',
    ],
    tools: ['Gemini API', 'OpenAI API', 'Python', 'FastAPI', 'React', 'Prompt Engineering', 'AI Automation', 'Developer Utilities', 'Git'],
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