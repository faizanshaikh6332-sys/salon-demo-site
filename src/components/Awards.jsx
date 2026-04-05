import { useRef, useEffect, useState } from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  {
    year: '2025',
    title: 'Best Luxury Salon',
    org: 'India Beauty Excellence Awards',
    icon: Trophy,
  },
  {
    year: '2024',
    title: 'Top Bridal Salon',
    org: 'WeddingWire Choice Awards',
    icon: Star,
  },
  {
    year: '2024',
    title: 'Outstanding Customer Service',
    org: 'National Beauty Federation',
    icon: Award,
  },
  {
    year: '2023',
    title: 'Best Beauty Academy',
    org: 'Salon International India',
    icon: Medal,
  },
  {
    year: '2023',
    title: 'Premium Brand Award',
    org: 'Elite Beauty Brands Forum',
    icon: Trophy,
  },
  {
    year: '2022',
    title: 'Innovation in Beauty',
    org: 'Cosmetology Council of India',
    icon: Star,
  },
];

const brands = [
  { name: 'Kérastase', logo: '🌿' },
  { name: 'Schwarzkopf', logo: '✦' },
  { name: 'L\'Oréal Pro', logo: '◆' },
  { name: 'NARS', logo: '★' },
  { name: 'MAC Cosmetics', logo: '◈' },
  { name: 'OPI', logo: '◉' },
  { name: 'La Mer', logo: '🌊' },
  { name: 'Clarins', logo: '✿' },
];

export default function Awards() {
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
    <section id="awards" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Awards Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Recognition</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-salon-dark">
            Awards &{' '}
            <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
              Achievements
            </em>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            A decade of excellence recognized by India's most prestigious beauty institutions
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <div
                key={i}
                className={`award-card p-6 bg-cream group hover:bg-white transition-all duration-700 cursor-default ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-100 transition-colors">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">
                      {award.year}
                    </span>
                    <h3 className="heading-serif text-lg font-semibold text-salon-dark mt-1">
                      {award.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{award.org}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Brands */}
        <div
          className={`transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <span className="section-label">Our Partners</span>
            <div className="gold-divider mt-3 mb-6" />
            <h3 className="heading-serif text-3xl font-bold text-salon-dark">
              Trusted{' '}
              <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
                Beauty Brands
              </em>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="px-8 py-4 border border-gold-100 hover:border-gold-400 bg-white hover:shadow-gold transition-all duration-300 cursor-default group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{brand.logo}</span>
                  <span className="heading-serif text-sm font-semibold text-gray-500 group-hover:text-gold-600 transition-colors tracking-wide">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
