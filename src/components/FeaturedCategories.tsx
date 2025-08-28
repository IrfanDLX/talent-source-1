import React from "react";
import {
  Code,
  Heart,
  TrendingUp,
  DollarSign,
  Building,
  Users,
  Palette,
  Shield,
  Ruler,
  Hammer,
  ShoppingBag,
  Utensils,
  Briefcase,
  Truck,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  jobCount: number;
  description: string;
  gradient: string;
}

const FeaturedCategories = () => {
  const categories: Category[] = [
    {
      id: "hospitality",
      name: "Hospitality",
      icon: <Building className="h-8 w-8" />,
      jobCount: 8420,
      description: "Hotels, Restaurants, Guest Services",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "warehouse",
      name: "Warehouse & Logistics",
      icon: <Truck className="h-8 w-8" />,
      jobCount: 7210,
      description: "Supply Chain, Inventory, Distribution",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "healthcare",
      name: "Healthcare Source",
      icon: <Heart className="h-8 w-8" />,
      jobCount: 6590,
      description: "Nursing, Medical, Pharmaceutical",
      gradient: "from-red-500 to-pink-600",
    },
    {
      id: "office",
      name: "Office Source",
      icon: <Briefcase className="h-8 w-8" />,
      jobCount: 5340,
      description: "Admin, Clerical, Corporate Roles",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: "retail",
      name: "Retail Source",
      icon: <ShoppingBag className="h-8 w-8" />,
      jobCount: 6120,
      description: "Sales, Store Management, Customer Service",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: "food",
      name: "Food Source",
      icon: <Utensils className="h-8 w-8" />,
      jobCount: 4780,
      description: "Catering, Food Production, Kitchen Staff",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "construction",
      name: "Construction Source",
      icon: <Hammer className="h-8 w-8" />,
      jobCount: 3890,
      description: "Labor, Site Management, Project Work",
      gradient: "from-gray-500 to-slate-600",
    },
    {
      id: "fitout",
      name: "Fit out Source",
      icon: <Ruler className="h-8 w-8" />,
      jobCount: 2950,
      description: "Interior Design, Shopfitting, Installations",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Jobs by Sources
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Filter opportunities by job sources and find roles that match your
            expertise
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-amber-400/40 h-full">
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  {category.icon}
                </div>

                {/* Category Info */}
                <h3 className="text-xl text-white font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                  {category.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Job Count */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    {category.jobCount.toLocaleString()}
                  </span>
                  <span className="text-gray-300 text-sm">jobs available</span>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-500 group-hover:w-full`}
                    style={{
                      width: `${Math.min(
                        (category.jobCount / 15420) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Can't find your category? We have hundreds more!
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
