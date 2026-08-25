import React from 'react'
import { ArrowRight, ArrowUpRight, MousePointer, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const siteName = 'Hoeun Sophanut'
const heroLocation = 'Cambodia'
const heroSubtitle =
  'I love writing clean code, maintainable design, and thoughtful user experiences. Building real-world software and modern systems that fulfill business goals and delight users in the age of technology and AI transformation.'

export function Hero() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <section
      id="hero"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative flex min-h-[94vh] items-center pt-32 pb-20 overflow-hidden bg-[#FAFBFB] dark:bg-[#0B1710]"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[600px] w-[600px] rounded-full bg-[#ffaa00]/10 blur-3xl dark:bg-[#ffaa00]/5" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-[500px] w-[500px] rounded-full bg-forest-500/10 blur-3xl dark:bg-forest-900/20" />

      <div className="container-custom relative z-10 w-full">
        {/* 50/50 two-column spacious grid */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Text Content (50%) */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Framed "Hello There!" Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-xl border-2 border-dashed border-zinc-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-forest-950/70">
              <span className="h-2 w-2 rounded-full bg-[#ffaa00] animate-pulse" />
              <span className="font-display text-xs sm:text-sm font-extrabold tracking-wider uppercase text-forest-900 dark:text-[#ffaa00]">
                Hello There!
              </span>
            </div>

            {/* Main Headline - Expansive Typography */}
            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-forest-950 dark:text-white">
              I'm{' '}
              <span className="relative inline-block text-[#ffaa00] underline decoration-[#ffaa00]/50 decoration-wavy decoration-2 sm:decoration-4">
                {siteName}
              </span>
              ,<br />
              <span className="text-forest-900 dark:text-zinc-100">
                Product Developer
              </span>
              <br />
              <span className="text-zinc-500 dark:text-zinc-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                Based in {heroLocation}.
              </span>
            </h1>

            {/* Subtitle - Bigger Text */}
            <p className="mt-7 max-w-2xl text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
              {heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#projects" className="btn-pill-action text-base font-bold px-7 py-3">
                <span>View My Portfolio</span>
                <span className="btn-arrow-badge">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </a>

              <a href="#contact" className="btn-pill-outline text-base font-bold px-7 py-3">
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Visual / Cutout Card (50%) */}
          <div
            className={`relative flex justify-center transition-all duration-700 delay-150 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[480px]">
              {/* Vibrant Amber Sun Background Circle */}
              <div className="relative mx-auto flex aspect-square w-[320px] sm:w-[400px] lg:w-[460px] items-end justify-center rounded-full bg-gradient-to-tr from-[#ffaa00] to-amber-400 p-2.5 shadow-2xl shadow-[#ffaa00]/30">
                {/* Subtle Inner Accent Ring */}
                <div className="absolute inset-3 rounded-full border-2 border-white/35" />

                {/* Portrait Photo */}
                <div className="relative z-10 h-[92%] w-[92%] overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-forest-900">
                  <img
                    src="/Photo.jpg"
                    alt={siteName}
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Top-Right Rotating "HIRE ME" Stamp */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 flex items-center justify-center">
                <a
                  href="#contact"
                  className="group relative flex h-28 w-28 items-center justify-center rounded-full bg-forest-900 text-white shadow-2xl transition-transform hover:scale-105 dark:bg-forest-950 dark:border-2 dark:border-[#ffaa00]/50"
                  aria-label="Hire Me"
                >
                  {/* Rotating Text Ring */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-full w-full animate-spin-slow text-[#ffaa00] font-black tracking-widest text-[9.5px] uppercase"
                  >
                    <path
                      id="hireCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fill="currentColor">
                      <textPath href="#hireCirclePath" startOffset="0%">
                        • HIRE ME • HIRE ME • HIRE ME
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Circle with Arrow */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950 shadow-inner transition-transform group-hover:scale-110">
                    <ArrowUpRight size={20} strokeWidth={3} />
                  </div>
                </a>
              </div>

              {/* Floating Badge 2: Bottom-Right "UI/UX & Web" Pill */}
              <div className="absolute bottom-14 -right-2 z-20 animate-float">
                <div className="flex items-center gap-2 rounded-full bg-[#ffaa00] px-4 py-2.5 text-xs sm:text-sm font-extrabold text-forest-950 shadow-xl shadow-[#ffaa00]/30">
                  <Sparkles size={16} className="text-forest-900" />
                  <span>UI/UX & Web Dev</span>
                </div>
              </div>

              {/* Floating Badge 3: Bottom-Left "Product Engineer" Pill with Cursor */}
              <div
                className="absolute bottom-4 -left-4 z-20 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2.5 rounded-full bg-forest-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-2xl dark:bg-forest-800 border border-white/10">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950">
                    <MousePointer size={12} strokeWidth={3} />
                  </div>
                  <span>Full-Stack & AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}