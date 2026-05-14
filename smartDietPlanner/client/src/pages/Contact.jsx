import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setError(null);

    if (!email || !message) {
      setError('Please enter your email and message.');
      return;
    }

    try {
      const response = await api.post('/contact', { email, message });
      setStatus(response.data.message || 'Message sent successfully!');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-slate-900">Contact us</h2>
        <p className="text-slate-600">Have questions or want to learn more? Reach out and we'll help you make nutrition planning easy and elegant.</p>
        <div className="space-y-4 rounded-3xl bg-white p-8 border border-leaf-200 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Support</p>
            <p className="mt-2 text-slate-900">ridairfan2827@gmail.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
            <p className="mt-2 text-slate-900">+92 313 7092336</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Office</p>
            <p className="mt-2 text-slate-900">Lahore, Pakistan</p>
          </div>
        </div>
      </div>

      <div className="card p-8 bg-white border border-leaf-200 shadow-soft">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {status && <div className="rounded-2xl bg-primary-50 border border-primary-200 p-4 text-primary-700">{status}</div>}
          {error && <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-rose-700">{error}</div>}

          <label className="block text-slate-700">
            <span className="text-sm text-slate-600">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@example.com"
              className="mt-2 w-full rounded-3xl border border-leaf-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200"
            />
          </label>

          <label className="block text-slate-700">
            <span className="text-sm text-slate-600">Message</span>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you need"
              className="mt-2 w-full rounded-3xl border border-leaf-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-leaf px-5 py-3 text-sm font-semibold text-white transition hover:shadow-glow"
          >
            Send message
          </button>
        </form>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-8 border border-primary-200 shadow-soft">
          <h3 className="text-2xl font-bold text-navy-900 mb-3">Explore Smart Diet Planner</h3>
          <p className="text-navy-600 mb-4">
            Learn how our meal planning engine works, discover nutrition tips, and see how Smart Diet Planner adapts to your lifestyle.
          </p>
          <Link
            to="/guide"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-all"
          >
            Open the Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
