import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Essential Skills for Remote Workers in 2025",
      excerpt: "Discover the key competencies that will set you apart in the remote work landscape and boost your career prospects.",
      author: "Sarah Mitchell",
      publishDate: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Career Development",
      image: "💼",
      tags: ["Remote Work", "Skills", "Career Growth"]
    },
    {
      id: 2,
      title: "How to Ace Your Next Virtual Interview",
      excerpt: "Master the art of virtual interviews with expert tips on preparation, technology setup, and making a lasting impression.",
      author: "Michael Chen",
      publishDate: "Jan 12, 2025",
      readTime: "6 min read",
      category: "Interview Tips",
      image: "🎯",
      tags: ["Interviews", "Tips", "Success"]
    },
    {
      id: 3,
      title: "Salary Negotiation: A Complete Guide for 2025",
      excerpt: "Learn proven strategies to negotiate better compensation packages and maximize your earning potential.",
      author: "Emma Rodriguez",
      publishDate: "Jan 10, 2025",
      readTime: "12 min read",
      category: "Salary & Benefits",
      image: "💰",
      tags: ["Negotiation", "Salary", "Career"]
    }
  ];

  const categories = [
    { name: "Career Development", count: 45, icon: <TrendingUp className="h-5 w-5" /> },
    { name: "Interview Tips", count: 28, icon: <Users className="h-5 w-5" /> },
    { name: "Industry Insights", count: 32, icon: <BookOpen className="h-5 w-5" /> },
    { name: "Salary & Benefits", count: 19, icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Career Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the curve with expert advice, industry trends, and practical tips to accelerate your career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:border-amber-200 group overflow-hidden ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`flex ${index === 0 ? 'flex-col md:flex-row' : 'flex-col'}`}>
                    {/* Image */}
                    <div className={`${index === 0 ? 'md:w-1/2' : 'w-full'} bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-6xl p-8`}>
                      {post.image}
                    </div>

                    {/* Content */}
                    <div className={`${index === 0 ? 'md:w-1/2' : 'w-full'} p-6`}>
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-3">
                        {post.category}
                      </div>

                      {/* Title */}
                      <h3 className={`font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-200 ${
                        index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.publishDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 group/button">
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Posts Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                View All Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-50 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-500 group-hover:text-amber-600 transition-colors duration-200">
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="bg-gray-200 group-hover:bg-amber-200 text-gray-600 group-hover:text-amber-700 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get the latest career tips and industry insights delivered to your inbox weekly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;