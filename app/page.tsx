"use client"

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Code, TrendingUp, PenTool, ArrowRight, CheckCircle, Star, Rocket, Heart, Trophy, Sparkles, Users, Award } from 'lucide-react';

export default function HomePage() {
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [particles, setParticles] = useState([]);
  const [floatingIcons, setFloatingIcons] = useState([]);
  const [stats, setStats] = useState({ projects: 0, clients: 0, satisfaction: 0 });

  const phrases = [
    "Smart Websites",
    "Powerful Marketing",
    "Digital Excellence",
    "Growth Solutions",
    "Your Success"
  ];

  // Advanced typewriter
  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === phrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      } else {
        setTypedText(
          isDeleting
            ? phrase.substring(0, typedText.length - 1)
            : phrase.substring(0, typedText.length + 1)
        );
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentPhrase]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Mouse trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          color: Math.random() > 0.5 ? '#f97316' : '#3b82f6'
        };
        setParticles(prev => [...prev.slice(-30), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating icons
  useEffect(() => {
    const icons = [
      <Code className="w-6 h-6" />,
      <TrendingUp className="w-6 h-6" />,
      <Rocket className="w-6 h-6" />,
      <Heart className="w-6 h-6" />,
      <Star className="w-6 h-6" />,
      <Trophy className="w-6 h-6" />
    ];

    const floating = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      icon: icons[i % icons.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 15,
      size: 30 + Math.random() * 30
    }));
    setFloatingIcons(floating);
  }, []);

  // Animated counter
  useEffect(() => {
    const duration = 2000;
    const frames = 60;
    const increment = duration / frames;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / frames;
      
      setStats({
        projects: Math.floor(500 * progress),
        clients: Math.floor(200 * progress),
        satisfaction: Math.floor(99 * progress)
      });

      if (frame >= frames) clearInterval(counter);
    }, increment);

    return () => clearInterval(counter);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Brand Design",
      description: "Professional branding and graphic design services",
      gradient: "from-purple-500 to-pink-500",
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Traders",
      text: "NextGen transformed our online presence. Our sales increased by 250% in just 3 months!",
      rating: 5,
      avatar: "RK",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Priya Sharma",
      company: "Fashion Hub Nepal",
      text: "Professional team, amazing results. They understood exactly what we needed.",
      rating: 5,
      avatar: "PS",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Amit Thapa",
      company: "Tech Solutions",
      text: "Best digital marketing agency in Nepal. Highly recommended!",
      rating: 5,
      avatar: "AT",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 min-h-screen overflow-hidden">
      <Navigation />

      {/* Mouse trail particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed w-3 h-3 rounded-full pointer-events-none z-50"
          style={{
            left: particle.x,
            top: particle.y,
            background: particle.color,
            animation: 'particleFade 1s ease-out forwards'
          }}
        />
      ))}

      {/* Floating icons background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        {floatingIcons.map((item) => (
          <div
            key={item.id}
            className="absolute text-blue-500"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animation: `floatComplex ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
              fontSize: `${item.size}px`
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-30" style={{ animation: 'morphGradient 8s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-30" style={{ animation: 'morphGradient 8s ease-in-out infinite 2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-300 to-blue-400 rounded-full blur-3xl opacity-20" style={{ animation: 'spiralRotate 20s linear infinite' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mt-9">
            <div style={{ animation: 'scaleIn 0.5s ease-out forwards' }}>
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-full shadow-2xl" style={{ animation: 'glowPulse 2s ease-in-out infinite' }}>
                <Sparkles className="w-5 h-5 text-white" style={{ animation: 'spin 3s linear infinite' }} />
                <span className="text-white font-bold">Your Digital Success Partner</span>
                <Rocket className="w-5 h-5 text-white" style={{ animation: 'bounce 1s infinite' }} />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl sm:text-8xl lg:text-8xl font-black leading-tight" style={{ animation: 'slideUp 0.8s ease-out forwards' }}>
                <span className="block text-blue-900" style={{ animation: 'textGlow 3s ease-in-out infinite' }}>Next Level</span>
                <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent relative">
                  {typedText}
                  <span className={`inline-block w-2 h-24 bg-orange-500 ml-3 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                </span>
              </h1>
            </div>

            <p className="text-2xl sm:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ animation: 'slideUp 0.8s ease-out 0.2s backwards' }}>
              Transform your business with <span className="text-orange-500 font-bold">cutting-edge websites</span> and <span className="text-blue-600 font-bold">powerful marketing</span>. 
              We don't just build—we <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 font-bold">create digital empires</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8" style={{ animation: 'slideUp 0.8s ease-out 0.4s backwards' }}>
              <Link href="/contact">
                <button className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-full font-black text-xl shadow-2xl overflow-hidden transform hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <Rocket className="w-6 h-6" />
                    <span>Launch Your Project</span>
                    <Sparkles className="w-6 h-6" />
                  </span>
                </button>
              </Link>
              
              <Link href="/packages">
                <button className="group px-12 py-6 border-4 border-blue-900 text-blue-900 rounded-full font-black text-xl hover:bg-blue-900 hover:text-white transition-all duration-500 transform hover:scale-110 shadow-xl">
                  <span className="flex items-center justify-center space-x-3">
                    <Trophy className="w-6 h-6" />
                    <span>View Packages</span>
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-12" style={{ animation: 'slideUp 0.8s ease-out 0.6s backwards' }}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl px-8 py-6 shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{stats.projects}+</div>
                  <div className="text-sm font-semibold text-gray-600 flex items-center space-x-2 mt-7">
                    <Trophy className="w-4 h-4 text-orange-500" />
                    <span>Projects Completed</span>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl px-8 py-6 shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">{stats.clients}+</div>
                  <div className="text-sm font-semibold text-gray-600 flex items-center space-x-2 mt-7">
                    <Heart className="w-4 h-4 text-blue-500" />
                    <span>Happy Clients</span>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl px-8 py-6 shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">{stats.satisfaction}%</div>
                  <div className="text-sm font-semibold text-gray-600 flex items-center space-x-2 mt-7">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span>Satisfaction Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2" style={{ animation: 'bounce 2s infinite' }}>
          <div className="flex flex-col items-center space-y-3">
            <div className="text-gray-500 font-semibold">Explore More</div>
            <div className="w-8 h-12 border-3 border-orange-500 rounded-full flex items-start justify-center p-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ animation: 'bounce 1s infinite' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl sm:text-7xl font-black mb-6 text-blue-900">
              Our Superpowers
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We don't just offer services—we deliver <span className="text-orange-500 font-bold">digital transformations</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-transparent hover:border-orange-500/50">
                  <div className={`inline-block p-6 bg-gradient-to-br ${service.gradient} rounded-2xl mb-8 text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <button className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-black text-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110">
                <span>Explore All Services</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Star className="w-8 h-8 text-orange-400 fill-orange-400" style={{ animation: 'spin 4s linear infinite' }} />
              <Star className="w-12 h-12 text-orange-400 fill-orange-400" style={{ animation: 'bounce 1s infinite' }} />
              <Star className="w-8 h-8 text-orange-400 fill-orange-400" style={{ animation: 'spin 4s linear infinite' }} />
            </div>
            <h2 className="text-6xl sm:text-7xl font-black text-blue-900 mb-6">
              Success Stories
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their <span className="text-orange-500 font-bold">digital journey</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${testimonial.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-transparent hover:border-orange-500/50">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" style={{ animation: `bounce 1s infinite ${i * 0.1}s` }} />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-black text-blue-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 font-semibold">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite 3s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-2xl text-white/90 mb-10">
            Let's create something <span className="font-black">EXTRAORDINARY</span> together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="group px-12 py-6 bg-white text-orange-600 rounded-full font-black text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 flex items-center justify-center space-x-3">
                <Rocket className="w-6 h-6" />
                <span>Start Your Project</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-12 py-6 border-4 border-white text-white rounded-full font-black text-xl hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-110">
                Schedule a Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Styles */}
      <style jsx>{`
        @keyframes particleFade {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0); }
        }

        @keyframes floatComplex {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.3; }
          25% { transform: translate(50px, -50px) rotate(90deg) scale(1.2); opacity: 0.6; }
          50% { transform: translate(0, -100px) rotate(180deg) scale(0.8); opacity: 0.4; }
          75% { transform: translate(-50px, -50px) rotate(270deg) scale(1.1); opacity: 0.5; }
        }

        @keyframes morphGradient {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(180deg); }
        }

        @keyframes spiralRotate {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8), 0 0 80px rgba(249, 115, 22, 0.5); }
        }

        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { text-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.4); }
        }

        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}