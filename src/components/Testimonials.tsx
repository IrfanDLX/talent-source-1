import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "TechFlow Inc",
      content: "Talent Source completely transformed my job search experience. I found my dream job within 2 weeks, and the entire process was seamless. The personalized recommendations were spot-on!",
      rating: 5,
      avatar: "👩‍💻",
      industry: "Technology"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "BrandForce",
      content: "As someone who had been job hunting for months, Talent Source was a game-changer. The quality of job listings and the ease of application made all the difference. Highly recommended!",
      rating: 5,
      avatar: "👨‍💼",
      industry: "Marketing"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Analytics Pro",
      content: "The AI-powered job matching is incredible. I received opportunities that perfectly aligned with my skills and career goals. The support team was also extremely helpful throughout my journey.",
      rating: 5,
      avatar: "👩‍🔬",
      industry: "Data Science"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "UX Designer",
      company: "DesignStudio",
      content: "I love how user-friendly the platform is. The one-click applications saved me hours, and I could track all my applications in one place. Found my current position in just 10 days!",
      rating: 5,
      avatar: "👨‍🎨",
      industry: "Design"
    },
    {
      id: 5,
      name: "Amanda Foster",
      role: "Financial Analyst",
      company: "InvestCorp",
      content: "The career coaching and resume review services were invaluable. Not only did I find a great job, but I also improved my professional profile significantly. Worth every penny!",
      rating: 5,
      avatar: "👩‍💼",
      industry: "Finance"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals say about their experience with Talent Source.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-amber-400/30">
              <Quote className="h-12 w-12" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed font-medium">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="text-4xl mb-4">{testimonials[currentIndex].avatar}</div>
              <div className="text-xl font-semibold text-white mb-1">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-amber-400 font-medium mb-1">
                {testimonials[currentIndex].role}
              </div>
              <div className="text-gray-300">
                {testimonials[currentIndex].company}
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100/20 text-amber-300 text-sm font-medium mt-2">
                {testimonials[currentIndex].industry}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">10K+</div>
            <div className="text-gray-300">Happy Users</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">95%</div>
            <div className="text-gray-300">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;