import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'کشف و استراتژی',
    description: 'ابتدا اهداف شما را می‌شنویم، بازار را تحلیل می‌کنیم و نقشه راهی هوشمندانه برای شروع مسیر ترسیم می‌کنیم.',
    details: ['تحلیل رقبای بازار', 'تحقیق و شناخت کاربران'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'طراحی و نمونه‌سازی',
    description: 'ایده‌ها را به طرح‌های بصری تبدیل می‌کنیم. در این مرحله، شما ظاهر نهایی پروژه را قبل از اجرا لمس خواهید کرد.',
    details: ['معماری اطلاعات سایت', 'طراحی ساختار (Wireframing)', 'برنامه‌ریزی فنی زیرساخت'],
  },
  {
    number: '03',
    icon: Code,
    title: 'توسعه و ارزیابی',
    description: 'طرح‌های تایید شده با کدهایی بهینه و استاندارد ساخته می‌شوند و از فیلتر تست‌های سخت‌گیرانه عبور می‌کنند.',
    details: ['توسعه چابک', 'جلسات بازبینی منظم', 'تضمین کیفیت و تست (QA)'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'رونمایی و پشتیبانی',
    description: 'پروژه شما متولد می‌شود! اما کار ما اینجا تمام نمی‌شود؛ ما برای رشد و نگهداری در کنار شما می‌مانیم.',
    details: ['تست نهایی عملکرد و سرعت', 'استقرار و راه‌اندازی (Deployment)', 'پشتیبانی و نگهداری پس از انتشار'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">فرایند</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            مسیر خلق تمایز
          </h2>
          <p className="md:text-xl text-base text-slate-400 max-w-2xl mx-auto">
            متدولوژی آزموده‌ی ما؛ فرآیندی هوشمند که ایده‌های خام شما را به تجربه‌های دیجیتال استثنایی تبدیل می‌کند.
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
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/50 group-hover:scale-110 transition-transform duration-300 hidden md:flex">
                    {step.number}
                  </div>

                  <div className="mt-8 mb-6">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                      <step.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="md:text-2xl text-xl font-bold text-white mb-4">{step.title}</h3>
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
      </div>
    </section>
  );
}
