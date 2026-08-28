import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  MousePointer,
  Sparkles,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const siteName = "Hoeun Sophanut";
const heroLocation = "Cambodia";
const heroSubtitle =
  "I love writing clean code, maintainable design, and thoughtful user experiences. Building real-world software and modern systems that fulfill business goals and delight users in the age of AI transformation.";

const heroOrbitButtons = [
  {
    label: "Full-Stack & AI",
    icon: MousePointer,
    variant: "dark" as const,
    startAngle: 0,
  },
  {
    label: "UI/UX & Web Dev",
    icon: Sparkles,
    variant: "gold" as const,
    startAngle: 90,
  },
  {
    label: "Data Analysis",
    icon: BarChart3,
    variant: "dark" as const,
    startAngle: 180,
  },
  {
    label: "View My Project",
    icon: ArrowUpRight,
    variant: "action" as const,
    startAngle: 270,
    href: "#projects",
  },
];

const heroPillStyles = {
  dark: "border border-[#ffaa00]/30 bg-forest-950/95 text-white dark:bg-forest-950/95 dark:text-white backdrop-blur-md hover:border-[#ffaa00]",
  gold: "bg-gradient-to-r from-[#ffaa00] to-amber-500 text-forest-950 font-black shadow-lg shadow-[#ffaa00]/30",
  action:
    "bg-forest-900 text-white border-2 border-[#ffaa00] shadow-lg shadow-[#ffaa00]/25 hover:bg-forest-950 dark:bg-forest-950",
};

export function Hero() {
  const { ref: sectionRef, inView } = useInView();

  return (
    <section
      id="hero"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative flex min-h-[85vh] lg:min-h-[90vh] items-center pt-28 pb-14 lg:pt-32 lg:pb-16 overflow-hidden bg-[#FAFBFB] dark:bg-[#0B1710]"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[#ffaa00]/10 blur-3xl dark:bg-[#ffaa00]/5" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-[450px] w-[450px] rounded-full bg-forest-500/10 blur-3xl dark:bg-forest-900/20" />

      <div className="container-custom relative z-10 w-full">
        {/* 50/50 two-column spacious grid */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left Text Content (50%) */}
          <div
            className={`transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Framed "Hello There!" Badge */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/80 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-forest-950/70">
              <span className="h-2 w-2 rounded-full bg-[#ffaa00] animate-pulse" />
              <span className="font-display text-xs font-extrabold tracking-wider uppercase text-forest-900 dark:text-[#ffaa00]">
                Hello There!
              </span>
            </div>

            {/* Main Headline - Compact & Clean Multi-line */}
            <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black leading-[1.15] tracking-tight text-forest-950 dark:text-white">
              I'm{" "}
              <span className="relative inline-block text-[#ffaa00] underline decoration-[#ffaa00]/40 decoration-wavy decoration-2 sm:decoration-4">
                {siteName}
              </span>
              ,{" "}
              <span className="text-forest-900 dark:text-zinc-100">
                Product Developer
              </span>
              <br className="hidden sm:inline" />{" "}
              <span className="text-zinc-500 dark:text-zinc-400 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                Based in {heroLocation}.
              </span>
            </h1>

            {/* Subtitle - Compact readable text */}
            <p className="mt-4 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
              {heroSubtitle}
            </p>

            {/* CTA Group with Unique Rotating Hire Me Stamp */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="btn-pill-action text-base font-bold px-7 py-3"
              >
                <span>View My Portfolio</span>
                <span className="btn-arrow-badge">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </a>

              {/* Relocated Non-duplicate Rotating "HIRE ME" Stamp Badge */}
              <a
                href="#contact"
                className="group relative flex h-20 w-20 sm:h-22 sm:w-22 shrink-0 items-center justify-center rounded-full bg-forest-900 text-white shadow-xl transition-transform hover:scale-105 dark:bg-forest-950 dark:border-2 dark:border-[#ffaa00]/50"
                aria-label="Hire Me"
              >
                {/* Rotating Text Ring */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full animate-spin-slow text-[#ffaa00] font-black tracking-widest text-[9.5px] uppercase"
                >
                  <path
                    id="hireCirclePathHero"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text fill="currentColor">
                    <textPath href="#hireCirclePathHero" startOffset="0%">
                      • HIRE ME • HIRE ME • HIRE ME
                    </textPath>
                  </text>
                </svg>
                {/* Center Circle with Arrow */}
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950 shadow-inner transition-transform group-hover:scale-110">
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </a>
            </div>
          </div>

          {/* Right Visual / Cutout Card (50%) */}
          <div
            className={`relative flex justify-center transition-all duration-700 delay-150 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Orbit Container with Photo & Rotating Buttons */}
            <div className="orbit-container">
              {/* Photo circle in center */}
              <div className="orbit-photo">
                <div className="orbit-photo-inner">
                  <img
                    src="/Photo.jpg"
                    alt={siteName}
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Subtle dashed orbit ring */}
              <div className="orbit-ring" />

              {/* Orbiting Buttons (Clockwise) - 4 Clean Buttons */}
              {heroOrbitButtons.map((btn) => {
                const delaySec = -(btn.startAngle / 360) * 26;
                const Icon = btn.icon;
                const isLink = Boolean(btn.href);
                const Element = isLink ? "a" : "div";

                return (
                  <div
                    key={btn.label}
                    className="orbit-pill-wrapper-cw"
                    style={{ animationDelay: `${delaySec}s` }}
                  >
                    <Element
                      href={btn.href}
                      className={`orbit-pill orbit-pill-cw ${heroPillStyles[btn.variant]}`}
                      style={{ animationDelay: `${delaySec}s` }}
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 dark:bg-white/15">
                        <Icon size={12} strokeWidth={2.5} />
                      </span>
                      <span>{btn.label}</span>
                      {btn.variant === "action" && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950 font-bold ml-0.5">
                          <ArrowUpRight size={10} strokeWidth={3} />
                        </span>
                      )}
                    </Element>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
