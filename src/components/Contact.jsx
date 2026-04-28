import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactMethods = [
  {
    icon: '✉',
    label: 'Email',
    value: 'work23rdgen@gmail.com',
    href: 'mailto:work23rdgen@gmail.com',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@weare23rdgen',
    href: 'https://instagram.com/weare23rdgen',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 90544 06141',
    href: 'https://wa.me/919054406141',
  },
]

const businessTypes = ['Small Business', 'Working Professional', 'Creator / Personal Brand', 'Other']

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '', contact: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, wire this to a backend / email service
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom center, rgba(46,16,101,0.2) 0%, transparent 60%)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-violet-400/60 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Get In Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-pixel text-[clamp(1.5rem,3vw,3rem)] leading-[1.4] text-white mb-4"
        >
          Ready to Get
          <br />
          <span className="gradient-text">Your Life Back?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg mb-16 max-w-xl"
        >
          Let's build something amazing together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {contactMethods.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(139,92,246,0.15)' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-0.5">{c.label}</p>
                  <p className="text-white font-medium group-hover:text-violet-300 transition-colors">{c.value}</p>
                </div>
                <div className="ml-auto text-white/20 group-hover:text-violet-400 transition-colors">→</div>
              </motion.a>
            ))}

            {/* Booking CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-5 rounded-2xl border border-violet-500/20 bg-violet-500/5"
            >
              <p className="text-violet-300 font-semibold mb-1">Book a Free Discovery Call</p>
              <p className="text-white/40 text-sm mb-3">30 minutes. No commitment. Just clarity.</p>
              <a
                href="mailto:work23rdgen@gmail.com?subject=Discovery Call Request"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                Schedule a Call
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl border border-violet-500/20 bg-violet-500/5 text-center"
              >
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-pixel text-xl md:text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                {/* Replace YOUR_ACCESS_KEY_HERE with your access key from https://web3forms.com/ */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Lead from 23rd Gen Website" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/30 text-xs tracking-widest uppercase mb-2 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-xs tracking-widest uppercase mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-xs tracking-widest uppercase mb-2 block">Business Type</label>
                  <select
                    name="business_type"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-violet-500/50 transition-colors text-sm appearance-none"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-black">Select your category</option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t} className="bg-black">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/30 text-xs tracking-widest uppercase mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 transition-colors text-sm resize-none"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>

                <div>
                  <label className="text-white/30 text-xs tracking-widest uppercase mb-2 block">Preferred Contact</label>
                  <input
                    type="text"
                    name="preferred_contact"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 transition-colors text-sm"
                    placeholder="Email / WhatsApp / Instagram"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors duration-200"
                >
                  Let's Transform Your Life →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
