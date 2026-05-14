import { Mail, MapPin, Phone, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-leaf-50 dark:bg-navy-800/50 border-t border-leaf-200/30 dark:border-navy-700/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12 pb-12 border-b border-leaf-200/30 dark:border-navy-700/30">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="p-2 bg-gradient-leaf rounded-full group-hover:shadow-glow transition-all">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Smart Diet Planner</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Transform your health journey with intelligent meal planning and personalized nutrition guidance.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Contact Developer:</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Rida Irfan</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">ridairfan2827@gmail.com</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">+92 313 7092336</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Dashboard', 'Mobile App'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-leaf-600 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-leaf-600 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Help Center', 'Community', 'Status'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-leaf-600 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-wellness rounded-2xl p-8 mb-12 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Stay Updated</h3>
            <p className="text-slate-600 dark:text-slate-300">Get nutrition tips and wellness insights delivered to your inbox.</p>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-navy-800 border border-leaf-200 dark:border-navy-700 focus:outline-none focus:border-leaf-500 dark:focus:border-primary-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
            />
            <button
              type="submit"
              className="btn-leaf px-6"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Contact Info & Bottom */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-leaf-200/30 dark:border-navy-700/30">
          {[
            { icon: MapPin, label: 'Address', value: 'Lahore, Pakistan' },
            { icon: Phone, label: 'Phone', value: '+92 313 7092336' },
            { icon: Mail, label: 'Email', value: 'ridairfan2827@gmail.com' },
          ].map((contact, i) => {
            const Icon = contact.icon;
            return (
              <div key={i} className="flex gap-3">
                <div className="p-3 rounded-full bg-leaf-200/20">
                  <Icon className="w-5 h-5 text-leaf-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{contact.label}</p>
                  <p className="text-sm text-slate-600">{contact.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 Smart Diet Planner. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-leaf-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-leaf-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-leaf-600 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
