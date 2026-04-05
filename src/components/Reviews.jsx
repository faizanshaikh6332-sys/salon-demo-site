import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Neha Kapoor',
    role: 'Bride & Loyal Client',
    rating: 5,
    review:
      'Demo Site made my wedding day absolutely magical. The bridal team understood my vision perfectly — I felt like royalty. The attention to detail, the premium products, the serene environment — simply unmatched!',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&q=80&auto=format&fit=crop',
    date: 'March 2026',
  },
  {
    name: 'Sana Mirza',
    role: 'Regular Client',
    rating: 5,
    review:
      'The hair coloring service here is extraordinary. I\'ve been to salons across Mumbai and Delhi — Demo Site is in a league of its own. The environment is so calming and the results are always flawless.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&auto=format&fit=crop',
    date: 'February 2026',
  },
  {
    name: 'Rhea Dixit',
    role: 'First-time Visitor',
    rating: 5,
    review:
      'I walked in for a simple facial and left completely transformed. The aesthetician listened to every concern I had and designed a treatment just for me. The skin glow lasted for weeks!',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80&auto=format&fit=crop',
    date: 'January 2026',
  },
  {
    name: 'Priti Agarwal',
    role: 'Academy Graduate',
    rating: 5,
    review:
      'The beauty academy at Demo Site gave me the most professional training I could have asked for. The instructors are industry veterans, and the curriculum is international-grade. Truly life-changing.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80&auto=format&fit=crop',
    date: 'December 2025',
  },
  {
    name: 'Ananya Verma',
    role: 'Monthly Member',
    rating: 5,
    review:
      'Every visit feels like a retreat. The staff remembers my preferences, the ambiance is impeccable, and the results never disappoint. Demo Site has ruined me for any other salon — in the best way!',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&q=80&auto=format&fit=crop',
    date: 'November 2025',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'fill-gold-400 text-gold-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + reviews.length) % reviews.length);
    }
    return indices;
  };

  const visibleIndices = getVisible();

  return (
    <section id="reviews" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Client Love</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-salon-dark">
            What Our Guests{' '}
            <em className="text-gold-500" style={{ fontStyle: 'italic' }}>
              Say
            </em>
          </h2>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-4 mt-8 px-8 py-4 bg-salon-dark text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className="w-6 h-6 object-contain"
            />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="heading-serif text-2xl font-bold text-gold-300">4.9</span>
                <StarRating count={5} />
              </div>
              <p className="text-white/60 text-xs tracking-wide">Based on 800+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Slider */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleIndices.map((idx, position) => {
              const review = reviews[idx];
              const isCenter = position === 1;
              return (
                <div
                  key={`${idx}-${position}`}
                  className={`relative p-8 transition-all duration-500 ${
                    isCenter
                      ? 'bg-salon-dark text-white shadow-gold-lg scale-100 md:scale-105'
                      : 'bg-white border border-gray-100 shadow-card text-salon-dark opacity-70'
                  }`}
                >
                  {isCenter && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700" />
                  )}
                  <Quote
                    className={`w-8 h-8 mb-4 ${isCenter ? 'text-gold-400' : 'text-gold-300'}`}
                  />
                  <StarRating count={review.rating} />
                  <p
                    className={`mt-4 text-sm leading-relaxed font-light ${
                      isCenter ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p
                        className={`font-semibold text-sm heading-serif ${
                          isCenter ? 'text-white' : 'text-salon-dark'
                        }`}
                      >
                        {review.name}
                      </p>
                      <p
                        className={`text-xs ${
                          isCenter ? 'text-gold-400' : 'text-gold-500'
                        }`}
                      >
                        {review.role}
                      </p>
                    </div>
                    <span
                      className={`ml-auto text-xs ${
                        isCenter ? 'text-white/40' : 'text-gray-300'
                      }`}
                    >
                      {review.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 border border-gold-300 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`transition-all duration-300 h-1 ${
                    i === current ? 'w-8 bg-gold-500' : 'w-4 bg-gold-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 border border-gold-300 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
