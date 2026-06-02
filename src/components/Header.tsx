import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

// ─── Data ────────────────────────────────────────────────────────────────────
const siteName = 'Hoeun Sophanut'

const navLinks = [
  { href: '#hero',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#projects',     label: 'Projects' },
  { href: '#skills',       label: 'Skills' },
  { href: '#experience',   label: 'Experience' },
  { href: '#contact',      label: 'Contact' },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme }        = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const onScroll = () => {
      const y = window.scrollY + 120
      // Sort sections by their actual DOM position (offsetTop) so the
      // closest section from the top of the viewport is detected correctly
      const sorted = [...sections]
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((x): x is { id: string; el: HTMLElement } => x.el !== null)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop)

      for (let i = sorted.length - 1; i >= 0; i--) {
        if (sorted[i].el.offsetTop <= y) { setActiveSection(sorted[i].id); return }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <header
        id="header"
        className={`font-body fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-4'}`}
      >
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6 md:h-16 md:px-10 lg:px-16">
          {/* Logo */}
          <a
            href="#hero"
            className="relative z-10 flex items-center gap-2 font-display text-2xl leading-none text-zinc-900 dark:text-white"
          >
            
            <span className="hidden sm:inline tracking-wide">{siteName}</span>
          </a>

          {/* Desktop nav */}
          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            aria-label="Main"
          >
            <ul className="flex items-center gap-8 lg:gap-10">
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1)
                const isActive = activeSection === id
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={handleNavClick}
                      className={`font-body relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                        isActive
                          ? 'text-accent dark:text-accent-light after:w-full'
                          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Right controls */}
          <div className="relative z-10 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/60 text-zinc-600 shadow-sm backdrop-blur-sm transition hover:border-zinc-300 hover:bg-white hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <span className="text-lg">{theme === 'dark' ? '☽' : '☀'}</span>
            </button>
            <a href="#contact" className="btn-primary font-body hidden font-medium tracking-wide shadow-lg shadow-accent/25 md:inline-flex">
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/60 shadow-sm backdrop-blur-sm md:hidden dark:border-zinc-700 dark:bg-zinc-800/60"
            >
              <span className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 z-40 flex h-full w-full max-w-sm flex-col border-l border-zinc-200 bg-white shadow-2xl transition-transform duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-1 p-6 pt-24">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className={`font-body rounded-xl px-4 py-3.5 text-base font-medium tracking-wide transition ${
                  isActive
                    ? 'bg-accent/15 text-accent dark:bg-accent/20'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                {label}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn-primary font-body mt-6 w-full justify-center py-3.5 font-medium tracking-wide"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  )
}