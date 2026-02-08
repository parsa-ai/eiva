import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website typically takes 2-3 weeks, while more complex applications can take 6-12 weeks. We provide a detailed timeline during our discovery phase.',
  },
  {
    question: 'What is your design process?',
    answer: 'We follow a collaborative approach: Discovery → Strategy → Design → Development → Launch. You\'ll be involved at every stage with regular check-ins, ensuring the final product aligns perfectly with your vision.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! All our packages include post-launch support. We also offer monthly maintenance plans for updates, security patches, and technical support. Your success is our priority.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, battle-tested technologies including React, Next.js, Node.js, and various cloud platforms. We choose the right tools based on your specific needs, prioritizing performance, scalability, and maintainability.',
  },
  {
    question: 'Can you work with our existing brand?',
    answer: 'Absolutely! We can work within your existing brand guidelines or help you develop a new brand identity from scratch. Our goal is to ensure consistency across all your digital touchpoints.',
  },
  {
    question: 'What if I need changes after the project is completed?',
    answer: 'We include revision rounds during development. After launch, we offer flexible maintenance packages for ongoing changes and updates. We\'re here to support your evolving needs.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment structures. Typically, we work with 50% upfront and 50% upon completion, but we can customize payment terms for larger projects. Let\'s discuss what works best for you.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We believe in transparent, consistent communication. You\'ll have a dedicated project manager and access to our project management tools. We schedule regular check-ins and are always available for questions.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400 font-medium">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Questions? Answered.
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-white pr-8 group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-6">
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
