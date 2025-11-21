export default function CTA() {
  return (
    <section id="start" className="relative py-20 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to race?</h2>
        <p className="mt-3 text-blue-100/90">Connect your scene, choose your modules, and hit go. Everything updates live.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-2xl mx-auto">
          <input className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Enter your email" />
          <button className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/30 transition">Start the engine</button>
        </form>
        <p className="mt-3 text-xs text-blue-200/70">We’ll send a private beta invite.</p>
      </div>
    </section>
  );
}
