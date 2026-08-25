import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MarqueeStrip } from './components/MarqueeStrip'
import { Services } from './components/Services'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Blogs } from './components/Blogs'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFBFB] text-zinc-900 selection:bg-gold selection:text-forest-950 dark:bg-[#0B1710] dark:text-zinc-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-forest-950 focus:outline-none focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Header />

      <main id="main">
        {/* 1. Hero Section (Image 1 Top) */}
        <Hero />

        {/* 2. Golden Marquee Divider Strip (Image 1 Middle) */}
        <MarqueeStrip />

        {/* 3. Services Section (Image 1 Middle: Services I Provide) */}
        <Services />

        {/* 4. About Section (Image 1 Bottom: Dark Forest Green "Who is Hoeun Sophanut?") */}
        <About />

        {/* 5. Projects Portfolio (Image 2: My Latest Projects) */}
        <Projects />

        {/* 6. Academic & Professional Journey (Image 3: Education & Work) */}
        <Experience />

        {/* 7. Skills & Core Capabilities */}
        <Skills />

        {/* 8. Latest News & Blogs (Image 5 Top) */}
        <Blogs />

        {/* 9. FAQs Section (Image 5 Middle: Dark Forest Green) */}
        <FAQ />

        {/* 10. Golden Marquee Divider Strip (Image 5 Divider) */}
        <MarqueeStrip />

        {/* 11. Contact Section (Image 4: Let's Talk for Your Next Projects) */}
        <Contact />
      </main>

      {/* 12. Footer Section (Image 5 Bottom: Let's Connect there) */}
      <Footer />
    </div>
  )
}

export default App