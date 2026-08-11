import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BMICalculator from './components/BMICalculator';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useLenis();

  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Membership />
        <Gallery />
        <Testimonials />
        <BMICalculator />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
