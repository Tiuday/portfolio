import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const audiences = [
  {
    icon: '📊',
    title: 'Small Business Owners',
    pain: 'Tired of dead workforce? Employees who drain money without moving the needle?',
    solution: 'We give you agentic teams that increase revenue, reduce costs, and never complain.',
    outcomes: ['More profit', 'More freedom', 'More family time'],
    color: '#8B5CF6',
  },
  {
    icon: '💼',
    title: 'Working Professionals',
    pain: 'Drowning in tasks? Juggling work and life like a circus act?',
    solution: 'We build personalized management systems that organize your chaos.',
    outcomes: ['Work smarter', 'Live fuller', 'Breathe easier'],
    color: '#A78BFA',
  },
  {
    icon: '🎨',
    title: 'Creators & Personal Brands',
    pain: 'Talented but buried in admin? Great at your craft but terrible at lead management?',
    solution: 'We automate the boring stuff so you can focus on your art.',
    outcomes: ['More creativity', 'More clients', 'More revenue'],
    color: '#C4B5FD',
  },
]

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="impact" className="relative bg-black py-28 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(46,16,101,0.15) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Why Work With Us
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cossette font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-6"
        >
          This Isn't About Your Business.
          <br />
          <span className="gradient-text">It's About Your LIFE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg mb-16 max-w-xl"
        >
          We work with three types of game-changers.
        </motion.p>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${a.color}, transparent)` }}
              />

              <div className="text-3xl mb-5">{a.icon}</div>
              <h3 className="font-cossette font-bold text-xl text-white mb-3">{a.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">{a.pain}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{a.solution}</p>

              {/* Outcomes */}
              <div className="space-y-1.5">
                {a.outcomes.map((o) => (
                  <div key={o} className="flex items-center gap-2 text-sm" style={{ color: a.color }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: a.color }} />
                    {o}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promise block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative p-10 md:p-14 rounded-3xl border border-violet-500/20 overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg, rgba(46,16,101,0.3) 0%, rgba(10,0,30,0.5) 100%)' }}
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
          />

          <p className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-5">The 23rd Gen Promise</p>
          <h3 className="font-cossette font-bold text-[clamp(1.8rem,4vw,3.5rem)] text-white leading-tight mb-6">
            When you work with us,<br />
            you're not buying a product.
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            You're buying back your <span className="text-violet-400 font-semibold">LIFE</span>.
            You're choosing quality time over quantity time.
            You're saying YES to what matters.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
          >
            I Want My Life Back
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
