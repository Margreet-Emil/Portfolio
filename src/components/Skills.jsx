import { useEffect, useRef } from 'react'

const groups = [
  {
    title: 'Frontend', icon: '🎨', color: 'rgba(124,58,237,0.15)',
    skills: [
      { name: 'React / Next.js', pct: 95 },
      { name: 'TypeScript', pct: 90 },
      { name: 'CSS / Tailwind', pct: 92 },
      { name: 'javaScript', pct: 90 },
    ],
  },
  {
    title: 'Backend', icon: '⚙️', color: 'rgba(37,99,235,0.15)',
    skills: [
      { name: 'Asp.Net', pct: 89 },
      { name: 'SQL', pct: 90 },
      { name: 'Node.js / Express', pct: 85 },
      { name: 'MongoDB', pct: 72 },
    ],
  },
  {
    title: 'DevOps & Tools', icon: '🚀', color: 'rgba(6,182,212,0.15)',
    skills: [
      { name: 'Git / GitHub', pct: 75 },
      // { name: 'Docker', pct: 78 },
      // { name: 'AWS / Vercel', pct: 80 },
      { name: 'CI/CD', pct: 75 },
    ],
  },
]

const tags = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'SQL Server',
  'MongoDB', 'GraphQL', 'Docker', 'MySql', 'Oracle', 'Prisma', 'Redis',
  'Figma', 'Jest', 'Tailwind','Angular',
]

function SkillCard({ group, delay }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cardRef.current?.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.pct + '%' }, i * 150)
        })
        observer.disconnect()
      }
    }, { threshold: 0.4 })

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className={`glow-card reveal delay-${delay}`} style={{ padding: '2rem' }}>
      <div style={{
        width: 46, height: 46, borderRadius: 12,
        background: group.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.3rem', marginBottom: '1.2rem',
        boxShadow: `0 0 20px ${group.color}`,
      }}>
        {group.icon}
      </div>

      <div style={{
        fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'rgba(83, 21, 126, 0.88)', 
        marginBottom: '1.5rem', paddingBottom: '1rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        {group.title}
      </div>

      {group.skills.map(s => (
        <div key={s.name} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.82rem' }}>
            <span style={{ color: 'rgba(226,232,240,0.82)' }}>{s.name}</span>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: 'rgba(226,232,240,0.4)' }}>
              {s.pct}%
            </span>
          </div>
          <div className="skill-bar-bg">
            <div className="skill-bar-fill" data-pct={s.pct} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 0', background: 'linear-gradient(180deg,transparent,rgba(124,58,237,0.04) 50%,transparent)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          {/* <div className="section-tag" style={{ justifyContent: 'center' }}>Skills</div> */}
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1 }}>
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '0.88rem', maxWidth: 380, margin: '0.8rem auto 0' }}>
            Technologies I use to build beautiful, performant products.
          </p>
        </div>

        {/* Skill cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {groups.map((g, i) => <SkillCard key={g.title} group={g} delay={i + 1} />)}
        </div>

        {/* Tag cloud */}
        <div className="reveal delay-2" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: '4rem' }}>
          {tags.map(t => (
            <span
              key={t}
              style={{
                padding: '6px 15px', borderRadius: 50, fontSize: '0.78rem', fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)',
                color: 'rgba(226,232,240,0.55)', transition: 'all 0.3s', cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'
                e.currentTarget.style.color = '#a78bfa'
                e.currentTarget.style.background = 'rgba(124,58,237,0.1)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = 'rgba(226,232,240,0.55)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = ''
              }}
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}