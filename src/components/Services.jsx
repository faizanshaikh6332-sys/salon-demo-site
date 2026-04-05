import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'hair',
    title: 'Hair Styling',
    category: 'Hair',
    description: 'Cuts, coloring, keratin, blowouts & more — each strand perfected by master stylists.',
    img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'skin',
    title: 'Skincare & Glow',
    category: 'Skin',
    description: 'Deep cleansing facials, brightening treatments, and bespoke skin rituals for radiant skin.',
    img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'makeup',
    title: 'Luxury Makeup',
    category: 'Makeup',
    description: 'From everyday glam to editorial looks — flawless artistry for every occasion.',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'nails',
    title: 'Nail Art & Care',
    category: 'Nails',
    description: 'Gel, acrylic, nail art designs — your nails as a canvas for creative expression.',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'bridal',
    title: 'Bridal Beauty',
    category: 'Bridal',
    description: 'Complete bridal packages crafted to make your most special day absolutely unforgettable.',
    img: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'spa',
    title: 'Spa & Wellness',
    category: 'Spa',
    description: 'Unwind with rejuvenating massages, body wraps, and holistic wellness therapies.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop',
  },
];

export default function Services() {
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
    <section id="services" className="section-py bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">What We Offer</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-salon-dark">
            Our Signature{' '}
            <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
              Services
            </em>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Every service is a bespoke experience, crafted with precision and delivered with the
            warmth of true luxury
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`card-luxury bg-white group cursor-pointer transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="service-img-wrap aspect-[4/3]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 z-10">
                  <span className="text-gold-300 text-xs tracking-widest uppercase">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-b-2 border-transparent group-hover:border-gold-400 transition-all duration-400">
                <h3 className="heading-serif text-xl font-semibold text-salon-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="link-gold flex items-center gap-2 text-gold-500 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline-gold">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
