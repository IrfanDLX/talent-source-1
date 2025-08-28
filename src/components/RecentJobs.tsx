import React, { useState } from 'react';
import { MapPin, Clock, Building, ChevronLeft, ChevronRight } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedTime: string;
  logo: string;
  salary: string;
}

const RecentJobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      postedTime: "2 hours ago",
      logo: "🚀",
      salary: "$120k - $180k"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateNow",
      location: "Remote",
      type: "Full-time",
      postedTime: "4 hours ago",
      logo: "💡",
      salary: "$95k - $140k"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "New York, NY",
      type: "Full-time",
      postedTime: "6 hours ago",
      logo: "🎨",
      salary: "$80k - $120k"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Austin, TX",
      type: "Full-time",
      postedTime: "8 hours ago",
      logo: "📊",
      salary: "$110k - $160k"
    },
    {
      id: 5,
      title: "Marketing Director",
      company: "BrandForce",
      location: "Chicago, IL",
      type: "Full-time",
      postedTime: "1 day ago",
      logo: "📢",
      salary: "$90k - $130k"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      postedTime: "1 day ago",
      logo: "☁️",
      salary: "$105k - $155k"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, jobs.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, jobs.length - 2)) % Math.max(1, jobs.length - 2));
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Recent Job Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest opportunities from top companies across various industries
          </p>
        </div>

        {/* Jobs Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 border border-gray-200/50"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 border border-gray-200/50"
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

          {/* Jobs Grid */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {jobs.map((job) => (
                <div key={job.id} className="w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:border-amber-200 group">
                    {/* Company Logo */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{job.logo}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.postedTime}
                      </div>
                    </div>

                    {/* Job Info */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{job.company}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{job.location}</span>
                    </div>

                    {/* Salary and Type */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-amber-600">{job.salary}</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>

                    {/* Apply Button */}
                    <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.max(1, jobs.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;