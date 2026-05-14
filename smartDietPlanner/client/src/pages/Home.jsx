import Hero from '../components/Hero';
import Features from '../components/Features';
import DashboardPreview from '../components/DashboardPreview';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Stats from '../components/Stats';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="bg-navy-50">
      <Hero />
      <Features />
      <Stats />
      <DashboardPreview />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </div>
  );
};

export default Home;
