import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const audiences = [
  {
    icon: '⚔️',
    title: 'BUSINESS OWNERS',
    pain: 'Tired of dead workforce? Employees draining gold without moving the needle?',
    solution: 'Equip agentic teams that increase revenue, reduce costs, and never complain.',
    outcomes: ['+ PROFIT', '+ FREEDOM', '+ STAMINA'],
    color: '#8B5CF6',
  },
  {
    icon: '🛡️',
    title: 'PROFESSIONALS',
    pain: 'Drowning in quests? Juggling work and life like a circus act?',
    solution: 'We build personalized management systems that organize your chaos.',
    outcomes: ['+ EFFICIENCY', '+ LIFE', '+ FOCUS'],
    color: '#A78BFA',
  },
  {
    icon: '✨',
    title: 'CREATORS & BRANDS',
    pain: 'Talented but buried in admin? Great at your craft but terrible at leads?',
    solution: 'We automate the boring stuff so you can focus on your art.',
    outcomes: ['+ CREATIVITY', '+ CLIENTS', '+ MANA'],
    color: '#C4B5FD',
  },
]

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="impact" className="relative bg-[#020205] py-28 overflow-hidden" style={{ imageRendering: 'pixelated' }}>
      {/* Pixelated background pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #8B5CF6 25%, transparent 25%, transparent 75%, #8B5CF6 75%, #8B5CF6), repeating-linear-gradient(45deg, #8B5CF6 25%, transparent 25%, transparent 75%, #8B5CF6 75%, #8B5CF6)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="text-violet-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4" style={{ fontFamily: '"Press Start 2P", monospace' }}>
            *** CHOOSE YOUR DESTINY ***
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-loose" style={{ fontFamily: '"Press Start 2P", monospace', lineHeight: '1.6' }}>
            THIS ISN'T ABOUT BUSINESS.<br/>
            IT'S ABOUT YOUR <span className="text-red-500 animate-pulse">LIFE</span>.
          </h2>
        </motion.div>

        {/* Character/Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 sm:p-8 bg-black border-4 group hover:-translate-y-2 transition-transform duration-300"
              style={{ 
                borderColor: 'white',
                boxShadow: `8px 8px 0 0 ${a.color}80`,
                fontFamily: '"Press Start 2P", monospace'
              }}
            >
              {/* Scanline */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 z-20" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 text-center">{a.icon}</div>
                <h3 className="text-sm sm:text-base text-center mb-6" style={{ color: a.color }}>{a.title}</h3>
                
                <div className="mb-6">
                  <p className="text-[9px] sm:text-[10px] text-red-400 leading-relaxed mb-4">
                    <span className="text-white">WARNING: </span>{a.pain}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-green-400 leading-relaxed">
                    <span className="text-white">SOLUTION: </span>{a.solution}
                  </p>
                </div>

                {/* Loot/Outcomes */}
                <div className="border-t-2 border-white/20 pt-4 mt-auto">
                  <div className="text-[8px] text-white/50 mb-3">EXPECTED LOOT:</div>
                  <ul className="space-y-2">
                    {a.outcomes.map(o => (
                      <li key={o} className="text-[10px] text-yellow-300">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boss Room / Promise block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative p-8 md:p-12 border-4 bg-black text-center"
          style={{ 
            borderColor: '#8B5CF6',
            boxShadow: '0 0 40px rgba(139,92,246,0.3), inset 0 0 40px rgba(139,92,246,0.2)',
            fontFamily: '"Press Start 2P", monospace'
          }}
        >
          <div className="text-yellow-400 text-xs sm:text-sm tracking-widest mb-6 animate-pulse">
            ! THE 23RD GEN PROMISE !
          </div>
          <h3 className="text-sm sm:text-lg md:text-xl text-white leading-loose mb-8">
            WHEN YOU WORK WITH US, YOU'RE NOT BUYING A PRODUCT.
          </h3>
          <p className="text-[10px] sm:text-xs text-white/70 leading-loose max-w-3xl mx-auto mb-10">
            YOU'RE BUYING BACK YOUR <span className="text-violet-400">LIFE</span>. 
            YOU'RE CHOOSING QUALITY TIME OVER QUANTITY TIME. 
            PRESS START TO BEGIN.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-4 bg-violet-600 text-white text-xs sm:text-sm border-2 border-white hover:bg-violet-500 transition-colors"
            style={{ boxShadow: '4px 4px 0 0 white' }}
          >
            START GAME
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
