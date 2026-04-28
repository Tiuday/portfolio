import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cyclingWords = ['Time', 'Freedom', 'Life', 'Joy']

function GalaxyBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Stars
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.003 + 0.001,
      twinkle: Math.random() * Math.PI * 2,
    }))

    // Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      hue: Math.random() * 40 + 260, // violet range
    }))

    let t = 0
    const draw = () => {
      t += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Deep space gradient
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.4, canvas.width * 0.7
      )
      grad.addColorStop(0, 'rgba(46,16,101,0.7)')
      grad.addColorStop(0.5, 'rgba(10,0,30,0.85)')
      grad.addColorStop(1, 'rgba(0,0,0,1)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Nebula glow
      const nGrad = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.35, 0,
        canvas.width * 0.5, canvas.height * 0.35, canvas.width * 0.3
      )
      nGrad.addColorStop(0, 'rgba(139,92,246,0.12)')
      nGrad.addColorStop(0.5, 'rgba(109,40,217,0.06)')
      nGrad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = nGrad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Stars
      stars.forEach((s) => {
        s.twinkle += s.speed
        const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha * s.alpha})`
        ctx.fill()
      })

      // Floating particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5
        if (p.y < -5) p.y = canvas.height + 5
        if (p.y > canvas.height + 5) p.y = -5

        const pulse = 0.6 + 0.4 * Math.sin(t * 2 + p.x)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.alpha * pulse})`
        ctx.fill()

        // Glow
        const gGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        gGrad.addColorStop(0, `hsla(${p.hue}, 80%, 70%, 0.15)`)
        gGrad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = gGrad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#000' }}
    />
  )
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % cyclingWords.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GalaxyBackground />

      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          AI Agents & Web Development
        </motion.div>

        {/* Huge brand name — Cassette-style */}
        <div className="relative overflow-hidden mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-cossette font-bold leading-none select-none"
            style={{
              fontSize: 'clamp(4rem, 15vw, 12rem)',
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
        {/* Main headline */}
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-pixel text-[clamp(1.5rem,3vw,3rem)] leading-[1.5] tracking-tight flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap mt-8"
          >
            <span className="text-white">WE SELL YOUR</span>
            {/* Cycling word */}
            <span className="relative inline-block text-violet-400" style={{ minWidth: '180px' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={cyclingWords[wordIdx]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block glow-text uppercase"
                >
                  {cyclingWords[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-white">BACK.</span>
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered solutions & beautiful web experiences that give you more time
          for what truly matters — your family, your passion, your life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-colors duration-200"
          >
            Let's Build Something Amazing
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full border border-white/20 hover:border-violet-400/60 text-white/80 hover:text-white font-semibold text-base transition-all duration-200"
          >
            See Our Work
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
