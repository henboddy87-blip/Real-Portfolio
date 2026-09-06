import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SubmitAlert } from './SubmitAlert'
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react'

const contactEmail = 'phannut017@gmail.com'
const contactPhone = '+855 (097) 567-890'
const contactLocation = 'Phnom Penh City, Cambodia'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: contactPhone,
    href: `tel:${contactPhone.replace(/[\s()+-]/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactLocation,
    href: null,
  },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; title: string; message: string } | null>(null)
  const { ref: sectionRef, inView } = useInView()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value.trim()
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value
    const budget = (form.elements.namedItem('budget') as HTMLSelectElement)?.value
    const country = (form.elements.namedItem('country') as HTMLInputElement)?.value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim()

    if (!name || !email || !message) {
      setStatus('error')
      setAlert({
        type: 'error',
        title: 'Required Fields Missing',
        message: 'Please provide your name, email, and project message before submitting.',
      })
      return
    }

    setStatus('sending')
    setAlert(null)

    setTimeout(() => {
      setStatus('success')
      form.reset()
      setAlert({
        type: 'success',
        title: 'Message Sent Successfully!',
        message: "Thank you for reaching out! I will review your project details and get in touch within 24 hours.",
      })
    }, 700)
  }

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section relative bg-white dark:bg-[#0B1710]"
    >
      <div className="container-custom">
        {/* 50/50 two-column spacious grid */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column (50%): Info & Details */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#ffaa00]" />
              <span className="font-display text-sm font-extrabold tracking-widest uppercase text-[#143826] dark:text-[#ffaa00]">
                Contact Us
              </span>
            </div>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#143826] dark:text-white">
              Let's Talk for <span className="text-[#ffaa00]">Your Next Projects</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300 font-normal">
              Have a project inquiry, design requirement, or potential collaboration in mind? Fill out the details or contact me directly through the channels below.
            </p>

            {/* Contact Details List */}
            <div className="mt-10 space-y-6">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-5">
                    {/* Amber Round Icon */}
                    <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#ffaa00] text-[#143826] shadow-md p-3">
                      <Icon size={22} strokeWidth={2.3} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-400">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-display text-lg sm:text-xl font-extrabold text-[#143826] transition hover:text-[#ffaa00] dark:text-zinc-100 dark:hover:text-[#ffaa00]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-display text-lg sm:text-xl font-extrabold text-[#143826] dark:text-zinc-100">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column (50%): Contact Form */}
          <div
            className={`transition-all duration-700 delay-150 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl sm:rounded-[2rem] border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-xl transition-all dark:border-2 dark:border-[#1e4a34] dark:bg-[#11261b] dark:shadow-black/40"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Your Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    Your Name <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ex. Heng Viseth"
                    className="contact-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    Email <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="viseth@gmail.com"
                    className="contact-input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    Phone <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="contact-input"
                  />
                </div>

                {/* I'm Interested In */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    I'm Interested In <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="web-dev"
                    className="contact-input"
                  >
                    <option value="web-dev">Web Application Development</option>
                    <option value="data-analytics">Data Analytics &amp; Exploration</option>
                    <option value="mobile">Mobile Application Development</option>
                    <option value="ai">AI Integration &amp; Exploration</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    Budget Range (USD) <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue="500-1500"
                    className="contact-input"
                  >
                    <option value="free">Discussion</option>
                    <option value="under-500">Less than $500</option>
                    <option value="500-1500">$500 – $1,500</option>
                    <option value="1500-3000">$1,500 – $3,000</option>
                    <option value="3000-5000">$3,000 – $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    Country <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Cambodia"
                    className="contact-input"
                  />
                </div>

                {/* Your Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#143826] dark:text-[#ffaa00]"
                  >
                    Your Message <span className="text-[#ffaa00] dark:text-white">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project goals, scope, timeline, and questions..."
                    className="contact-input resize-y"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-pill-action text-base font-bold px-8 py-3.5 disabled:opacity-70"
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Submit'}</span>
                  <span className="btn-arrow-badge">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {alert && (
        <SubmitAlert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </section>
  )
}