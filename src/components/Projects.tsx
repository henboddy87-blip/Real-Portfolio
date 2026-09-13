import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ArrowRight, ArrowUpRight, ExternalLink, X } from 'lucide-react'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export type ProjectCategory = 'all' | 'Ecommerce' | 'System' | 'Cambodia Problems' |'Entertainment'

export interface Project {
  id: string
  category: ProjectCategory
  title: string
  subtitle: string
  tags: string[]
  description: string
  longDescription: string
  image: string
  year: string
  tech: string[]
  role: string
  liveUrl?: string
  githubUrl?: string
}

const projectsData: Project[] = [
  {
    id: '1',
    category: 'Ecommerce',
    title: 'E-Commerce Platform & Admin',
    subtitle: 'Beauty Product - Ecommerce Mobile & Web App Solution',
    tags: ['Web App', 'Full-Stack'],
    description: 'Full-stack store with dynamic cart, secure checkout, and comprehensive admin dashboard.',
    longDescription:
      'A scalable e-commerce platform designed for modern online merchants. Includes a high-conversion catalog, seamless cart management, and a real-time analytics dashboard for orders and inventory management.',
    image: './image/bookstore.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'MySQL', 'Tailwind CSS'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://frontend-khmer-book-store.vercel.app/',
    githubUrl: 'https://github.com/henboddy87-blip/Frontend-KhmerBookStore',
  },
  {
    id: '2',
    category: 'Ecommerce',
    title: 'E-Commerce Store & Admin Panel',
    subtitle: 'Fashion Product for all overall men, women, and kid',
    tags: ['Web App', 'Full-Stack'],
    description: 'Full-stack store with dynamic cart, secure checkout, and comprehensive admin dashboard.',
    longDescription:
      'A scalable e-commerce platform designed for modern online merchants. Includes a high-conversion catalog, seamless cart management, and a real-time analytics dashboard for orders and inventory management.',
    image: './project/fashion.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://frontend-fashion-store.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Frontend-Fashion-Store',
  },
  {
    id: '3',
    category: 'Ecommerce',
    title: 'CamTech Computer Store',
    subtitle: 'Full-Stack E-Commerce Platform for Computer Hardware & Accessories',
    tags: ['Web App', 'Full-Stack'],
    description: 'CamTech Computer Store is a modern full-stack e-commerce web application for buying laptops, desktops, PC components, and accessories online.',
    longDescription:
      'The storefront is built with React, TypeScript, Vite, Tailwind CSS, offering a fast and responsive shopping experience with product browsing, cart, and checkout flows. A dedicated React admin dashboard lets store owners manage products, categories, orders, and inventory, while the backend — a Python FastAPI service with a SQL database — provides secure REST APIs, authentication, and file upload handling. The project is organized as a monorepo with three independent apps',
    image: './project/computer-store.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://frontend-computer-store.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Frontend-Computer-Store',
  },
  {
    id: '4',
    category: 'Entertainment',
    title: 'Entertainment Music Streaming & Admin Panl control',
    subtitle: 'Music Streaming App & Admin Panel Control',
    tags: ['Web App', 'Full-Stack'],
    description: 'Full-stack music streaming dashboard, multiple songs, artist, favourite listing and upload own song created to platform.',
    longDescription:
      'A scalable music streaming platform designed for modern online users. Includes a seamless manage song, artists, favourite and upload own song created to platform.',
    image: './project/music.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://frontend-music-listener.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Frontend-Music-Listener',
  },
  {
    id: '5',
    category: 'Entertainment',
    title: 'KhmerCine',
    subtitle: 'Khmer cinema meets the world. Discover, stream, and love films from every corner of the globe.',
    tags: ['Web App', 'Full-Stack'],
    description: 'KHMERCINE is your premier destination for Khmer and world cinema — discover, explore, and enjoy movies and series from every corner of the globe.',
    longDescription:
      'KHMERCINE is a modern streaming experience built for film lovers. Browse top-rated films across __Khmer, K-Drama, C-Drama, and Hollywood__, organized by genre, year, and trending picks. Watch HD trailers and episodes with adaptive quality, build your watchlist, and jump straight into the next great story — all in one beautifully cinematic, fully responsive app that feels just as good on your phone as on the big screen.',
    image: './project/movie.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://frontend-movie-khmer-cine.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Frontend-Movie-KhmerCine',
  },
  {
    id: '6',
    category: 'System',
    title: 'EliteStay Hotel Booking & Admin Panel Control',
    subtitle: 'Your Gateway to Bespoke Comfort and World-Class Service.',
    tags: ['Web App', 'Full-Stack'],
    description: 'Immerse yourself in timeless luxury, tailor-made hospitality, and unforgettable sanctuary retreats. With 50 meticulously appointed rooms across five floors, EliteStay offers the pinnacle of comfort, modern amenities, and seamless digital booking.',
    longDescription:
      'Welcome to EliteStay Hotel & Resort, an urban sanctuary designed for discerning travelers and luxury seekers. Featuring 50 designer rooms ranging from cozy Single Rooms to panoramic Penthouse Suites, our property blends sophisticated interior design with modern contactless conveniences, fine dining, and rejuvenating wellness facilities to deliver an unmatched 5-star experience.',
    image: './project/hotel.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://hotel-system-frontend-iota.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Hotel-System-Frontend',
  },
  {
    id: '7',
    category: 'System',
    title: 'MediCore HIS — Next-Gen Enterprise Hospital Information & Clinical Management System',
    subtitle: 'A full-stack hospital operations platform with multiple portals, granular RBAC, and implement with khmer localization.',
    tags: ['Web App', 'Full-Stack'],
    description: ' MediCore transforms traditional hospital administration into an agile, paperless digital experience.',
    longDescription:
      'By unifying patient care pathways from front-desk triage and outpatient consultation to inpatient admission, pharmacy dispatch, and automated financial billing, MediCore minimizes administrative overhead and eliminates clinical bottlenecks. The system features cross-portal real-time synchronicity, ensuring patient vitals, diagnoses, prescriptions, and emergency contact details are safely synchronized across care teams in real time.',
    image: './project/hospital.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://admin-hospital-management-rho.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Admin-Hospital-Management',
  },
  {
    id: '8',
    category: 'System',
    title: ' Enterprise Employee Management & HRIS Platform',
    subtitle: 'A unified Human Resource Information System and Employee Self-Service workspace built for modern organizations.',
    tags: ['Web App', 'Full-Stack'],
    description: ' An all-in-one, full-stack Human Resource Management System (HRMS) that connects workforce operations into a single platform.',
    longDescription:
      ' the platform delivers an administrator control center alongside a dedicated employee self-service portal. It streamlines end-to-end HR workflows including recruitment (ATS), automated onboarding, real-time time & attendance clocking, leave management, automated payroll & payslip generation, performance OKRs, professional training enrollments, asset tracking, and HR helpdesk ticketing — supported by interactive organizational hierarchies, immutable audit trails, and localized timezone reporting.',
    image: './project/enterprise.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://admin-employee-management-alpha.vercel.app',
    githubUrl: 'https://github.com/henboddy87-blip/Admin-Employee-Management',
  },
  {
    id: '9',
    category: 'System',
    title: 'Khmer International University (KIU) — Integrated University Management System',
    subtitle: 'Next-Generation Enterprise ERP & Unified Student Academic Portal.',
    tags: ['Web App', 'Full-Stack'],
    description: 'A centralized, full-stack educational ecosystem designed to streamline university administration and enhance the student learning journey.',
    longDescription:
      'The platform connects administrative departments, faculty, and students through real-time academic tracking, structured multiple program degree curriculums, automated attendance, examination grading, tuition billing, HR payroll, and campus facility management.',
    image: './project/KIU.png',
    year: '2026',
    tech: ['React', 'TypeScript', 'Python FastAPI', 'SQLite', 'Tailwind CSS ', 'Vercel', 'Render', 'Github'],
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://admin-university-system-five.vercel.app/login',
    githubUrl: 'https://github.com/henboddy87-blip/Admin-University-System',
  },
]

