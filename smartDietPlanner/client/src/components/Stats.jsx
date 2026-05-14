import { motion } from 'framer-motion';
import { Users, ChefHat, Award, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Active Users',
      description: 'People achieving their health goals',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: ChefHat,
      value: '1,200+',
      label: 'Recipes',
      description: 'Diverse meal options for every taste',
      color: 'from-green-400 to-leaf-600'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Users see results within 30 days',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Heart,
      value: '4.9★',
      label: 'User Rating',
      description: 'Trusted by health enthusiasts worldwide',
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
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
            <span className="text-sm font-semibold text-leaf-700">Our Impact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">Trusted by thousands</span>
            <br />
            <span className="text-slate-900">worldwide</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join a community of health-conscious individuals transforming their lives with Smart Diet Planner
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card p-8 h-full space-y-4 hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xl font-semibold text-slate-900">{stat.label}</p>
                    <p className="text-sm text-slate-600">{stat.description}</p>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="pt-4 border-t border-leaf-200/30">
                    <div className="w-full h-2 bg-leaf-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-wellness rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Start your journey to better health today with personalized meal planning and expert nutrition guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="btn-leaf">
                Start Free Trial
              </a>
              <a href="/about" className="btn-leaf-outline">
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;