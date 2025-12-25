"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, Zap, Crown, Star, Sparkles, Gift, Target, Award, TrendingUp, Rocket, DollarSign } from 'lucide-react';

export default function PackagesPage() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [hoveredAddon, setHoveredAddon] = useState<number | null>(null);
  const [animatedTitle, setAnimatedTitle] = useState(false);

  useEffect(() => {
    setAnimatedTitle(true);
  }, []);

  const packages = [
    {
      name: "Starter",
      price: "Rs.9,999",
      originalPrice: "Rs.12,999",
      description: "Perfect for small businesses getting online",
      features: [
        "5-Page Website",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Support",
        "Social Media Links",
        "Google Maps Integration"
      ],
      popular: false,
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-600 to-blue-800",
      badge: "Best Value",
      savings: "Save Rs.3,000"
    },
    {
      name: "Professional",
      price: "Rs.24,999",
      originalPrice: "Rs.31,999",
      description: "Ideal for growing businesses",
      features: [
        "10-Page Website",
        "Advanced SEO",
        "Social Media Integration",
        "Analytics Setup",
        "3 Months Support",
        "Content Management",
        "Email Marketing Setup",
        "Blog Section",
        "Newsletter Integration"
      ],
      popular: true,
      icon: <Crown className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500",
      badge: "Most Popular",
      savings: "Save Rs.7,000"
    },
    {
      name: "Enterprise",
      price: "Custom",
      originalPrice: "Contact Us",
      description: "Complete digital solution",
      features: [
        "Unlimited Pages",
        "E-commerce Features",
        "Marketing Campaign",
        "Custom Features",
        "12 Months Support",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
        "Mobile App (Optional)"
      ],
      popular: false,
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-700 to-blue-900",
      badge: "Premium",
      savings: "Custom Quote"
    }
  ];

  const addOns = [
    {
      title: "Logo Design",
      price: "Rs.999",
      description: "Professional logo design with unlimited revisions",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "Content Writing",
      price: "Rs.500/page",
      description: "SEO-optimized content written by professionals",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "Social Media Marketing",
      price: "Rs.499/month",
      description: "Complete social media management and content creation",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-blue-700 to-blue-900"
    },
    {
      title: "Google Ads Campaign",
      price: "Rs.499/month",
      description: "Managed Google Ads campaigns with monthly reporting",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-orange-600 to-amber-600"
    },
    {
      title: "E-commerce Setup",
      price: "Rs.799",
      description: "Complete online store setup with payment integration",
      icon: <Gift className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Premium Support",
      price: "Rs.1199/month",
      description: "Priority support with 24/7 availability",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-orange-500 to-amber-600"
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

        {/* Money rain effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <DollarSign
              key={i}
              className="absolute text-orange-400/30 animate-money-rain"
              style={{
                top: `-${Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6 animate-bounce-in">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 rounded-full text-orange-600 text-sm font-semibold shadow-lg animate-glow">
                <Gift className="w-4 h-4 inline-block mr-2" />
                Special Launch Offer!
              </span>
            </div>
            
            {/* SUPER ANIMATED TITLE */}
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 relative">
              {/* Layer 1: Shadow layer */}
              <div className={`absolute inset-0 blur-lg opacity-50 ${animatedTitle ? 'animate-title-glow' : ''}`}>
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Affordable </span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Packages</span>
              </div>
              
              {/* Layer 2: Main text with multiple effects */}
              <div className="relative">
                <span className={`bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient-text ${animatedTitle ? 'animate-float-text' : ''}`}>
                  Affordable 
                </span>
                <span className={`bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text ${animatedTitle ? 'animate-float-text-delayed' : ''}`}>
                  {" "}Packages
                </span>
              </div>
              
              {/* Layer 3: Sparkle effects */}
              {animatedTitle && (
                <>
                  <Sparkles className="absolute -top-4 left-0 w-8 h-8 text-blue-500 animate-sparkle" />
                  <Sparkles className="absolute -top-4 right-0 w-8 h-8 text-orange-500 animate-sparkle-delayed" />
                  <Sparkles className="absolute -bottom-4 left-1/4 w-6 h-6 text-amber-400 animate-sparkle" />
                  <Sparkles className="absolute -bottom-4 right-1/4 w-6 h-6 text-blue-400 animate-sparkle-delayed" />
                </>
              )}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up-delayed">
              Choose the perfect plan for your business needs. All packages include professional design, development, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #f97316 2px, transparent 2px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up ${pkg.popular ? 'md:-mt-8' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredPackage(index)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {/* Popular package special effects */}
                {pkg.popular && (
                  <>
                    {/* Lightning bolts */}
                    <div className="absolute -top-8 -left-8 w-full h-full pointer-events-none">
                      <Zap className="absolute top-0 left-0 w-12 h-12 text-orange-400 animate-lightning" />
                      <Zap className="absolute top-0 right-0 w-10 h-10 text-amber-400 animate-lightning-delayed" />
                    </div>
                    
                    {/* Crown floating above */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-float-crown">
                      <div className="relative">
                        <Crown className="w-12 h-12 text-orange-500" />
                        <div className="absolute inset-0 blur-md">
                          <Crown className="w-12 h-12 text-orange-500" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Mega glow effect for popular */}
                {pkg.popular && (
                  <div className="absolute -inset-8 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500 rounded-3xl blur-3xl opacity-30 animate-mega-pulse"></div>
                )}

                {/* Regular glow for others */}
                {!pkg.popular && hoveredPackage === index && (
                  <div className={`absolute -inset-4 bg-gradient-to-br ${pkg.color} rounded-2xl blur-2xl opacity-30 transition-opacity duration-500 animate-pulse-glow`}></div>
                )}

                {/* Main Card */}
                <div
                  className={`relative bg-white rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 ${
                    pkg.popular 
                      ? 'border-4 border-orange-500 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50' 
                      : 'border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl'
                  }`}
                >
                  {/* Top badge */}
                  {pkg.popular ? (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-in">
                      <div className="relative">
                        <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg animate-pulse-glow flex items-center space-x-2">
                          <Star className="w-5 h-5 animate-spin-slow" />
                          <span>{pkg.badge}</span>
                          <Star className="w-5 h-5 animate-spin-slow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute -top-3 right-4 animate-bounce-in">
                      <span className={`px-4 py-1 bg-gradient-to-r ${pkg.color} text-white text-sm font-semibold rounded-full shadow-lg`}>
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Savings badge */}
                  <div className="absolute -top-3 -left-3 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                    <div className={`px-3 py-1 bg-gradient-to-br ${pkg.color} text-white text-xs font-bold rounded-full shadow-lg transform -rotate-12 animate-wiggle`}>
                      {pkg.savings}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      {/* Rotating rings */}
                      <div className={`absolute inset-0 ${pkg.popular ? 'animate-spin-slow' : 'group-hover:animate-spin-slow'}`}>
                        <div className={`w-20 h-20 border-2 border-dashed rounded-full ${pkg.popular ? 'border-orange-500' : 'border-blue-500'}`}></div>
                      </div>
                      
                      {/* Icon container */}
                      <div className={`relative inline-block p-4 bg-gradient-to-br ${pkg.color} rounded-full text-white shadow-xl transform hover:scale-125 hover:rotate-12 transition-all duration-500`}>
                        {pkg.icon}
                        
                        {/* Sparkles */}
                        {hoveredPackage === index && (
                          <>
                            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-orange-400 animate-sparkle" />
                            <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-sparkle-delayed" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Package name */}
                  <h3 className={`text-3xl font-bold text-center mb-2 transition-all duration-300 ${
                    pkg.popular ? 'text-orange-500' : 'text-blue-900 hover:text-orange-500'
                  }`}>
                    {pkg.name}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-6">{pkg.description}</p>

                  {/* Animated pricing */}
                  <div className="text-center mb-6">
                    {/* Original price strikethrough */}
                    <div className="text-lg text-gray-400 line-through mb-2">
                      {pkg.originalPrice}
                    </div>
                    
                    {/* Main price */}
                    <div className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent animate-price-pulse ${
                      pkg.popular ? 'animate-mega-price' : ''
                    }`}>
                      {pkg.price}
                    </div>
                    
                    {pkg.price !== "Custom" && (
                      <div className="text-sm text-gray-500 mt-1">Starting price</div>
                    )}
                  </div>

                  {/* Animated divider */}
                  <div className={`h-1 bg-gradient-to-r ${pkg.color} rounded-full mb-6 ${
                    hoveredPackage === index ? 'animate-expand-width' : 'w-1/3 mx-auto'
                  } transition-all duration-500`}></div>

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start transform hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${idx * 30}ms` }}
                      >
                        <div className={`p-1 rounded-full bg-gradient-to-br ${pkg.color} mr-3 flex-shrink-0 mt-0.5 transform hover:scale-125 hover:rotate-180 transition-all duration-500`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-gray-700 ${hoveredPackage === index ? 'font-semibold' : ''} transition-all duration-300`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`group block w-full py-4 text-center rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-2xl hover:shadow-orange-500/50 animate-pulse-glow'
                        : 'border-2 border-blue-900 text-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 hover:text-white hover:shadow-xl'
                    }`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in-up">
            <p className="text-gray-600 text-lg mb-4">
              ✨ All packages include free consultation and transparent pricing with no hidden fees ✨
            </p>
            <p className="text-orange-500 font-semibold text-xl animate-bounce">
              Limited Time Offer: Save up to 30% on all packages!
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 relative overflow-hidden">
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-orange-200/50 to-transparent animate-wave"></div>
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-200/50 to-transparent animate-wave-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              {/* Animated title for add-ons */}
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent animate-gradient-text">Additional </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient-text">Services</span>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -top-6 -right-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </h2>
            <p className="text-gray-600 text-lg">
              Enhance your package with these optional add-ons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredAddon(index)}
                onMouseLeave={() => setHoveredAddon(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${addon.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-orange-500 transform hover:-translate-y-2">
                  {/* Icon badge */}
                  <div className="absolute -top-4 -right-4 animate-bounce-in">
                    <div className={`p-3 bg-gradient-to-br ${addon.gradient} rounded-full text-white shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      {addon.icon}
                      
                      {/* Sparkles on hover */}
                      {hoveredAddon === index && (
                        <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-amber-400 animate-sparkle" />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-4 pt-4">
                    <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors duration-300">
                      {addon.title}
                    </h3>
                  </div>
                  
                  <div className={`text-3xl font-bold bg-gradient-to-r ${addon.gradient} bg-clip-text text-transparent mb-4 animate-price-pulse`}>
                    {addon.price}
                  </div>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {addon.description}
                  </p>

                  {/* Hover bar */}
                  <div className={`mt-4 h-1 bg-gradient-to-r ${addon.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent animate-gradient-text">Compare </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient-text">Features</span>
            </h2>
          </div>

          <div className="overflow-x-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xl">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                  <th className="p-4 text-left font-bold">Features</th>
                  <th className="p-4 text-center font-bold">Starter</th>
                  <th className="p-4 text-center bg-gradient-to-r from-orange-500 to-amber-500 font-bold">Professional</th>
                  <th className="p-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { feature: "Number of Pages", starter: "5", pro: "10", enterprise: "Unlimited" },
                  { feature: "Mobile Responsive", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "SEO Optimization", starter: "Basic", pro: "Advanced", enterprise: "Advanced" },
                  { feature: "Support Duration", starter: "1 Month", pro: "3 Months", enterprise: "12 Months" },
                  { feature: "E-commerce Features", starter: "-", pro: "-", enterprise: "✓" },
                  { feature: "Custom Features", starter: "-", pro: "Limited", enterprise: "✓" },
                  { feature: "Dedicated Manager", starter: "-", pro: "-", enterprise: "✓" }
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="p-4 font-semibold">{row.feature}</td>
                    <td className="p-4 text-center">{row.starter}</td>
                    <td className="p-4 text-center bg-orange-50 font-semibold text-orange-600">{row.pro}</td>
                    <td className="p-4 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        {/* Sparkle rain */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-orange-400 animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${15 + Math.random() * 15}px`,
                height: `${15 + Math.random() * 15}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Target className="w-16 h-16 mx-auto mb-6 text-orange-400 animate-bounce" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Not Sure Which <span className="text-orange-400 animate-gradient-text-orange">Package</span> to Choose?
            </h2>
            <p className="text-blue-200 text-xl mb-8 max-w-3xl mx-auto">
              Contact us for a free consultation. We'll help you find the perfect solution for your business needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
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

        @keyframes mega-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
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

        @keyframes money-rain {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes lightning {
          0%, 100% {
            opacity: 0;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(15deg);
          }
        }

        @keyframes lightning-delayed {
          0%, 100% {
            opacity: 0;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(-15deg);
          }
        }

        @keyframes float-crown {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(-8deg);
          }
        }

        @keyframes price-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes mega-price {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.5));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.8));
          }
        }

        @keyframes expand-width {
          from {
            width: 33.333%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes title-glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float-text {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes float-text-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes grid-move {
          from {
            transform: translateX(0) translateY(0);
          }
          to {
            transform: translateX(50px) translateY(50px);
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

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-mega-pulse {
          animation: mega-pulse 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
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

        .animate-money-rain {
          animation: money-rain 6s linear infinite;
        }

        .animate-lightning {
          animation: lightning 2s ease-in-out infinite;
        }

        .animate-lightning-delayed {
          animation: lightning-delayed 2s ease-in-out infinite 0.5s;
        }

        .animate-float-crown {
          animation: float-crown 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-price-pulse {
          animation: price-pulse 2s ease-in-out infinite;
        }

        .animate-mega-price {
          animation: mega-price 2s ease-in-out infinite;
        }

        .animate-expand-width {
          animation: expand-width 0.5s ease-out forwards;
        }

        .animate-title-glow {
          animation: title-glow 3s ease-in-out infinite;
        }

        .animate-float-text {
          animation: float-text 3s ease-in-out infinite;
        }

        .animate-float-text-delayed {
          animation: float-text-delayed 3s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
}