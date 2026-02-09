import { ExternalLink, ArrowUpRight, XIcon, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'MrNet',
    category: 'وب‌سایت خدمات زیرساخت و اینترنت اشیاء (IoT)',
    description: 'طراحی پلتفرم ارائه اینترنت بی‌سیم پرسرعت و پایدار برای بیزنس‌ها. تمرکز پروژه بر نمایش قدرت سخت‌افزار (مولتی‌روترها) و پایداری شبکه در مقیاس کشوری بوده است.',
    image: '/mrnet.png',
    stats: ['داشبورد نمایش کنترل یکپارچه شبکه و قابلیت مقیاس‌پذیری', 'رابط کاربری مدرن با تم تاریک (Dark Mode) و کنتراست رنگی خیره‌کننده.'],

  },
  {
    title: 'سپن وت',
    category: 'پلتفرم فروشگاهی و مجله سلامت حیوانات',
    description: 'یک فروشگاه آنلاین تخصصی برای محصولات سلامت‌محور پت. این پروژه با هدف ساده‌سازی مسیر خرید و ارائه محتوای آموزشی تخصصی طراحی شده است.',
    image: '/images/project_01.PNG',
    stats: ['سیستم فیلترینگ پیشرفته برای چاشنی‌ها و مکمل‌های غذایی', 'دسته‌بندی هوشمند محصولات بر اساس نژاد و جثه (سگ بزرگ، کوچک و گربه)'],
  },
  {
    title: 'WILLIS TOWER',
    category: 'وب‌سایت املاک لوکس و معماری',
    description: 'طراحی و توسعه یک پلتفرم دیجیتال برای معرفی برجی مدرن با رویکرد تعادل میان فضای کار و زندگی. تمرکز بر نمایش جزئیات معماری و ایجاد شکوه بصری.',
    image: '/images/project_02.png',
    stats: ['خش‌بندی اختصاصی برای فضاهای اداری، تجاری و تفریحی', 'تایپوگرافی جسورانه و طراحی بخش امکانات رفاهی (Amenities)'],
  },
  {
    title: 'TekZ',
    category: 'وب‌سایت شرکتی و خدمات فناوری اطلاعات',
    description: 'طراحی لندینگ‌پیج مدرن برای یک شرکت پیشرو در حوزه IT و مشاوره تکنولوژی. تمرکز بر نمایش فرآیند محور خدمات و جذب مشتریان سازمانی.',
    image: '/images/project_03.png',
    stats: ['طراحی تعاملی کارت‌های خدمات با استفاده از هویت بصری مدرن', 'نمایش مرحله‌به‌مرحله فرآیند اجرای پروژه (از مفهوم تا پشتیبانی)'],
  },
];

export default function Portfolio() {
  const [isHide, setIsHide] = useState(true)
  const [indexOfPrj, setindexOfPrj] = useState(0)
  useEffect(() => {
    if (!isHide) {

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isHide]);
  return (
    <section id="portfolio" className="py-32 bg-slate-900 relative overflow-hidden">
      <div onClick={() => { setIsHide(true) }} className={`fixed z-50 bg-slate-900/30 backdrop-blur-lg w-screen h-screen top-0 right-0 ${isHide ? "hidden" : "flex"} justify-center items-center`}>


        <div
          onClick={(e) => e.stopPropagation()}
          className=' w-11/12 xl:w-8/12 h-[80vh] bg-white rounded-xl overflow-hidden relative'
        >
          <XIcon
            onClick={() => setIsHide(true)}
            className='cursor-pointer absolute top-3 left-3 bg-white stroke-black rounded-xl p-1 w-8 h-8 z-10'
          />

          <div
            className='w-full h-full overflow-y-auto'
            style={{ WebkitOverflowScrolling: "touch" }}
            dir='ltr'
          >
            <img
              className='w-full object-contain'
              src={projects[indexOfPrj].image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">پروژه ها</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
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
              onClick={() => {
                setIsHide(false);
                setindexOfPrj(index)
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-bl  from-black to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <img
                  src={project.image}
                  alt={project.title}

                  className="w-full h-full object-cover object-top  group-hover:scale-110 transition-transform duration-700"

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

                {/* <div className="flex flex-col gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="px-4 text-slate-700/50 flex gap-4">
                      <Circle/>
                      <span className="text-sm text-slate-300 font-medium">{stat}</span>
                    </div>
                  ))}
                </div> */}

                <button className="mt-6 flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                  نمایش کامل
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
