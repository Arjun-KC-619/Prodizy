// components/Footer.tsx
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Send, Sparkles, Zap, Heart } from 'lucide-react';

export default function Footer() {
  const [logoHovered, setLogoHovered] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'Digital Marketing',
    'SEO Services',
    'Brand Design',
    'E-commerce',
    'Mobile Apps'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'from-blue-600 to-blue-800' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'from-blue-400 to-blue-600' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn', color: 'from-blue-700 to-blue-900' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'from-orange-500 to-pink-500' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube', color: 'from-red-600 to-red-800' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Animated wave at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white opacity-10"
          ></path>
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-orange-500 opacity-20 animate-wave"
          ></path>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info with Epic Logo */}
          <div className="lg:col-span-2 space-y-6">
            {/* EPIC LOGO - Same as Navigation */}
            <div 
              className="flex items-center space-x-4 group cursor-pointer"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              {/* Glowing orb background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Logo Container */}
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-orange-500/30 group-hover:border-orange-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Middle pulsing ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                
                {/* Main logo hexagon */}
                <div className="relative w-14 h-14 transform group-hover:scale-110 transition-all duration-500">
                  {/* Hexagon background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                       }}>
                  </div>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-gradient-shift"
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                       }}>
                  </div>
                  
                  {/* Inner smaller hexagon */}
                  <div className="absolute inset-2 bg-gradient-to-br from-orange-500 to-amber-500 group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300"
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                       }}>
                  </div>
                  
                  {/* Letter P */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute text-3xl font-black text-blue-900/50 transform translate-x-0.5 translate-y-0.5">P</span>
                    <span className="relative text-3xl font-black text-white z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">P</span>
                  </div>
                  
                  {/* Sparkles */}
                  {logoHovered && (
                    <>
                      <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-orange-500 animate-sparkle" />
                      <Sparkles className="absolute -bottom-2 -left-2 w-3 h-3 text-blue-500 animate-sparkle-delayed" />
                    </>
                  )}
                </div>
              </div>

              {/* Company name */}
              <div>
                <div className="text-xl font-black leading-none">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                    Prodizy
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text">
                    {" "}Digital Labs
                  </span>
                </div>
                <p className="text-xs text-blue-200 mt-1 font-semibold tracking-wide">Pvt. Ltd.</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-blue-200 leading-relaxed max-w-md">
              Your trusted partner for web development and digital marketing in Nepal. 
              <span className="inline-block ml-1">
                <Heart className="w-4 h-4 inline text-orange-500 animate-pulse" />
              </span>
            </p>

            {/* Newsletter Subscription */}
            <div className="relative">
              <h4 className="font-bold mb-3 text-orange-400 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 animate-sparkle" />
                <span>Subscribe to Newsletter</span>
              </h4>
              
              <div className="relative group">
                {/* Glowing border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 ${emailFocused ? 'opacity-75' : ''}`}></div>
                
                {/* Input container */}
                <div className="relative flex bg-blue-900 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="flex-1 px-4 py-3 bg-transparent text-white placeholder-blue-300 focus:outline-none"
                  />
                  <button className="px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    title={social.name}
                  >
                    {/* Glowing background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative p-3 bg-gradient-to-br ${social.color} rounded-lg transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
                      {social.icon}
                      
                      {/* Sparkle */}
                      {hoveredSocial === index && (
                        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white animate-sparkle" />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400 flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-4 transition-all duration-300"></span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 mb-1">Phone</p>
                    <p className="text-sm font-semibold text-white">+977 98XXXXXXXX</p>
                  </div>
                </div>
              </li>
              
              <li className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 mb-1">Email</p>
                    <p className="text-sm font-semibold text-white">info@prodizy.com.np</p>
                  </div>
                </div>
              </li>
              
              <li className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <div className="p-2 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 mb-1">Location</p>
                    <p className="text-sm font-semibold text-white">Kathmandu, Nepal</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-blue-800 pt-8 mt-8">
          {/* Glowing line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-blue-300 text-sm flex items-center space-x-2">
              <span>&copy; 2025</span>
              <span className="inline-block w-1 h-1 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="font-semibold bg-gradient-to-r from-blue-300 to-orange-400 bg-clip-text text-transparent">
                Prodizy Digital Labs Pvt. Ltd.
              </span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
              <span>All rights reserved.</span>
            </p>

            {/* Made with love */}
            <p className="text-blue-300 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>in Nepal</span>
              <Sparkles className="w-4 h-4 text-orange-400 animate-sparkle" />
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-50px) scale(1.5);
            opacity: 0.8;
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
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

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }

        .animate-sparkle-delayed {
          animation: sparkle-delayed 1.5s ease-in-out infinite 0.5s;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }

        .animate-wave {
          animation: wave 8s linear infinite;
        }
      `}</style>
    </footer>
  );
}