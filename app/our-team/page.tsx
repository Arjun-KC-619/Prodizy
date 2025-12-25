"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Linkedin, Twitter, ArrowRight, Sparkles, Award, Users, Heart, Zap, Target } from 'lucide-react';

export default function OurTeamPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Samir Paudel",
      role: "Founder & CEO",
      image: "👨‍💼",
      bio: "10+ years of experience in web development and digital strategy. Passionate about helping businesses grow online.",
      email: "samir@nextgen.com.np",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Arjun KC",
      role: "Co-Founder & CTO",
      image: "👨‍💻",
      bio: "Full-stack developer specializing in React, Node.js, and cloud technologies. Creates robust and scalable solutions.",
      email: "arjun@nextgen.com.np",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Roshan Kumar Yadav",
      role: "Director of Operations",
      image: "👨‍💼",
      bio: "Digital marketing expert with proven track record in SEO, PPC, and social media marketing strategies.",
      email: "roshan@nextgen.com.np",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Ayush KC",
      role: "Managing Director",
      image: "👨‍💼",
      bio: "Creative designer focused on user-centered design. Transforms ideas into beautiful and functional interfaces.",
      email: "ayush@nextgen.com.np",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Kasam Darnal",
      role: "Manager",
      image: "👨",
      bio: "SEO expert helping businesses rank higher on Google. Data-driven approach to digital marketing.",
      email: "kasam@nextgen.com.np",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Your Name",
      role: "Internship Available",
      image: "🎯",
      bio: "Join our dynamic team and kickstart your career in web development and digital marketing!",
      email: "careers@nextgen.com.np",
      linkedin: "#",
      twitter: "#",
      isInternship: true
    }
  ];

  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "We never compromise on quality and always deliver excellence.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest communication and transparent pricing are our foundation.",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We're invested in your growth.",
      color: "from-orange-500 to-amber-600"
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
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float-particle"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-particle-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float-particle-slow"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-orange-300 rounded-full animate-float-particle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6 animate-bounce-in">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 rounded-full text-orange-600 text-sm font-semibold shadow-lg animate-glow">
                <Users className="w-4 h-4 inline-block mr-2" />
                Our Amazing Team
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient-text">Meet Our </span>
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text">Prodizy Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up-delayed">
              A passionate team of experts dedicated to helping your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glowing background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.isInternship ? 'from-orange-500 to-amber-500' : 'from-blue-500 to-orange-500'} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-glow`}></div>
                
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${member.isInternship ? 'from-orange-50 to-amber-50 border-orange-300' : 'from-blue-50 to-orange-50'} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-500 transform hover:-translate-y-3 hover:scale-105`}>
                  {/* Special badge for internship */}
                  {member.isInternship && (
                    <div className="absolute -top-3 -right-3 animate-bounce-in">
                      <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse-glow">
                        ✨ JOIN US!
                      </div>
                    </div>
                  )}

                  {/* Avatar section */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      {/* Rotating ring */}
                      <div className={`absolute inset-0 rounded-full border-4 ${member.isInternship ? 'border-orange-500' : 'border-blue-500'} opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500`}></div>
                      
                      {/* Avatar */}
                      <div className={`relative text-8xl mb-4 transform group-hover:scale-125 transition-all duration-500 ${hoveredCard === index ? 'animate-bounce-in' : ''}`}>
                        {member.image}
                      </div>
                      
                      {/* Floating sparkles on hover */}
                      {hoveredCard === index && (
                        <>
                          <Sparkles className="absolute top-0 right-0 w-6 h-6 text-orange-500 animate-sparkle" />
                          <Sparkles className="absolute bottom-0 left-0 w-5 h-5 text-blue-500 animate-sparkle-delayed" />
                        </>
                      )}
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-1 transition-all duration-300 ${member.isInternship ? 'text-orange-600' : 'text-blue-900 group-hover:text-orange-500'}`}>
                      {member.name}
                    </h3>
                    <p className={`font-semibold mb-4 ${member.isInternship ? 'text-orange-500 text-lg' : 'text-orange-500'}`}>
                      {member.role}
                    </p>
                  </div>

                  {/* Bio with animated reveal */}
                  <p className="text-gray-700 text-center mb-6 leading-relaxed transform group-hover:scale-105 transition-transform duration-300">
                    {member.bio}
                  </p>

                  {/* Animated divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Social links with wave animation */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="group/icon p-3 bg-white rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-125 hover:rotate-12"
                      title="Email"
                    >
                      <Mail className="w-5 h-5 group-hover/icon:animate-bounce" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="group/icon p-3 bg-white rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-125 hover:rotate-12"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 group-hover/icon:animate-bounce" />
                    </a>
                    <a
                      href={member.twitter}
                      className="group/icon p-3 bg-white rounded-full hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-125 hover:rotate-12"
                      title="Twitter"
                    >
                      <Twitter className="w-5 h-5 group-hover/icon:animate-bounce" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 relative overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-orange-200/50 to-transparent animate-wave"></div>
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-200/50 to-transparent animate-wave-delayed"></div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glowing effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                  {/* Icon with animated background */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                    <div className={`relative p-4 bg-gradient-to-br ${value.color} rounded-full text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 text-white text-center overflow-hidden">
            {/* Animated sparkles */}
            <div className="absolute inset-0 overflow-hidden">
              <Sparkles className="absolute top-10 left-10 w-8 h-8 text-orange-400 animate-sparkle" />
              <Sparkles className="absolute top-20 right-20 w-6 h-6 text-amber-400 animate-sparkle-delayed" />
              <Sparkles className="absolute bottom-10 left-20 w-7 h-7 text-orange-300 animate-sparkle" />
              <Sparkles className="absolute bottom-20 right-10 w-5 h-5 text-amber-300 animate-sparkle-delayed" />
            </div>

            {/* Content */}
            <div className="relative z-10 animate-fade-in-up">
              <Zap className="w-16 h-16 mx-auto mb-6 text-orange-400 animate-bounce" />
              <h2 className="text-4xl font-bold mb-6 animate-gradient-text-white">
                Want to <span className="text-orange-400">Join</span> Our Team?
              </h2>
              <p className="text-blue-200 text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about technology and digital innovation. 
                Let's build something amazing together!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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

        @keyframes float-particle-delayed {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-120px) scale(1.3);
            opacity: 0.7;
          }
        }

        @keyframes float-particle-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-80px) scale(1.2);
            opacity: 0.6;
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

        .animate-float-particle-delayed {
          animation: float-particle-delayed 5s ease-in-out infinite 1s;
        }

        .animate-float-particle-slow {
          animation: float-particle-slow 6s ease-in-out infinite 2s;
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

        .animate-gradient-text-white {
          background: linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </div>
  );
}