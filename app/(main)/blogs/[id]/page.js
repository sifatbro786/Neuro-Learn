"use client";
import { useParams } from 'next/navigation';

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

export default function BlogDetails() {
  const params = useParams(); // get blog id from URL
  const blogId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === blogId);

  if (!post) return <div className="p-10 text-center text-red-600">Blog not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date} — {post.author}</p>
        <p className="text-gray-800 mb-6">{post.excerpt}</p>
        <p className="text-gray-700">
          {/* Placeholder for full content; replace with real blog content */}
          This is the detailed page for "{post.title}". You can add full blog content here.
        </p>
      </div>
    </div>
  );
}