const filterTabs: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'Ecommerce', label: 'Ecommerce' },
  { value: 'System', label: ' Systems' },
  { value: 'Cambodia Problems', label: 'Cambodia Problems' },
  { value: 'Entertainment', label: 'Entertainment' },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref: sectionRef, inView } = useInView()

  const filtered =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section relative bg-zinc-50/60 dark:bg-[#0B1710]"
    >
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#ffaa00]" />
              <span className="font-display text-sm font-extrabold tracking-widest uppercase text-[#143826] dark:text-[#ffaa00]">
                My Portfolio
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#143826] dark:text-white">
              My Latest <span className="text-[#ffaa00]">Projects</span>
            </h2>
          </div>

          <a href="#contact" className="btn-pill-action self-start md:self-auto text-base font-bold px-7 py-3">
            <span>Build Once</span>
            <span className="btn-arrow-badge">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="mt-9 flex flex-wrap gap-2.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === tab.value
                  ? 'bg-[#143826] text-white shadow-lg shadow-[#143826]/20 dark:bg-[#ffaa00] dark:text-[#143826]'
                  : 'bg-white text-[#143826]/70 border border-zinc-200 hover:bg-[#143826]/5 hover:text-[#143826] dark:bg-[#11261b] dark:border-[#1e4a34] dark:text-zinc-400 dark:hover:text-[#ffaa00] dark:hover:border-[#ffaa00]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid matching Image 2 */}
        <div
          className={`mt-12 grid gap-8 sm:grid-cols-2 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {filtered.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[#ffaa00]/30 dark:border-[#1e4a34]/60 dark:bg-[#11261b] dark:shadow-card-dark dark:hover:shadow-card-hover-dark dark:hover:border-[#ffaa00]/40"
            >
              {/* Mockup Preview Area */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-[#0B1710]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Tags Row */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-gold-solid text-xs px-3.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Arrow Action Row */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold leading-tight text-[#143826] group-hover:text-[#ffaa00] transition-colors dark:text-white dark:group-hover:text-[#ffaa00]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-500 line-clamp-1 dark:text-zinc-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Dark Green Circle Button with Arrow */}
                <button
                  type="button"
                  aria-label={`View ${project.title}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#143826] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffaa00] group-hover:text-[#143826] group-hover:shadow-lg dark:bg-[#1a4a33] dark:group-hover:bg-[#ffaa00] dark:group-hover:text-[#143826]"
                >
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl sm:rounded-[2.5rem] bg-white p-7 sm:p-10 md:p-12 shadow-2xl border border-zinc-200/90 transition-all dark:bg-[#0B1710] dark:border-2 dark:border-[#1e4a34] dark:shadow-black/90">
            {/* Header */}
            <div className="flex items-start justify-between gap-6 border-b border-zinc-200/80 pb-6 dark:border-[#1e4a34]">
              <div>
                <span className="tag-gold-solid text-xs sm:text-sm font-bold px-4 py-1.5">
                  {selectedProject.category.toUpperCase()} • {selectedProject.year}
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#143826] dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-zinc-500 dark:text-zinc-300">
                  Role: <span className="text-[#ffaa00]">{selectedProject.role}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-zinc-200 hover:text-zinc-900 hover:scale-105 dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-zinc-200 dark:hover:bg-[#1a4a33] dark:hover:text-white"
              >
                <X size={20} strokeWidth={2.3} />
              </button>
            </div>

            {/* Preview Image */}
            <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-inner dark:bg-[#0B1710]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Long Description */}
            <div className="mt-7 sm:mt-8">
              <h4 className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]">
                About the Project
              </h4>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-zinc-700 dark:text-zinc-200">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8 sm:mt-10">
              <h4 className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]">
                Tech Stack & Tools
              </h4>
              <div className="mt-3.5 flex flex-wrap gap-2.5">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="tag-gold-solid text-xs sm:text-sm font-bold px-4 py-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 border-t border-zinc-200/80 pt-6 dark:border-[#1e4a34]">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-action text-base font-bold px-7 py-3"
                >
                  <span>Live Preview</span>
                  <span className="btn-arrow-badge">
                    <ExternalLink size={14} />
                  </span>
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline gap-2 text-base font-bold px-7 py-3"
                >
                  <GitHubIcon />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}