import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'زمان اجرای یک پروژه به طور معمول چقدر است؟',
    answer: 'بسته به پیچیدگی پروژه، از ۲ هفته تا ۲ ماه متغیر است. زمان‌بندی دقیق در جلسه مشاوره اعلام می‌شود.',
  },
  {
    question: 'آیا پس از تحویل پروژه، امکان تغییرات وجود دارد؟',
    answer: 'بله، تمامی پروژه‌های ما دارای دوره پشتیبانی رایگان و قابلیت توسعه در آینده هستند.',
  },
  {
    question: 'آیا سایت‌های طراحی شده در موبایل هم به خوبی نمایش داده می‌شوند؟',
    answer: 'قطعاً. تمامی پروژه‌ها به صورت کاملاً "واکنش‌گرا" (Responsive) طراحی می‌شوند تا در تمامی دستگاه‌ها خیره‌کننده باشند.',
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">سوالات متداول</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            پاسخ به سوالات شما
          </h2>
          {/* <p className="text-xl text-slate-400">
            Everything you need to know about working with us.
          </p> */}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-xs border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex gap-4 items-center justify-between text-right group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
                <div className="shrink-0 w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-800/50 backdrop-blur-xs border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">برای تحول در کسب‌وکارتان آماده‌اید؟</h3>
          <p className="text-slate-400 mb-6">
            بیایید با هم چیزی شگفت‌انگیز بسازیم.
          </p>
          <a
            href="tel:+989167652413"
            className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            همین حالا با ما تماس بگیرید
          </a>
        </div>
      </div>
    </section>
  );
}
