import React from 'react'

interface MarqueeStripProps {
  className?: string
  items?: string[]
}

const defaultItems = [
  'Web Development',
  'UI/UX Design',
  'Full-Stack Apps',
  'AI Engineering',
  'React & Next.js',
  'Python & FastAPI',
  'Tailwind CSS',
  'Database Architecture',
  'Cloud & DevOps',
  'Responsive Systems',
]

export function MarqueeStrip({ className = '', items = defaultItems }: MarqueeStripProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#ffaa00] py-3.5 sm:py-4 shadow-sm select-none ${className}`}
      aria-label="Skills Marquee"
    >
      {/* Top & Bottom Subtle Borders */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-[#143826]/15" />
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#143826]/15" />

      {/* Infinite Seamless Looping Marquee Moving Right to Left Forever */}
      <div className="marquee-container">
        {/* Track 1 */}
        <div className="marquee-track">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-7 sm:gap-9">
              <span className="whitespace-nowrap font-display font-black text-xs sm:text-sm md:text-base tracking-widest uppercase text-[#143826]">
                {item}
              </span>
              <span className="text-[#143826]/80 text-base sm:text-lg select-none leading-none" aria-hidden="true">
                ✹
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for smooth seamless endless loop) */}
        <div className="marquee-track" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-7 sm:gap-9">
              <span className="whitespace-nowrap font-display font-black text-xs sm:text-sm md:text-base tracking-widest uppercase text-[#143826]">
                {item}
              </span>
              <span className="text-[#143826]/80 text-base sm:text-lg select-none leading-none" aria-hidden="true">
                ✹
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
