import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-blue-100 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live demo • Interactive racing scene
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(59,130,246,0.35)]">
              Start the car. Think. Mod. Link. Robot.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-100/90 max-w-xl">
              Two cars, one neural link. Build autonomous racing logic that reacts in milliseconds. Tweak modules, link systems, and watch the robots drive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#start" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/30 transition">
                Start now <ArrowRight size={18} />
              </a>
              <a href="#video" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium border border-white/10 transition">
                <Play size={18} /> Watch demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
