import { Check, Zap, Star, Crown, X } from 'lucide-react';

const FEATURES = [
  { key: 'woodmart', label: 'نصب قالب حرفه‌ای WoodMart' },
  { key: 'woocommerce', label: 'راه‌اندازی فروشگاه با ووکامرس' },
  { key: 'demo_setup', label: 'استفاده از دمو آماده + تغییر رنگ‌ها' },
  { key: 'products', label: 'تعریف محصولات ساده و متغیر (سایز، رنگ و…)' },
  { key: 'otp', label: 'ثبت‌نام و ورود کاربران با شماره موبایل (OTP)' },
  { key: 'payment', label: 'اتصال به درگاه پرداخت آنلاین' },
  { key: 'shipping_basic', label: 'سیستم ارسال ساده (هزینه ثابت)' },
  { key: 'admin_panel', label: 'پنل مدیریت و سفارشات ووکامرس' },
  { key: 'security_basic', label: 'نصب SSL و تنظیمات امنیتی پایه' },
  { key: 'training', label: 'آموزش کار با سایت' },
  { key: 'homepage', label: 'طراحی صفحه اصلی جذاب با المنتور' },
  { key: 'shipping_advanced', label: 'سیستم ارسال پیشرفته‌تر (بر اساس شهر)' },
  { key: 'sms_basic', label: 'سیستم پیامکی (ثبت‌نام، سفارش، تغییر وضعیت)' },
  { key: 'discount', label: 'کد تخفیف و پیشنهادهای ویژه' },
  { key: 'upsell', label: 'فروش مکمل (محصولات پیشنهادی)' },
  { key: 'wishlist', label: 'لیست علاقه‌مندی محصولات' },
  { key: 'seo_basic', label: 'سئو پایه فروشگاهی (مناسب شروع گوگل)' },
  { key: 'backup', label: 'بکاپ‌گیری خودکار از سایت' },
  { key: 'landing', label: 'طراحی صفحات فرود (لندینگ) تبلیغاتی' },
  { key: 'sms_advanced', label: 'پیامک هوشمند (مثل سبد خرید رها شده)' },
  { key: 'speed', label: 'بهینه‌سازی سرعت سایت' },
  { key: 'woocommerce_pro', label: 'تنظیمات حرفه‌ای ووکامرس' },
  { key: 'security_advanced', label: 'امنیت پیشرفته فروشگاهی' },
  { key: 'support', label: 'پشتیبانی و همراهی پس از تحویل' },
];

const plans = [
  {
    name: ' پلن اقتصادی | شروع فروش آنلاین',
    icon: Zap,
    price: '۱۷/۹۸۰/۰۰۰',
    period: 'one-time',
    description: 'مناسب کسب‌وکارهایی که می‌خوان سریع وارد فروش آنلاین بشن',
    features: {
      woodmart: true,
      woocommerce: true,
      demo_setup: true,
      products: true,
      otp: true,
      payment: true,
      shipping_basic: true,
      admin_panel: true,
      security_basic: true,
      training: true,
      homepage: true,
      seo_basic: true,
      backup: true,
      support: true,
    },
    popular: false,
    color: 'from-slate-600 to-slate-700',
    borderColor: 'border-slate-700/50 hover:border-slate-600/50',
  },
  {
    name: 'پلن حرفه‌ای | پرفروش‌ترین انتخاب',
    icon: Star,
    price: '۲۷/۸۰۰/۰۰۰',
    period: 'one-time',
    description: 'مناسب کسب‌وکارهای درحال رشد',
    features: {
      woodmart: true,
      woocommerce: true,
      demo_setup: true,
      products: true,
      otp: true,
      payment: true,
      shipping_basic: true,
      admin_panel: true,
      security_basic: true,
      training: true,
      homepage: true,

      shipping_advanced: true,
      sms_basic: true,
      discount: true,
      upsell: true,
      wishlist: true,
      seo_basic: true,
      backup: true,
      speed: true,
      woocommerce_pro: true,
      support: true,
    },
    popular: true,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50 hover:border-emerald-400/50',
  },
  {
    name: 'پلن پیشرفته | فروش حرفه‌ای و رشد سریع',
    icon: Crown,
    price: '۳۶/۰۰۰/۰۰۰',
    period: 'contact us',
    description: 'مناسب برندها و کسب‌وکارهای جدی',
    features: Object.fromEntries(
      FEATURES.map(f => [f.key, true])
    ),
    popular: false,
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/50 hover:border-amber-400/50',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">تعرفه</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            تعرفه‌های شفاف
          </h2>
          <p className="md:text-xl text-base text-slate-400 max-w-2xl mx-auto">
            پلنی که با نیازتان همخوانی دارد را انتخاب کنید.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-900/50 backdrop-blur-sm border ${plan.borderColor} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20' : ''
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  تومان
                  {/* {plan.period !== 'contact us' && (
                    <span className="text-slate-500">/ {plan.period}</span>
                  )} */}
                </div>
              </div>

              <div className="space-y-4 mb-8">

                {FEATURES.map(feature => {
                  const isEnabled = !!plan.features[feature.key];

                  return (
                    <div key={feature.key} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center
          ${isEnabled ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}
                      >
                        {isEnabled ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <X className="w-3 h-3 text-red-400" />
                        )}
                      </div>

                      <span
                        className={
                          isEnabled
                            ? 'text-slate-300'
                            : 'text-slate-500 line-through'
                        }
                      >
                        {feature.label}
                      </span>
                    </div>
                  );
                })}

              </div>

              <a
                href="#contact"
                className={`block w-full py-4 text-center rounded-full font-semibold transition-all duration-300 ${plan.popular
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/50'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            دنبال یه چیز خاص می‌گردی که هیچ‌جا نیست؟{' '}
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">
              بریم واسه گپ و گفت!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
