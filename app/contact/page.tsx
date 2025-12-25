"use client"

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Sparkles, Zap, Heart, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [particles, setParticles] = useState([]);

  const typewriterWords = [
    "Your Success Story",
    "Amazing Projects",
    "Digital Dreams",
    "Growth Together",
    "Innovation Here"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentWord.substring(0, displayedText.length - 1)
            : currentWord.substring(0, displayedText.length + 1)
        );
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  // Floating elements
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 20 + Math.random() * 40
    }));
    setFloatingElements(elements);
  }, []);

  // Mouse trail effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.8) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY
        };
        setParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Clean up particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.slice(-10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create celebration effect
    const celebration = Array.from({ length: 30 }, () => ({
      id: Date.now() + Math.random(),
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }));
    setParticles(celebration);
    
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+977 98XXXXXXXX", "+977 98XXXXXXXX"],
      description: "Mon-Fri: 9:00 AM - 6:00 PM",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@nextgen.com.np", "support@nextgen.com.np"],
      description: "We reply within 24 hours",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Putalisadak, Kathmandu", "Nepal"],
      description: "By appointment only",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "Sunday: Closed",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically 2-4 weeks for a standard website, depending on complexity and requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! All our packages include support. We also offer extended support plans."
    },
    {
      question: "What is your payment structure?",
      answer: "We require 50% upfront and 50% upon project completion. Custom payment plans available."
    },
    {
      question: "Can you help with existing websites?",
      answer: "Absolutely! We offer website maintenance, updates, and redesign services."
    },
    {
      question: "Do you work with clients outside Nepal?",
      answer: "Yes, we work with clients globally through remote collaboration."
    },
    {
      question: "What makes NextGen different?",
      answer: "Our personalized approach, transparent pricing, and commitment to your success sets us apart."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 min-h-screen overflow-hidden relative">
      <Navigation />

      {/* Mouse trail particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full pointer-events-none animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            animationDuration: '1s'
          }}
        />
      ))}

      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: `linear-gradient(135deg, ${
                element.id % 2 === 0 ? '#3b82f6' : '#f97316'
              }, transparent)`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8); }
        }
        
        @keyframes slide-in {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto relative">
            {/* Sparkle decorations */}
            <Sparkles className="absolute -top-10 left-10 w-8 h-8 text-orange-500 animate-pulse" />
            <Zap className="absolute -top-5 right-20 w-6 h-6 text-blue-600 animate-bounce" />
            <Heart className="absolute top-0 right-5 w-7 h-7 text-orange-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <div className="mb-8 animate-bounce-in">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="text-blue-900 block">Let's Start</span>
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent inline-flex items-center">
                  {displayedText}
                  <span className="inline-block w-1 h-16 bg-orange-500 ml-2 animate-pulse" />
                </span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 animate-slide-in">
              Transform your vision into reality. We're excited to hear about your project and create something extraordinary together!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-gray-700">24h Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-700">100+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                  {info.icon}
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-semibold mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-500 text-sm mt-3">{info.description}</p>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl opacity-20 blur-2xl animate-pulse" />
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="flex items-center space-x-3 mb-8">
                  <Send className="w-8 h-8 text-orange-500 animate-bounce" />
                  <h2 className="text-4xl font-black text-blue-900">Drop Us a Line</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-gray-700 font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      Service Needed *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="seo">SEO Services</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="branding">Brand Design</option>
                      <option value="package">Complete Package</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your amazing project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group relative w-full py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <Send className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                      <span>Send Message</span>
                      <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <p className="text-sm text-gray-600 text-center flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span>Lightning-fast response within 24 hours!</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h3 className="text-3xl font-black text-blue-900 mb-6 flex items-center">
                  <MapPin className="w-8 h-8 text-orange-500 mr-3 animate-bounce" />
                  Visit Our Office
                </h3>
                <div className="relative aspect-video bg-gradient-to-br from-blue-100 via-orange-50 to-amber-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center relative z-10">
                    <MapPin className="w-20 h-20 text-orange-500 mx-auto mb-4 animate-bounce" />
                    <p className="text-xl text-gray-700 font-bold">Putalisadak, Kathmandu</p>
                    <p className="text-lg text-gray-600">Nepal</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Located in the heart of Kathmandu, our office is easily accessible. Schedule an appointment for a warm welcome and great coffee! ☕
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 text-white shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Zap className="w-8 h-8 text-orange-400 animate-pulse" />
                    <h3 className="text-3xl font-black">Quick Response Guarantee</h3>
                  </div>
                  <p className="text-blue-200 mb-6 text-lg">
                    We value your time. Get a response within 24 hours, or your first consultation is FREE! 🎉
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-orange-400 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                      <span className="font-bold text-lg">Monday - Friday: 9 AM - 6 PM</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-400 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <ArrowRight className="w-6 h-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="font-bold text-lg">Saturday: 10 AM - 4 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block animate-bounce-in">
              <h2 className="text-5xl sm:text-6xl font-black mb-4">
                <span className="text-blue-900">Got </span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Questions?</span>
              </h2>
            </div>
            <p className="text-gray-600 text-xl mt-4">
              We've got answers! ⚡
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in border-2 border-transparent hover:border-orange-500/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:rotate-12 transition-transform duration-500">
                    ?
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-600 text-xl mb-6">
              Still have questions? We're here to help! 💬
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
              <MessageCircle className="w-6 h-6" />
              <span>Start a Conversation</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}