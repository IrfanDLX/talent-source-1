// import React from 'react';
// import { Building2, Users, Award, Handshake } from 'lucide-react';

// interface Partner {
//   id: string;
//   name: string;
//   logo: string;
//   industry: string;
//   employees: string;
// }

// const Partners = () => {
//   const partners: Partner[] = [
//     { id: '1', name: 'TechFlow', logo: '🚀', industry: 'Technology', employees: '10K+' },
//     { id: '2', name: 'GlobalBank', logo: '🏦', industry: 'Finance', employees: '50K+' },
//     { id: '3', name: 'HealthCorp', logo: '🏥', industry: 'Healthcare', employees: '25K+' },
//     { id: '4', name: 'InnovateNow', logo: '💡', industry: 'Startup', employees: '500+' },
//     { id: '5', name: 'DataPro', logo: '📊', industry: 'Analytics', employees: '5K+' },
//     { id: '6', name: 'DesignStudio', logo: '🎨', industry: 'Creative', employees: '1K+' },
//     { id: '7', name: 'ManufactureX', logo: '🏭', industry: 'Manufacturing', employees: '15K+' },
//     { id: '8', name: 'RetailPlus', logo: '🛒', industry: 'Retail', employees: '30K+' },
//     { id: '9', name: 'EduTech', logo: '🎓', industry: 'Education', employees: '8K+' },
//     { id: '10', name: 'CloudSystems', logo: '☁️', industry: 'Cloud', employees: '3K+' },
//     { id: '11', name: 'LogiCorp', logo: '🚛', industry: 'Logistics', employees: '20K+' },
//     { id: '12', name: 'MediaFlow', logo: '📱', industry: 'Media', employees: '2K+' }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Trusted by Leading Companies
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Join thousands of top employers who trust TalentSource to find exceptional talent across all industries
//           </p>
//         </div>

//         {/* Partnership Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
//           <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
//               <Building2 className="h-6 w-6" />
//             </div>
//             <div className="text-2xl font-bold text-amber-400 mb-1">25K+</div>
//             <div className="text-gray-300 text-sm">Partner Companies</div>
//           </div>

//           <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//             <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
//               <Users className="h-6 w-6" />
//             </div>
//             <div className="text-2xl font-bold text-amber-400 mb-1">2M+</div>
//             <div className="text-gray-300 text-sm">Total Employees</div>
//           </div>

//           <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//             <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
//               <Award className="h-6 w-6" />
//             </div>
//             <div className="text-2xl font-bold text-amber-400 mb-1">15</div>
//             <div className="text-gray-300 text-sm">Industries</div>
//           </div>

//           <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//             <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
//               <Handshake className="h-6 w-6" />
//             </div>
//             <div className="text-2xl font-bold text-amber-400 mb-1">95%</div>
//             <div className="text-gray-300 text-sm">Satisfaction Rate</div>
//           </div>
//         </div>

//         {/* Partner Companies Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
//           {partners.map((partner) => (
//             <div
//               key={partner.id}
//               className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300 group hover:bg-white/10 text-center"
//             >
//               <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
//                 {partner.logo}
//               </div>
//               <h3 className="text-white font-medium mb-1 group-hover:text-amber-400 transition-colors duration-200">
//                 {partner.name}
//               </h3>
//               <p className="text-gray-400 text-xs mb-2">{partner.industry}</p>
//               <p className="text-amber-400 text-xs font-medium">{partner.employees} employees</p>
//             </div>
//           ))}
//         </div>

//         {/* Featured Partnership Testimonial */}
//          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
//           <div className="text-center mb-6">
//             <div className="text-5xl mb-4">🚀</div>
//             <h3 className="text-2xl font-bold text-white mb-2">TechFlow Inc</h3>
//             <p className="text-amber-400">Fortune 500 Technology Company</p>
//           </div>

//           <blockquote className="text-xl text-gray-300 text-center mb-6 leading-relaxed italic">
//             "TalentSource has revolutionized our hiring process. We've reduced time-to-hire by 60% and the quality of candidates has never been better. It's become an essential part of our talent acquisition strategy."
//           </blockquote>

//           <div className="text-center">
//             <p className="text-white font-medium">Jennifer Walsh</p>
//             <p className="text-gray-400 text-sm">VP of Talent Acquisition, TechFlow Inc</p>
//           </div>
//         </div>

