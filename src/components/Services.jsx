import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'AI Agents & Teams',
    short: 'Deploy intelligent teams that work 24/7',
    desc: 'Research teams, content teams, sales teams — all powered by AI, all working for YOU. No HR headaches, no office politics, no sick days. Level up your workforce.',
    accent: '#8B5CF6',
    tag: 'AI',
    stats: { int: 99, spd: 90, atk: 85 }
  },
  {
    id: '02',
    title: 'Stunning Web Apps',
    short: 'Not just pretty — strategic',
    desc: 'SEO-optimized, conversion-focused, and built to make your audience feel something. Every pixel has a purpose. High-tier equipment for your digital presence.',
    accent: '#A78BFA',
    tag: 'WEB',
    stats: { int: 85, spd: 95, atk: 70 }
  },
  {
    id: '03',
    title: 'Personalized Solutions',
    short: 'If it saves you time, we build it',
    desc: 'Custom task managers for busy pros. Lead automation for salons. Your challenge is unique — your solution should be too. Rare custom-crafted items.',
    accent: '#C4B5FD',
    tag: 'CUSTOM',
    stats: { int: 95, spd: 80, atk: 99 }
  },
  {
    id: '04',
    title: 'Full-Stack Apps',
    short: 'End-to-end solutions, built to scale',
    desc: 'Fast, scalable, beautiful. From database architecture to pixel-perfect UI. We own the entire stack. The ultimate weapon for scaling.',
    accent: '#7C3AED',
    tag: 'APPS',
    stats: { int: 90, spd: 85, atk: 95 }
  },
]

function PixelBar({ label, val, color }) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="w-8 text-[8px] sm:text-[10px] uppercase text-white/70" style={{ fontFamily: '"Press Start 2P", monospace' }}>{label}</span>
      <div className="flex-1 h-3 bg-black border border-white/20 p-[1px] flex">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${val}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full" 
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="services" className="relative bg-[#050510] py-28 overflow-hidden" style={{ imageRendering: 'pixelated' }}>
      {/* Grid background to look like retro tile map */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-4 h-4 bg-violet-500 animate-pulse" />
          <span className="text-violet-400 text-xs sm:text-sm tracking-[0.2em] uppercase" style={{ fontFamily: '"Press Start 2P", monospace' }}>
            SELECT YOUR CLASS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-12"
          style={{ fontFamily: '"Press Start 2P", monospace', lineHeight: '1.4' }}
        >
          WE BUILD <span className="text-violet-400">FREEDOM</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Menu Selection (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {services.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                onClick={() => setActiveTab(i)}
                className={`relative px-4 sm:px-6 py-4 text-left transition-all duration-200 border-2 ${
                  activeTab === i 
                  ? 'bg-violet-900/40 border-violet-400 z-10 scale-105' 
                  : 'bg-black/50 border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
                style={{ 
                  fontFamily: '"Press Start 2P", monospace',
                  boxShadow: activeTab === i ? `4px 4px 0 0 ${s.accent}` : '4px 4px 0 0 rgba(255,255,255,0.1)'
                }}
              >
                {activeTab === i && (
                  <motion.span layoutId="cursor" className="absolute -left-6 top-1/2 -translate-y-1/2 text-violet-400 animate-pulse">
                    ▶
                  </motion.span>
                )}
                <div className="text-[10px] sm:text-xs mb-2 text-white/50">LVL {s.id}</div>
                <div className={`text-xs sm:text-sm md:text-base ${activeTab === i ? 'text-white' : 'text-white/70'}`}>
                  {s.title}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Details Screen (Right) */}
          <div className="lg:col-span-7 h-full">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-black border-4 p-6 sm:p-8 h-full min-h-[400px] relative flex flex-col"
              style={{ 
                borderColor: services[activeTab].accent,
                boxShadow: `8px 8px 0 0 ${services[activeTab].accent}40`,
                fontFamily: '"Press Start 2P", monospace'
              }}
            >
              {/* Scanline overlay effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-50 z-20" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 border-b-2 border-white/20 pb-4">
                  <h3 className="text-sm sm:text-lg text-white" style={{ color: services[activeTab].accent }}>
                    {services[activeTab].title}
                  </h3>
                  <div className="px-3 py-1 bg-white/10 text-[10px] text-white">
                    {services[activeTab].tag}
                  </div>
                </div>

                <p className="text-white text-[10px] sm:text-xs leading-loose mb-8 flex-1">
                  {services[activeTab].desc}
                </p>

                <div className="bg-white/5 p-4 border border-white/10">
                  <div className="text-[10px] text-white/50 mb-4">BASE STATS</div>
                  <PixelBar label="INT" val={services[activeTab].stats.int} color={services[activeTab].accent} />
                  <PixelBar label="SPD" val={services[activeTab].stats.spd} color="#3B82F6" />
                  <PixelBar label="ATK" val={services[activeTab].stats.atk} color="#EF4444" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
