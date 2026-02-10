import { Check, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    name: 'پلن اقتصادی',
    icon: Zap,
    price: '۱۶,۴۰۰,۰۰۰',
    description: 'مناسب کسب‌وکارهای نوپا و جدیدتر که تازه می‌خوان وارد بازی فروش بشن و برند سازی کنن',
    highlights: [
      'ایجاد فروشگاه آنلاین',
      'راه‌اندازی ووکامرس',
      'طراحی صفحات بر اساس برند شما',
      'درگاه پرداخت آنلاین',
      'ورود و ثبت‌نام با موبایل (OTP)',
      'آموزش کار با سایت',
      'قرار دادن ۱۰ محصول روی سایت',
      'امنیت پایه فروشگاه',
      'دامنه .ir',
      '۱ ماه پشتیبانی رایگان',
    ],
    popular: false,
    color: 'from-slate-600 to-slate-700',
    borderColor: 'border-slate-700/50 hover:border-slate-600',
  },
  {
    name: 'پلن حرفه‌ای',
    icon: Star,
    price: '۲۷٬۹۸۰٬۰۰۰',
    description: 'مناسب کسب‌وکارهای رشد یافته که می‌خوان فروششون رو جدی‌تر و پایدار افزایش بدن',
    highlights: [
      'همه امکانات پلن اقتصادی',
      'ارسال پیام وضعیت سفارش',
      'کد تخفیف و فروش مکمل',
      'بهینه‌سازی سرعت سایت',
      'تنظیمات حرفه‌ای ووکامرس',
      'گزارش فروش و موجودی',
      'قرار دادن تا ۵۰ محصول روی سایت',
      'امنیت پیشرفته فروشگاه',
      'دامنه .ir',
      '۳ ماه پشتیبانی رایگان',
    ],
    popular: true,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50 hover:border-emerald-400',
  },
  {
    name: 'پلن پیشرفته',
    icon: Crown,
    price: '۴۵٬۰۰۰٬۰۰۰+',
    description: 'مناسب کسب‌وکارهای اصیل که می‌خوان در مقیاس بزرگتر از شهر یا کشورشون فعالیت کنن',
    highlights: [
      'تمام امکانات پلن حرفه‌ای',
      'طراحی اختصاصی UI و UX',
      'امکان چت انلاین در سایت',
      'پیامک هوشمند (سبد خرید رهاشده)',
      'اتصال سایت به سیستم حسابداری شما',
      'سئو فروشگاه',
      'قرار دادن تمام محصولات روی سایت',
      'امنیت کامل فروشگاه',
      'دامنه .com',
      '۶ ماه پشتیبانی رایگان',
    ],
    popular: false,
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/50 hover:border-amber-400',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-emerald-400 font-medium">تعرفه‌ها</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            انتخاب پلن مناسب شما
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl lg:max-w-2xl mx-auto">
            همه‌چیز شفاف، بدون هزینه پنهان
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-slate-900/50 border rounded-2xl sm:rounded-3xl p-6 sm:p-8
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${plan.borderColor}
                ${plan.popular 
                  ? 'scale-100 xl:scale-100 ring-2 ring-emerald-500/60 shadow-2xl shadow-emerald-500/25 z-10' 
                  : 'scale-100 xl:scale-95'
                }
                flex flex-col
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-5 sm:px-6 py-1.5 sm:py-2 bg-linear-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                  محبوب‌ترین انتخاب
                </div>
              )}

              {/* Icon + Title */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 mt-2 sm:mt-0">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br ${plan.color} rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0`}>
                  <plan.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              <p className="text-slate-400 text-sm sm:text-base mb-5 sm:mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-white text-lg sm:text-xl mr-2">تومان</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 grow">
                {plan.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className={`
                  mt-auto block w-full py-3.5 sm:py-4 text-center rounded-full font-semibold text-base sm:text-lg
                  transition-all duration-300
                  ${plan.popular
                    ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-[1.02]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
                  }
                `}
              >
                شروع کنید
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            پلن دلخواهت رو پیدا نکردی؟{' '}
            <a href="tel:+989167652413" className="text-emerald-400 hover:text-emerald-300 font-medium underline-offset-4 hover:underline">
              تماس بگیر با هم بسازیمش
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}