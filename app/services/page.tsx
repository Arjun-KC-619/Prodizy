"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, TrendingUp, PenTool, Search, ShoppingCart, Smartphone, BarChart3, Globe, CheckCircle, ArrowRight, Zap, Sparkles, Rocket, Target, Award, Users } from 'lucide-react';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
        "Progressive Web Apps",
        "Website Maintenance"
      ],
      detailedDescription: "We build modern, fast, and secure websites that work perfectly on all devices. From simple business websites to complex web applications, we have the expertise to bring your vision to life.",
      color: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Google Ads",
        "Content Marketing",
        "Email Marketing",
        "Marketing Analytics"
      ],
      detailedDescription: "Drive more traffic, generate quality leads, and increase sales with our data-driven digital marketing strategies. We help you reach the right audience at the right time.",
      color: "from-orange-500 to-amber-500",
      accentColor: "orange"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Get found on Google and increase organic traffic",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Local SEO",
        "SEO Audits"
      ],
      detailedDescription: "Improve your search engine rankings and visibility with our proven SEO strategies. We help businesses rank higher on Google and attract more qualified leads.",
      color: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Brand Design",
      description: "Professional branding and graphic design services",
      features: [
        "Logo Design",
        "Brand Identity",
        "UI/UX Design",
        "Marketing Materials",
        "Print Design",
        "Brand Guidelines"
      ],
      detailedDescription: "Create a memorable brand identity that resonates with your target audience. Our designers craft unique visual identities that set you apart from competitors.",
      color: "from-orange-600 to-amber-600",
      accentColor: "orange"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Build powerful online stores that drive sales",
      features: [
        "Online Store Setup",
        "Payment Integration",
        "Inventory Management",
        "Shopping Cart",
        "Product Management",
        "Order Tracking"
      ],
      detailedDescription: "Launch your online store and start selling products worldwide. We create user-friendly e-commerce platforms with secure payment processing and inventory management.",
      color: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "App Design",
        "App Maintenance",
        "App Store Optimization"
      ],
      detailedDescription: "Extend your business reach with custom mobile applications. We develop high-performance apps for iOS and Android that engage users and drive results.",
      color: "from-orange-500 to-amber-600",
      accentColor: "orange"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We learn about your business, goals, and target audience",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-600 to-blue-800"
    },
    {
      step: "2",
      title: "Strategy",
      description: "We create a customized plan to achieve your objectives",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      step: "3",
      title: "Execution",
      description: "Our team brings the strategy to life with precision",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-700 to-blue-900"
    },
    {
      step: "4",
      title: "Launch",
      description: "We deploy your solution and ensure everything works perfectly",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-600 to-amber-600"
    },
    {
      step: "5",
      title: "Growth",
      description: "Ongoing support and optimization to maximize results",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals in every field",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of successful projects",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "We respect deadlines and commitments",
      gradient: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6 animate-bounce-in">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 rounded-full text-orange-600 text-sm font-semibold shadow-lg animate-glow">
                <Sparkles className="w-4 h-4 inline-block mr-2" />
                Premium Digital Services
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient-text">Our </span>
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up-delayed">
              Complete digital solutions to help your business succeed online. From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Connecting lines between services (constellation effect) */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full">
            <line x1="20%" y1="30%" x2="50%" y2="30%" stroke="#f97316" strokeWidth="2" className="animate-draw-line" />
            <line x1="50%" y1="30%" x2="80%" y2="30%" stroke="#3b82f6" strokeWidth="2" className="animate-draw-line-delayed" />
            <line x1="20%" y1="70%" x2="50%" y2="70%" stroke="#3b82f6" strokeWidth="2" className="animate-draw-line" />
            <line x1="50%" y1="70%" x2="80%" y2="70%" stroke="#f97316" strokeWidth="2" className="animate-draw-line-delayed" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Glowing orb effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-pulse-glow`}></div>
                
                {/* Card with 3D effect */}
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 perspective-1000">
                  {/* Animated corner accents */}
                  <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${service.color} opacity-10 rounded-tl-2xl transition-all duration-500 group-hover:opacity-30 group-hover:w-24 group-hover:h-24`}></div>
                  <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${service.color} opacity-10 rounded-br-2xl transition-all duration-500 group-hover:opacity-30 group-hover:w-24 group-hover:h-24`}></div>

                  {/* Icon with magical effect */}
                  <div className="relative inline-block mb-6">
                    {/* Rotating rings */}
                    <div className={`absolute inset-0 rounded-xl border-2 ${service.accentColor === 'blue' ? 'border-blue-500' : 'border-orange-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <div className="absolute inset-0 rounded-xl animate-spin-slow border-2 border-dashed border-current"></div>
                    </div>
                    
                    {/* Icon container */}
                    <div className={`relative p-4 bg-gradient-to-br ${service.color} rounded-xl text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                      {service.icon}
                      
                      {/* Sparkles on hover */}
                      {hoveredService === index && (
                        <>
                          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-sparkle" />
                          <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-sparkle-delayed" />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Title with gradient on hover */}
                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${hoveredService === index ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent` : 'text-blue-900'}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Animated divider */}
                  <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${service.color} mb-6 transition-all duration-500 rounded-full`}></div>

                  {/* Features list with staggered animation */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-gray-700 transform group-hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`p-1 rounded-full bg-gradient-to-br ${service.color} mr-2 transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="group-hover:font-semibold transition-all duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Description reveal on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-gray-600 leading-relaxed border-t-2 border-gray-200 pt-4">
                      {service.detailedDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 relative overflow-hidden">
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-orange-200/50 to-transparent animate-wave"></div>
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-200/50 to-transparent animate-wave-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A proven approach to deliver exceptional results
            </p>
          </div>

          {/* Process timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredProcess(index)}
                  onMouseLeave={() => setHoveredProcess(null)}
                >
                  {/* Card */}
                  <div className="group relative text-center transform hover:scale-110 transition-all duration-500">
                    {/* Glowing effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Step number with animation */}
                    <div className="relative inline-block mb-4">
                      {/* Pulse ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping`}></div>
                      
                      {/* Main circle */}
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-360`}>
                        <div className="absolute inset-0 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100">
                          <div className="absolute inset-2 border-2 border-dashed border-white rounded-full"></div>
                        </div>
                        <span className="text-2xl font-bold relative z-10">{item.step}</span>
                      </div>
                    </div>

                    {/* Icon that appears on hover */}
                    <div className={`transform transition-all duration-500 ${hoveredProcess === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <div className={`inline-block p-3 bg-gradient-to-br ${item.color} rounded-xl text-white mb-4 shadow-lg`}>
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Why Choose </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">NextGen?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                  {/* Icon with animated background */}
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse`}></div>
                    <div className={`relative p-4 bg-gradient-to-br ${benefit.gradient} rounded-full text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-orange-400 animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-orange-400 animate-bounce" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-orange-400 animate-gradient-text-orange">Project?</span>
            </h2>
            <p className="text-blue-200 text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help your business grow. Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                <span>View Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0.8;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.8);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.8);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes sparkle-delayed {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(-180deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(50px);
          }
        }

        @keyframes wave-delayed {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-50px);
          }
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-text-orange {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1s ease-out 0.3s backwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-rotate-360 {
          animation: rotate-360 0.5s ease-out;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-sparkle-delayed {
          animation: sparkle-delayed 2s ease-in-out infinite 1s;
        }

        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }

        .animate-wave-delayed {
          animation: wave-delayed 10s ease-in-out infinite;
        }

        .animate-draw-line {
          animation: draw-line 2s ease-out;
        }

        .animate-draw-line-delayed {
          animation: draw-line 2s ease-out 1s;
        }

        .animate-gradient-text {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6, #1e3a8a);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient-text 3s ease infinite;
        }

        .animate-gradient-text-orange {
          animation: gradient-text-orange 3s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}