import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Clock } from 'lucide-react';

const DashboardPreview = () => {
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
            <span className="text-sm font-semibold text-leaf-700">Dashboard Preview</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">Advanced analytics</span>
            <br />
            <span className="text-slate-900">at your fingertips</span>
          </h2>
        </motion.div>

        {/* Main Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card p-8 overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-leaf/10 rounded-full blur-3xl -z-10" />

          {/* Header */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Today's Overview</h3>
              <p className="text-slate-600">Track your nutrition and wellness metrics</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: BarChart3, label: 'Calories', value: '2,150', target: '2,300', unit: 'kcal' },
                { icon: TrendingUp, label: 'Protein', value: '145', target: '180', unit: 'g' },
                { icon: PieChart, label: 'Carbs', value: '285', target: '320', unit: 'g' },
                { icon: Clock, label: 'Fats', value: '65', target: '78', unit: 'g' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                const percentage = Math.round((parseInt(stat.value.replace(',', '')) / parseInt(stat.target.replace(',', ''))) * 100);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-leaf/5 border border-leaf-200/30 rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="w-5 h-5 text-leaf-600" />
                      <span className="text-xs font-semibold text-leaf-600">{percentage}%</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-medium">{stat.label}</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-500">/ {stat.target} {stat.unit}</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-leaf-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(percentage, 100)}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-leaf rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-leaf-200/30">
            {/* Macro Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-bold text-slate-900">Macro Distribution</h4>
              <div className="space-y-3">
                {[
                  { label: 'Protein', value: 28, color: 'from-red-400 to-red-500' },
                  { label: 'Carbs', value: 45, color: 'from-blue-400 to-blue-500' },
                  { label: 'Fats', value: 27, color: 'from-yellow-400 to-yellow-500' },
                ].map((macro, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{macro.label}</span>
                      <span className="text-sm font-bold text-slate-900">{macro.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-leaf-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${macro.value}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${macro.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Meal Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-bold text-slate-900">Meal Progress</h4>
              <div className="space-y-3">
                {[
                  { meal: 'Breakfast', status: 'Completed', calories: 520 },
                  { meal: 'Lunch', status: 'Completed', calories: 850 },
                  { meal: 'Dinner', status: 'Pending', calories: 0 },
                  { meal: 'Snacks', status: 'Pending', calories: 0 },
                ].map((meal, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-gradient-leaf/5 border border-leaf-200/30 rounded-xl"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{meal.meal}</p>
                      <p className="text-xs text-slate-600">{meal.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-leaf-600">{meal.calories}</p>
                      <p className="text-xs text-slate-500">kcal</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
