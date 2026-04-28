import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: 'AI-Powered Salon Website',
    client: 'Salon Owner',
    type: 'Websites',
    tag: 'WEB + AI',
    color: '#8B5CF6',
    problem: 'Wrong haircuts due to lack of information. Missed leads. Manual appointment chaos.',
    solution: [
      'AI face-shape analysis for personalized hairstyle recommendations',
      'Skin & hair analysis for treatment suggestions',
      'Automated lead capture → Google Sheets → Auto-callback',
      'Zero missed opportunities, maximum creative freedom',
    ],
    impact: 'Salon owner focuses on artistry, not admin. Revenue ↑ Stress ↓',
    stack: 'React · Node.js · OpenAI · Google Sheets API',
  },
  {
    id: 2,
    name: 'QMap — Navigate Safely',
    client: 'Gen Z Users',
    type: 'Apps',
    tag: 'APP',
    color: '#A78BFA',
    problem: "Existing maps don't show crowd levels, safety data, or real-time local intel.",
    solution: [
      'Real-time crowd density heat maps',
      'Safety zone alerts (accident-prone & crime areas)',
      'Introverts can find quiet spots',
      'Community-powered updates + temperature data',
    ],
    impact: 'People reach destinations safely, confidently, and comfortably.',
    stack: 'React · Mapbox GL · Supabase · Vite',
  },
  {
    id: 3,
    name: 'Tiu — Personal Brand Portfolio',
    client: 'Model & Creator',
    type: 'Websites',
    tag: 'WEB',
    color: '#C4B5FD',
    problem: "Instagram isn't enough. Brands can't find contact info. Lead management chaos.",
    solution: [
      'Stunning portfolio showcasing personality & collaborations',
      'Automated inquiry → Google Sheets → Appointment scheduling',
      'Smart notification system',
      'Optional personalized management app',
    ],
    impact: 'Tiu focuses on craft, not chasing leads. Bookings automated. Revenue soaring.',
    stack: 'React · Tailwind · Google Sheets API · Framer Motion',
  },
  {
    id: 4,
    name: 'Cold Outreach AI Agent',
    client: 'Sales Teams',
    type: 'AI Agents',
    tag: 'AI AGENT',
    color: '#7C3AED',
    problem: 'Sales teams waste hours writing repetitive cold emails and DMs.',
    solution: [
      'Input company name → AI generates personalized cold emails',
      'LinkedIn DM scripts generated instantly',
      'Scales outreach 10x without extra headcount',
      'Human creativity freed for closing deals',
    ],
    impact: 'Sales teams focus on relationships, not repetitive writing.',
    stack: 'Python · Claude API · n8n · Gmail API',
  },
  {
    id: 5,
    name: 'Content Repurposing Agent',
    client: 'Creators',
    type: 'AI Agents',
    tag: 'AI AGENT',
    color: '#8B5CF6',
    problem: 'Creators spend hours adapting one piece of content for multiple platforms.',
    solution: [
      'Paste blog/article → outputs LinkedIn posts in seconds',
      'YouTube scripts, Instagram captions auto-generated',
      'Platform-specific tone optimization',
      '5 hours of work → 5 minutes',
    ],
    impact: 'Creators create more, stress less.',
    stack: 'Python · Claude API · Make.com',
  },
  {
    id: 6,
    name: 'AI Research Team (3-Agent)',
    client: 'Small Businesses',
    type: 'AI Agents',
    tag: 'AGENTIC TEAM',
    color: '#A78BFA',
    problem: "Small businesses can't afford full research teams.",
    solution: [
      'Deploy a 3-agent team: Researcher + Strategist + Critic',
      'Works 24/7 — no sick days, no office politics',
      'Analyzes documents, generates summaries',
      'Provides strategic insights on demand',
    ],
    impact: 'Small businesses get enterprise-level research at startup budgets.',
    stack: 'Claude API · Python · Agent Orchestration',
  },
]

const filters = ['All', 'Websites', 'AI Agents', 'Apps']

function ProjectCard({ project, i }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      layout
    >
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden cursor-pointer group"
        whileHover={{ borderColor: `${project.color}40`, background: `${project.color}08` }}
        transition={{ duration: 0.2 }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] tracking-[0.2em] font-bold px-2.5 py-1 rounded-full mb-3 inline-block"
                style={{ color: project.color, background: `${project.color}18` }}
              >
                {project.tag}
              </span>
              <h3 className="font-cossette font-bold text-xl text-white group-hover:text-violet-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-white/40 text-sm mt-1">Client: {project.client}</p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-violet-500/40 group-hover:text-violet-400 transition-all"
            >
              +
            </motion.div>
          </div>

          {/* Problem preview */}
          <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{project.problem}</p>

          {/* Expanded content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs tracking-widest text-violet-400/60 uppercase mb-2">Solution</p>
                    <ul className="space-y-1.5">
                      {project.solution.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                          <span className="text-violet-400 mt-0.5 flex-shrink-0">→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: `${project.color}10`, border: `1px solid ${project.color}20` }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: project.color }}>Impact</p>
                    <p className="text-white/80 text-sm">{project.impact}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-white/20 uppercase mb-1.5">Stack</p>
                    <p className="text-white/40 text-xs">{project.stack}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter)

  return (
    <section id="portfolio" className="relative bg-black py-28 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom left, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Our Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cossette font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-4"
        >
          Real Solutions.
          <br />
          <span className="gradient-text">Real Impact. Real Results.</span>
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 flex-wrap mb-12 mt-8"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'border border-white/10 text-white/50 hover:border-violet-500/30 hover:text-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
