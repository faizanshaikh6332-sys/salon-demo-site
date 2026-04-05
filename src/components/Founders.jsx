import { useRef, useEffect, useState } from 'react';
import { Quote, Share2, Star } from 'lucide-react';

const founders = [
  {
    name: 'Aria Mehta',
    role: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in luxury beauty, Aria founded Élara with a single vision: to create a space where every guest feels truly magnificent. Trained in Paris and London, she brings international precision and warmth to every client experience.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80&auto=format&fit=crop',
    social: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & Head of Education',
    bio: 'A certified beauty educator and master aesthetician, Priya oversees our training academy and ensures every stylist meets Élara\'s gold standard. Her passion for elevating the beauty profession has transformed hundreds of careers.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80&auto=format&fit=crop',
    social: '#',
  },
];

export default function Founders() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="founders" className="section-py bg-salon-dark relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-gold-400">Our Visionaries</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-white">
            The Minds Behind{' '}
            <em className="text-gold-300" style={{ fontStyle: 'italic' }}>
              Élara
            </em>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Driven by passion, guided by expertise, and united by an unwavering commitment to
            beauty excellence
          </p>
        </div>

        {/* Brand Story */}
        <div
          className={`mb-16 p-8 border border-gold-800/40 relative transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: 'rgba(212,175,55,0.05)' }}
        >
          <Quote className="w-10 h-10 text-gold-600 mb-4" />
          <p className="text-white/80 text-lg italic leading-loose heading-serif font-light text-center max-w-3xl mx-auto">
            "We built Élara because we believed beauty services should never feel ordinary. Every
            client who walks through our doors deserves to feel seen, cared for, and utterly
            transformed — not just on the outside, but in how they carry themselves into the world."
          </p>
          <div className="gold-divider mt-6" />
          <p className="text-gold-400 text-sm tracking-widest uppercase text-center mt-4">
            — Aria & Priya, Co-Founders
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`group transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div
                className="relative overflow-hidden border border-gold-800/30 hover:border-gold-600/50 transition-all duration-400"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700" />

                <div className="p-8 flex flex-col sm:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 overflow-hidden">
                      <img
                        src={founder.img}
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="heading-serif text-2xl font-bold text-white mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-gold-400 text-xs tracking-widest uppercase mb-4">
                      {founder.role}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">{founder.bio}</p>
                    <a
                      href={founder.social}
                      className="inline-flex items-center gap-2 mt-4 text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="text-xs tracking-widest uppercase">Follow</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
