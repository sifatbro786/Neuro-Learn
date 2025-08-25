"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutUs = () => {
  // Refs for sections
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const ceoRef = useRef(null);
  const progressRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const ceoInView = useInView(ceoRef, { once: true, amount: 0.3 });
  const progressInView = useInView(progressRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // For swiper progress bar
  const [swiperProgress, setSwiperProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Timeline data
  const timelineData = [
    { 
      year: 2012, 
      event: "Foundation of Techlight IT Institute", 
      icon: "🌱", 
      details: "Techlight IT Institute was established as an authorized training and testing center in Bangladesh, with a mission to deliver quality, job-oriented IT training." 
    },
    { 
      year: 2014, 
      event: "First Major Achievement", 
      icon: "👥", 
      details: "Crossed the milestone of 100+ students. Our reputation began to grow among both students and professionals looking for career-focused IT training." 
    },
    { 
      year: 2016, 
      event: "Expansion to New Campus", 
      icon: "🏢", 
      details: "With increasing demand, Techlight moved into a larger campus with advanced lab facilities, modern classrooms, and professional learning environments." 
    },
    { 
      year: 2018, 
      event: "Launch of Online Training Platform", 
      icon: "💻", 
      details: "Introduced online training programs, making it possible for students nationwide to access our professional IT courses from anywhere in Bangladesh." 
    },
    { 
      year: 2020, 
      event: "5000+ Graduates", 
      icon: "🎓", 
      details: "By this year, Techlight successfully trained and graduated over 5000 students who are working in IT companies, both locally and internationally." 
    },
    { 
      year: 2022, 
      event: "Industry Partnerships", 
      icon: "🤝", 
      details: "Built strong partnerships with leading industries to ensure practical, job-oriented skills for our students and to bridge academic knowledge with real-world practice." 
    },
    { 
      year: 2024, 
      event: "AI & Emerging Tech Integration", 
      icon: "🤖", 
      details: "Integrated Artificial Intelligence, Cloud, and Cybersecurity training into our curriculum, keeping pace with global IT transformation." 
    },
    { 
      year: 2025, 
      event: "Future Vision", 
      icon: "🚀", 
      details: "Moving towards becoming the number one choice for job-oriented training in Bangladesh, focusing on innovation, experiential learning, and international certifications." 
    }
  ];

  // Stats counting animation
  const StatsCounter = ({ value, label, icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        const suffix = value.replace(/[0-9]/g, '');
        const duration = 2000; // 2 seconds
        const incrementTime = 20; // update every 20ms
        const steps = duration / incrementTime;
        const increment = Math.ceil(end / steps);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end + suffix);
            clearInterval(timer);
          } else {
            setCount(start + suffix);
          }
        }, incrementTime);
        
        return () => clearInterval(timer);
      }
    }, [isInView, value]);
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
      >
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-4xl font-bold text-blue-600 mb-1">{count}</h3>
        <p className="text-gray-600">{label}</p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Techlight IT Institute</h1>
              <p className="text-xl mb-8">Empowering Bangladesh's workforce with job-oriented IT training since 2012</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg"
                onClick={() => {
                  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:w-1/2 mt-10 md:mt-0"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Techlight IT Institute" 
                  className="rounded-lg shadow-2xl w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Mission" 
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the number one choice for job-oriented training for Bangladesh's huge manpower as per market demand, bridging the gap between academic theory and real-world practice.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Job-Oriented
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Market Demand
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Vision" 
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="flex items-center">
                  <div className="bg-purple-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower both skilled and unskilled individuals with practical IT skills that enhance work performance and create career opportunities in the rapidly transforming digital economy.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Skill Enhancement
                  </div>
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Career Growth
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO & Founder Message */}
      <section ref={ceoRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ceoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 bg-blue-700 text-white flex flex-col justify-center items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="CEO of Techlight" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Founder & CEO</h3>
                <p className="text-blue-200">Techlight IT Institute</p>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Message from Our Founder</h2>
                <blockquote className="text-gray-600 text-lg italic border-l-4 border-blue-600 pl-6 mb-6">
                  "At Techlight, we believe in the transformative power of technology education. Since our establishment in 2012, we've been committed to delivering world-class technical education that meets market demands. Our interactive and challenging courses are designed to bridge academic theory with real-world practice, ensuring our students are prepared for the challenges of today's digital economy."
                </blockquote>
                <p className="text-gray-700 font-medium">
                  We take pride in our role as a leading training and testing center in Bangladesh, shaping the future of our nation's IT workforce.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress & Stats Section */}
      <section ref={progressRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={progressInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              Our Achievements
            </h2>
          </motion.div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <StatsCounter icon="📚" value="13+" label="Years of Excellence" />
            <StatsCounter icon="👨‍🎓" value="10000+" label="Students Trained" />
            <StatsCounter icon="💻" value="75+" label="Courses Offered" />
            <StatsCounter icon="🎯" value="98%" label="Employment Rate" />
          </div>
        </div>
      </section>

      {/* Timeline Section with Swiper */}
      <section ref={timelineRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              Our Journey & Milestones
            </h2>
            
            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${(swiperProgress) * 100}%` }}
                />
              </div>
              
              {/* Progress Dots */}
              <div className="absolute top-0 left-0 w-full flex justify-between items-center transform -translate-y-1/2">
                {timelineData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      index <= activeSlide 
                        ? 'bg-blue-500 border-blue-500' 
                        : 'bg-white border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Timeline Swiper */}
            <div className="timeline-swiper">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  el: '.swiper-pagination-custom',
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} !bg-blue-500 !opacity-100"></span>`;
                  }
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.activeIndex);
                  setSwiperProgress((swiper.activeIndex + 1) / timelineData.length);
                }}
                onProgress={(swiper, progress) => {
                  setSwiperProgress(progress);
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  }
                }}
                className="pb-16"
              >
                {timelineData.map((item, index) => (
                  <SwiperSlide key={item.year}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex flex-col items-center h-full"
                    >
                      {/* Timeline Dot */}
                      <div className={`relative z-10 w-8 h-8 rounded-full shadow-lg mb-6 flex items-center justify-center transition-all duration-300 ${
                        index <= activeSlide 
                          ? 'bg-blue-500 border-4 border-blue-200' 
                          : 'bg-white border-4 border-gray-300'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index <= activeSlide ? 'bg-white' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full h-80 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl">{item.icon}</span>
                          <span className="text-xl font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-shrink-0">{item.event}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow overflow-hidden">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button className="swiper-button-prev-custom w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="swiper-pagination-custom flex space-x-2"></div>
                
                <button className="swiper-button-next-custom w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Custom Styles */}
        <style jsx>{`
          .timeline-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #cbd5e0;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          
          .timeline-swiper .swiper-pagination-bullet-active {
            background-color: #3b82f6 !important;
            opacity: 1;
            transform: scale(1.2);
          }
          
          .swiper-button-prev-custom:disabled,
          .swiper-button-next-custom:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section id="contact-section" ref={ctaRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of successful graduates who have advanced their careers with Techlight's job-oriented training programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-semibold text-lg py-4 px-10 rounded-lg shadow-lg"
            >
              Contact Us Today
            </motion.button>
            <p className="mt-8 text-blue-100">Email: info@techlight.com | Phone: +8801711310768</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;