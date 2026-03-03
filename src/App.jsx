
import { useEffect, useRef } from 'react'
import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Animated particle canvas background
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], mouse = { x: 0, y: 0 }, raf

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })

    class Particle {
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.size = Math.random() * 1.5 + 0.3
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.6 + 0.1
        const c = ['rgba(124,58,237,', 'rgba(37,99,235,', 'rgba(6,182,212,', 'rgba(236,72,153,']
        this.color = c[Math.floor(Math.random() * c.length)]
      }
      constructor() { this.reset() }
    }

    for (let i = 0; i < 110; i++) particles.push(new Particle())

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Gradient orbs
      const g1 = ctx.createRadialGradient(W * 0.78, H * 0.2, 0, W * 0.78, H * 0.2, 420)
      g1.addColorStop(0, 'rgba(124,58,237,0.12)'); g1.addColorStop(1, 'transparent')
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H)

      const g2 = ctx.createRadialGradient(W * 0.1, H * 0.8, 0, W * 0.1, H * 0.8, 300)
      g2.addColorStop(0, 'rgba(6,182,212,0.08)'); g2.addColorStop(1, 'transparent')
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H)

      const g3 = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180)
      g3.addColorStop(0, 'rgba(124,58,237,0.06)'); g3.addColorStop(1, 'transparent')
      ctx.fillStyle = g3; ctx.fillRect(0, 0, W, H)

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < -5 || p.x > W + 5 || p.y < -5 || p.y > H + 5) p.reset()
        const dx = mouse.x - p.x, dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) { p.x += dx * 0.008; p.y += dy * 0.008 }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + p.opacity + ')'
        ctx.fill()
      })

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - d / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}

// Custom cursor
function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let cx = 0, cy = 0, rx = 0, ry = 0, raf

    const onMove = e => { cx = e.clientX; cy = e.clientY }
    document.addEventListener('mousemove', onMove)

    function animate() {
      if (dotRef.current) { dotRef.current.style.left = cx + 'px'; dotRef.current.style.top = cy + 'px' }
      rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px' }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const hoverEls = document.querySelectorAll('a, button, .glow-card, .filter-btn')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => { dotRef.current?.classList.add('big'); ringRef.current?.classList.add('big') })
      el.addEventListener('mouseleave', () => { dotRef.current?.classList.remove('big'); ringRef.current?.classList.remove('big') })
    })

    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

export default function App() {
  const { isDark, toggle } = useTheme()
  useScrollReveal()

  // Scroll-to-top button
  useEffect(() => {
    const btn = document.getElementById('scrollTopBtn')
    const handler = () => btn?.classList.toggle('show', window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <ParticleCanvas />
      <CustomCursor />
      <Navbar isDark={isDark} onToggle={toggle} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <button
        id="scrollTopBtn"
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </>
  )
}
