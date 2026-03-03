// export default function Footer() {
//   return (
//     <footer className="border-t border-slate-100 dark:border-slate-800/60 py-8">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="font-display font-700 text-lg text-slate-900 dark:text-white">
//           dev<span className="text-accent-500">.</span>
//         </div>
//         <p className="text-xs font-body text-slate-400 dark:text-slate-500">
//           Designed & built with <span className="text-rose-400">♥</span> by{' '}
//           <span className="text-slate-600 dark:text-slate-300 font-500">Your Name</span> © {new Date().getFullYear()}
//         </p>
//         <div className="flex gap-4 text-xs font-body text-slate-400 dark:text-slate-500">
//           <a href="#about" className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors">About</a>
//           <a href="#projects" className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors">Projects</a>
//           <a href="#contact" className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors">Contact</a>
//         </div>
//       </div>
//     </footer>
//   )
// }
export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '2rem 0',
      textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <p style={{ fontSize: '0.78rem', color: 'rgba(226,232,240,0.3)' }}>
        Designed & built with{' '}
        <span style={{ color: '#ec4899' }}>Margreet Emil</span>{' '}
        at{' '}
        <strong style={{ color: 'rgba(226,232,240,0.6)', fontWeight: 500 }}></strong>
        {' '}© {new Date().getFullYear()}
      </p>
    </footer>
  )
}
