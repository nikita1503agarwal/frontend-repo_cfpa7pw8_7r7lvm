import { Menu, Car, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
            <Car className="text-white" size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">AniThink</p>
            <p className="text-xs text-blue-200/80">Racing-grade autonomy</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-blue-200/90">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#tech">Technology</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
          <a className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition" href="#start">
            <Sparkles size={16} /> Start the engine
          </a>
        </div>
        <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-800/60 backdrop-blur p-4 text-blue-100/90 space-y-3">
          <a className="block" href="#features">Features</a>
          <a className="block" href="#tech">Technology</a>
          <a className="block" href="#contact">Contact</a>
          <a className="block" href="#start">Start the engine</a>
        </div>
      )}
    </header>
  );
}
