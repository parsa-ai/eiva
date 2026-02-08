import { Check, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '2,500',
    period: 'one-time',
    description: 'Perfect for small businesses and personal projects',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '1 month support',
      'Fast delivery (2 weeks)',
    ],
    popular: false,
    color: 'from-slate-600 to-slate-700',
    borderColor: 'border-slate-700/50 hover:border-slate-600/50',
  },
  {
    name: 'Professional',
    icon: Star,
    price: '5,500',
    period: 'one-time',
    description: 'For growing businesses with advanced needs',
    features: [
      'Up to 15 pages',
      'Custom design system',
      'Advanced SEO & analytics',
      'CMS integration',
      'API integrations',
      '3 months support',
      'Priority delivery (3 weeks)',
    ],
    popular: true,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50 hover:border-emerald-400/50',
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: 'contact us',
    description: 'Tailored solutions for complex requirements',
    features: [
      'Unlimited pages',
      'Full brand identity',
      'Advanced functionality',
      'Third-party integrations',
      'Performance optimization',
      'Dedicated team',
      '12 months support',
      'Ongoing maintenance available',
    ],
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
            <span className="text-sm text-emerald-400 font-medium">PRICING</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-900/50 backdrop-blur-sm border ${plan.borderColor} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20' : ''
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
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  {plan.period !== 'contact us' && (
                    <span className="text-slate-500">/ {plan.period}</span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block w-full py-4 text-center rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
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
            Need something different?{' '}
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">
              Let's talk custom solutions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
