"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiSearch, FiTag, FiClock } from 'react-icons/fi';
import Link from 'next/link';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Blog data - Techlight IT Institute related
  const blogPosts = [
    {
      id: 1,
      title: "Why Choose Job-Oriented IT Training in Bangladesh",
      excerpt: "Discover how Techlight's job-oriented approach bridges the gap between academic learning and industry demands, ensuring 98% employment rate for our graduates.",
      date: "January 15, 2025",
      author: "Md. Rafiqul Islam",
      readTime: "6 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Career Development", "IT Training", "Bangladesh"]
    },
    {
      id: 2,
      title: "Top 5 IT Skills in Demand for 2025",
      excerpt: "Learn about the most sought-after IT skills in Bangladesh's job market and how Techlight's curriculum prepares you for these opportunities.",
      date: "January 10, 2025",
      author: "Sultana Khatun",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Cloud Computing", "Cybersecurity", "Web Development"]
    },
    {
      id: 3,
      title: "Success Story: From Unemployed to Senior Developer",
      excerpt: "Read how Ahmed transformed his career through Techlight's comprehensive training program and landed his dream job at a top tech company.",
      date: "December 28, 2024",
      author: "Nasir Ahmed",
      readTime: "5 min read",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Success Story", "Career Change", "Programming"]
    },
    {
      id: 4,
      title: "Digital Bangladesh 2025: IT Industry Growth",
      excerpt: "Explore how Bangladesh's IT sector is expanding and creating thousands of job opportunities for skilled professionals.",
      date: "December 20, 2024",
      author: "Dr. Farida Rahman",
      readTime: "10 min read",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Digital Bangladesh", "IT Industry", "Economic Growth"]
    },
    {
      id: 5,
      title: "Web Development vs Mobile App Development: Which to Choose?",
      excerpt: "Compare career prospects, salary ranges, and learning paths for web and mobile development in Bangladesh's tech market.",
      date: "December 15, 2024",
      author: "Khalil Rahman",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Development", "Mobile App", "Career Guide"]
    },
    {
      id: 6,
      title: "How to Prepare for IT Job Interviews in Bangladesh",
      excerpt: "Essential tips and strategies from Techlight's career counselors to help you ace technical interviews and land your first IT job.",
      date: "December 10, 2024",
      author: "Rashida Begum",
      readTime: "9 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Interview Tips", "Job Search", "Technical Skills"]
    }
  ];

  // Categories for filtering
  const categories = ['All', 'Career', 'Technology', 'Success Story', 'Industry'];

  // Filter posts by category
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Techlight IT Institute Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Career insights, industry updates, success stories, and expert guidance for Bangladesh's aspiring IT professionals.
          </p>
        </motion.header>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search career tips, success stories..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${post.category === 'Career' ? 'bg-green-100 text-green-800' :
                      post.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'Success Story' ? 'bg-purple-100 text-purple-800' :
                          post.category === 'Industry' ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                    }`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Link href={`/blogs/${post.id}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="inline-flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      <FiTag className="mr-1" size={10} />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-gray-400">+{post.tags.length - 2} more</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1" size={14} />
                    <span className="mr-3">{post.date}</span>
                    <FiUser className="mr-1" size={14} />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <Link href={`/blogs/${post.id}`} className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm group">
                    Read more <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Connected with Techlight</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Subscribe to receive career guidance, course updates, success stories, and industry insights from Bangladesh's leading IT training institute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 5000+ successful IT professionals already in our community
          </p>
        </motion.div>

        {/* Call to Action for Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your IT Career?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Transform your career with Bangladesh's most trusted IT training institute. Join over 10,000 successful graduates who are working in top tech companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              View Our Courses
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;