import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Apple, Droplet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-80 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/20 to-accent-100/20 rounded-full blur-3xl -z-10 opacity-30" />

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-300"
              >
                <Zap className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">AI-Powered Health Assistant</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Smart Diet Planner</span>
                <br />
                <span className="text-navy-900">Smart diet planning</span>
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">for healthier lives</span>
              </h1>

              <p className="text-lg text-navy-600 leading-relaxed max-w-md">
                Personalized Pakistani meal planning, real-time calorie tracking, BMI calculation, and AI-powered nutrition recommendations tailored to your goals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/signup"
                className="btn-leaf inline-flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/dashboard"
                className="btn-leaf-outline inline-flex items-center justify-center gap-2"
              >
                View Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-200/30">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '500+', label: 'Pakistani Recipes' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-sm text-navy-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Illustration Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            {/* Floating Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Calorie Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 backdrop-blur-xl bg-white/60 rounded-2xl p-4 w-40 space-y-2 shadow-glass border border-white/20"
              >
                <p className="text-xs font-semibold text-navy-500">Daily Intake</p>
                <p className="text-2xl font-bold text-primary-600">2,150</p>
                <p className="text-xs text-navy-600">cal / 2,300 goal</p>
                <div className="w-full h-2 bg-primary-100 rounded-full overflow-hidden">
                  <div className="h-full w-93% bg-gradient-primary" />
                </div>
              </motion.div>

              {/* BMI Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 left-10 backdrop-blur-xl bg-white/60 rounded-2xl p-4 w-40 space-y-2 shadow-glass border border-white/20"
              >
                <p className="text-xs font-semibold text-navy-500">Your BMI</p>
                <p className="text-2xl font-bold text-primary-600">22.5</p>
                <p className="text-xs text-navy-600">Healthy weight</p>
              </motion.div>

              {/* Nutrition Stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 right-20 backdrop-blur-xl bg-white/60 rounded-2xl p-4 w-48 space-y-3 shadow-glass border border-white/20"
              >
                <p className="text-xs font-semibold text-navy-500">Nutrition Balance</p>
                <div className="space-y-2">
                  {[
                    { label: 'Protein', value: 28, color: 'bg-primary-400' },
                    { label: 'Carbs', value: 45, color: 'bg-accent-400' },
                    { label: 'Fats', value: 27, color: 'bg-orange-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-navy-600">{item.label}</span>
                      <span className="font-semibold text-navy-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Center Bowl Illustration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-64 h-64 bg-gradient-leaf/10 rounded-full flex items-center justify-center"
              >
                <div className="relative w-48 h-48 bg-gradient-leaf/20 rounded-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Apple className="w-16 h-16 text-leaf-500 mx-auto" />
                    <p className="text-sm font-semibold text-slate-700">Healthy Nutrition</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
