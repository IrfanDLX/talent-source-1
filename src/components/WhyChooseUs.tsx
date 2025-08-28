import React from 'react';
import { Database, Shield, Zap, Users, Award, Clock, Globe, HeartHandshake } from 'lucide-react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stat: string;
}

const WhyChooseUs = () => {
  const benefits: Benefit[] = [
    {
      id: 'database',
      title: 'Extensive Job Database',
      description: 'Access to over 50,000 active job listings from verified companies across all industries and experience levels.',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-blue-500 to-blue-600',
      stat: '50K+ Jobs'
    },
    {
      id: 'verified',
      title: 'Verified Employers',
      description: 'All our partner companies are thoroughly vetted to ensure legitimate opportunities and safe work environments.',
      icon: <Shield className="h-8 w-8" />,
      gradient: 'from-green-500 to-green-600',
      stat: '100% Verified'
    },
    {
      id: 'fast',
      title: 'Lightning Fast Applications',
      description: 'Apply to multiple positions with one click. Our smart system auto-fills applications using your profile.',
      icon: <Zap className="h-8 w-8" />,
      gradient: 'from-yellow-500 to-yellow-600',
      stat: '3x Faster'
    },
    {
      id: 'support',
      title: 'Dedicated Career Support',
      description: 'Get personalized career guidance, resume reviews, and interview coaching from our expert team.',
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-purple-500 to-purple-600',
      stat: '24/7 Support'
    },
    {
      id: 'success',
      title: 'Proven Track Record',
      description: 'Join over 100,000 professionals who have successfully found their dream jobs through our platform.',
      icon: <Award className="h-8 w-8" />,
      gradient: 'from-amber-500 to-amber-600',
      stat: '100K+ Hired'
    },
    {
      id: 'time',
      title: 'Save Valuable Time',
      description: 'Smart job matching and automated applications help you find relevant opportunities 5x faster.',
      icon: <Clock className="h-8 w-8" />,
      gradient: 'from-red-500 to-red-600',
      stat: '5x Faster'
    },
    {
      id: 'global',
      title: 'Global Opportunities',
      description: 'Explore remote positions and international opportunities with companies from around the world.',
      icon: <Globe className="h-8 w-8" />,
      gradient: 'from-cyan-500 to-cyan-600',
      stat: '50+ Countries'
    },
    {
      id: 'personal',
      title: 'Personalized Experience',
      description: 'AI-powered recommendations ensure you see jobs that perfectly match your skills and career goals.',
      icon: <HeartHandshake className="h-8 w-8" />,
      gradient: 'from-pink-500 to-pink-600',
      stat: 'AI Powered'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Talent Source?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another job board. We're your career partner, committed to helping you find opportunities that truly align with your goals and aspirations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-amber-200 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {benefit.icon}
                </div>

                {/* Stat Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-3">
                  {benefit.stat}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who trust Talent Source to advance their careers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">25K+</div>
              <div className="text-gray-300 text-sm">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">14</div>
              <div className="text-gray-300 text-sm">Days Avg. to Hire</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Customer Support</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
              Start Your Career Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;