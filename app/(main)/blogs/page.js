
"use client";

import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Heart, Share2, BookmarkPlus, Eye } from 'lucide-react';

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "The Future of Machine Learning in Education",
    excerpt: "Discover how AI and ML are revolutionizing the way we learn and teach in the digital age.",
    content: `
      <p>Machine Learning (ML) is transforming education in unprecedented ways. From personalized learning paths to intelligent tutoring systems, AI is creating more effective and engaging educational experiences.</p>
      
      <h3>Personalized Learning Experiences</h3>
      <p>One of the most significant impacts of ML in education is the ability to create personalized learning experiences. By analyzing student behavior, performance data, and learning patterns, AI can adapt content difficulty, suggest relevant resources, and identify areas where students need additional support.</p>
      
      <h3>Intelligent Assessment Systems</h3>
      <p>Traditional assessment methods are being enhanced with ML algorithms that can provide instant feedback, detect learning gaps, and offer targeted recommendations. These systems can analyze not just the final answers but also the learning process itself.</p>
      
      <h3>Challenges and Considerations</h3>
      <p>While the potential is enormous, implementing ML in education comes with challenges including data privacy, algorithm bias, and the need for teacher training. Educational institutions must carefully balance innovation with ethical considerations.</p>
      
      <p>As we move forward, the integration of ML in education will continue to evolve, promising more accessible, effective, and engaging learning experiences for students worldwide.</p>
    `,
    author: "Dr. Sarah Johnson",
    publishDate: "2024-08-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "Education", "Machine Learning", "EdTech"],
    views: 1240,
    likes: 89
  },
  {
    id: 2,
    title: "Building Effective Online Learning Communities",
    excerpt: "Learn the strategies and best practices for creating engaging virtual learning environments.",
    content: `
      <p>Online learning communities have become essential for successful digital education. They provide the social interaction and collaborative learning that traditional online courses often lack.</p>
      
      <h3>Creating Engagement</h3>
      <p>Successful online communities require active moderation, regular content updates, and opportunities for meaningful interaction. Discussion forums, peer reviews, and collaborative projects help build connections among learners.</p>
      
      <h3>Technology Tools</h3>
      <p>Modern platforms offer various tools to facilitate community building: video conferencing, chat systems, collaborative workspaces, and social learning features. Choosing the right combination is crucial for community success.</p>
      
      <h3>Best Practices</h3>
      <p>Regular virtual events, mentorship programs, and gamification elements can significantly boost engagement. Clear community guidelines and responsive support also contribute to a positive learning environment.</p>
      
      <p>The future of online education depends heavily on our ability to create meaningful connections in virtual spaces, making community building a critical skill for educators and platform designers alike.</p>
    `,
    author: "Michael Chen",
    publishDate: "2024-08-10",
    readTime: "6 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    tags: ["Online Learning", "Community", "Engagement", "Education"],
    views: 892,
    likes: 67
  },
  {
    id: 3,
    title: "Microlearning: The Power of Bite-Sized Education",
    excerpt: "Explore how breaking down complex topics into small, digestible chunks can improve learning outcomes.",
    content: `
      <p>Microlearning has emerged as one of the most effective educational strategies for our fast-paced world. By delivering content in small, focused segments, learners can better retain information and fit education into their busy schedules.</p>
      
      <h3>The Science Behind Microlearning</h3>
      <p>Research shows that our brains process information more effectively when it's presented in small chunks. This approach aligns with cognitive load theory and the spacing effect, leading to better long-term retention.</p>
      
      <h3>Implementation Strategies</h3>
      <p>Effective microlearning involves breaking complex topics into 3-5 minute modules, using multimedia elements, and providing immediate application opportunities. Mobile-friendly formats are essential for accessibility.</p>
      
      <h3>Benefits for Modern Learners</h3>
      <p>Microlearning fits perfectly with today's attention spans and busy lifestyles. It reduces cognitive overload, increases completion rates, and allows for just-in-time learning when specific skills are needed.</p>
      
      <p>As educational technology continues to evolve, microlearning will play an increasingly important role in making education more accessible and effective for diverse learning styles and schedules.</p>
    `,
    author: "Emma Rodriguez",
    publishDate: "2024-08-05",
    readTime: "5 min read",
    category: "Learning Methods",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    tags: ["Microlearning", "Education", "Learning Methods", "Productivity"],
    views: 1156,
    likes: 94
  }
];

// Blog List Component
const BlogList = ({ onSelectBlog }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Technology', 'Community', 'Learning Methods'];
  
  const filteredBlogs = selectedCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights, tips, and stories from the world of online education and technology
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onSelectBlog(blog)}
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {blog.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blog.readTime}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {blog.views}
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {blog.likes}
                  </div>
                </div>
                
                <button className="flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};