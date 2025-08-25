"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LearningPlatformComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample data - you can replace these with your actual images and content
  const slides = [
    {
      id: 1,
      title: "Learn From Industry Experts",
      description: "Whether you want to learn or to share what you know, you've come to the right place. As a global destination for online learning, we connect people through knowledge.",
      image: "/hero/trainingroom.png" // Replace with your actual image path
    },
    {
      id: 2,
      title: "Interactive Learning Experience",
      description: "Engage with dynamic content and hands-on projects that make learning both effective and enjoyable. Our platform adapts to your learning style.",
      image: "/hero/trainingroom2.png" // Replace with your actual image path
    },
    {
      id: 3,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to course materials. Perfect for busy professionals and students who need flexibility in their learning journey.",
      image: "/hero/flexible.jpg" // Replace with your actual image path
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Changing <span className='text-red-600'> learning </span>for the better
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore all of our courses and pick your suitable ones to enroll and start learning with us!
          </p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px]">
            {/* Image Section */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
              <img 
                src={slides[currentSlide].image}
                alt="Learning environment"
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 scale-110' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Start Learning
                  </button>
                  <button className="border-2 hover:bg-red-500 border-slate-300 hover:border-slate-400 text-slate-700  px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:text-white">
                    Browse Courses
                  </button>
                </div>

                {/* Progress indicator */}
                <div className="mt-8 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-blue-600 w-8' 
                            : 'bg-slate-300 w-2'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500 ml-3">
                    {currentSlide + 1} of {slides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Instructors</h3>
            <p className="text-slate-600">Learn from industry professionals with years of experience</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Flexible Learning</h3>
            <p className="text-slate-600">Study at your own pace, anywhere and anytime</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Certificates</h3>
            <p className="text-slate-600">Earn recognized certificates upon course completion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatformComponent;