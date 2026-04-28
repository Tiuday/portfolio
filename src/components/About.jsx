import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '6+', label: 'Projects Shipped' },
  { value: '3', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'AI Agents Running' },
]

const highlights = [
  '17-year-old Business Owner & CEO',
  'AI & Ethics Expert — Law Student specialization',
  'Passionate about creative, human-centered technology',
  'Completed advanced AI programs',
  'Built innovative projects solving real-world problems',
]

function StatCounter({ value, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-cossette font-bold text-4xl md:text-5xl gradient-text mb-1">{value}</div>
      <div className="text-white/40 text-sm tracking-wide">{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="relative bg-black py-28 overflow-hidden">
      {/* Cinematic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(46,16,101,0.25) 0%, transparent 70%)' }} />
        {/* Top grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Diagonal accent */}
        <div className="absolute -right-20 top-20 w-96 h-96 rounded-full border border-violet-500/10" />
        <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full border border-violet-500/10" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Who We Are
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cossette font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-16"
        >
          Meet the Mind<br />
          <span className="gradient-text">Behind 23rd Gen</span>
        </motion.h2>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Abstract founder card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto md:mx-0"
              style={{ background: 'linear-gradient(135deg, rgba(46,16,101,0.8) 0%, rgba(10,0,30,0.9) 100%)' }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(139,92,246,1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(167,139,250,0.8) 0%, transparent 50%)',
                }}
              />
              {/* Large stylized "N" initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cossette font-bold text-[12rem] text-violet-500/10 leading-none select-none">N</span>
              </div>
              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="font-cossette font-bold text-2xl text-white">Nakshatra Sharma</div>
                <div className="text-violet-400 text-sm mt-1">Founder & CEO, 23rd Gen</div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">AI Builder</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">Law Student</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">17 yrs old</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed"
            >
              I believe the world wastes too much human potential on repetitive,
              soul-crushing tasks. People deserve better. They deserve to solve{' '}
              <span className="text-white font-semibold">REAL problems</span>, create{' '}
              <span className="text-white font-semibold">REAL innovations</span>, and spend{' '}
              <span className="text-white font-semibold">REAL time</span> with the people they love.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 leading-relaxed"
            >
              As an AI enthusiast and law student, I understand both the technical power of
              intelligent systems AND the ethical responsibility of deploying them right.
              My passion? Destroying dead workforce. Giving small business owners, creators,
              and professionals their lives back.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/60 leading-relaxed"
            >
              Building solutions that don't just increase revenue —
              they increase <span className="text-violet-400 font-semibold">HAPPINESS</span>.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3 mt-6"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}
                  className="flex items-start gap-3 text-white/60 text-sm"
                >
                  <span className="text-violet-400 mt-0.5 flex-shrink-0">✦</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          {stats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} label={s.label} delay={0.2 + i * 0.1} />
          ))}
        </div>

        {/* "What Makes Us Different" */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4">Our Philosophy</div>
            <h3 className="font-cossette font-bold text-[clamp(1.8rem,4vw,3rem)] text-white mb-8">
              What Makes Us Different?
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '✦', text: "The pleasure of seeing a beautifully crafted website" },
              { icon: '✦', text: "The relief of having 10 hours back in your week" },
              { icon: '✦', text: "The joy of finally spending quality time with your family" },
              { icon: '✦', text: "The confidence of knowing your business runs while you sleep" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-violet-500/5 transition-all duration-300"
              >
                <span className="text-violet-400 text-lg mt-0.5">{item.icon}</span>
                <p className="text-white/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-white/40 text-sm italic"
          >
            Every project we build has one north star: Does this give our client their life back?
          </motion.p>
        </div>
      </div>
    </section>
  )
}
