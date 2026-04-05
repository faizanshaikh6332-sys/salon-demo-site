import { Scissors, Share2, Globe, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Story', href: '#founders' },
  { label: 'Locations', href: '#locations' },
];

const serviceLinks = [
  { label: 'Hair Styling', href: '#services' },
  { label: 'Skincare & Glow', href: '#services' },
  { label: 'Luxury Makeup', href: '#services' },
  { label: 'Nail Art & Care', href: '#services' },
  { label: 'Bridal Beauty', href: '#services' },
  { label: 'Spa & Wellness', href: '#services' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* CTA Strip */}
      <div
        className="py-10 text-center"
        style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f7e282 50%, #d4af37 100%)' }}
      >
        <h3 className="heading-serif text-2xl font-bold text-salon-dark mb-2">
          Ready for Your Luxury Transformation?
        </h3>
        <p className="text-salon-dark/70 text-sm mb-6">
          Book an appointment today and step into a world of elegance
        </p>
        <a href="#contact" className="btn-gold" style={{ background: '#1a1209', color: '#d4af37' }}>
          Book Appointment
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="heading-serif font-bold text-xl text-white tracking-wide">
                  Demo Site
                </span>
                <span className="block text-xs text-gold-400 tracking-widest uppercase">
                  Luxury Salon
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Mumbai's premier luxury salon &amp; beauty academy — where elegance meets expertise.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-600 transition-all"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-600 transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-sm leading-relaxed">
                  14th Road, Bandra West,<br />Mumbai — 400050
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/50 text-sm hover:text-gold-300 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:hello@demositesalon.com" className="text-white/50 text-sm hover:text-gold-300 transition-colors">
                  hello@demositesalon.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center">
            © {year} Demo Site Salon. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
