import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white">
                  Talent <span className="text-amber-400">Source</span>
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Connecting exceptional talent with outstanding opportunities. We're revolutionizing the way people find careers and companies find talent.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <a href="mailto:support@talentsource.com" className="hover:text-amber-400 transition-colors duration-200">
                    support@talentsource.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <a href="tel:+1-555-123-4567" className="hover:text-amber-400 transition-colors duration-200">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                  <span>123 Innovation Drive, San Francisco, CA 94105</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-black transition-all duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-black transition-all duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-black transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-black transition-all duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Job Seekers */}
            <div>
              <h4 className="text-white font-semibold mb-4">Job Seekers</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Create Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Interview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Training Source
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Temping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Job Feed
                  </a>
                </li>
              </ul>
            </div>

            {/* Employers */}
            <div>
              <h4 className="text-white font-semibold mb-4">Employers</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Post Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Search Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Hiring Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Industry Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Agency Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="py-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest job opportunities and career tips delivered to your inbox</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Talent Source. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              Back to Top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;