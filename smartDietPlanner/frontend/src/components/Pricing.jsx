import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Basic meal planning',
        'Daily calorie tracking',
        'Basic nutrition info',
        'Mobile app access',
        'Community forum',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'Most popular for fitness enthusiasts',
      features: [
        'AI-powered meal planning',
        'Advanced calorie tracking',
        'Macro monitoring',
        'Fitness integration',
        'Priority support',
        'Workout recommendations',
        'Meal prep guides',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: '/month',
      description: 'Complete wellness solution',
      features: [
        'Everything in Pro',
        '1-on-1 nutrition coaching',
        'Custom meal plans',
        'Advanced analytics',
        '24/7 support',
        'Recipe customization',
        'Export reports',
        'Integration with wearables',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-100 border border-leaf-300">
            <span className="text-sm font-semibold text-leaf-700">Pricing Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-slate-900">Simple, transparent</span>
            <br />
            <span className="text-gradient">pricing for everyone</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your wellness journey
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.highlighted ? 'md:-translate-y-6' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-leaf text-white text-xs font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`card p-8 h-full space-y-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-leaf-400 shadow-premium'
                    : 'border-leaf-200/30'
                }`}
              >
                {/* Plan Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 text-sm">{plan.description}</p>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    {plan.period && <span className="text-slate-600">{plan.period}</span>}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/signup"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? 'btn-leaf'
                      : 'btn-leaf-outline'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Features */}
                <div className="space-y-3 border-t border-leaf-200/30 pt-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-leaf-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600">
            All plans include a 7-day free trial.{' '}
            <Link to="/contact" className="text-leaf-600 font-semibold hover:text-leaf-700">
              Questions? Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
