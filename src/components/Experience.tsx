import React from 'react'
import { useInView } from '../hooks/useInView'
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react'

export function Experience() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <section
      id="journey"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section relative bg-zinc-50/70 dark:bg-[#08170F]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-6 bg-[#ffaa00]" />
            <span className="font-display text-sm font-extrabold tracking-widest uppercase text-forest-900 dark:text-[#ffaa00]">
              Education & Work
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-forest-950 dark:text-white">
            My <span className="text-[#ffaa00]">Academic and Professional</span> Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl font-normal text-zinc-600 dark:text-zinc-300">
            From early self-taught programming to university engineering and building real-world client systems.
          </p>
        </div>

        {/* Two Columns Grid matching Image 3 */}
        <div
          className={`mt-16 grid gap-10 md:grid-cols-2 lg:gap-14 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Column 1: Education Card */}
          <div className="card-styled flex flex-col justify-between p-8 sm:p-10">
            <div>
              {/* Header with Amber Round Icon */}
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950 shadow-md">
                  <GraduationCap size={28} strokeWidth={2.3} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-forest-950 dark:text-white">
                  Education
                </h3>
              </div>

              {/* Education Timeline Items */}
              <div className="mt-8 space-y-9">
                {/* Item 1 */}
                <div className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-[#ffaa00] before:ring-4 before:ring-[#ffaa00]/25">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    <Calendar size={15} className="text-[#ffaa00]" />
                    <span>2025 – 2028 (Expected)</span>
                  </div>
                  <h4 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-forest-950 dark:text-white">
                    Royal University of Phnom Penh (RUPP)
                  </h4>
                  <p className="text-sm font-bold text-forest-800 dark:text-[#ffaa00]">
                    Bachelor in Information Technology Engineering (ITE)
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                    Studying core software engineering, algorithms, database systems, web architecture, and AI applications. Active in collaborative engineering projects and tech exploration.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-700">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    <Calendar size={15} className="text-[#ffaa00]" />
                    <span>2018 – 2024</span>
                  </div>
                  <h4 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-forest-950 dark:text-white">
                    High School Foundation
                  </h4>
                  <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                    High School Diploma • Banlung City
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                    Discovered coding and digital technologies. Self-taught web development foundations, logic building, and modern programming through online communities and documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Work Experience Card */}
          <div className="card-styled flex flex-col justify-between p-8 sm:p-10">
            <div>
              {/* Header with Amber Round Icon */}
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950 shadow-md">
                  <Briefcase size={26} strokeWidth={2.3} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-forest-950 dark:text-white">
                  Work Experience
                </h3>
              </div>

              {/* Work Timeline Items */}
              <div className="mt-8 space-y-9">
                {/* Item 1 */}
                <div className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-[#ffaa00] before:ring-4 before:ring-[#ffaa00]/25">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    <Calendar size={15} className="text-[#ffaa00]" />
                    <span>2024 – Present</span>
                  </div>
                  <h4 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-forest-950 dark:text-white">
                    Freelance Full-Stack Developer
                  </h4>
                  <p className="text-sm font-bold text-forest-800 dark:text-[#ffaa00]">
                    Self-Employed • Remote & Local Clients
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                    Designing and engineering custom responsive web apps, REST APIs, and modern dashboards. Partnering directly with businesses to translate functional requirements into polished production code.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-700">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    <Calendar size={15} className="text-[#ffaa00]" />
                    <span>2023 – 2024</span>
                  </div>
                  <h4 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-forest-950 dark:text-white">
                    Web Project Lead & Developer
                  </h4>
                  <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                    Team Projects & E-Commerce Build
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                    Led a developer group to engineer a full-featured e-commerce platform with product catalogs, shopping cart flow, database schema, and payment processing.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-700">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    <Calendar size={15} className="text-[#ffaa00]" />
                    <span>2022 – 2023</span>
                  </div>
                  <h4 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-forest-950 dark:text-white">
                    UI/UX & Frontend Contributor
                  </h4>
                  <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                    Design Systems & Web Interfaces
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                    Crafted responsive component systems, brand visual assets, and high-fidelity clickable Figma prototypes for web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}