//         {/* Partner Benefits */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
//               <Users className="h-8 w-8" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-3">Quality Candidates</h3>
//             <p className="text-gray-300">Access to pre-screened, qualified professionals across all skill levels and industries.</p>
//           </div>

//           <div className="text-center">
//             <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
//               <Building2 className="h-8 w-8" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-3">Streamlined Process</h3>
//             <p className="text-gray-300">Efficient hiring tools and automated workflows that save time and reduce costs.</p>
//           </div>

//           <div className="text-center">
//             <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
//               <Award className="h-8 w-8" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
//             <p className="text-gray-300">Personal account managers and 24/7 support to ensure your hiring success.</p>
//           </div>
//         </div>

//         {/* Call to Action for Employers */}
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Partner Network?</h3>
//           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//             Connect with top talent and transform your hiring process with TalentSource's comprehensive recruitment platform.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
//               Become a Partner
//             </button>
//             <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-amber-500/50 transition-all duration-200">
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

import React from "react";
import { Building2, Users, Award, Handshake } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  industry: string;
  employees: string;
}

const Partners = () => {
  const partners: Partner[] = [
    {
      id: "1",
      name: "TechFlow",
      logo: "🚀",
      industry: "Technology",
      employees: "10K+",
    },
    {
      id: "2",
      name: "GlobalBank",
      logo: "🏦",
      industry: "Finance",
      employees: "50K+",
    },
    {
      id: "3",
      name: "HealthCorp",
      logo: "🏥",
      industry: "Healthcare",
      employees: "25K+",
    },
    {
      id: "4",
      name: "InnovateNow",
      logo: "💡",
      industry: "Startup",
      employees: "500+",
    },
    {
      id: "5",
      name: "DataPro",
      logo: "📊",
      industry: "Analytics",
      employees: "5K+",
    },
    {
      id: "6",
      name: "DesignStudio",
      logo: "🎨",
      industry: "Creative",
      employees: "1K+",
    },
    {
      id: "7",
      name: "ManufactureX",
      logo: "🏭",
      industry: "Manufacturing",
      employees: "15K+",
    },
    {
      id: "8",
      name: "RetailPlus",
      logo: "🛒",
      industry: "Retail",
      employees: "30K+",
    },
    {
      id: "9",
      name: "EduTech",
      logo: "🎓",
      industry: "Education",
      employees: "8K+",
    },
    {
      id: "10",
      name: "CloudSystems",
      logo: "☁️",
      industry: "Cloud",
      employees: "3K+",
    },
    {
      id: "11",
      name: "LogiCorp",
      logo: "🚛",
      industry: "Logistics",
      employees: "20K+",
    },
    {
      id: "12",
      name: "MediaFlow",
      logo: "📱",
      industry: "Media",
      employees: "2K+",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of top employers who trust Talent Source to find
            exceptional talent across all industries
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
              <Building2 className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold text-amber-600 mb-1">25K+</div>
            <div className="text-gray-700 text-sm">Partner Companies</div>
          </div>

          <div className="text-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold text-amber-600 mb-1">2M+</div>
            <div className="text-gray-700 text-sm">Total Employees</div>
          </div>

          <div className="text-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
              <Award className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold text-amber-600 mb-1">15</div>
            <div className="text-gray-700 text-sm">Industries</div>
          </div>

          <div className="text-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
              <Handshake className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold text-amber-600 mb-1">95%</div>
            <div className="text-gray-700 text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* Partner Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-400/50 transition-all duration-300 group hover:shadow-md text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {partner.logo}
              </div>
              <h3 className="text-slate-900 font-medium mb-1 group-hover:text-amber-600 transition-colors duration-200">
                {partner.name}
              </h3>
              <p className="text-gray-500 text-xs mb-2">{partner.industry}</p>
              <p className="text-amber-600 text-xs font-medium">
                {partner.employees} employees
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action for Employers */}
        <div className="relative text-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join Our Partner Network?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with top talent and transform your hiring process with
              Talent Source's comprehensive recruitment platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="bg-white hover:bg-gray-50 text-slate-900 font-semibold px-8 py-4 rounded-xl border border-gray-300 hover:border-amber-500/50 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
