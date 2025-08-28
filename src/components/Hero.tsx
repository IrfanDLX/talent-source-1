import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Handle job search functionality
    console.log('Searching for:', jobTitle, 'in', location);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent"></div>  */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
      {/* <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Dream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Career Today
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with top employers and discover opportunities that match your skills and ambitions
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Job Title Input */}
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 text-slate-900 placeholder-gray-500 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Location Input */}
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 text-slate-900 placeholder-gray-500 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 min-w-[140px]"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">50K+</div>
              <div className="text-gray-300 text-sm">Active Jobs</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">25K+</div>
              <div className="text-gray-300 text-sm">Companies</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">100K+</div>
              <div className="text-gray-300 text-sm">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;