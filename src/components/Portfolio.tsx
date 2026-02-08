import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'FinanceFlow',
    category: 'Fintech Platform',
    description: 'A modern banking dashboard with real-time analytics and seamless transactions.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500/20 to-cyan-500/20',
    stats: ['40% faster', '99.9% uptime'],
  },
  {
    title: 'HealthHub',
    category: 'Healthcare Portal',
    description: 'Patient management system connecting doctors and patients effortlessly.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-500/20 to-teal-500/20',
    stats: ['10k+ users', '4.8★ rating'],
  },
  {
    title: 'EcoCommerce',
    category: 'E-commerce',
    description: 'Sustainable marketplace with carbon-neutral shipping and eco-friendly products.',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500/20 to-lime-500/20',
    stats: ['50k products', '2M visits/mo'],
  },
  {
    title: 'CreativeStudio',
    category: 'Portfolio Site',
    description: 'Stunning portfolio for a design agency showcasing their best work.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500/20 to-pink-500/20',
    stats: ['100+ projects', '25 awards'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">پروژه ها</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            پروژه‌های منتخب
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            نگاهی به برخی از آخرین همکاری‌های ما با برندهای پیشرو.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-emerald-400 text-sm font-medium mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="px-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600/50">
                      <span className="text-sm text-slate-300 font-medium">{stat}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
