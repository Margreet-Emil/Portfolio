

import { useEffect, useRef } from 'react'

const roles = ['Full-Stack Developer', 'Front-End Developer']

const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'Node.js', color: '#6cc24a' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'PostgreSQL', color: '#336791' },
]

export default function Hero() {
  const roleRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    let idx = 0, charIdx = 0, deleting = false, timer

    const tick = () => {
      if (!roleRef.current) return
      const cur = roles[idx]
      if (!deleting) {
        roleRef.current.textContent = cur.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === cur.length) {
          deleting = true
          timer = setTimeout(tick, 2400)
          return
        }
      } else {
        roleRef.current.textContent = cur.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          idx = (idx + 1) % roles.length
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 90)
    }

    timer = setTimeout(tick, 1200)
    return () => clearTimeout(timer)
  }, [])

  // Cursor blink
  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    let visible = true
    const iv = setInterval(() => {
      el.style.opacity = (visible = !visible) ? '1' : '0'
    }, 530)
    return () => clearInterval(iv)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 72,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 2rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* ── LEFT ── */}
          <div>
            {/* Status badge */}
            <div className="hero-anim" style={{ animationDelay: '0s', marginBottom: '1.6rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 14px', borderRadius: 100,
                border: '1px solid rgba(124,58,237,0.35)',
                background: 'rgba(124,58,237,0.08)',
                fontSize: '0.73rem', fontWeight: 600,
                color: '#c4b5fd', letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#a78bfa',
                  boxShadow: '0 0 8px 2px rgba(167,139,250,0.7)',
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero-anim"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-2px',
                marginBottom: '1.6rem',
                animationDelay: '0.15s',
              }}
            >
              <span style={{ display: 'block', color: 'rgba(226,232,240,0.55)', fontSize: '0.52em', fontWeight: 400, letterSpacing: '0.05em', marginBottom: '0.3em', textTransform: 'uppercase' }}>
                Hello, I'm
              </span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #e2e8f0 0%, #a78bfa 60%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Margreet
              </span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #f472b6 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Emil.
              </span>
            </h1>

            {/* Typing subtitle */}
            <p
              className="hero-anim"
              style={{
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(226,232,240,0.5)',
                maxWidth: 420,
                marginBottom: '2.4rem',
                animationDelay: '0.3s',
              }}
            >
              Crafting{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>
                <span ref={roleRef}>Full-Stack Developer</span>
                <span
                  ref={cursorRef}
                  style={{
                    display: 'inline-block',
                    width: 2,
                    height: '1em',
                    background: '#a78bfa',
                    marginLeft: 2,
                    verticalAlign: 'text-bottom',
                    borderRadius: 1,
                  }}
                />
              </span>{' '}
              experiences — turning ideas into fast, beautiful, and scalable web apps.
            </p>

            {/* CTA buttons */}
            <div
              className="hero-anim"
              style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.8rem', animationDelay: '0.45s' }}
            >
              <a
                href="#projects"
                className="btn-glow"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '11px 22px', borderRadius: 10,
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#fff', fontWeight: 600, fontSize: '0.88rem',
                  textDecoration: 'none', border: 'none',
                  boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                View Projects
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-outline"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '11px 22px', borderRadius: 10,
                  color: 'rgba(226,232,240,0.85)', fontWeight: 600, fontSize: '0.88rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'; e.currentTarget.style.background = 'rgba(124,58,237,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              >
                Let's Connect
              </a>
            </div>

            {/* Social links */}
            <div className="hero-anim" style={{ display: 'flex', gap: '1.2rem', animationDelay: '0.6s' }}>
              {[
                { href: 'https://www.linkedin.com/in/margreet-emil-0054682a3/', label: 'LinkedIn', icon: 'linkedin' },
                { href: 'https://github.com/Margreet-Emil', label: 'GitHub', icon: 'github' },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    color: 'rgba(226,232,240,0.5)', fontSize: '0.85rem', fontWeight: 500,
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(167,139,250,1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,232,240,0.5)'}
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${icon}.svg`}
                    alt={label}
                    style={{ width: 18, height: 18, filter: 'invert(1) opacity(0.6)' }}
                  />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Card ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div className="hero-anim" style={{ animationDelay: '0.5s', position: 'relative', width: '100%', maxWidth: 400 }}>

              {/* Glow orbs */}
              {[
                { w: 300, h: 300, bg: 'rgba(124,58,237,0.18)', top: -80, left: -80 },
                { w: 220, h: 220, bg: 'rgba(6,182,212,0.14)', bottom: -50, right: -30 },
                { w: 160, h: 160, bg: 'rgba(236,72,153,0.12)', top: '35%', right: -50 },
              ].map((o, i) => (
                <div key={i} style={{
                  position: 'absolute', borderRadius: '50%',
                  width: o.w, height: o.h,
                  background: `radial-gradient(circle, ${o.bg}, transparent 70%)`,
                  top: o.top, left: o.left, bottom: o.bottom, right: o.right,
                  filter: 'blur(2px)',
                  pointerEvents: 'none',
                }} />
              ))}

              {/* Top floating badge */}
              <div
                className="float-anim"
                style={{
                  position: 'absolute', top: -22, right: 16, zIndex: 10,
                  background: 'rgba(15,10,30,0.7)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  borderRadius: 12, padding: '9px 14px',
                  fontSize: '0.74rem', fontWeight: 600, color: '#c4b5fd',
                  display: 'flex', alignItems: 'center', gap: 7,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  animationDelay: '1s',
                  whiteSpace: 'nowrap',
                }}
              >
                ⚡ React &amp; TypeScript Expert
              </div>

              {/* Main profile card */}
              <div style={{
                background: 'rgba(255,255,255,0.035)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '2rem',
                position: 'relative', zIndex: 2,
                boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
                  }}>
                    👩‍💻
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem',
                      background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      Margreet Emil
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'rgba(226,232,240,0.4)', marginTop: 2 }}>
                      Full-Stack Web Developer
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(124,58,237,0.3), transparent)', marginBottom: '1.4rem' }} />

                {/* Tech stack label */}
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(226,232,240,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  Tech Stack
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {techStack.map(({ name, color }) => (
                    <span
                      key={name}
                      style={{
                        padding: '5px 12px', borderRadius: 8,
                        fontSize: '0.73rem', fontWeight: 500,
                        background: 'rgba(255,255,255,0.04)',
                        color: 'rgba(226,232,240,0.75)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        transition: 'all 0.25s', cursor: 'default',
                        display: 'flex', alignItems: 'center', gap: 6,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = color + '55'
                        e.currentTarget.style.color = color
                        e.currentTarget.style.background = color + '12'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.color = 'rgba(226,232,240,0.75)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, opacity: 0.8, flexShrink: 0 }} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom badge */}
              <div
                className="float-anim"
                style={{
                  position: 'absolute', bottom: -22, left: 16, zIndex: 10,
                  background: 'rgba(15,10,30,0.7)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  borderRadius: 12, padding: '9px 14px',
                  fontSize: '0.74rem', fontWeight: 600, color: '#67e8f9',
                  display: 'flex', alignItems: 'center', gap: 7,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  animationDelay: '1.5s',
                  whiteSpace: 'nowrap',
                }}
              >
                🚀 Open to opportunities
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}