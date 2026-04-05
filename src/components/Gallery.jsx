import { useRef, useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop',
    span: 'col-span-1 row-span-2',
    alt: 'Hair styling service',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    alt: 'Salon interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    alt: 'Skincare treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    alt: 'Nail art',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop',
    span: 'col-span-1 row-span-2',
    alt: 'Spa treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&q=80&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
    alt: 'Bridal makeup',
  },
];

export default function Gallery() {
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
    <section id="gallery" className="section-py bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Media & Moments</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-salon-dark">
            Captured{' '}
            <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
              Brilliance
            </em>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            A glimpse into the world of Demo Site — where every moment is crafted with artistry
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} img-hover-zoom cursor-pointer relative group transition-all duration-700 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
