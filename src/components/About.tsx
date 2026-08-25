import { useInView } from '../hooks/useInView'
import { Download } from 'lucide-react'

const siteName = 'Hoeun Sophanut'

const aboutParagraphs = [
  "I'm an ITE (Information Technology Engineering) student at the Royal University of Phnom Penh, deeply passionate about Web Development, Data engineering, and the AI field. I focus on engineering real-world projects inspired by the rapid evolution of technology and AI innovation.",
  'My development philosophy centers on building what people truly need—crafting robust codebases and intuitive interfaces that bridge commercial goals with seamless user happiness.',
  "As a lifelong learner, I explore modern AI frameworks, scalable web architectures, and deliberate design systems to deliver software that stays ahead of tomorrow's standards.",
]

const statsData = [
  { value: '10+', label: 'Projects Completed' },
  { value: '100%', label: 'Commitment & Quality' },
  { value: '4+', label: 'Years Coding Journey' },
]

/* Orbit skill pills — each gets an angle offset (deg) to space them evenly */
const orbitPills = [
  { label: 'UI/UX Design', variant: 'dark' as const, startAngle: 0 },
  { label: 'React & Next.js', variant: 'gold' as const, startAngle: 72 },
  { label: 'Full-Stack', variant: 'gold' as const, startAngle: 144 },
  { label: 'Design Systems', variant: 'outline' as const, startAngle: 216 },
  { label: 'Python & FastAPI', variant: 'dark' as const, startAngle: 288 },
]

const pillStyles = {
  dark: 'border border-white/20 bg-forest-950/95 text-[#ffaa00] backdrop-blur-md',
  gold: 'bg-[#ffaa00] text-forest-950 font-extrabold',
  outline: 'bg-forest-800 text-[#ffaa00] border border-[#ffaa00]/30',
}

export function About() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-dark section relative overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#ffaa00]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-forest-800/40 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Equal 50/50 split layout with generous spacing */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column (50%): Golden Circle Photo + Orbiting Skill Pills */}
          <div
            className={`relative flex justify-center transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Orbit container — all tags + photo live here */}
            <div className="orbit-container">
              {/* Photo circle in center */}
              <div className="orbit-photo">
                <div className="orbit-photo-inner">
                  <img
                    src="/Photo.jpg"
                    alt={siteName}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Subtle dashed orbit ring */}
              <div className="orbit-ring" />

              {/* Orbiting pills */}
              {orbitPills.map((pill) => {
                /* Convert start angle to a negative delay so each pill is offset in time */
                const delaySec = -(pill.startAngle / 360) * 24
                return (
                  <div
                    key={pill.label}
                    className="orbit-pill-wrapper"
                    style={{ animationDelay: `${delaySec}s` }}
                  >
                    {/* Counter-rotate to keep text upright */}
                    <span
                      className={`orbit-pill ${pillStyles[pill.variant]}`}
                      style={{ animationDelay: `${delaySec}s` }}
                    >
                      {pill.label}
                    </span>
                  </div>
                )
              })}

            </div>
          </div>

          {/* Right Column (50%): About Info, Expanded Text, Stats & Signature */}
          <div
            className={`transition-all duration-700 delay-150 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#ffaa00]" />
              <span className="font-display text-sm font-bold tracking-widest uppercase text-[#ffaa00]">
                About Me
              </span>
            </div>

            {/* Expanded Headline */}
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white">
              Who is <span className="text-[#ffaa00]">{siteName}?</span>
            </h2>

            {/* Expanded Paragraphs */}
            <div className="mt-7 space-y-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-zinc-200">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Expanded Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-forest-800/80 pt-8">
              {statsData.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#ffaa00]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm font-semibold text-zinc-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action & Signature */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="/resume.pdf"
                download
                className="btn-pill-action-gold text-base font-bold"
              >
                <span>Download CV</span>
                <span className="btn-arrow-badge">
                  <Download size={16} strokeWidth={2.5} />
                </span>
              </a>

              {/* Signature Accent */}
              <div className="flex items-center gap-2">
                <span className="font-script text-4xl sm:text-5xl font-bold text-[#ffaa00] tracking-wide rotate-[-3deg]">
                  {siteName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}