import { useInView } from '../hooks/useInView'
import { MapPin, Check } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────
const aboutHeadline  = 'I turn ideas into digital reality'

const aboutParagraphs = [
  "I'm an ITE student at Royal University of Phnom Penh, passionate about Web Development, Data speccialist, and AI Field, Building new real-world projects base on transformation of technology and AI generation.",
  "Building for overall what people really need, to fullfill the business goals and users needs.",
  "When I'm not coding or designing, I lvoe exploring the latest tech trends, AI tool for building software and system, as lifelong learner, I'm always seeking new knowledge and skills to stay at the forefront of the industry.",
]
const aboutHighlights = [
  { text: 'Based in Phnom Penh City',          icon: MapPin },
  { text: 'Available for freelance & contracts', icon: Check },
  { text: 'Open to full-time remote roles',      icon: Check },
  { text: 'Response within 24 hours',            icon: Check },
]
// ─────────────────────────────────────────────────────────────────────────────

export function About() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="about"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section section-alt scroll-mt-24"
      >
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image */}
            <div className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-zinc-200/50 dark:ring-zinc-700/50">
                  <img
                    src="Photo.jpg"
                    alt="Portrait"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 delay-150 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="section-label font-body tracking-widest uppercase text-xs font-medium">About Me</span>
              <h2 className="font-display section-title mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
                {aboutHeadline}
              </h2>

              <div className="mt-8 space-y-5">
                {aboutParagraphs.map((p, i) => (
                  <p key={i} className="font-body text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <li
                    key={item.text}
                    className="font-body flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium text-zinc-700 shadow-card dark:bg-zinc-900/80 dark:text-zinc-300 dark:shadow-card-dark"
                  >
                    <span className="text-accent" aria-hidden><item.icon size={16} /></span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary font-body mt-10 font-medium tracking-wide">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}