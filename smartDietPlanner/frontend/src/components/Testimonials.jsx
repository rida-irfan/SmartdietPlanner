import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5,
      text: 'Smart Diet Planner transformed my eating habits. The AI recommendations are incredibly accurate and personalized!',
    },
    {
      name: 'Michael Chen',
      role: 'Health Coach',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      rating: 5,
      text: 'I recommend this to all my clients. The calorie tracking and meal planning features are top-notch.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Busy Professional',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      rating: 5,
      text: 'Finally, a meal planner that understands my lifestyle. The mobile app is convenient and easy to use.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-wellness">
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
            <span className="text-sm font-semibold text-leaf-700">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-slate-900">Loved by thousands of</span>
            <br />
            <span className="text-gradient">health-conscious people</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 space-y-6 hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-leaf/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-leaf-200/30">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-leaf-200 group-hover:ring-leaf-400 transition-all"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
