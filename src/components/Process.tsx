import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We listen, ask questions, and understand your vision, goals, and challenges.',
    details: ['Stakeholder interviews', 'Competitor analysis', 'User research'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'We craft a clear roadmap with wireframes, user flows, and technical architecture.',
    details: ['Information architecture', 'Wireframing', 'Technical planning'],
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'We build your solution with clean code, modern tools, and best practices.',
    details: ['Agile sprints', 'Regular check-ins', 'Quality assurance'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'We deploy, test, and support your project as it goes live to the world.',
    details: ['Performance testing', 'Deployment', 'Post-launch support'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">HOW WE WORK</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital experiences.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/50 to-emerald-500/20 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/50 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  <div className="mt-8 mb-6">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                      <step.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{step.description}</p>
                  </div>

                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-slate-800 flex items-center justify-center text-white font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Ready to start your project?</div>
              <div className="text-slate-400 text-sm">Let's discuss how we can help you succeed.</div>
            </div>
            <a
              href="#contact"
              className="ml-4 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
