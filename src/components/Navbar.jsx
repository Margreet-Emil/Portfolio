
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 30)
      const ids = ['about', 'skills', 'projects', 'contact']
      let cur = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 3rem',
      transition: 'all 0.4s',
      background: scrolled
        ? (isDark ? 'rgba(5,8,22,0.88)' : 'rgba(240,244,255,0.92)')
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.25)' : 'none',
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.35rem',
        textDecoration: 'none',
        background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        &lt;dev/&gt;
      </a>

      {/* Desktop links */}
      <nav style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Right side */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        {/* <button
          onClick={onToggle}
          style={{
            width: 38, height: 38, borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            color: 'white', cursor: 'pointer', fontSize: '1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(124,58,237,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          {isDark ? '☀️' : '🌙'}
        </button> */}

        <a href="#contact" className="btn-glow" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem' }}>
          Hire Me
        </a>
      </div>
    </header>
  )
}
