import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactMethods = [
  {
    icon: '✉',
    label: 'Email',
    value: 'work23rdgen@gmail.com',
    href: 'mailto:work23rdgen@gmail.com',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@weare23rdgen',
    href: 'https://instagram.com/weare23rdgen',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 90544 06141',
    href: 'https://wa.me/919054406141',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom center, rgba(46,16,101,0.2) 0%, transparent 60%)' }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Get In Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-pixel text-[clamp(1.5rem,3vw,3rem)] leading-[1.4] text-white mb-4"
        >
          Ready to Get
          <br />
          <span className="gradient-text">Your Life Back?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg mb-14"
        >
          Reach out on any of these channels and we'll get back to you within 24 hours.
        </motion.p>

        <div className="space-y-4">
          {contactMethods.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-200 group text-left"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(139,92,246,0.15)' }}
              >
                {c.icon}
              </div>
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-0.5">{c.label}</p>
                <p className="text-white font-medium group-hover:text-violet-300 transition-colors">{c.value}</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-violet-400 transition-colors">→</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
