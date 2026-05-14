import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <section className="bg-gradient-wellness min-h-screen py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary-700 uppercase tracking-[0.3em]">Smart Diet Planner Guide</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mt-4">How Smart Diet Planner helps you succeed</h1>
          <p className="mt-4 text-lg text-navy-600 leading-relaxed">
            Learn how our AI-powered meal planning system works, how to choose the right goals, and how to make sustainable nutrition changes with confidence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 border border-leaf-200 shadow-soft">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Personalization</h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              Smart Diet Planner tailors every meal plan to your body, preferences, and daily routine using intelligent nutrition algorithms.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline">
              Start your plan
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 border border-leaf-200 shadow-soft">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Pakistani Nutrition</h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              We use realistic Pakistani recipes and local ingredients so your diet plan stays familiar, practical, and easy to follow.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline">
              Learn more
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 border border-leaf-200 shadow-soft">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Progress Tracking</h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              Track calories, macros, and wellness habits from your dashboard to stay accountable and see results faster.
            </p>
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline">
              View dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
