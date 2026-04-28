import { motion } from 'framer-motion'

export default function RobotCharacter({ className = '', size = 130, mood = 'idle' }) {
  return (
    <motion.div
      className={`select-none pointer-events-none ${className}`}
      style={{ width: size, height: size * 1.3 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Antenna */}
        <line x1="50" y1="10" x2="50" y2="22" stroke="#8B5CF6" strokeWidth="2" />
        <motion.circle
          cx="50" cy="8" r="4"
          fill="#8B5CF6"
          animate={{ r: [4, 5.5, 4], opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />

        {/* Head */}
        <rect x="28" y="22" width="44" height="36" rx="8" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Eye screens */}
        <motion.rect
          x="34" y="30" width="14" height="10" rx="3"
          fill="#8B5CF6"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <motion.rect
          x="52" y="30" width="14" height="10" rx="3"
          fill="#8B5CF6"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Eye glint */}
        <circle cx="38" cy="33" r="1.5" fill="white" opacity="0.7" />
        <circle cx="56" cy="33" r="1.5" fill="white" opacity="0.7" />

        {/* Mouth display */}
        <rect x="36" y="46" width="28" height="6" rx="3" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="0.8" />
        {mood === 'happy' ? (
          <path d="M40,49 Q50,54 60,49" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M39,49 L61,49" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        )}

        {/* Neck */}
        <rect x="44" y="58" width="12" height="8" rx="3" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1" />

        {/* Body */}
        <rect x="24" y="66" width="52" height="40" rx="10" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Chest panel */}
        <rect x="32" y="72" width="36" height="26" rx="5" fill="#0a0018" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.8" />

        {/* Chest lights */}
        <motion.circle cx="42" cy="80" r="3" fill="#8B5CF6"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
        <motion.circle cx="50" cy="80" r="3" fill="#A78BFA"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
        />
        <motion.circle cx="58" cy="80" r="3" fill="#C4B5FD"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, delay: 0.8 }}
        />

        {/* Body line detail */}
        <rect x="33" y="88" width="34" height="2" rx="1" fill="#8B5CF6" opacity="0.3" />
        <rect x="33" y="92" width="22" height="2" rx="1" fill="#8B5CF6" opacity="0.2" />

        {/* Left arm */}
        <motion.g
          animate={mood === 'pointing' ? { rotate: -40 } : { rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          style={{ transformOrigin: '24px 72px' }}
        >
          <rect x="12" y="70" width="12" height="28" rx="6" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1.2" />
          <circle cx="18" cy="100" r="5" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1" />
        </motion.g>

        {/* Right arm */}
        <motion.g
          animate={mood === 'pointing' ? { rotate: 30 } : { rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
          style={{ transformOrigin: '76px 72px' }}
        >
          <rect x="76" y="70" width="12" height="28" rx="6" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1.2" />
          <circle cx="82" cy="100" r="5" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1" />
        </motion.g>

        {/* Legs */}
        <rect x="33" y="106" width="14" height="18" rx="7" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1.2" />
        <rect x="53" y="106" width="14" height="18" rx="7" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1.2" />
        {/* Feet */}
        <ellipse cx="40" cy="124" rx="9" ry="5" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1" />
        <ellipse cx="60" cy="124" rx="9" ry="5" fill="#0d0420" stroke="#8B5CF6" strokeWidth="1" />
      </svg>
    </motion.div>
  )
}
