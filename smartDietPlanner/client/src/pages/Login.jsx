import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Leaf } from 'lucide-react';
import api from '../services/api';
import { saveAuth, isLoggedIn } from '../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', { email, password });
      saveAuth(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-wellness flex items-center justify-center px-6 py-12">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-leaf-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-health-200/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
          <div className="p-2 bg-gradient-leaf rounded-full group-hover:shadow-glow transition-all">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">Smart Diet</span>
        </Link>

        {/* Card */}
        <div className="card p-8 sm:p-10 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back</h1>
            <p className="text-slate-600 dark:text-slate-300">Sign in to access your personalized nutrition dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900 dark:text-white">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-leaf-600 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50 dark:bg-navy-900/70 dark:border-navy-700 focus:bg-white focus:dark:bg-navy-900 focus:border-leaf-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-leaf-200 dark:focus:ring-primary-500/20 transition text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-900 dark:text-white">Password</label>
                <a href="#" className="text-sm text-leaf-600 dark:text-primary-300 hover:text-leaf-700 font-medium">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-leaf-600 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50 dark:bg-navy-900/70 dark:border-navy-700 focus:bg-white focus:dark:bg-navy-900 focus:border-leaf-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-leaf-200 dark:focus:ring-primary-500/20 transition text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-leaf inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-leaf-600 font-semibold hover:text-leaf-700">
              Create one
            </Link>
          </p>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-slate-500 mt-8">
          By signing in, you agree to our{' '}
          <a href="#" className="text-leaf-600 hover:underline">
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="#" className="text-leaf-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
