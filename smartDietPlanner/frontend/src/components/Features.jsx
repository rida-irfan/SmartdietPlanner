import { motion } from 'framer-motion';
import { Sunrise, Sandwich, Moon, Apple, TrendingUp, Droplets } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sunrise,
      title: 'Pakistani Breakfast',
      description: 'Traditional morning meals like paratha, halwa, and fresh juices',
      gradient: 'from-primary-400 to-accent-400',
      bgGradient: 'from-primary-50 to-accent-50',
    },
    {
      icon: Sandwich,
      title: 'Lunch Plans',
      description: 'Balanced noon meals with biryani, karahi, and healthy alternatives',
      gradient: 'from-primary-500 to-navy-500',
      bgGradient: 'from-primary-50 to-navy-50',
    },
    {
      icon: Moon,
      title: 'Dinner Plans',
      description: 'Light evening meals like daal, chicken, and vegetable curries',
      gradient: 'from-accent-400 to-primary-500',
      bgGradient: 'from-accent-50 to-primary-50',
    },
    {
      icon: Apple,
      title: 'Healthy Snacks',
      description: 'Pakistani snacks like samosas, fruit chaat, and nuts',
      gradient: 'from-orange-400 to-primary-400',
      bgGradient: 'from-orange-50 to-primary-50',
    },
    {
      icon: TrendingUp,
      title: 'Calorie Tracking',
      description: 'Real-time monitoring of your daily caloric intake',
      gradient: 'from-primary-400 to-cyan-400',
      bgGradient: 'from-primary-50 to-cyan-50',
    },
    {
      icon: Droplets,
      title: 'Water Intake',
      description: 'Hydration reminders to keep you healthy and energized',
      gradient: 'from-cyan-400 to-primary-400',
      bgGradient: 'from-cyan-50 to-primary-50',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-gradient-wellness">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-300">
            <span className="text-sm font-semibold text-primary-700">Powerful Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">Everything you need</span>
            <br />
            <span className="text-navy-900">for optimal health</span>
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Comprehensive tools for Pakistani meal planning, nutrition tracking, and wellness management
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`backdrop-blur-xl bg-white/60 p-8 h-full space-y-4 shadow-glass border border-white/20 hover:shadow-glow transition-all duration-300 rounded-2xl`}>
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-navy-900">{feature.title}</h3>
                    <p className="text-navy-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-4 border-t border-leaf-200/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-500">Capability</span>
                      <span className="text-xs font-semibold text-leaf-600">100%</span>
                    </div>
                    <div className="w-full h-2 bg-leaf-100 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-leaf rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
