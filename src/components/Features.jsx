import { Cpu, Bot, Cable, Gauge } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Modular brains',
    desc: 'Swap and stack perception, planning, and control modules like Lego. No restarts needed.'
  },
  {
    icon: Cable,
    title: 'Link anything',
    desc: 'Route telemetry to models, models to actuators, and events to dashboards with one click.'
  },
  {
    icon: Bot,
    title: 'Robot-ready',
    desc: 'From sim to track. Same code paths, same timing guarantees, same adrenaline.'
  },
  {
    icon: Gauge,
    title: 'Racing fast',
    desc: 'Sub-10ms loops with vectorized kernels and smart caching. Keep your foot down.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Built for speed and control</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.06] transition">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 text-blue-300 grid place-items-center mb-4">
                <f.icon />
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-blue-100/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
