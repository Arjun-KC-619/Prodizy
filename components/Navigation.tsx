"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* EPIC LOGO */}
            <Link 
              href="/" 
              className="flex items-center space-x-4 group cursor-pointer relative"
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
                <div className="relative w-16 h-16 transform group-hover:scale-110 transition-all duration-500">
                  {/* Hexagon background with gradient */}
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
                  
                  {/* Letter P with 3D effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Shadow layer */}
                    <span className="absolute text-4xl font-black text-blue-900/50 transform translate-x-0.5 translate-y-0.5">
                      P
                    </span>
                    {/* Main letter */}
                    <span className="relative text-4xl font-black text-white z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      P
                    </span>
                  </div>
                  
                  {/* Corner sparkles */}
                  {logoHovered && (
                    <>
                      <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-orange-500 animate-sparkle" />
                      <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-blue-500 animate-sparkle-delayed" />
                      <Zap className="absolute -top-3 -left-1 w-6 h-6 text-amber-400 animate-lightning" />
                      <Zap className="absolute -bottom-3 -right-1 w-5 h-5 text-orange-400 animate-lightning-delayed" />
                    </>
                  )}
                </div>
                
                {/* Particle burst effect */}
                {logoHovered && (
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-particle-burst"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 45}deg) translateX(30px)`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* Company name with epic effects */}
              <div className="relative">
                {/* Glowing text shadow */}
                <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                    Prodizy
                  </span>
                  <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    {" "}Digital Labs
                  </span>
                </div>
                
                {/* Main text */}
                <div>
                  <div className="text-2xl font-black leading-none">
                    <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:via-blue-600 group-hover:to-blue-800 transition-all duration-300 animate-gradient-text">
                      Prodizy
                    </span>
                    <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-amber-400 group-hover:to-orange-400 transition-all duration-300 animate-gradient-text">
                      {" "}Digital Labs
                    </span>
                  </div>
                  
                  {/* Animated tagline */}
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-12 transition-all duration-300"></div>
                    <p className="text-xs font-semibold text-gray-600 group-hover:text-orange-500 transition-colors duration-300 tracking-wider uppercase">
                      Pvt. Ltd.
                    </p>
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className={`absolute -top-3 -right-2 transform transition-all duration-500 ${logoHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <div className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold rounded-full shadow-lg animate-bounce-subtle">
                    PRODIGIES
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu with Fire Effects */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 font-semibold"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                  
                  {/* Menu item text */}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                  
                  {/* Corner accent */}
                  <span className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:h-2 transition-all duration-300"></span>
                  
                  {/* Sparkle on hover */}
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:animate-sparkle transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2 text-gray-700 hover:text-orange-500 transition-colors group"
            >
              {/* Button glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              {/* Icon */}
              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
              
              {/* Sparkle */}
              {isMenuOpen && (
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-orange-500 animate-sparkle" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div 
          className={`md:hidden bg-gradient-to-br from-white to-orange-50/30 border-t border-gray-200 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative block text-gray-700 hover:text-orange-500 transition-all duration-300 py-3 font-semibold overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Background slide */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                {/* Item content */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    {item.name}
                  </span>
                  <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:rotate-180 transition-all duration-300" />
                </div>
                
                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-24"></div>

      <style jsx>{`
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

        @keyframes particle-burst {
          0% {
            opacity: 1;
            transform: rotate(var(--rotate)) translateX(0px) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotate)) translateX(40px) scale(0);
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

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
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

        .animate-lightning {
          animation: lightning 2s ease-in-out infinite;
        }

        .animate-lightning-delayed {
          animation: lightning-delayed 2s ease-in-out infinite 0.5s;
        }

        .animate-particle-burst {
          animation: particle-burst 1s ease-out forwards;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}