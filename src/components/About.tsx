import { Target, Zap, Users, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'هدف‌مند و آگاهانه',
    description: 'ما با هدف می‌سازیم. هر پیکسل و هر خط کد، ماموریتی برای رشد برند شما دارد.',
  },
  {
    icon: Zap,
    title: 'اولویتی به نام بازدهی',
    description: 'سریع، بهینه و اثربخش. بدون پیچیدگی‌های بیهوده و با تمرکز بر عملکرد نهایی.',
  },
  {
    icon: Users,
    title: 'کاربرمحوری (User-Centric)',
    description: 'اولین اولویت ما کاربران شما هستند. تجربه‌هایی خلق می‌کنیم که عاشقش شوند.',
  },
  {
    icon: Heart,
    title: 'دقت و مهارت (Craft)',
    description: 'ما عشق و اشتیاقمان را در هر پروژه می‌دمیم و با آن مثل فرزند خودمان رفتار می‌کنیم.',
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
              <span className="text-sm text-emerald-400 font-medium">درباره ایوا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 ">
              فراتر از یک آژانس دیجیتال؛ ما شریک رشد شما هستیم.
            </h2>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              در استودیو ایوا (EIVA)، باور داریم که هر ایده بزرگ شایسته یک نمایش بی‌نقص است. تیم ما متشکل از متخصصان خلاق و برنامه‌نویسان با‌تجربه است که با تمرکز بر جزئیات و نیاز کاربر ایرانی، راه‌حل‌هایی نوآورانه خلق می‌کنند. ما فقط کد نمی‌زنیم و طرح نمی‌کشیم؛ ما داستان برند شما را روایت می‌کنیم.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-emerald-400">۲۰+</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">پروژه موفق</div>
                    <div className="text-sm text-slate-500">در بیش از ۱۵ صنعت مختلف</div>
                  </div>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-emerald-400">۹۸%</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">رضایت همراهان ما</div>
                    <div className="text-sm text-slate-500">میانگین امتیاز: ۴.۹ از ۵</div>
                  </div>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-emerald-400">۱۰۰K</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">جذب کاربر فعال</div>
                    <div className="text-sm text-slate-500">از طریق پلتفرم‌های طراحی شده</div>
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
