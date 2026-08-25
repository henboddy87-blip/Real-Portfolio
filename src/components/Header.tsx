import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react'

const siteName = 'Hoeun Sophanut'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#faqs', label: 'FAQs' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1)).concat(['contact'])
    const onScroll = () => {
      const y = window.scrollY + 160
      const sections = sectionIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((x): x is { id: string; el: HTMLElement } => x.el !== null)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop)

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= y) {
          setActiveSection(sections[i].id)
          return
        }
      }
      setActiveSection('hero')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 py-3 shadow-md shadow-zinc-900/5 backdrop-blur-xl border-b border-zinc-200/80 dark:bg-[#0B1710]/95 dark:shadow-black/40 dark:border-[#1e4a34]/70'
          : 'bg-white/85 py-4.5 backdrop-blur-md border-b border-zinc-200/60 dark:bg-[#0B1710]/85 dark:border-[#1e4a34]/50'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="group flex items-center gap-3">
          
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#143826] transition-colors group-hover:text-[#ffaa00] dark:text-white dark:group-hover:text-[#ffaa00]">
            {siteName}
            <span className="text-[#ffaa00]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:block" aria-label="Main Navigation">
          <ul className="flex items-center gap-1.5 xl:gap-2">
            {navLinks.map(({ href, label }) => {
              const id = href.slice(1)
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`inline-flex items-center rounded-full px-3.5 py-1.5 xl:px-4 xl:py-2 text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-[#143826] text-[#ffaa00] font-bold shadow-sm dark:bg-[#ffaa00] dark:text-[#143826] dark:font-extrabold'
                        : 'text-[#27272a] font-semibold hover:bg-zinc-100 hover:text-[#143826] dark:text-[#e4e4e7] dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle & Contact Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            aria-label="Toggle light/dark theme"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-zinc-300/90 bg-zinc-100/90 text-[#143826] shadow-sm transition-all duration-200 hover:scale-105 hover:border-[#ffaa00] hover:bg-zinc-200 active:scale-95 dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-[#ffaa00] dark:hover:bg-[#1a4a33] dark:hover:border-[#ffaa00]"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-[#ffaa00] stroke-[2.3] transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon size={19} className="text-[#143826] stroke-[2.3] transition-transform duration-300 rotate-0 hover:-rotate-12" />
            )}
          </button>

          {/* Desktop Contact CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex group items-center rounded-full bg-[#143826] pl-5 pr-1.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#143826]/20 transition-all duration-300 hover:bg-[#0d281c] hover:shadow-lg hover:shadow-[#143826]/30 dark:bg-[#ffaa00] dark:text-[#143826] dark:hover:bg-[#f09a00] dark:shadow-[#ffaa00]/20"
          >
            <span>Contact Me</span>
            <span className="ml-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffaa00] text-[#143826] transition-transform duration-300 group-hover:scale-110 dark:bg-[#143826] dark:text-[#ffaa00]">
              <ArrowRight size={13} strokeWidth={2.5} />
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/90 bg-zinc-100/90 text-[#143826] shadow-sm transition hover:border-[#ffaa00] hover:text-[#ffaa00] lg:hidden dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-white dark:hover:border-[#ffaa00]"
          >
            {menuOpen ? <X size={20} strokeWidth={2.3} /> : <Menu size={20} strokeWidth={2.3} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-2xl transition-transform dark:bg-[#0B1710] border-l border-zinc-200 dark:border-[#1e4a34]">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/80 pb-5 dark:border-[#1e4a34]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffaa00] text-[#143826] font-display font-black text-lg">
                  H
                </span>
                <span className="font-display font-black text-lg text-[#143826] dark:text-white">
                  {siteName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-zinc-300"
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1)
                const isActive = activeSection === id
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? 'bg-[#143826] font-bold text-[#ffaa00] dark:bg-[#ffaa00] dark:text-[#143826]'
                        : 'font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>{label}</span>
                    <ArrowRight size={14} className={isActive ? 'opacity-100' : 'opacity-40'} />
                  </a>
                )
              })}

              {/* Drawer Theme Switcher & Contact */}
              <div className="mt-6 space-y-3 border-t border-zinc-200/80 pt-5 dark:border-[#1e4a34]">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex w-full items-center justify-between rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm font-bold text-[#143826] dark:border-[#1e4a34] dark:bg-[#11261b] dark:text-[#ffaa00]"
                >
                  <span className="flex items-center gap-2">
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    <span>Theme</span>
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-pill-action flex w-full items-center justify-between py-3 px-5 text-sm font-bold shadow-lg"
                >
                  <span>Contact Me</span>
                  <span className="btn-arrow-badge">
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}