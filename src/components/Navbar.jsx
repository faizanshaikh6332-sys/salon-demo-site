import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="heading-serif font-bold text-xl tracking-wide"
                  style={{ color: scrolled ? '#1a1209' : '#ffffff' }}
                >
                  Élara
                </span>
                <span
                  className="block text-xs font-light tracking-[3px] uppercase"
                  style={{ color: scrolled ? '#d4af37' : '#f7e282' }}
                >
                  Luxury Salon
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 relative group ${
                    scrolled ? 'text-salon-charcoal hover:text-gold-500' : 'text-white/90 hover:text-gold-300'
                  } ${activeLink === link.href ? 'text-gold-500' : ''}`}
                  style={{ letterSpacing: '1.5px', fontSize: '11px' }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 w-0 group-hover:w-full"
                    style={{
                      width: activeLink === link.href ? '100%' : '0',
                    }}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-gold text-xs">
                Book Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" style={{ color: scrolled ? '#1a1209' : '#ffffff' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: scrolled ? '#1a1209' : '#ffffff' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <div className="px-6 py-4 border-t border-gold-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block py-3 text-salon-charcoal hover:text-gold-500 text-sm font-medium tracking-widest uppercase transition-colors border-b border-gray-50"
                style={{ letterSpacing: '1.5px', fontSize: '11px' }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-5 pb-2">
              <a href="#contact" className="btn-gold w-full justify-center text-xs">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
