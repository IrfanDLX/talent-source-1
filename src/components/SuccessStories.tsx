import React from "react";
import { TrendingUp, Award, Users, MapPin } from "lucide-react";

interface SuccessStory {
  id: number;
  name: string;
  previousRole: string;
  currentRole: string;
  company: string;
  location: string;
  avatar: string;
  story: string;
  timeframe: string;
  salaryIncrease: string;
  industry: string;
}

const SuccessStories = () => {
  const stories: SuccessStory[] = [
    {
      id: 1,
      name: "Alex Rivera",
      previousRole: "Junior Developer",
      currentRole: "Senior Full Stack Engineer",
      company: "InnovateTech",
      location: "San Francisco, CA",
      avatar: "👨‍💻",
      story:
        "After 3 years at my previous job, I felt stuck. Talent Source helped me find opportunities that valued my skills and offered real growth potential. The career transition was smooth and rewarding.",
      timeframe: "3 weeks",
      salaryIncrease: "+65%",
      industry: "Technology",
    },
    {
      id: 2,
      name: "Jessica Park",
      previousRole: "Marketing Coordinator",
      currentRole: "Brand Manager",
      company: "GlobalBrands Co",
      location: "New York, NY",
      avatar: "👩‍💼",
      story:
        "I was looking for a role that would challenge me creatively. Talent Source connected me with a company that truly values innovation and employee growth. Best career move I've ever made!",
      timeframe: "2 weeks",
      salaryIncrease: "+45%",
      industry: "Marketing",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      previousRole: "Data Analyst",
      currentRole: "Lead Data Scientist",
      company: "DataDriven Solutions",
      location: "Austin, TX",
      avatar: "👨‍🔬",
      story:
        "The platform's AI matching was incredible. I received offers from companies I never would have found on my own. The entire process was transparent and efficient.",
      timeframe: "4 weeks",
      salaryIncrease: "+70%",
      industry: "Data Science",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet some of the thousands of professionals who have transformed
            their careers with Talent Source
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-amber-400/40 group"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{story.avatar}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-200">
                    {story.name}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {story.location}
                  </div>
                </div>
              </div>

              {/* Career Progression */}
              <div className="mb-6">
                <div className="bg-slate-800/70 rounded-lg p-4 mb-3">
                  <div className="text-sm text-gray-400 mb-1">
                    Previous Role
                  </div>
                  <div className="font-medium text-gray-200">
                    {story.previousRole}
                  </div>
                </div>

                <div className="flex justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-amber-400" />
                </div>

                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-lg p-4">
                  <div className="text-sm text-amber-300 mb-1">
                    Current Role
                  </div>
                  <div className="font-semibold text-amber-200">
                    {story.currentRole}
                  </div>
                  <div className="text-sm text-amber-400 mt-1">
                    at {story.company}
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center  rounded-lg p-3">
                  <div className="text-lg font-bold text-green-400">
                    {story.salaryIncrease}
                  </div>bg-slate-800/70
                  <div className="text-xs text-gray-400">Salary Increase</div>
                </div>
                <div className="text-center bg-slate-800/70 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-400">
                    {story.timeframe}
                  </div>
                  <div className="text-xs text-gray-400">Time to Hire</div>
                </div>
              </div>

              {/* Story */}
              <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                "{story.story}"
              </blockquote>

              {/* Industry Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium">
                {story.industry}
              </div>
            </div>
          ))}
        </div>

        {/* Overall Impact Stats */}
        <div className="bg-slate-800/80 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Talent Source Impact
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These numbers represent real career transformations and
              life-changing opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">+58%</div>
              <div className="text-gray-400 text-sm">
                Average Salary Increase
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">89%</div>
              <div className="text-gray-400 text-sm">
                Career Advancement Rate
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                100K+
              </div>
              <div className="text-gray-400 text-sm">Lives Transformed</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-amber-400 mb-2">18</div>
              <div className="text-gray-400 text-sm">Days Average to Hire</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to write your own success story?
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
