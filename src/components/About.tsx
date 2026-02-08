import { Target, Zap, Users, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'We build with intention. Every pixel, every line of code serves a purpose.',
  },
  {
    icon: Zap,
    title: 'Efficiency First',
    description: 'Fast, lean, and effective. No bloat, no unnecessary complexity.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Your users are our priority. We design experiences they will love.',
  },
  {
    icon: Heart,
    title: 'Craft & Care',
    description: 'We pour our passion into every project, treating it as our own.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <span className="text-sm text-emerald-400 font-medium">ABOUT US</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We're not your typical agency
            </h2>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              We're a team of designers, developers, and strategists who believe in the power of
              simplicity. No fluff, no jargon—just digital solutions that work.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Founded in 2020, EIVA has helped over 100 businesses transform their digital presence.
              From startups to enterprises, we bring clarity to complexity.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-emerald-400">100+</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">Projects Delivered</div>
                    <div className="text-sm text-slate-500">Across 15 industries</div>
                  </div>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-emerald-400">98%</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">Client Satisfaction</div>
                    <div className="text-sm text-slate-500">Average rating: 4.9/5</div>
                  </div>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-emerald-400">3.2M</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">Users Reached</div>
                    <div className="text-sm text-slate-500">Through our platforms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
