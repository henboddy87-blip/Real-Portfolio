import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ArrowRight, ArrowUpRight, Calendar, Clock, X } from 'lucide-react'

export interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  image: string
  excerpt: string
  content: string
}

const blogsData: BlogPost[] = [
  {
    id: '1',
    title: 'Architecting Scalable Full-Stack Web Applications with React & Python',
    category: 'Full-Stack Dev',
    date: '2026',
    readTime: '5 min read',
    image: './blog/book.png',
    excerpt:
      'Key architectural patterns, state management strategies, and database optimization techniques for production-ready applications.',
    content:
      'Modern web application architecture requires a delicate balance between rapid feature delivery and long-term maintainability. By structuring frontend components, writing type-safe API boundaries with TypeScript, and enforcing solid database indexing strategies, teams can scale to thousands of daily active users without incurring massive technical issues.',
  },
  {
    id: '2',
    title: 'Modern UI/UX Design: Building Clean, friendly responsive Dashboard Interfaces',
    category: 'UI/UX Design',
    date: '2026',
    readTime: '4 min read',
    image: './blog/UI.png',
    excerpt:
      'Financial Management System, let everybody track their expenses and income with daily, monthly spending. Create finance goal to archieve to specific period.',
    content:
      'Financial Management System is a comprehensive tool designed to help individuals take control of their personal finances. It provides an intuitive platform for users to monitor their daily expenses and track income streams, offering valuable insights into their spending habits. With features like personalized budgets, savings goals, and automated reports, the system empowers users to make informed financial decisions, save more effectively, and achieve their long-term financial objectives with confidence.',
  },
  {
    id: '3',
    title: 'Leveraging AI Tools & Modern Automation in Everyday Software Engineering',
    category: 'AI & Engineering',
    date: '2024',
    readTime: '6 min read',
    image: './blog/automation.png',
    excerpt:
      'Exploring how developers can harness AI APIs, automated pipelines, and intelligent agentic workflows to build smarter digital products.',
    content:
      'Artificial intelligence is reshaping the software landscape at breakneck speed. By understanding how to effectively prompt, structure embeddings, and integrate LLM APIs directly into user workflows, developers can add real intelligence to search, content summarization, and data automation within everyday business applications.',
  },
]

export function Blogs() {
  const { ref: sectionRef, inView } = useInView()
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  return (
    <section
      id="blogs"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section relative bg-zinc-50/70 dark:bg-[#08170F]"
    >
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#ffaa00]" />
              <span className="font-display text-sm font-extrabold tracking-widest uppercase text-forest-900 dark:text-[#ffaa00]">
                Articles & Insights
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black text-forest-950 dark:text-white">
              Our Latest <span className="text-[#ffaa00]">News & Blogs</span>
            </h2>
          </div>

          <a href="#contact" className="btn-pill-action self-start md:self-auto text-base font-bold px-7 py-3">
            <span>View All Blogs</span>
            <span className="btn-arrow-badge">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* 3 Blog Cards Grid matching Image 5 */}
        <div
          className={`mt-14 grid gap-8 md:grid-cols-3 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {blogsData.map((post, idx) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="card-styled group cursor-pointer flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                {/* Thumbnail with floating arrow badge on hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-forest-900/60">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Amber Arrow Badge */}
                  <div className="absolute top-3.5 right-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffaa00] text-forest-950 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 flex items-center gap-2.5">
                  <span className="tag-gold-solid text-xs px-3 py-1">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-400">
                    <Calendar size={13} className="text-[#ffaa00]" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-extrabold leading-snug text-forest-950 transition-colors group-hover:text-[#ffaa00] dark:text-white">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 line-clamp-3 dark:text-zinc-300 font-normal">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <span className="inline-flex items-center gap-2 text-sm font-extrabold text-forest-900 group-hover:text-[#ffaa00] dark:text-zinc-200 dark:group-hover:text-[#ffaa00]">
                  <span>Read More</span>
                  <ArrowRight size={15} className="text-[#ffaa00]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActivePost(null)}
          />
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl dark:bg-forest-950">
            <div className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="tag-gold-solid text-xs">{activePost.category}</span>
                  <span className="text-xs text-zinc-400">{activePost.date} • {activePost.readTime}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-forest-950 dark:text-white">
                  {activePost.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-forest-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p className="font-semibold text-forest-900 dark:text-gold">
                {activePost.excerpt}
              </p>
              <p>{activePost.content}</p>
              <p>
                As development of technology advances, Using AI will be much faster to our workspace, time and reducing over rework. Boost productivity and improving performance for digital products.
              </p>
            </div>

            <div className="mt-8 border-t border-zinc-100 pt-5 px-5 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="btn-pill-action w-full justify-center text-center"
              >
                <span className='py-2'>Close Article</span>
                
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
