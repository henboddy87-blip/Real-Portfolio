import { useState, useRef, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqsData: FAQItem[] = [
  {
    id: '1',
    question: 'What services do you offer as a developer and designer?',
    answer:
      'I specialize in full-stack web application development (React, TypeScript, Python/FastAPI) and AI workflow integrations. I handle projects from early conceptualization to full deployment.',
  },
  {
    id: '2',
    question: 'Can I download your resume/CV for information?',
    answer:
      'Certainly! You can download my resume directly from the website via the "Download CV" button. It provides a comprehensive overview of my education at RUPP, technical experience, project portfolio, and skill proficiencies.',
  },
  {
    id: '3',
    question: 'Are you available for freelance & development work?',
    answer:
      'Yes, I am actively open to freelance contracts, consulting, and full-time remote opportunities. Whether you need a brand-new web platform or want to revamp an existing product, feel free to reach out!',
  },
  {
    id: '4',
    question: 'What tech stack and tools do you use for your work?',
    answer:
      'For frontend: React, TypeScript, Tailwind CSS. For backend: Python, FastAPI, PostgreSQL. For deployment: Vercel, Docker, Gi, Render.',
  },
  {
    id: '5',
    question: 'How do I get started with a project or collaboration?',
    answer:
      'Simply fill out the contact form below with your project scope, budget range, and timeline. I review all inquiries carefully and typically respond within 24 hours to schedule a kickoff discussion.',
  },
]

/* Animated accordion panel — smooth height transition */
function AccordionPanel({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      className="overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out"
      style={{
        maxHeight: isOpen ? `${height}px` : '0px',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export function FAQ() {
  const { ref: sectionRef, inView } = useInView()
  // Set item 2 ("Can I download your resume...") as default open to match screenshot
  const [openId, setOpenId] = useState<string>('2')

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id)
  }

  return (
    <section
      id="faqs"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-dark section relative overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-6 bg-[#ffaa00]" />
            <span className="font-display text-sm font-extrabold tracking-widest uppercase text-[#ffaa00]">
              FAQs
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-white">
            Questions? <span className="text-[#ffaa00]">Look here.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal">
            Answers to common questions regarding my services, workflow, and engineering capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div
          className={`mx-auto mt-14 max-w-4xl space-y-4 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {faqsData.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`group overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#ffaa00] shadow-2xl shadow-[#ffaa00]/20'
                    : 'border border-[#1e4a34]/80 bg-[#11261b]/70 hover:border-[#ffaa00]/50 hover:bg-[#11261b]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7"
                >
                  {/* Question number + text */}
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 shrink-0 font-display text-sm font-black tabular-nums ${
                        isOpen ? 'text-[#143826]/60' : 'text-[#ffaa00]/50'
                      }`}
                    >
                      0{faq.id}
                    </span>
                    <span
                      className={`font-display text-lg sm:text-xl md:text-2xl font-extrabold leading-tight ${
                        isOpen ? 'text-[#143826]' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Open/Close toggle button — high contrast in both themes + hover */}
                  <span
                    className={`ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isOpen
                        ? 'border-[#143826] bg-[#143826] text-[#ffaa00] hover:bg-[#0b2116] hover:border-[#0b2116]'
                        : 'border-[#ffaa00]/40 bg-transparent text-[#ffaa00] hover:border-[#ffaa00] hover:bg-[#ffaa00] hover:text-[#143826]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={20} strokeWidth={2.8} />
                    ) : (
                      <Plus size={20} strokeWidth={2.8} />
                    )}
                  </span>
                </button>

                {/* Answer Content — smooth animated expand */}
                <AccordionPanel isOpen={isOpen}>
                  <div className="px-6 pb-7 pt-0 sm:px-7 sm:pb-8">
                    <div className="ml-8 border-l-2 border-[#143826]/25 pl-5">
                      <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#143826]/85">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </AccordionPanel>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
