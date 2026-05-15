import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { isLoggedIn, getUser, clearAuth } from '../services/auth';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = isLoggedIn() ? getUser() : null;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    clearAuth();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl border-b border-leaf-200/20 dark:border-navy-700/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full group-hover:shadow-glow transition-all">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent hidden sm:inline">Smart Diet Planner</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-leaf-600'
                  : 'text-slate-600 dark:text-slate-300 hover:text-leaf-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 dark:text-slate-300">Hi, {user.name}</span>
              <button
                onClick={() => navigate('/dashboard')}
                className="text-sm font-semibold text-white bg-gradient-leaf px-4 py-2 rounded-full hover:shadow-glow transition-all"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-leaf-600 hover:text-leaf-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-leaf-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-semibold text-white bg-gradient-leaf px-5 py-2 rounded-full hover:shadow-glow transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-leaf-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-leaf-200/20 dark:border-navy-700/20 bg-leaf-50/50 dark:bg-navy-800/50 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium py-2 transition-colors ${
                  isActive(link.href)
                    ? 'text-leaf-600'
                    : 'text-slate-600 dark:text-slate-300 hover:text-leaf-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-leaf-200/20 dark:border-navy-700/20 space-y-3">
              <DarkModeToggle />
              {user ? (
                <>
                  <button
                    onClick={() => {
                      navigate('/dashboard');
                      setIsOpen(false);
                    }}
                    className="w-full text-sm font-semibold text-white bg-gradient-leaf px-4 py-2 rounded-full"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-sm font-semibold text-leaf-600 dark:text-primary-300 hover:bg-leaf-50 dark:hover:bg-navy-700 px-4 py-2 rounded-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-leaf-600 py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="block text-center text-sm font-semibold text-white bg-gradient-leaf px-4 py-2 rounded-full"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
