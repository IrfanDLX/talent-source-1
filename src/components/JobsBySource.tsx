import React, { useState } from 'react';
import { Building, Filter, CheckCircle } from 'lucide-react';

interface JobSource {
  id: string;
  name: string;
  count: number;
  icon: string;
  category: string;
}

const JobsBySource = () => {
  const [selectedSources, setSelectedSources] = useState<string[]>(['all']);

  const jobSources: JobSource[] = [
    { id: 'tech', name: 'Tech Companies', count: 12500, icon: '💻', category: 'Technology' },
    { id: 'finance', name: 'Financial Services', count: 8300, icon: '🏦', category: 'Finance' },
    { id: 'healthcare', name: 'Healthcare', count: 9200, icon: '🏥', category: 'Healthcare' },
    { id: 'startup', name: 'Startups', count: 6800, icon: '🚀', category: 'Technology' },
    { id: 'consulting', name: 'Consulting', count: 5400, icon: '📊', category: 'Business' },
    { id: 'retail', name: 'Retail & E-commerce', count: 7600, icon: '🛒', category: 'Retail' },
    { id: 'education', name: 'Education', count: 4200, icon: '🎓', category: 'Education' },
    { id: 'manufacturing', name: 'Manufacturing', count: 5900, icon: '🏭', category: 'Manufacturing' }
  ];

  const handleSourceToggle = (sourceId: string) => {
    if (sourceId === 'all') {
      setSelectedSources(['all']);
    } else {
      const newSelection = selectedSources.includes(sourceId)
        ? selectedSources.filter(id => id !== sourceId)
        : [...selectedSources.filter(id => id !== 'all'), sourceId];
      
      setSelectedSources(newSelection.length > 0 ? newSelection : ['all']);
    }
  };

  const totalJobs = selectedSources.includes('all') 
    ? jobSources.reduce((sum, source) => sum + source.count, 0)
    : selectedSources.reduce((sum, sourceId) => {
        const source = jobSources.find(s => s.id === sourceId);
        return sum + (source?.count || 0);
      }, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Jobs by Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Filter opportunities by industry sectors and find roles that match your expertise
          </p>
        </div>

      

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Filter className="h-5 w-5 text-amber-400" />
            <span className="text-white font-medium">Filter by Industry:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSourceToggle('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedSources.includes('all')
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All Industries
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block border border-white/20">
            <span className="text-2xl font-bold text-amber-400">{totalJobs.toLocaleString()}</span>
            <span className="text-white ml-2">available positions</span>
          </div>
        </div>

        {/* Job Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobSources.map((source) => {
            const isSelected = selectedSources.includes(source.id) || selectedSources.includes('all');
            
            return (
              <div
                key={source.id}
                onClick={() => handleSourceToggle(source.id)}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected ? 'ring-2 ring-amber-500' : ''
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-500/50 hover:bg-white/20 group">
                  {/* Icon and Selection Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{source.icon}</div>
                    {isSelected && (
                      <CheckCircle className="h-6 w-6 text-amber-400" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {source.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">{source.category}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-400">
                      {source.count.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">open positions</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 bg-gray-700/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(source.count / 12500) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
            Browse All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsBySource;