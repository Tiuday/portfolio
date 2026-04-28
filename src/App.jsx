import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CatCharacter from './components/CatCharacter'
import RobotCharacter from './components/RobotCharacter'

function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      }
    }

    let rafId
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12
      trail.current.y += (pos.current.y - trail.current.y) * 0.12
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 16}px, ${trail.current.y - 16}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    rafId = requestAnimationFrame(animate)

    // Scale on hover
    const onEnter = () => cursorRef.current && (cursorRef.current.style.transform += ' scale(2.5)')
    const onLeave = () => {}
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ willChange: 'transform' }} />
      <div ref={trailRef} className="cursor-trail" style={{ willChange: 'transform' }} />
    </>
  )
}

function LoadingScreen() {
  return (
    <div id="loading-screen" className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{ animation: 'fadeOut 0.5s ease 1.5s forwards' }}>
      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; pointer-events: none; }
        }
        #loading-screen[style*="opacity: 0"] { display: none; }
      `}</style>
      <div className="text-center">
        <div className="font-cossette font-bold text-4xl gradient-text mb-2">23rd Gen</div>
        <div className="text-white/30 text-sm tracking-[0.3em] uppercase">Loading...</div>
        <div className="mt-4 w-32 h-0.5 bg-white/10 rounded overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded"
            style={{ animation: 'load 1.4s ease forwards' }} />
        </div>
        <style>{`
          @keyframes load { from { width: 0 } to { width: 100% } }
        `}</style>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />

        {/* Cat floats near bottom of hero / top of about */}
        <div className="relative bg-black">
          <div className="absolute -top-16 right-8 md:right-24 z-10 hidden md:block">
            <CatCharacter size={100} />
          </div>
        </div>

        <About />

        <Services />

        <Portfolio />

        {/* Robot floats between Portfolio and Impact */}
        <div className="relative bg-black overflow-hidden">
          <div className="absolute -top-12 left-8 md:left-24 z-10 hidden md:block">
            <RobotCharacter size={110} mood="pointing" />
          </div>
        </div>

        <Impact />

        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </>
  )
}
