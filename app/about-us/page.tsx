"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Award, Users, TrendingUp, Heart, Lightbulb, Shield, Zap, ArrowRight, CheckCircle, Sparkles, Star, Rocket, Globe, BarChart3 } from 'lucide-react';

export default function AboutUsPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Rocket className="w-6 h-6" />, color: "from-blue-600 to-blue-800" },
    { number: "200+", label: "Happy Clients", icon: <Users className="w-6 h-6" />, color: "from-orange-500 to-amber-500" },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" />, color: "from-blue-700 to-blue-900" },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" />, color: "from-orange-600 to-amber-600" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
      color: "from-blue-600 to-blue-800",
      particles: 5
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project undergoes rigorous testing to ensure it exceeds expectations.",
      color: "from-orange-500 to-amber-500",
      particles: 6
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest communication and transparent pricing are the foundation of our client relationships.",
      color: "from-blue-700 to-blue-900",
      particles: 4
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We're genuinely invested in helping your business grow and thrive.",
      color: "from-orange-600 to-amber-600",
      particles: 7
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Efficiency",
      description: "We deliver projects on time without sacrificing quality, keeping your business moving forward.",
      color: "from-blue-500 to-blue-700",
      particles: 5
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with you throughout the project, ensuring the final product aligns with your vision.",
      color: "from-orange-500 to-amber-500",
      particles: 6
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Started with a vision to help businesses succeed online",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-600 to-blue-800"
    },
    {
      year: "2026",
      title: "100 Projects",
      description: "Reached our first major milestone of 100 completed projects",
      icon: <Target className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      year: "2027",
      title: "Team Expansion",
      description: "Grew our team to include specialists in all digital services",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-700 to-blue-900"
    },
    {
      year: "2028",
      title: "500+ Clients",
      description: "Proudly serving over 500 satisfied clients across industries",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700"
    },
        {
      year: "2029",
      title: "Award Winner",
      description: "Recognized as Nepal's Best Web Development Agency",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-600 to-amber-600"
    },
    {
      year: "2030",
      title: "Leading Agency",
      description: "Established as one of Nepal's premier digital agencies",
      icon: <Star className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500"
    }
  ];

  const expertise = [
    { text: "Web Development & Design", icon: <Globe className="w-5 h-5" /> },
    { text: "Digital Marketing Strategy", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Search Engine Optimization", icon: <Target className="w-5 h-5" /> },
    { text: "E-commerce Solutions", icon: <BarChart3 className="w-5 h-5" /> },
    { text: "Mobile App Development", icon: <Zap className="w-5 h-5" /> },
    { text: "Brand Identity Design", icon: <Lightbulb className="w-5 h-5" /> },
    { text: "Social Media Marketing", icon: <Users className="w-5 h-5" /> },
    { text: "Content Marketing", icon: <Heart className="w-5 h-5" /> },
    { text: "UI/UX Design", icon: <Award className="w-5 h-5" /> },
    { text: "Cloud Solutions", icon: <Shield className="w-5 h-5" /> }
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-float-particle"
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
                <Heart className="w-4 h-4 inline-block mr-2" />
                Our Story & Vision
              </span>
            </div>
            
            {/* Super Animated Title */}
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 relative">
              {/* Glowing shadow */}
              <div className="absolute inset-0 blur-2xl opacity-40">
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">About </span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">NextGen</span>
              </div>
              
              {/* Main text */}
              <div className="relative">
                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient-text animate-float-text">
                  About 
                </span>
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text animate-float-text-delayed">
                  {" "}Prodizy
                </span>
              </div>
              
              {/* Corner sparkles */}
              <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-blue-500 animate-sparkle" />
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-orange-500 animate-sparkle-delayed" />
              <Sparkles className="absolute -bottom-4 left-1/4 w-6 h-6 text-amber-400 animate-sparkle" />
              <Sparkles className="absolute -bottom-4 right-1/4 w-6 h-6 text-blue-400 animate-sparkle-delayed" />
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up-delayed">
              We're a team of passionate professionals dedicated to helping businesses thrive in the digital world through innovative web solutions and strategic marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up border-2 border-gray-200 hover:border-orange-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-block p-4 bg-gradient-to-br ${stat.color} rounded-full text-white mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {stat.icon}
                    
                    {/* Sparkle on hover */}
                    {hoveredValue === index && (
                      <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-amber-400 animate-sparkle" />
                    )}
                  </div>
                  
                  {/* Number with count-up animation */}
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 ${animateStats ? 'animate-count-up' : 'opacity-0'}`}>
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-700 font-semibold group-hover:text-orange-500 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 relative overflow-hidden">
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-orange-200/50 to-transparent animate-wave"></div>
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-200/50 to-transparent animate-wave-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our </span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                 Prodizy Digital Labs was founded in 2025 with a simple mission: to help businesses succeed in the digital age. What started as a small team of passionate developers has grown into Nepal's leading full-service digital agency.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Over the years, we've had the privilege of working with businesses of all sizes, from startups to established enterprises. Each project has taught us something new and strengthened our commitment to excellence.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Today, we're proud to offer a comprehensive suite of digital services, backed by a talented team of developers, designers, and marketers who are dedicated to your success. Our approach combines cutting-edge technology with strategic thinking to deliver solutions that drive real business results.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  We believe in building long-term partnerships with our clients, not just completing projects. Your growth is our growth, and we're committed to being there every step of your digital journey.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Mission Card */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-block p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Target className="w-12 h-12" />
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-orange-400 opacity-0 group-hover:opacity-100 animate-sparkle transition-opacity" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    To empower businesses with innovative digital solutions that drive growth, enhance customer engagement, and create lasting value in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-block p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl text-white mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <TrendingUp className="w-12 h-12" />
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 animate-sparkle transition-opacity" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    To be the most trusted digital partner for businesses across Nepal and beyond, recognized for our innovation, quality, and unwavering commitment to client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Particle background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our Core </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Mega glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${value.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-glow`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-orange-500">
                  {/* Icon with rotating ring */}
                  <div className="relative inline-block mb-4">
                    {/* Rotating ring */}
                    <div className="absolute inset-0 group-hover:animate-spin-slow">
                      <div className={`w-20 h-20 border-2 border-dashed rounded-full ${index % 2 === 0 ? 'border-blue-500' : 'border-orange-500'}`}></div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`relative inline-block p-3 bg-gradient-to-br ${value.color} rounded-xl text-white mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {value.icon}
                      
                      {/* Sparkles */}
                      {hoveredValue === index && (
                        <>
                          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-orange-400 animate-sparkle" />
                          <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-sparkle-delayed" />
                        </>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Bottom accent bar */}
                  <div className={`mt-4 h-1 bg-gradient-to-r ${value.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our growth story
            </p>
          </div>

          {/* Timeline with connecting line */}
          <div className="relative">
            {/* Vertical connecting line for mobile/tablet */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-blue-500 lg:hidden"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="group relative flex gap-8 items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                >
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-24 text-right hidden lg:block">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} text-white font-bold rounded-full shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Animated dot */}
                  <div className="flex-shrink-0 relative">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-8 h-8 bg-gradient-to-r ${milestone.color} rounded-full opacity-0 group-hover:opacity-50 animate-ping`}></div>
                    </div>
                    
                    {/* Main dot with icon */}
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-10`}>
                      {milestone.icon}
                      
                      {/* Sparkle */}
                      {hoveredMilestone === index && (
                        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-sparkle" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 relative">
                    {/* Glowing effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent group-hover:border-orange-500">
                      {/* Mobile year badge */}
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${milestone.color} text-white text-sm font-bold rounded-full mb-3 lg:hidden`}>
                        {milestone.year}
                      </div>
                      
                      <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {milestone.description}
                      </p>
                      
                      {/* Accent bar */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${milestone.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #f97316 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive digital services under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group flex items-center space-x-3 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-4 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up border-2 border-transparent hover:border-orange-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`p-2 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-600 to-blue-800' : 'from-orange-500 to-amber-500'} rounded-lg text-white flex-shrink-0 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  {item.icon}
                </div>
                <span className="text-gray-800 font-semibold group-hover:text-orange-500 transition-colors duration-300">
                  {item.text}
                </span>
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transform group-hover:scale-125 transition-all duration-500" />
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
            <Rocket className="w-16 h-16 mx-auto mb-6 text-orange-400 animate-bounce" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Work <span className="text-orange-400 animate-gradient-text-orange">Together?</span>
            </h2>
            <p className="text-blue-200 text-xl mb-8 max-w-3xl mx-auto">
              Let's create something amazing together. Contact us today to discuss your project and see how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/our-team"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                <span>Meet Our Team</span>
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

        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        .animate-float-text {
          animation: float-text 3s ease-in-out infinite;
        }

        .animate-float-text-delayed {
          animation: float-text-delayed 3s ease-in-out infinite 0.5s;
        }

        .animate-count-up {
          animation: count-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}