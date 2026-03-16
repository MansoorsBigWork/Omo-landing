import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Jimmy from './components/Jimmy';
import OMOships from './components/OMOships';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-canvas min-h-screen text-obsidian font-body overflow-x-hidden pt-0 selection:bg-omo-orange/20">
      <Navbar />
      <Hero />
      <Problem />
      <Jimmy />
      <OMOships />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
