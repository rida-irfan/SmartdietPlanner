import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Smart Diet Planner personalize meal recommendations?',
      answer: 'Our AI analyzes your age, gender, activity level, dietary preferences, and health goals to create customized meal plans. The system continuously learns from your feedback to improve recommendations over time.'
    },
    {
      question: 'Can I track my calorie intake and macronutrients?',
      answer: 'Yes! Our advanced tracking system monitors calories, protein, carbs, fats, and micronutrients in real-time. You can set daily goals and receive notifications when you\'re approaching your limits.'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Absolutely. We use JWT authentication and encrypted password storage. Your personal health data is stored securely and never shared with third parties. We comply with all data protection regulations.'
    },
    {
      question: 'Can I access my meal plans on mobile devices?',
      answer: 'Yes! Smart Diet Planner is fully responsive and works seamlessly across all devices. You can access your dashboard, track meals, and receive notifications on your smartphone or tablet.'
    },
    {
      question: 'What if I have dietary restrictions or allergies?',
      answer: 'Our system supports various dietary preferences including vegetarian, vegan, keto, paleo, gluten-free, and more. You can specify allergies and restrictions during signup, and all recommendations will be tailored accordingly.'
    },
    {
      question: 'How often should I update my meal plan?',
      answer: 'We recommend reviewing your meal plan weekly to ensure it aligns with your current goals and preferences. The system automatically suggests updates based on your progress and feedback.'
    },
    {
      question: 'Can I export my nutrition data?',
      answer: 'Yes, you can export your meal logs, nutrition summaries, and progress reports in PDF or CSV format. This is perfect for sharing with healthcare providers or tracking long-term progress.'
    },
    {
      question: 'What makes Smart Diet Planner different from other apps?',
      answer: 'Unlike basic calorie counters, we use advanced AI to provide personalized meal planning, real-time adjustments, comprehensive nutrition tracking, and wellness insights. Our focus is on sustainable, healthy eating habits.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-wellness">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-100 border border-leaf-300">
            <HelpCircle className="w-4 h-4 text-leaf-600" />
            <span className="text-sm font-semibold text-leaf-700">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-slate-900">Frequently Asked</span>
            <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Smart Diet Planner
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-leaf-200 shadow-soft overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-leaf-50/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4 group-hover:text-leaf-700 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-leaf-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 btn-leaf"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;