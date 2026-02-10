import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
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
