import React, { useState } from 'react';
import { Menu, X, Search, User, Bell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Talent <span className="text-amber-400">Source</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-amber-400 transition-colors duration-200">
                Home
              </a>
              <a href="#jobs" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                Find Jobs
              </a>
              <a href="#companies" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                Companies
              </a>
              <a href="#resources" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                Resources
              </a>
              <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                About
              </a>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              Post A Job
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50">
            <a href="#home" className="text-white block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#jobs" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Find Jobs
            </a>
            <a href="#companies" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Companies
            </a>
            <a href="#resources" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Resources
            </a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              About
            </a>
            <div className="px-3 py-2">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;