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

      {/* Simple padding to replace the huge text */}
      <div className="relative px-4 pt-12 pb-4">
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
