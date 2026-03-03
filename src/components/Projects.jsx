
// import { useState } from 'react'

// const projects = [
//       {
//     title: 'Coffee Spot',
//     desc: 'A cozy coffee shop discovery app. Find the best local spots, browse menus, and save your favorites.',
//     tags: ['HTML', 'CSS'],
//     cat: 'saas',
//     emoji: '☕',
//     bg: 'linear-gradient(135deg,#2b1300,#4a2000)',
//     link: 'https://margreet-emil.github.io/WEB-projects', 
   
//   },


//   { title: 'Luxe Storefront', desc: 'Headless e-commerce with dynamic product pages, cart, Stripe checkout, and inventory management.', tags: ['React','Shopify API','GraphQL','Tailwind'], cat: 'ecommerce', emoji: '🛍️', bg: 'linear-gradient(135deg,#0d1f3c,#0a3040)' },


//   { title: 'CodeReview AI', desc: 'AI-powered code review that analyses pull requests, spots bugs, and suggests improvements inline.', tags: ['Node.js','OpenAI','GitHub API','Redis'], cat: 'ai', emoji: '🤖', bg: 'linear-gradient(135deg,#0f2510,#0a3520)' },


//   { title: 'Syncflow', desc: 'Real-time sync library for collaborative apps with conflict resolution, presence, and offline-first CRDTs.', tags: ['TypeScript','WebSockets','CRDT','IndexedDB'], cat: 'opensource', emoji: '📡', bg: 'linear-gradient(135deg,#2a0f10,#401a20)' },
// ]

// const filters = [
//   { label: 'All', value: 'all' },
//   { label: 'SaaS', value: 'saas' },
//   { label: 'E-Commerce', value: 'ecommerce' },
//   { label: 'AI Tool', value: 'ai' },
//   { label: 'Open Source', value: 'opensource' },
// ]

// export default function Projects() {
//   const [active, setActive] = useState('all')

//   const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

//   return (
//     <section id="projects" style={{ padding: '8rem 0' }}>
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

//         <div className="reveal" style={{ marginBottom: '1rem' }}>
//           <div className="section-tag">Projects</div>
//           <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1 }}>
//             Things I've <span className="gradient-text">Built</span>
//           </h2>
//         </div>

//         {/* Filter */}
//         <div className="reveal delay-1" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '2rem 0 2.5rem' }}>
//           {filters.map(f => (
//             <button key={f.value} className={`filter-btn ${active === f.value ? 'active' : ''}`} onClick={() => setActive(f.value)}>
//               {f.label}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.4rem' }}>
//           {filtered.map((p, i) => (
//             <a key={p.title} href="#" className={`reveal delay-${(i % 4) + 1}`}
//               style={{ textDecoration: 'none', color: 'inherit', display: 'block',
//                 background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
//                 borderRadius: 20, overflow: 'hidden', transition: 'all 0.4s', cursor: 'pointer',
//               }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(124,58,237,0.2), 0 30px 60px rgba(0,0,0,0.3)' }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
//             >
//               {/* Thumb */}
//               <div style={{ height: 185, background: p.bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
//                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.018) 10px,rgba(255,255,255,0.018) 11px)' }} />
//                 <div style={{ fontSize: '3.2rem', opacity: 0.22, position: 'relative', zIndex: 1 }}>{p.emoji}</div>
//                 <span style={{
//                   position: 'absolute', top: 12, left: 12, zIndex: 2,
//                   fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
//                   padding: '4px 10px', borderRadius: 20,
//                   border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)',
//                   backdropFilter: 'blur(10px)',
//                 }}>{p.cat.toUpperCase()}</span>
//               </div>
//               {/* Body */}
//               <div style={{ padding: '1.5rem' }}>
//                 <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.12rem', marginBottom: '0.55rem' }}>{p.title}</div>
//                 <div style={{ fontSize: '0.81rem', color: 'rgba(226,232,240,0.52)', lineHeight: 1.8, marginBottom: '1.1rem' }}>{p.desc}</div>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
//                   {p.tags.map(t => (
//                     <span key={t} style={{
//                       padding: '3px 10px', borderRadius: 6, fontSize: '0.68rem', fontWeight: 500,
//                       background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: 'rgba(167,139,250,0.85)',
//                     }}>{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'

const projects = [
  
   {
    title: 'Coffee Spot',
    desc: 'A cozy coffee shop discovery app. Find the best local spots, browse menus, and save your favorites.',
    tags: ['HTML', 'CSS'],
    cat: 'saas',
    emoji: '☕',
    bg: 'linear-gradient(135deg,#2b1300,#4a2000)',
    link: 'https://margreet-emil.github.io/Coffee-project/', 
   
  },
  
 
  {
    title: 'Luxe Storefront',
    desc: 'Headless e-commerce with dynamic product pages, cart, Stripe checkout, and inventory management.',
    tags: ['JS', 'React', 'CSS', 'HTML'],
    cat: 'ecommerce',
    emoji: '🛍️',
    bg: 'linear-gradient(135deg,#0d1f3c,#0a3040)',
     link: 'https://margreet-emil.github.io/Store-project/', 
  },
 
 
]

