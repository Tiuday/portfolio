import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer ref={ref} className="relative bg-black overflow-hidden border-t border-white/5">

      {/* Top bar — cities / tagline strip */}
      <div className="border-b border-white/5 px-6 py-3 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-white/20">
        <span>AI Agents</span>
        <span>Web Development</span>
        <span>Automation</span>
        <span>India</span>
      </div>

      {/* Massive brand name — Cassette-style */}
      <div className="relative px-4 pt-8 pb-2 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-cossette font-bold leading-none select-none"
          style={{
            fontSize: 'clamp(4rem, 18vw, 18rem)',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 40%, #2E1065 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.03em',
          }}
        >
          23rd Gen
        </motion.h2>

        {/* Subtle bottom glow behind text */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }}
        />
      </div>

      {/* Bottom row */}
      <div className="px-6 pb-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/5">

        {/* Nav links as pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-1.5 rounded-full border border-white/10 text-white/40 text-xs hover:border-violet-500/40 hover:text-violet-300 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </motion.div>

        {/* Tagline + copyright */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-right"
        >
          <p className="text-white/50 text-sm font-medium">Giving quality time back.</p>
          <p className="text-white/20 text-xs mt-1">23rd Gen © 2025</p>
        </motion.div>
      </div>
    </footer>
  )
}
