import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';

const heroSlides = [
  {
    bg: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80&auto=format&fit=crop',
    headline: 'Where Beauty Meets',
    headlineItalic: 'Elegance',
    tagline: 'Experience the art of transformation in a sanctuary designed exclusively for you',
  },
  {
    bg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80&auto=format&fit=crop',
    headline: 'Luxury Hair',
    headlineItalic: 'Artistry',
    tagline: 'Crafted by master stylists with decades of expertise in premium beauty care',
  },
  {
    bg: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1920&q=80&auto=format&fit=crop',
    headline: 'Radiance &',
    headlineItalic: 'Refinement',
    tagline: 'Indulge in world-class skincare, makeup, and spa treatments tailored just for you',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setAnimating(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.bg}
            alt={`Salon slide ${i + 1}`}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Gold decorative lines */}
      <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="w-12 h-px bg-gold-400" />
            <span className="section-label text-gold-300">
              Premier Luxury Salon & Academy
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`heading-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.headline}{' '}
            <br />
            <em className="text-gold-300 not-italic" style={{ fontStyle: 'italic' }}>
              {slide.headlineItalic}
            </em>
          </h1>

          {/* Tagline */}
          <p
            className={`text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
              animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.tagline}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
          >
            <a href="#contact" className="btn-gold">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex gap-10 mt-14 transition-all duration-700 delay-400 ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {[
              { num: '10+', label: 'Years of Excellence' },
              { num: '15K+', label: 'Happy Clients' },
              { num: '4.9★', label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="heading-serif text-3xl font-bold text-gold-300">
                  {stat.num}
                </div>
                <div className="text-white/60 text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === current
                ? 'w-10 h-1 bg-gold-400'
                : 'w-4 h-1 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-10 right-10 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold-300 animate-bounce" />
      </a>
    </section>
  );
}