const filters = [
  { label: 'All',         value: 'all'       },
  { label: 'SaaS',        value: 'saas'      },
  { label: 'E-Commerce',  value: 'ecommerce' },
 
]

export default function Projects() {
  const [active,    setActive]    = useState('all')
  const [selected,  setSelected]  = useState(null)

  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .filter-btn {
          padding: 7px 18px;
          border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.03em;
        }
        .filter-btn:hover {
          border-color: rgba(167,139,250,0.5);
          color: rgba(167,139,250,0.9);
        }
        .filter-btn.active {
          border-color: #a78bfa;
          background: rgba(124,58,237,0.18);
          color: #a78bfa;
        }

        .proj-card {
          text-decoration: none;
          color: inherit;
          display: block;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
        }
        .proj-card:hover {
          border-color: rgba(124,58,237,0.45);
          transform: translateY(-8px);
          box-shadow: 0 0 50px rgba(124,58,237,0.18), 0 30px 60px rgba(0,0,0,0.35);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.2s ease;
        }
        .modal-box {
          background: #13131a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }
        .modal-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          margin-bottom: 1rem;
        }
        .modal-stack-tag {
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.25);
          color: rgba(167,139,250,0.9);
        }
        .modal-visit {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 1.4rem;
          padding: 10px 24px;
          border-radius: 999px;
          background: rgba(124,58,237,0.2);
          border: 1px solid rgba(124,58,237,0.4);
          color: #a78bfa;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .modal-visit:hover {
          background: rgba(124,58,237,0.35);
          border-color: #a78bfa;
          color: #fff;
        }
        .close-btn {
          position: absolute;
          top: 14px; right: 14px;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .close-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }

        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.97) } to { opacity: 1; transform: none } }
      `}</style>

      <section id="projects" style={{ padding: '8rem 0', background: '#0c0c14', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

          {/* Heading */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(167,139,250,0.8)', marginBottom: '0.75rem',
            }}>
              Projects
            </div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-1px',
              lineHeight: 1.1, color: '#fff', margin: 0,
            }}>
              Things I've{' '}
              <span style={{ background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Built
              </span>
            </h2>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '2rem 0 2.5rem' }}>
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-btn${active === f.value ? ' active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.4rem' }}>
            {filtered.map((p, i) => (
              <div
                key={p.title}
                className="proj-card"
                onClick={() => setSelected(p)}
              >
                {/* Thumbnail */}
                <div style={{
                  height: 185, position: 'relative',
                  background: p.img ? '#000' : p.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                }}>
                  {p.img ? (
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, display: 'block' }} />
                  ) : (
                    <>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.018) 10px,rgba(255,255,255,0.018) 11px)' }} />
                      <div style={{ fontSize: '3.2rem', opacity: 0.22, position: 'relative', zIndex: 1 }}>{p.emoji}</div>
                    </>
                  )}
                  <span style={{
                    position: 'absolute', top: 12, left: 12, zIndex: 2,
                    fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 10px', borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                  }}>
                    {p.cat.toUpperCase()}
                  </span>
                  {/* Click hint */}
                  <span style={{
                    position: 'absolute', bottom: 12, right: 12, zIndex: 2,
                    fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.08em',
                    padding: '4px 10px', borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(10px)',
                  }}>
                    Click to expand
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.12rem', marginBottom: '0.55rem', color: '#fff' }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: '0.81rem', color: 'rgba(226,232,240,0.52)', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                    {p.desc}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: 6, fontSize: '0.68rem', fontWeight: 500,
                        background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
                        color: 'rgba(167,139,250,0.85)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>

            {/* Modal Thumbnail */}
            <div style={{
              height: 200, position: 'relative',
              background: selected.img ? '#000' : selected.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
            }}>
              {selected.img ? (
                <img src={selected.img} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
              ) : (
                <>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.018) 10px,rgba(255,255,255,0.018) 11px)' }} />
                  <div style={{ fontSize: '5rem', position: 'relative', zIndex: 1 }}>{selected.emoji}</div>
                </>
              )}
              <button className="close-btn" onClick={() => setSelected(null)}>✕</button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.8rem 2rem 2rem' }}>
              <div className="modal-tag">{selected.cat.toUpperCase()}</div>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: '1.5rem', color: '#fff', margin: '0 0 0.75rem',
              }}>
                {selected.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(226,232,240,0.6)', lineHeight: 1.8, margin: '0 0 1.2rem' }}>
                {selected.desc}
              </p>

              {/* Stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {selected.tags.map(t => (
                  <span key={t} className="modal-stack-tag">{t}</span>
                ))}
              </div>

              {/* Link */}
              {selected.link
                ? <a href={selected.link} target="_blank" rel="noopener noreferrer" className="modal-visit">
                    View Project →
                  </a>
                : <p style={{ marginTop: '1.2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                    No live link available
                  </p>
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}
