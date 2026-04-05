import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, Heart, Sparkles } from 'lucide-react';

const features = [
  { icon: Award, text: 'Award-winning stylists with international training' },
  { icon: Heart, text: 'Personalized beauty care tailored to you' },
  { icon: Sparkles, text: 'Premium imported beauty products only' },
  { icon: CheckCircle, text: 'Hygienic, sanitized, luxurious environment' },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&auto=format&fit=crop"
                  alt="Luxury salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold border accent */}
              <div
                className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-2 border-gold-400 -z-10"
                style={{ borderColor: '#d4af37' }}
              />
            </div>

            {/* Float card */}
            <div
              className="absolute -bottom-4 -left-4 bg-white p-5 shadow-xl border-l-4"
              style={{ borderColor: '#d4af37' }}
            >
              <div className="heading-serif text-4xl font-bold text-gold-500">10+</div>
              <div className="text-xs tracking-widest uppercase text-gray-500 mt-1">
                Years of Elegance
              </div>
              <div className="text-xs text-gray-400 mt-1">Serving 15,000+ happy clients</div>
            </div>

            {/* Small accent image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 overflow-hidden shadow-xl hidden md:block border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80&auto=format&fit=crop"
                alt="Beauty treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="section-label">Our Story</span>
            <div className="gold-divider-left mt-3 mb-6" />

            <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-salon-dark leading-tight mb-6">
              A Sanctuary of{' '}
              <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
                Luxury
              </em>{' '}
              &amp; Beauty
            </h2>

            <p className="text-gray-600 leading-loose mb-5 text-base">
              Born from a passion for transformative beauty, Élara Luxury Salon was founded on the
              belief that every person deserves to feel extraordinary. Our salon is more than a
              beauty destination — it is a carefully curated sanctuary where artistry, wellness,
              and elegance converge.
            </p>

            <p className="text-gray-600 leading-loose mb-8 text-base">
              With a team of internationally trained stylists, skilled aestheticians, and dedicated
              beauty professionals, we craft bespoke experiences that celebrate your unique
              identity. From precision haircuts to rejuvenating skin treatments and flawless
              bridal transformations — every service is delivered with grace and expertise.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gold-50 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn-gold">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
