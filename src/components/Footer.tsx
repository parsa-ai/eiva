import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from 'lucide-react';

const navItems = [
  { name: 'خانه', href: '#home' },
  { name: 'پروژه‌ها', href: '#portfolio' },
  { name: 'درباره ایوا', href: '#about' },
  { name: 'فرایند', href: '#process' },
  { name: 'تعرفه', href: '#pricing' },
  { name: 'سوالات متداول', href: '#faq' },
];
const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">EIVA</h3>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              ما در ایوا استودیو، با ترکیب استراتژی، طراحی مدرن و تکنولوژی، ایده‌های شما را به تجربه‌های دیجیتالِ ماندگار تبدیل می‌کنیم. تخصص ما خلق وب‌سایت‌ها و پلتفرم‌هایی است که علاوه بر زیبایی خیره‌کننده، مسیر رشد کسب‌وکار شما را هموار می‌کنند.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`${item.href.toLowerCase()}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">با ما در ارتباط باشید</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@eiva.studio"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  hello@eiva.studio
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+989167652413"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  +98 916 765 2413
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  خوزستان - اهواز
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} EIVA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
    </footer>
  );
}
