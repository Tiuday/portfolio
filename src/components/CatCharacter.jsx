import { motion } from 'framer-motion'

export default function CatCharacter({ className = '', size = 120 }) {
  return (
    <motion.div
      className={`select-none pointer-events-none ${className}`}
      style={{ width: size, height: size * 1.2 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Tail */}
        <motion.path
          d="M55 100 Q75 95 80 80 Q85 65 70 60"
          stroke="#8B5CF6"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ['M55 100 Q75 95 80 80 Q85 65 70 60', 'M55 100 Q72 100 75 85 Q78 70 65 62', 'M55 100 Q75 95 80 80 Q85 65 70 60'] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />

        {/* Body */}
        <ellipse cx="50" cy="85" rx="22" ry="20" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Neck */}
        <rect x="44" y="65" width="12" height="12" rx="4" fill="#1a0a3e" />

        {/* Head */}
        <ellipse cx="50" cy="52" rx="20" ry="18" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Ears */}
        <polygon points="34,42 30,28 42,38" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="1.5" />
        <polygon points="66,42 70,28 58,38" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="1.5" />
        {/* Inner ears */}
        <polygon points="35,41 32,31 41,38" fill="#8B5CF6" opacity="0.4" />
        <polygon points="65,41 68,31 59,38" fill="#8B5CF6" opacity="0.4" />

        {/* Eyes */}
        <motion.ellipse
          cx="43" cy="50"
          rx="4" ry="4"
          fill="#A78BFA"
          animate={{ ry: [4, 0.5, 4] }}
          transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.5], ease: 'easeInOut', repeatDelay: 2 }}
        />
        <motion.ellipse
          cx="57" cy="50"
          rx="4" ry="4"
          fill="#A78BFA"
          animate={{ ry: [4, 0.5, 4] }}
          transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.5], ease: 'easeInOut', repeatDelay: 2 }}
        />
        {/* Eye shine */}
        <circle cx="44.5" cy="48.5" r="1.2" fill="white" opacity="0.8" />
        <circle cx="58.5" cy="48.5" r="1.2" fill="white" opacity="0.8" />

        {/* Nose */}
        <polygon points="50,55 48,58 52,58" fill="#C4B5FD" opacity="0.8" />

        {/* Mouth */}
        <path d="M48,58 Q50,61 52,58" stroke="#C4B5FD" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* Whiskers */}
        <line x1="30" y1="54" x2="44" y2="56" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5" />
        <line x1="30" y1="57" x2="44" y2="57" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5" />
        <line x1="56" y1="56" x2="70" y2="54" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5" />
        <line x1="56" y1="57" x2="70" y2="57" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.5" />

        {/* Paws */}
        <ellipse cx="38" cy="104" rx="8" ry="5" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="1" />
        <ellipse cx="62" cy="104" rx="8" ry="5" fill="#1a0a3e" stroke="#8B5CF6" strokeWidth="1" />

        {/* Collar */}
        <motion.rect
          x="44" y="65" width="12" height="3" rx="1.5"
          fill="#8B5CF6"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        {/* Bell */}
        <motion.circle
          cx="50" cy="70"
          r="2"
          fill="#C4B5FD"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </svg>
    </motion.div>
  )
}
