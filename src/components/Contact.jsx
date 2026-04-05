import { useRef, useEffect, useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, Send, MapPin, Share2, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@demositesalon.com',
    href: 'mailto:hello@demositesalon.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat: 9AM–9PM | Sun: 10AM–7PM',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Main Studio',
    value: '14th Road, Bandra West, Mumbai',
    href: 'https://maps.google.com',
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="section-py bg-salon-dark relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-gold-400">Get In Touch</span>
          <div className="gold-divider mt-3 mb-6" />
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-white">
            Book Your{' '}
            <em className="text-gold-300" style={{ fontStyle: 'italic' }}>
              Experience
            </em>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            We'd love to craft a bespoke beauty journey just for you. Reach out and let's begin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — Contact Info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div
                    className="p-5 border border-gold-900/40 hover:border-gold-600/50 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <Icon className="w-5 h-5 text-gold-400 mb-3" />
                    <p className="text-gold-500 text-xs tracking-widest uppercase mb-1">
                      {info.label}
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">{info.value}</p>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 mb-8 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#25D366' }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-white/50 text-xs mt-0.5">Instant response within minutes</p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="text-gold-400 text-xs tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold-800 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold-800 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500 transition-all"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 border border-gold-900/40"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div className="h-1 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700 -mt-8 -mx-8 mb-8" />

              <h3 className="heading-serif text-2xl font-bold text-white mb-6">
                Book an Appointment
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gold-400 text-xs tracking-widest uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-luxury"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(212,175,55,0.2)' }}
                  />
                </div>
                <div>
                  <label className="block text-gold-400 text-xs tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-luxury"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(212,175,55,0.2)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gold-400 text-xs tracking-widest uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input-luxury"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(212,175,55,0.2)' }}
                  />
                </div>
                <div>
                  <label className="block text-gold-400 text-xs tracking-widest uppercase mb-2">
                    Service
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="input-luxury cursor-pointer"
                    style={{ background: '#1a1209', color: form.service ? '#fff' : '#a08060', border: '1px solid rgba(212,175,55,0.2)' }}
                  >
                    <option value="">Select service</option>
                    <option>Hair Styling</option>
                    <option>Skincare</option>
                    <option>Makeup</option>
                    <option>Nail Art</option>
                    <option>Bridal Package</option>
                    <option>Spa & Wellness</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gold-400 text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-luxury resize-none"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(212,175,55,0.2)' }}
                />
              </div>

              {submitted ? (
                <div className="py-4 text-center bg-gold-50/10 border border-gold-600/30">
                  <p className="text-gold-300 text-sm font-medium">
                    ✓ Thank you! We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <button type="submit" id="contact-submit" className="btn-gold w-full justify-center">
                  Send Message <Send className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
