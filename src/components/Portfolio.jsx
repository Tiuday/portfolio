import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: 'AI Salon Website',
    desc: 'Smart haircut & style recommendations',
    link: 'https://ai-salon-website-two.vercel.app/',
    color: '#8B5CF6', // Violet
  },
  {
    id: 2,
    name: 'QMap',
    desc: 'Navigate safely with real-time crowd data',
    link: 'https://qmap-beta.vercel.app/',
    color: '#3B82F6', // Blue
  },
  {
    id: 3,
    name: 'Tiu Brand',
    desc: 'Model & Creator portfolio and management',
    link: 'https://tiu-beauty-site.vercel.app/',
    color: '#EC4899', // Pink
  },
  {
    id: 4,
    name: 'Cold Outreach',
    desc: 'Automated AI sales and outreach agent',
    link: 'https://sga1-pi.vercel.app/',
    color: '#10B981', // Emerald
  },
  {
    id: 5,
    name: 'Content Agent',
    desc: 'Content repurposing across platforms',
    link: 'https://cra1.vercel.app/',
    color: '#F59E0B', // Amber
  },
  {
    id: 6,
    name: 'AI Research',
    desc: 'Multi-agent research and strategy team',
    link: '#',
    color: '#6366F1', // Indigo
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null)
  
  // To handle responsive node positions, we'll calculate coordinates based on a circle
  // We'll use a fixed radius in a square container for simplicity on both mobile and desktop,
  // or a vertical stack on mobile. Let's use a vertical stack on mobile and radial on md+.
  
  return (
    <section id="portfolio" className="relative bg-black py-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Our Portfolio
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-pixel text-[clamp(1.5rem,3vw,3rem)] leading-tight text-white mb-4"
        >
          An Ecosystem of <span className="gradient-text">Innovation</span>
        </motion.h2>
      </div>

      {/* Interactive Radial Map */}
      <div className="relative w-full max-w-5xl mx-auto aspect-square md:aspect-[16/9] flex items-center justify-center hidden md:flex">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {projects.map((p, i) => {
            const angle = (i * (360 / projects.length)) * (Math.PI / 180);
            const rX = 40; // radius percentage X
            const rY = 35; // radius percentage Y
            const x = 50 + rX * Math.cos(angle);
            const y = 50 + rY * Math.sin(angle);
            
            return (
              <motion.line
                key={`line-${p.id}`}
                x1="50%"
                y1="50%"
                x2={`${x}%`}
                y2={`${y}%`}
                stroke={hoveredId === p.id || hoveredId === null ? p.color : '#333'}
                strokeWidth={hoveredId === p.id ? 3 : 1.5}
                opacity={hoveredId === p.id ? 0.8 : 0.3}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
              />
            )
          })}
        </svg>

        {/* Central Sun */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-[0_0_80px_rgba(245,158,11,0.5)] flex items-center justify-center p-1"
          style={{
            animation: 'pulse-sun 4s infinite alternate'
          }}
        >
          <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-center p-4 cursor-default">
            <span className="font-bold text-white text-lg md:text-xl tracking-wide drop-shadow-lg">23rd Gen<br/>Hub</span>
          </div>
        </motion.div>

        {/* Nodes */}
        {projects.map((p, i) => {
          const angle = (i * (360 / projects.length)) * (Math.PI / 180);
          const rX = 40;
          const rY = 35;
          const x = 50 + rX * Math.cos(angle);
          const y = 50 + rY * Math.sin(angle);

          return (
            <motion.a
              href={p.link !== '#' ? p.link : undefined}
              target={p.link !== '#' ? "_blank" : undefined}
              rel="noopener noreferrer"
              key={p.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.8 + i * 0.1 }}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {/* Curvy highly-animated button */}
              <div 
                className="relative px-6 py-4 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center min-w-[160px] text-center"
                style={{ 
                  boxShadow: hoveredId === p.id ? `0 0 30px ${p.color}40` : 'none',
                  borderColor: hoveredId === p.id ? `${p.color}80` : 'rgba(255,255,255,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `linear-gradient(45deg, ${p.color}, transparent)` }}
                />
                
                <h3 className="font-bold text-white text-base whitespace-nowrap z-10 group-hover:scale-105 transition-transform">{p.name}</h3>
                
                <motion.div 
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ 
                    height: hoveredId === p.id ? 'auto' : 0, 
                    opacity: hoveredId === p.id ? 1 : 0,
                    marginTop: hoveredId === p.id ? 8 : 0
                  }}
                  className="overflow-hidden z-10"
                >
                  <p className="text-white/70 text-xs w-40 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-3 text-[10px] uppercase tracking-widest font-bold" style={{ color: p.color }}>
                    Explore →
                  </div>
                </motion.div>

                {/* Node glowing orb indicator */}
                <div 
                  className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: p.color, boxShadow: `0 0 10px ${p.color}` }}
                />
              </div>
            </motion.a>
          )
        })}
      </div>

      {/* Mobile view (List format with curvy aesthetic) */}
      <div className="md:hidden flex flex-col gap-6 w-full max-w-sm mx-auto px-6 z-10">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-[0_0_40px_rgba(245,158,11,0.5)] flex items-center justify-center p-1" style={{ animation: 'pulse-sun 4s infinite alternate' }}>
          <div className="w-full h-full rounded-full bg-black/40 backdrop-blur flex items-center justify-center border border-white/20">
            <span className="font-bold text-white text-sm text-center">23rd<br/>Gen</span>
          </div>
        </div>

        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.link !== '#' ? p.link : undefined}
            target={p.link !== '#' ? "_blank" : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden"
            style={{ borderLeftColor: p.color, borderLeftWidth: '4px' }}
          >
            <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at right, ${p.color}, transparent 70%)` }} />
            <h3 className="font-bold text-white text-lg mb-2 relative z-10">{p.name}</h3>
            <p className="text-white/60 text-sm relative z-10 mb-4">{p.desc}</p>
            <div className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 relative z-10" style={{ color: p.color }}>
              Explore <span className="text-lg leading-none">→</span>
            </div>
          </motion.a>
        ))}
      </div>

      <style>{`
        @keyframes pulse-sun {
          0% { transform: scale(1); box-shadow: 0 0 60px rgba(245,158,11,0.4); }
          100% { transform: scale(1.05); box-shadow: 0 0 100px rgba(245,158,11,0.7); }
        }
      `}</style>
    </section>
  )
}
