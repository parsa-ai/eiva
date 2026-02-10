import { Check, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    name: 'پلن اقتصادی',
    icon: Zap,
    price: '۱۶,۴۰۰,۰۰۰',
    description: 'مناسب کسب‌وکارهای نوپا و جدیدتر که تازه می‌خوان وارد بازی فروش بشن و برند سازی کنن ',
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
    borderColor: 'border-slate-700/50 hover:border-slate-600/50',
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
    borderColor: 'border-emerald-500/50 hover:border-emerald-400/50',
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
    borderColor: 'border-amber-500/50 hover:border-amber-400/50',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">تعرفه‌ها</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            انتخاب پلن مناسب شما
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            همه‌چیز شفاف، بدون هزینه پنهان
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-900/50 backdrop-blur-xs border
              ${plan.borderColor}
              rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2
              ${plan.popular ? 'scale-102 ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20' : ''}
              
              grid grid-rows-[auto_auto_auto_1fr_auto]`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2
                bg-linear-to-r from-emerald-500 to-teal-500
                text-white text-sm font-bold rounded-full shadow-lg">
                  محبوب‌ترین انتخاب
                </div>
              )}

              {/* Icon */}
              <div className='flex gap-4 items-center mb-6'>
                <div className={`w-16 h-16 bg-linear-to-br ${plan.color}
              rounded-2xl flex items-center justify-center `}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                </div>
              </div>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-white mr-2">تومان</span>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {plan.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="#contact"
                className={`mt-8 block w-full py-4 text-center rounded-full font-semibold
                transition-all duration-300
                ${plan.popular
                    ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/50'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
              >
                شروع کنید
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400">
            پلن دلخواهت رو پیدا نکردی؟{' '}
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">
              تماس بگیر با هم بسازیمش
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
