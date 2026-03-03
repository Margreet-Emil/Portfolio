export default function About() {
  const stats = [
    // { n: '1+', label: 'Years of Experience' },
    // { n: '5+', label: 'Projects Delivered' },
    // { n: '3+', label: 'Happy Clients' },
    //  { n: '∞', label: 'Cups of Coffee' },
  ]

  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <div className="reveal">
            <div className="relative">
              {/* Photo placeholder */}
              <div className="w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-accent-50 to-violet-50 dark:from-accent-900/20 dark:to-violet-900/20 border border-accent-100 dark:border-accent-900/40 flex items-center justify-center overflow-hidden shadow-xl shadow-accent-100/30 dark:shadow-accent-900/20">
                <div className="text-center">
                  {/* <div className="text-7xl mb-4">👨‍💻</div> */}
              <img src="/Portfolio/me.jpeg" alt="Margreet Emil" />
                  {/* <p className="text-xs font-body text-slate-400 dark:text-slate-500 tracking-wide">[ Your Photo Here ]</p> */}
                </div>
              </div>

              {/* Floating experience card */}
              <div className="absolute -bottom-6 -right-6 lg:right-0 card px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center text-white text-lg"></div>
                  <div>
                    <div className="font-display font-700 text-xl text-slate-900 dark:text-white leading-none"></div>
                    <div className="text-xs font-body text-slate-400 mt-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="reveal">
              {/* <p className="section-tag">About Me</p> */}
              <h2 className="font-display font-700 text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                
                <em className="gradient-text not-italic block"> About Me</em>
              </h2>
            </div>

            <div className="reveal reveal-delay-1 space-y-4 text-slate-500 dark:text-slate-400 font-body font-extrabold leading-relaxed text-[0.95rem] mb-8">
              <p>
                Hello! I’m Margreet, a <strong className="font-500 text-purple-800 dark:text-slate-200">full-stack web developer</strong> specializing in React and .NET technologies.
                I’m passionate about building dynamic, responsive, and user-friendly web applications that solve real-world problems..

I enjoy transforming ideas into clean, efficient, and maintainable code, combining React’s component-based architecture with .NET’s robust back-end capabilities to create full-stack solutions.

When I’m not coding, I’m exploring modern web trends, experimenting with new UI designs, and finding ways to improve user experiences.

I’m always eager to take on new challenges, collaborate with talented teams, and contribute to projects that make an impact<em>great</em>.
              </p>
            
            </div>

            <div className="reveal reveal-delay-2 flex gap-3">
              {/* <a href="#projects" className="btn-primary">See My Work</a> */}
              <a
                  href="/Margreet Emil CV (1).pdf"
  download="Margreet_Emil_CV.pdf"
  target="_blank"
  rel="noreferrer"
  className="btn-ghost"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 22px',
    borderRadius: '10px',
    border: '1px solid rgba(124,58,237,0.4)',
    background: 'rgba(124,58,237,0.08)',
    color: '#c4b5fd',
    fontWeight: 600,
    fontSize: '0.88rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    }}
  onMouseEnter={e => {
    e.currentTarget.style.background = 'rgba(124,58,237,0.2)'
    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.8)'
    e.currentTarget.style.transform = 'translateY(-2px)'
    e.currentTarget.style.boxShadow = '0 8px 25px rgba(124,58,237,0.35)'
    e.currentTarget.querySelector('.cv-icon').style.animation = 'bounce 0.6s ease infinite'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = 'rgba(124,58,237,0.08)'
    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = 'none'
    e.currentTarget.querySelector('.cv-icon').style.animation = 'none'
  }}
  onClick={e => {
    // Ripple effect
    const ripple = document.createElement('span')
    const rect = e.currentTarget.getBoundingClientRect()
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      width:120px; height:120px;
      background:rgba(167,139,250,0.25);
      top:${e.clientY - rect.top - 60}px;
      left:${e.clientX - rect.left - 60}px;
      transform:scale(0); animation:ripple 0.6s ease-out forwards;
      pointer-events:none;
    `
    e.currentTarget.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }}
>
  {/* Inject keyframes once */}
  <style>{`
    @keyframes bounce {
      0%, 100% { transform: translateY(0) }
      50% { transform: translateY(4px) }
    }
    @keyframes ripple {
      to { transform: scale(2.5); opacity: 0; }
    }
  `}</style>

  <svg
    className="cv-icon"
    style={{ width: 17, height: 17, transition: 'all 0.3s' }}
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
  Download CV
</a>
            
            </div>





          </div>
        </div>
     
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} card p-6 text-center`}
            >
              <div className="font-display font-700 text-4xl text-accent-600 dark:text-accent-400 mb-1">{s.n}</div>
              <div className="text-xs font-body text-slate-400 dark:text-slate-500 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
