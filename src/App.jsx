import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Founders from './components/Founders';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Founders />
        <Reviews />
        <Gallery />
        <Awards />
        <Locations />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}
