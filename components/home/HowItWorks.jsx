"use client"
import React, { useState } from 'react';
import { X, FileText, Shield, BookOpen, Award } from 'lucide-react';

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: FileText,
      title: "Sign up",
      description: "Create your account and get started with our comprehensive learning platform in just a few minutes.",
      details: `Getting started is simple and straightforward. Here's what happens when you sign up:

• Create your personalized profile with your learning goals and interests
• Choose your preferred learning style and pace
• Access our welcome tutorial that guides you through all features
• Set up your learning dashboard with customizable widgets
• Connect with our community of learners from around the world
• Get access to free starter courses to begin your journey immediately

Our registration process is designed to be secure and user-friendly. We use industry-standard encryption to protect your personal information, and you can start learning within minutes of creating your account.

Once registered, you'll receive a welcome email with helpful tips and resources to maximize your learning experience. Our support team is also available 24/7 to help you get started.`
    },
    {
      id: 2,
      icon: Shield,
      title: "Select course",
      description: "Browse through our extensive catalog of courses and choose the one that matches your learning objectives.",
      details: `Our course selection process is designed to help you find the perfect learning path:

• Browse over 500+ courses across multiple categories and skill levels
• Use advanced filters to find courses by duration, difficulty, and topic
• Read detailed course descriptions, learning outcomes, and prerequisites
• Check instructor profiles and student reviews before enrolling
• Preview course materials and sample lessons before making a decision
• Access personalized course recommendations based on your interests

Each course includes:
- Comprehensive curriculum with clear learning objectives
- Interactive assignments and practical projects
- Access to instructor support and peer discussion forums
- Progress tracking and performance analytics
- Mobile-friendly content for learning on the go
- Lifetime access to course materials and updates

Our AI-powered recommendation engine analyzes your learning history and preferences to suggest courses that align with your career goals and interests.`
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Start Learning",
      description: "Dive into interactive lessons, complete assignments, and track your progress as you master new skills.",
      details: `Your learning journey begins with engaging, interactive content designed for maximum retention:

• Access video lectures, interactive simulations, and hands-on exercises
• Complete quizzes and assignments that reinforce key concepts
• Participate in live webinars and discussion forums with instructors and peers
• Track your progress with detailed analytics and performance metrics
• Set learning goals and receive personalized study recommendations
• Download mobile apps for learning anywhere, anytime

Learning Features:
- Adaptive learning technology that adjusts to your pace
- Gamification elements including badges, points, and leaderboards
- Collaborative projects with other students worldwide
- Real-world case studies and practical applications
- Regular assessments to measure your understanding
- Personal learning assistant powered by AI

Our platform supports multiple learning styles with visual, auditory, and kinesthetic content options. You can adjust playback speeds, enable subtitles, and access transcripts for all video content.`
    },
    {
      id: 4,
      icon: Award,
      title: "Get Certificate",
      description: "Upon successful completion, receive industry-recognized certificates to showcase your newly acquired skills.",
      details: `Earn valuable credentials that validate your skills and enhance your professional profile:

• Receive industry-recognized certificates upon course completion
• Digital certificates that can be shared on LinkedIn, resume, and portfolio
• Detailed skill assessments and competency evaluations
• Blockchain-verified credentials for authenticity and security
• Career guidance and job placement assistance for certified learners
• Access to exclusive alumni network and professional opportunities

Certificate Benefits:
- Recognized by leading companies and industry organizations
- Detailed breakdown of skills and competencies acquired
- QR code verification for easy authentication by employers
- Professional certificate design suitable for framing and display
- Integration with popular professional networking platforms
- Continuing education credits where applicable

Our certificates are backed by partnerships with industry leaders and academic institutions. Many of our graduates have used these credentials to advance their careers, secure promotions, or transition into new fields.

Additionally, you'll gain access to our exclusive job board, career coaching services, and networking events to help you leverage your new skills in the marketplace.`
    }
  ];

  const handleReadMore = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStep(null);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
          <span className="px-4 text-sm font-medium text-gray-600 uppercase tracking-wider">What we do</span>
          <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How it works?</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Our streamlined learning process is designed to take you from beginner to expert through a proven 4-step methodology. 
          Join thousands of learners who have successfully transformed their careers with our comprehensive approach.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div key={step.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.id}
              </div>
              
              {/* Icon */}
              <div className="w-20 h-20 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-10 h-10 text-gray-800" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6 line-height-relaxed">{step.description}</p>
              
              {/* Read More Button */}
              <button 
                onClick={() => handleReadMore(step)}
                className="inline-flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors duration-200 group"
              >
                Read More 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && selectedStep && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <selectedStep.icon className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedStep.title}</h3>
                  <p className="text-gray-600">Step {selectedStep.id} of 4</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="prose prose-gray max-w-none">
                {selectedStep.details.split('\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.startsWith('•') ? (
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">{paragraph.substring(2)}</li>
                      </ul>
                    ) : paragraph.startsWith('-') ? (
                      <ul className="list-disc pl-6 space-y-1">
                        <li className="text-gray-700">{paragraph.substring(2)}</li>
                      </ul>
                    ) : paragraph.trim() && !paragraph.includes(':') ? (
                      <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                    ) : paragraph.includes(':') ? (
                      <h4 className="font-semibold text-gray-900 mt-6 mb-3">{paragraph}</h4>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 pb-6">
              <button 
                onClick={closeModal}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;