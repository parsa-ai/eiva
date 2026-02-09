import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8 backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-300 group cursor-default">
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-sm text-emerald-300">استودیو ایوا</span>
        </div>

        <h1 className="text-7xl md:text-9xl lg:text-9xl font-extrabold text-white mb-6 tracking-tight">
          <span className="inline-block hover:scale-105 transition-transform duration-300">A</span>
          <span className="inline-block hover:scale-105 transition-transform duration-300">V</span>
          <span className="inline-block hover:scale-105 transition-transform duration-300">I</span>
          <span className="inline-block hover:scale-105 transition-transform duration-300">E</span>
        </h1>

        <p className="text-2xl md:text-3xl lg:text-3xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
          خلق تجربه‌های دیجیتالی که
          <span className="text-emerald-400 font-semibold"> هویت شما </span>
          را می‌سازند.
        </p>

        <p className="text-base md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          ما در استودیو ایوا، هنر طراحی را با قدرت تکنولوژی ادغام می‌کنیم تا کسب‌وکار شما در دنیای دیجیتال متمایز دیده شود.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 flex items-center gap-2 hover:gap-4 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            مشاهده نمونه کارها
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
