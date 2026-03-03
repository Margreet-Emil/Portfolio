// import { useState } from 'react'
// import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

// const socials = [
//   {
//     name: 'GitHub',
//     handle: '@Margreet Emil',
//     href: 'https://github.com/Margreet-Emil',
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'LinkedIn',
//     handle: 'in/Margreet Emil',
//     href: 'https://www.linkedin.com/in/margreet-emil-0054682a3/',
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'Email',
//     handle: 'margreetemil@.dev',
//     href: 'margreetmrmr67@gmail.com',
//     icon: <EnvelopeIcon className="w-5 h-5" />,
//   },
// ]

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
//   const [status, setStatus] = useState('idle') // idle | loading | success | error

//   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

//   const handleSubmit = e => {
//     e.preventDefault()
//     setStatus('loading')
//     setTimeout(() => {
//       setStatus('success')
//       setForm({ name: '', email: '', subject: '', message: '' })
//       setTimeout(() => setStatus('idle'), 4000)
//     }, 1200)
//   }

//   return (
//     <section id="contact" className="py-28 bg-slate-50/50 dark:bg-[#0d1018]">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-14 reveal">
//           <p className="section-tag justify-center">Contact</p>
//           <h2 className="font-display font-700 text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight mt-2">
//             Let's <em className="gradient-text not-italic">Work Together</em>
//           </h2>
//           <p className="text-slate-500 dark:text-slate-400 font-body font-300 mt-4 max-w-md mx-auto text-sm leading-relaxed">
//             Have a project in mind? Looking for a developer? Or just want to say hi — my inbox is always open.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
//           {/* Left: info */}
//           <div className="reveal space-y-6">
//             <div className="card p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 shrink-0">
//                   <MapPinIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-body font-600 text-slate-800 dark:text-slate-200 mb-1">Location</h4>
//                   <p className="text-sm font-body text-slate-500 dark:text-slate-400">Your City, Your Country</p>
//                   <p className="text-xs font-body text-accent-500 dark:text-accent-400 mt-0.5">Open to remote work worldwide</p>
//                 </div>
//               </div>
//             </div>

//             {socials.map((s, i) => (
//               <a
//                 key={s.name}
//                 href={s.href}
//                 target={s.name !== 'Email' ? '_blank' : undefined}
//                 rel="noreferrer"
//                 className={`reveal reveal-delay-${i + 1} card p-5 flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400`}
//               >
//                 <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-accent-500">
//                   {s.icon}
//                 </div>
//                 <div>
//                   <div className="font-body font-600 text-sm">{s.name}</div>
//                   <div className="text-xs font-body text-slate-400 dark:text-slate-500 mt-0.5">{s.handle}</div>
//                 </div>
//                 <svg className="w-4 h-4 ml-auto text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </a>
//             ))}
//           </div>

//           {/* Right: form */}
//           <div className="reveal reveal-delay-2">
//             <form onSubmit={handleSubmit} className="card p-8 space-y-5">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-body font-500 text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="John Doe"
//                     className="w-full bg-slate-50 dark:bg-[#0a0c12] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-body text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent-400 dark:focus:border-accent-600 focus:ring-2 focus:ring-accent-400/10 dark:focus:ring-accent-600/10 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-body font-500 text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="john@email.com"
//                     className="w-full bg-slate-50 dark:bg-[#0a0c12] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-body text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent-400 dark:focus:border-accent-600 focus:ring-2 focus:ring-accent-400/10 dark:focus:ring-accent-600/10 transition-all"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-body font-500 text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   placeholder="Project inquiry..."
//                   className="w-full bg-slate-50 dark:bg-[#0a0c12] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-body text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent-400 dark:focus:border-accent-600 focus:ring-2 focus:ring-accent-400/10 dark:focus:ring-accent-600/10 transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-body font-500 text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Message</label>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   placeholder="Tell me about your project..."
//                   className="w-full bg-slate-50 dark:bg-[#0a0c12] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-body text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent-400 dark:focus:border-accent-600 focus:ring-2 focus:ring-accent-400/10 dark:focus:ring-accent-600/10 transition-all resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === 'loading' || status === 'success'}
//                 className={`btn-primary w-full justify-center ${
//                   status === 'success' ? '!bg-emerald-500 !shadow-emerald-500/30' : ''
//                 } ${status === 'loading' ? 'opacity-70' : ''}`}
//               >
//                 {status === 'loading' && (
//                   <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                   </svg>
//                 )}
//                 {status === 'success' ? '✓ Message Sent!' : status === 'loading' ? 'Sending...' : 'Send Message'}
//                 {status === 'idle' && (
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                   </svg>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3500)
    }, 1200)
  }

  const links = [
    { icon: '@', label: 'MargreetEmil@Web Developer.dev', href: 'mailto:margreetmrmr67@gmail.com' },
    { icon: 'in', label: 'linkedin.com', href: 'https://linkedin.com' },
    { icon: '</>', label: 'github.com', href: 'https://github.com/Margreet-Emil' },
    { icon: '📞', label: '01203119828', href: 'https://wa.me/201203119828' },
  ]

  return (
    <section id="contact" style={{ padding: '8rem 0', background: 'linear-gradient(180deg,transparent,rgba(124,58,237,0.04) 50%,transparent)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          {/* <div className="section-tag" style={{ justifyContent: 'center' }}>Contact</div> */}
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1 }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '0.88rem', maxWidth: 380, margin: '0.8rem auto 0' }}>
            Have a project in mind? My inbox is always open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '4rem', maxWidth: 960, margin: '0 auto' }}>
          {/* Left */}
          <div className="reveal from-left">
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.8rem', color: 'rgba(226,232,240,0.8)' }}>Get in touch</h3>
            <p style={{ color: 'rgba(226,232,240,0.5)', fontSize: '0.87rem', lineHeight: 1.9, marginBottom: '2rem' }}>
              I'm available for  projects and full-time roles. Let's build something great together.
            </p>
            {links.map(l => (
              <a key={l.label} href={l.href} className="contact-link" target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <div className="contact-icon">{l.icon}</div>
                {l.label}
                <span style={{ marginLeft: 'auto', opacity: 0.35, fontSize: '0.8rem' }}>→</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="reveal from-right">
            <form onSubmit={submit} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, padding: '2.2rem', backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                {[['name', 'Name', 'Your Name'], ['email', 'Email', 'Name@email.com']].map(([n, l, p]) => (
                  <div key={n}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(226,232,240,0.4)', marginBottom: 6 }}>{l}</label>
                    <input type={n === 'email' ? 'email' : 'text'} name={n} value={form[n]} onChange={handle} placeholder={p} required className="form-input" />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(226,232,240,0.4)', marginBottom: 6 }}>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handle} placeholder="Project inquiry..." className="form-input" />
              </div>
              <div style={{ marginBottom: '1.4rem' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(226,232,240,0.4)', marginBottom: 6 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell me about your project..." required className="form-input" />
              </div>
              <button type="submit" disabled={status !== 'idle'} style={{
                width: '100%', padding: '0.9rem',
                borderRadius: 10, border: 'none', cursor: 'pointer',
                fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', fontWeight: 500,
                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: status === 'success'
                  ? 'linear-gradient(135deg,#059669,#0891b2)'
                  : 'linear-gradient(135deg,#7c3aed,#2563eb)',
                boxShadow: status === 'success'
                  ? '0 0 25px rgba(5,150,105,0.4)'
                  : '0 0 25px rgba(124,58,237,0.4)',
                transition: 'all 0.3s',
                opacity: status === 'loading' ? 0.7 : 1,
              }}>
                {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
