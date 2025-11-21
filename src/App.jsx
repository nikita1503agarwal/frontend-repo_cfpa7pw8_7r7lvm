import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import CTA from './components/CTA.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background subtle pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
      </div>
    </div>
  )
}

export default App
