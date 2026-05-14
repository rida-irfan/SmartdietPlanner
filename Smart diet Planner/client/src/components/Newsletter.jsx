import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-200/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full shadow-glow">
            <Heart className="w-10 h-10 text-white" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Free AI Health Assistant</span>
              <br />
              <span className="text-navy-900">Powered by Smart Diet Planner</span>
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
              Experience the future of personalized nutrition with our advanced AI technology.
              Get intelligent meal recommendations, track your progress, and achieve your health goals with zero cost.
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Sparkles,
                title: 'AI-Powered Plans',
                desc: 'Smart meal recommendations based on your preferences and goals'
              },
              {
                icon: Shield,
                title: 'Privacy First',
                desc: 'Your health data stays secure and private'
              },
              {
                icon: Heart,
                title: 'Expert Nutrition',
                desc: 'Backed by nutritional science and health experts'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 shadow-glass border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-navy-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-2xl shadow-soft">
              <Sparkles className="w-5 h-5" />
              <span>Start Your Health Journey Today</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;