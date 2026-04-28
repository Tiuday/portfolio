import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: "23rd Gen built me a personal management app that changed my life. I'm a business owner, employee, and father — and I was drowning. Now I actually have time for my family AND my business is running better than ever. 4.5/5 stars doesn't do them justice.",
    name: 'Vikas Sharma',
    role: 'Business Owner & Family Man',
    stars: 4.5,
    initials: 'VS',
    color: '#8B5CF6',
  },
  {
    quote: "My salon was invisible online. I was lost among competitors. 23rd Gen's SEO magic and beautiful website made me findable — and now my calendar is FULL. Best decision I made for my business.",
    name: 'Ajay Agarwal',
    role: 'Salon Owner',
    stars: 4,
    initials: 'AA',
    color: '#A78BFA',
  },
  {
    quote: "As a model, I was losing clients because they couldn't find me beyond Instagram. The personal brand website 23rd Gen built automated my entire lead process. I just focus on photoshoots now — the bookings handle themselves.",
    name: 'Jia Pariah',
    role: 'Model & Creator',
    stars: 5,
    initials: 'JP',
    color: '#C4B5FD',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= Math.floor(count) ? 'text-yellow-400' : n - 0.5 === count ? 'text-yellow-400' : 'text-white/20'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="testimonials" className="relative bg-black py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="absolute bottom-10 right-1/4 w-56 h-56 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Testimonials
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cossette font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-16"
        >
          Don't Take Our Word.
          <br />
          <span className="gradient-text">Take Theirs.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotate: i === 0 ? -0.5 : i === 2 ? 0.5 : 0 }}
              className="relative p-7 rounded-2xl border border-white/5 flex flex-col gap-5 transition-colors duration-300"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }}
              />

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote mark */}
              <div className="text-5xl leading-none font-cossette" style={{ color: t.color, opacity: 0.3 }}>"</div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 -mt-6">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}60)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
