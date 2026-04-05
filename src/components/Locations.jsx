import { useRef, useEffect, useState } from 'react';
import { MapPin, Phone, ExternalLink, Calendar } from 'lucide-react';

const locations = [
  {
    name: 'Demo Site — Bandra Flagship',
    address: 'Shop 5, Palm Court, 14th Road, Bandra West, Mumbai — 400050',
    hours: 'Mon–Sat: 9AM – 9PM | Sun: 10AM – 7PM',
    phone: '+91 98765 43210',
    map: 'https://maps.google.com',
    tag: 'Flagship',
  },
  {
    name: 'Demo Site — Juhu Boutique',
    address: '2nd Floor, Sea Breeze Plaza, Juhu Tara Road, Mumbai — 400049',
    hours: 'Mon–Sat: 10AM – 9PM | Sun: 11AM – 7PM',
    phone: '+91 98765 43211',
    map: 'https://maps.google.com',
    tag: 'Boutique',
  },
  {
    name: 'Demo Site — Powai Studio',
    address: 'Unit 8, Galleria Mall, Hiranandani Gardens, Powai, Mumbai — 400076',
    hours: 'Mon–Sat: 9AM – 8PM | Sun: 10AM – 6PM',
    phone: '+91 98765 43212',
    map: 'https://maps.google.com',
    tag: 'Studio',
  },
  {
    name: 'Demo Site — Pune Central',
    address: 'Level 1, The Orion Hub, FC Road, Shivajinagar, Pune — 411004',
    hours: 'Mon–Sat: 9AM – 9PM | Sun: 10AM – 7PM',
    phone: '+91 98765 43213',
    map: 'https://maps.google.com',
    tag: 'Coming Soon',
  },
];

export default function Locations() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="locations" className="section-py bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Find Us</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-salon-dark">
            Our{' '}
            <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
              Locations
            </em>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Multiple studios of luxury, each designed to be your personal beauty sanctuary
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`card-luxury bg-white group relative overflow-hidden transition-all duration-700 border border-transparent hover:border-gold-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

              <div className="p-6">
                {/* Badge */}
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1"
                  style={{
                    background: loc.tag === 'Coming Soon' ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,0.15)',
                    color: '#d4af37',
                  }}
                >
                  {loc.tag}
                </span>

                <h3 className="heading-serif text-lg font-bold text-salon-dark mb-3 leading-snug">
                  {loc.name}
                </h3>

                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-500 text-xs leading-relaxed">{loc.address}</p>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <a href={`tel:${loc.phone}`} className="text-gray-500 text-xs hover:text-gold-500 transition-colors">
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <Calendar className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-xs leading-relaxed">{loc.hours}</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  <a
                    href={loc.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 border border-gold-300 text-gold-600 text-xs font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Get Directions
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 py-2 bg-salon-dark text-gold-300 text-xs font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-white transition-all"
                  >
                    Book Here
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
