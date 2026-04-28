import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-violet-900 flex items-center justify-center text-xs font-bold">
                23
              </div>
              <span className="font-cossette font-bold text-lg text-white">23rd Gen</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Designed to give you your time back. AI agents & beautiful web experiences
              that actually change lives.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/20 text-xs tracking-widest uppercase mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.label} href={l.href}
                  className="text-white/50 hover:text-violet-400 text-sm transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/20 text-xs tracking-widest uppercase mb-4">Contact</p>
            <div className="space-y-2">
              <a href="mailto:work23rdgen@gmail.com"
                className="flex items-center gap-2 text-white/50 hover:text-violet-400 text-sm transition-colors">
                <span className="text-violet-500/60">✉</span> work23rdgen@gmail.com
              </a>
              <a href="https://instagram.com/weare23rdgen" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-violet-400 text-sm transition-colors">
                <span className="text-violet-500/60">📸</span> @weare23rdgen
              </a>
              <a href="https://wa.me/919054406141" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-violet-400 text-sm transition-colors">
                <span className="text-violet-500/60">💬</span> +91 90544 06141
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/20 text-sm">
            23rd Gen © 2025 — Giving more time isn't important; giving QUALITY time is.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>

        <p className="text-center text-white/10 text-xs mt-6">
          Built with love by 23rd Gen
        </p>
      </div>
    </footer>
  )
}
