import { motion } from 'framer-motion';
import { Leaf, Zap, Shield, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Smart Recommendations',
      description: 'Your diet plans are generated from age, gender, activity, and dietary preferences for personalized daily menus tailored to your goals.',
    },
    {
      icon: Zap,
      title: 'Modern Experience',
      description: 'Enjoy a responsive UI, premium wellness colors, and smooth animations across all your devices.',
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your profile and health data are secured with JWT authentication and encrypted password storage.',
    },
    {
      icon: BookOpen,
      title: 'Save Your Progress',
      description: 'Store diet plans and profile updates in your account for ongoing wellness tracking and accountability.',
    },
  ];

  return (
    <div className="bg-gradient-wellness min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-gradient">About Smart Diet Planner</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your intelligent companion for personalized nutrition planning and wellness transformation
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20 bg-white rounded-2xl p-8 card"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Smart Diet Planner was built with a simple mission: to make personalized nutrition planning accessible, enjoyable, and effective for everyone.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            We believe that healthy living shouldn't be complicated. That's why we combined modern technology with nutritional science to create a platform that understands your unique needs and provides tailored meal plans that fit your lifestyle.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-leaf flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-12 card text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Personalization', desc: 'Every plan is uniquely tailored to you' },
              { title: 'Transparency', desc: 'Clear, honest, and science-based guidance' },
              { title: 'Community', desc: 'Supporting each other on wellness journeys' },
            ].map((value, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-leaf-600 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
