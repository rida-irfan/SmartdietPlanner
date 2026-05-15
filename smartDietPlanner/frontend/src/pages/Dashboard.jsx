import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import api from '../services/api';
import { clearAuth, getUser } from '../services/auth';
import DietPlanCard from '../components/DietPlanCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Calculator, Target, TrendingUp, Droplets, Moon, Sun, Activity, BarChart3, Utensils, Heart } from 'lucide-react';

const activityOptions = ['Low', 'Moderate', 'High'];
const goalOptions = ['Weight Loss', 'Maintain', 'Weight Gain'];
const preferenceOptions = ['Veg', 'Non-Veg', 'Keto', 'Gluten Free'];

const Dashboard = () => {
  const navigate = useNavigate();
  const profile = useMemo(() => getUser(), []);
  const [user, setUser] = useState(profile ?? {});
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const [form, setForm] = useState({
    age: user.age || 25,
    gender: user.gender || 'Male',
    weight: user.weight || 70,
    height: user.height || 170,
    activityLevel: user.activityLevel || 'Moderate',
    goal: user.goal || 'Maintain',
    preference: user.preference || 'Veg',
  });

  // Mock data for charts
  const weightData = [
    { day: 'Mon', weight: 70 },
    { day: 'Tue', weight: 69.8 },
    { day: 'Wed', weight: 69.5 },
    { day: 'Thu', weight: 69.3 },
    { day: 'Fri', weight: 69.0 },
    { day: 'Sat', weight: 68.8 },
    { day: 'Sun', weight: 68.5 },
  ];

  const macroData = [
    { name: 'Protein', value: 120, color: '#84cc16' },
    { name: 'Carbs', value: 200, color: '#06b6d4' },
    { name: 'Fats', value: 80, color: '#f59e0b' },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [{ data: profileData }, { data: plansData }] = await Promise.all([
          api.get('/dashboard/profile'),
          api.get('/dashboard/plans'),
        ]);
        setUser(profileData.user);
        setPlans(plansData.plans || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleInput = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const { data } = await api.post('/dashboard/plan', form);
      setPlan(data.plan);
      setPlans((prev) => [data.plan, ...prev]);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to generate plan');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    clearAuth();
    navigate('/login');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const bmi = calculateBMI(form.weight, form.height);
  const bmiCategory = getBMICategory(bmi);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-navy-900' : 'bg-navy-50'}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 dark:bg-navy-900/80 border-b border-navy-200/20 dark:border-navy-700/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-gradient-primary rounded-2xl shadow-glow"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Smart Diet Planner
              </h1>
              <p className="text-sm text-navy-600 dark:text-navy-400">Free AI Health Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 text-navy-600" /> : <Moon className="w-5 h-5 text-navy-600" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-6 py-3 bg-gradient-accent text-white font-semibold rounded-2xl shadow-soft hover:shadow-glow transition-all"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-8 shadow-glass border border-white/20 dark:border-navy-700/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-navy-900 dark:text-white"
              >
                Welcome back, {user.name}!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-navy-600 dark:text-navy-300 mt-2"
              >
                Your personalized AI health dashboard
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-right"
            >
              <div className="text-2xl font-bold text-primary-600">{bmi}</div>
              <div className="text-sm text-navy-500 dark:text-navy-400">BMI - {bmiCategory}</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calculator, label: 'Age', value: user.age || '—', unit: 'years' },
            { icon: Target, label: 'Weight', value: user.weight || '—', unit: 'kg' },
            { icon: Activity, label: 'Height', value: user.height || '—', unit: 'cm' },
            { icon: Heart, label: 'Preference', value: user.preference || '—', unit: '' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-6 shadow-glass border border-white/20 dark:border-navy-700/20 hover:shadow-glass-hover transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-primary rounded-2xl">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-navy-500 dark:text-navy-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-navy-900 dark:text-white">
                    {stat.value} {stat.unit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-6 shadow-glass border border-white/20 dark:border-navy-700/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-accent rounded-xl">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Weight Progress</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#84cc16"
                  strokeWidth={3}
                  dot={{ fill: '#84cc16', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-6 shadow-glass border border-white/20 dark:border-navy-700/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-accent rounded-xl">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Daily Macros</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {macroData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {macroData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-navy-600 dark:text-navy-300">
                    {item.name}: {item.value}g
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Plan Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-8 shadow-glass border border-white/20 dark:border-navy-700/20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-primary rounded-2xl">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
                Generate Your Meal Plan
              </h2>
              <p className="text-navy-600 dark:text-navy-300">
                AI-powered Pakistani meal recommendations
              </p>
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                  Age
                </label>
                <input
                  type="number"
                  value={form.age}
                  onChange={(e) => handleInput('age', Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={form.weight}
                  onChange={(e) => handleInput('weight', Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={form.height}
                  onChange={(e) => handleInput('height', Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                  Gender
                </label>
                <select
                  value={form.gender}
                  onChange={(e) => handleInput('gender', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                  Activity Level
                </label>
                <select
                  value={form.activityLevel}
                  onChange={(e) => handleInput('activityLevel', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  {activityOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                  Goal
                </label>
                <select
                  value={form.goal}
                  onChange={(e) => handleInput('goal', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  {goalOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">
                Dietary Preference
              </label>
              <select
                value={form.preference}
                onChange={(e) => handleInput('preference', e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              >
                {preferenceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-700 dark:text-red-300"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={saving}
              className="w-full py-4 bg-gradient-primary text-white font-bold rounded-2xl shadow-soft hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Generating Plan...' : 'Generate AI Meal Plan'}
            </motion.button>
          </form>
        </motion.div>

        {/* Saved Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-8 shadow-glass border border-white/20 dark:border-navy-700/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-accent rounded-2xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Your Meal Plans</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plans.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <Utensils className="w-16 h-16 text-navy-300 dark:text-navy-600 mx-auto mb-4" />
                <p className="text-navy-500 dark:text-navy-400">No plans generated yet. Create your first AI meal plan!</p>
              </div>
            ) : (
              plans.slice(0, 6).map((entry, index) => (
                <motion.div
                  key={`${entry.calories}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-xl bg-white/50 dark:bg-navy-800/50 rounded-2xl p-6 shadow-soft border border-white/20 dark:border-navy-700/20 hover:shadow-glass transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-navy-500 dark:text-navy-400">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                      {entry.goal}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-navy-600 dark:text-navy-300">{entry.preference}</p>
                    <p className="text-3xl font-bold text-primary-600">{entry.calories} kcal</p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Current Plan Display */}
        {plan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <DietPlanCard plan={plan} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;