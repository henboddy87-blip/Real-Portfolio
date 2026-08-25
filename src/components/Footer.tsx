import React from 'react'
import { ArrowRight, ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

const siteName = 'Hoeun Sophanut'
const contactEmail = 'phannut017@gmail.com'
const contactPhone = '+855 (097) 567-890'
const contactLocation = 'Phnom Penh City, Cambodia'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#faqs', label: 'FAQs' },
]

/* Official standalone brand SVGs with no wrapper backgrounds */
function GitHubLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function LinkedInLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4.8" fill="#0A66C2" />
      <path
        d="M7.12 6.88a1.64 1.64 0 1 1-3.28 0 1.64 1.64 0 0 1 3.28 0zm-.18 3.56H4.06V19h2.88V10.44zm4.56 0H8.74V19h2.76v-4.53c0-1.2.23-2.36 1.71-2.36 1.46 0 1.48 1.37 1.48 2.44V19h2.77v-5.02c0-2.47-.53-4.36-3.41-4.36-1.39 0-2.31.76-2.69 1.48h-.04V10.44z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function TelegramLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#24A1DE" />
      <path
        d="M17.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.14.119.096.161.226.171.325.016.093.036.306.02.472z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function FacebookLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.117 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.6a16.03 16.03 0 0 0-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.27H6.75v3h2.68V20a12.09 12.09 0 0 0 3.28 0v-7.28h2.41z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

const socialLinks = [
  {
    icon: GitHubLogo,
    href: 'https://github.com/henboddy87-blip',
    label: 'GitHub',
    wrapperClass: 'text-[#181717] hover:text-black dark:text-white dark:hover:text-[#ffaa00]',
  },
  {
    icon: LinkedInLogo,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    wrapperClass: 'hover:opacity-90',
  },
  {
    icon: TelegramLogo,
    href: 'https://t.me',
    label: 'Telegram',
    wrapperClass: 'hover:opacity-90',
  },
  {
    icon: FacebookLogo,
    href: 'https://facebook.com',
    label: 'Facebook',
    wrapperClass: 'hover:opacity-90',
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-zinc-50 pt-16 pb-12 border-t border-zinc-200/80 dark:bg-[#08170F] dark:border-forest-900">
      <div className="container-custom">
        {/* Top Header Row: Let's Connect there + CTA Button */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200/80 pb-12 md:flex-row md:items-center dark:border-forest-900/80">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-forest-950 dark:text-white">
              Let's <span className="text-[#ffaa00]">Connect</span> there
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal">
              Ready to start your next web app or design project? Let's make it happen.
            </p>
          </div>

          <a href="#contact" className="btn-pill-action self-start md:self-auto text-base font-bold px-7 py-3">
            <span>Hire Me</span>
            <span className="btn-arrow-badge">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* 3 Balanced Columns Layout */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Socials (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-2xl sm:text-3xl text-forest-950 dark:text-white">
                {siteName}<span className="text-[#ffaa00]">.</span>
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
              Full-Stack Developer &amp; UI/UX specialist dedicated to engineering delightful, robust, and conversion-focused web solutions.
            </p>

            {/* Pure Original Brand Logos without background wrappers */}
            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className={`inline-flex items-center justify-center transition-transform duration-300 hover:scale-120 hover:-translate-y-0.5 ${s.wrapperClass}`}
                  >
                    <Icon className="h-8 w-8 object-contain" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-extrabold tracking-wider uppercase text-forest-950 dark:text-[#ffaa00]">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm sm:text-base font-medium">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-zinc-600 transition hover:text-[#ffaa00] dark:text-zinc-400 dark:hover:text-[#ffaa00]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-base font-extrabold tracking-wider uppercase text-forest-950 dark:text-[#ffaa00]">
              Contact
            </h4>
            <div className="mt-5 space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffaa00]/15 text-[#143826] dark:bg-[#11261b] dark:text-[#ffaa00]">
                  <Phone size={16} strokeWidth={2.3} />
                </div>
                <a href={`tel:${contactPhone}`} className="hover:text-[#ffaa00] transition">
                  {contactPhone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffaa00]/15 text-[#143826] dark:bg-[#11261b] dark:text-[#ffaa00]">
                  <Mail size={16} strokeWidth={2.3} />
                </div>
                <a href={`mailto:${contactEmail}`} className="hover:text-[#ffaa00] transition">
                  {contactEmail}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffaa00]/15 text-[#143826] dark:bg-[#11261b] dark:text-[#ffaa00]">
                  <MapPin size={16} strokeWidth={2.3} />
                </div>
                <span>{contactLocation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 sm:flex-row dark:border-forest-900/80">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} <span className="font-bold text-forest-950 dark:text-zinc-200">{siteName}</span>. All rights reserved.
          </p>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-gold dark:text-zinc-300 dark:hover:text-gold"
          >
            <span>Back to top</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-forest-950 shadow-sm transition-transform hover:scale-110">
              <ArrowUp size={13} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}