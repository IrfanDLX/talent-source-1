import React from "react";
import { Briefcase, Search, FileCheck, ThumbsUp } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const HowItWorksEmployer = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Post Your Job",
      description:
        "Easily create and publish job listings to reach top talent in your industry.",
      icon: <Briefcase className="h-8 w-8" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Find the Right Candidates",
      description:
        "Use smart filters and AI-powered recommendations to identify the best-fit professionals.",
      icon: <Search className="h-8 w-8" />,
      gradient: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Review & Shortlist",
      description:
        "Easily review applications, compare profiles, and shortlist top candidates in one place.",
      icon: <FileCheck className="h-8 w-8" />,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Hire with Confidence",
      description:
        "Connect with shortlisted talent, schedule interviews, and make smarter hiring decisions.",
      icon: <ThumbsUp className="h-8 w-8" />,
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Talent Source Works for Employers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your hiring process in just four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-amber-400 transition-all duration-300 group hover:shadow-lg text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-amber-500 transition-colors duration-200">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6 text-lg">
            Ready to hire top talent faster?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
              Post a Job Now
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-4 rounded-xl border border-gray-200 hover:border-amber-400 transition-all duration-200">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-amber-500 mb-2">85%</div>
            <div className="text-gray-700">Faster Hiring</div>
          </div>
          <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-amber-500 mb-2">
              10 Days
            </div>
            <div className="text-gray-700">Average Time to Fill</div>
          </div>
          <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-amber-500 mb-2">4.9/5</div>
            <div className="text-gray-700">Employer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksEmployer;
