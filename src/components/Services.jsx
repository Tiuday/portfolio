import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'AI Agents & Agentic Teams',
    short: 'Deploy intelligent teams that work 24/7',
    desc: 'Research teams, content teams, sales teams — all powered by AI, all working for YOU while you focus on what matters. No HR headaches, no office politics, no sick days.',
    accent: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    tag: 'AI',
  },
  {
    id: '02',
    title: 'Stunning Websites & Web Apps',
    short: 'Not just pretty — strategic',
    desc: 'SEO-optimized, conversion-focused, and built to make your audience feel something. Every pixel has a purpose. Every interaction is intentional.',
    accent: '#A78BFA',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.18)',
    tag: 'WEB',
  },
  {
    id: '03',
    title: 'Personalized Solutions',
    short: 'If it saves you time, we build it',
    desc: 'Custom task managers for busy professionals. Lead automation for salon owners. Personal brand websites for creators. Your challenge is unique — your solution should be too.',
    accent: '#C4B5FD',
    bg: 'rgba(196,181,253,0.06)',
    border: 'rgba(196,181,253,0.15)',
    tag: 'CUSTOM',
  },
  {
    id: '04',
    title: 'Full-Stack Applications',
    short: 'End-to-end solutions, built to scale',
    desc: 'Fast, scalable, beautiful. From database architecture to pixel-perfect UI — we own the entire stack so you don\'t have to manage five different vendors.',
    accent: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
    tag: 'APPS',
  },
  {
    id: '05',
    title: 'Creative Problem Solving',
    short: "We don't do templates — we do transformation",
    desc: 'Your challenge is unique. Your solution should be too. We sit down, we think hard, and we build something nobody has built before — specifically for you.',
    accent: '#DDD6FE',
    bg: 'rgba(221,214,254,0.05)',
    border: 'rgba(221,214,254,0.12)',
    tag: 'STRATEGY',
  },
]

function ServiceRow({ service, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2 }}
        className="group flex items-start gap-6 p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-default"
        style={{
          background: service.bg,
          borderColor: service.border,
        }}
      >
        {/* Number */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-xl border text-xs font-bold tracking-widest"
          style={{ borderColor: service.border, color: service.accent }}
        >
          {service.id}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-cossette font-bold text-xl md:text-2xl text-white group-hover:text-violet-300 transition-colors">
              {service.title}
            </h3>
            <span className="flex-shrink-0 text-[10px] tracking-[0.2em] font-bold px-2.5 py-1 rounded-full"
              style={{ color: service.accent, background: `${service.accent}18` }}
            >
              {service.tag}
            </span>
          </div>
          <p className="text-white/50 text-sm mb-3 font-medium">{service.short}</p>
          <p className="text-white/40 text-sm leading-relaxed max-w-2xl">{service.desc}</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="hidden md:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ borderColor: service.accent, color: service.accent }}
          whileHover={{ rotate: 45 }}
        >
          ↗
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="relative bg-black py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(139,92,246,0.08) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          What We Do
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cossette font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-4"
        >
          We Build Freedom,
          <br />
          <span className="gradient-text">Wrapped in Beautiful Code</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-lg mb-14 max-w-xl"
        >
          Five ways we give you your life back — pick one, or let us recommend.
        </motion.p>

        <div className="space-y-3">
          {services.map((s, i) => (
            <ServiceRow key={s.id} service={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
