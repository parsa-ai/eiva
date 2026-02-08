import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    document.title = 'EIVA - Digital Experience Studio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'EIVA designs and develops websites and digital experiences with a focus on efficiency, simplicity, and real-world solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'EIVA designs and develops websites and digital experiences with a focus on efficiency, simplicity, and real-world solutions.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Process />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
