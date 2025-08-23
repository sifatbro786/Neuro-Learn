'use client';

import React, { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Target,
  DollarSign,
  BarChart2,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Settings,
  Award,
  Cog,
  Lightbulb
} from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
// import ServiceModal from "@/components/solutions/ServiceModal";
// import ScrollToTop from '@/components/ScrollToTop';

// Temporary ServiceModal component - replace with your actual modal
const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-gray-700">
            <p className="mb-4">{service.fullDescription}</p>
            {service.benefits && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Benefits:</h3>
                <ul className="list-disc list-inside">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Temporary ScrollToTop component - replace with your actual component
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors z-50"
    >
      <ArrowRight className="w-5 h-5 transform -rotate-90" />
    </button>
  );
};

export default function Solutions() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      shortDescription: "Maximize savings without sacrificing quality by leveraging strategic outsourcing, process automation, and global talent to achieve significant cost reductions and sustainable business growth.",
      fullDescription: "Our strategic outsourcing and process optimization solutions empower businesses to cut operational expenses by up to 60%—while sustaining or even elevating product and service quality. By leveraging global talent pools, advanced automation tools, and data-driven process improvements, we help you eliminate waste, reduce inefficiencies, and achieve more with less. We focus on lowering payroll, infrastructure, and administrative costs without compromising speed, performance, or client satisfaction. Whether you're scaling rapidly, stabilizing your budget, or navigating market fluctuations, our cost-efficient models ensure sustainable growth and profitability.",
      benefits: [
        "Up to 60% reduction in operational expenses",
        "Access to global, highly-skilled talent at competitive rates",
        "Pay-as-you-go pricing with zero hidden charges",
        "No recruitment, onboarding, or training costs",
        "Reduced payroll, infrastructure, and maintenance expenses",
        "Enhanced efficiency through process automation",
        "Improved ROI without lowering service quality"
      ],
      useCases: [
        "Startups needing lean and agile operations",
        "Enterprises optimizing departmental budgets",
        "Seasonal or project-based businesses requiring scalability",
        "Companies shifting from in-house to hybrid or remote models",
        "Organizations undergoing digital transformation to improve efficiency"
      ],
      strategyHighlights: [
        "Data-driven process optimization to eliminate inefficiencies",
        "Utilizing advanced software tools for task automation",
        "Shifting non-core functions to specialized remote teams",
        "Negotiating better vendor contracts through strategic partnerships"
      ],
      industriesServed: [
        "E-commerce & Retail",
        "IT & Software Development",
        "Customer Support & BPO",
        "Marketing & Creative Services",
        "Logistics & Supply Chain"
      ],
      images: [
        {
          url: "https://i.ibb.co/kVK04N5L/Group-12-1.png",
          caption: "Financial efficiency metrics dashboard"
        },
        {
          url: "https://i.ibb.co/m5YkVxz9/chart.png",
          caption: "Cost savings analysis chart"
        },
        {
          url: "https://i.ibb.co/S7mm6VTd/Group-13-3.png",
          caption: "Cost-effective remote team setup"
        },
        {
          url: "https://www.pragmatica.ch/wp-content/uploads/2024/02/workflow-optimization-process-automation-pragmatica.png",
          caption: "Optimized workflow for reduced expenses"
        }
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      shortDescription: "Reliable, round-the-clock support to keep your business running without pause. Our 24/7/365 operations ensure that your business never sleeps.",
      fullDescription: "Our 24/7/365 operations ensure that your business never sleeps. Through strategically positioned global delivery centers across multiple time zones, we follow a seamless 'follow-the-sun' model—providing uninterrupted workflows, instant response times, and consistent service quality. Whether it's night shifts, weekends, or public holidays, our team ensures you have operational coverage exactly when you need it. From customer support to IT monitoring, we deliver constant oversight and rapid resolutions, enabling your business to serve clients worldwide without downtime.",
      benefits: [
        "Round-the-clock operational coverage for any time zone",
        "Significantly reduced response and resolution times",
        "Faster project delivery with continuous workflows",
        "Improved customer satisfaction through 24/7 accessibility",
        "Ability to serve global markets without operational gaps",
        "Proactive issue detection through continuous monitoring"
      ],
      useCases: [
        "Customer support and helpdesk services",
        "IT operations and infrastructure monitoring",
        "Emergency response teams",
        "Global e-commerce and online marketplaces",
        "Healthcare and telemedicine support",
        "Financial and banking services requiring non-stop oversight"
      ],
      strategyHighlights: [
        "Follow-the-sun operational model for seamless coverage",
        "Dedicated night, weekend, and holiday shifts",
        "Multilingual support teams for global customers",
        "Real-time performance monitoring and escalation protocols"
      ],
      industriesServed: [
        "E-commerce & Retail",
        "Information Technology",
        "Telecommunications",
        "Healthcare & Medical Support",
        "Banking & Financial Services"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          caption: "24/7 support team working night shift"
        },
        {
          url: "https://i.ibb.co/G4CJR9c2/Group-15-1.png",
          caption: "Multilingual support agents"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Tz_world_mp-color.svg",
          caption: "Global timezone coverage"
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Workforce",
      shortDescription: "Access elite talent with proven expertise to drive your business forward. Access our curated network of highly trained professionals with deep industry knowledge and specialized skills.",
      fullDescription: "Gain immediate access to a curated network of highly skilled professionals with deep domain knowledge and specialized capabilities. Every candidate undergoes a rigorous vetting process, including technical assessments, language proficiency tests, and cultural compatibility evaluations. From IT and engineering to healthcare, finance, and customer experience, our workforce integrates seamlessly into your operations, ensuring productivity from day one. Whether you need short-term project specialists or long-term dedicated teams, our talent pool delivers measurable impact and exceptional results.",
      benefits: [
        "On-demand access to specialized skills",
        "Reduced recruitment time and hiring risks",
        "Faster integration and time-to-productivity",
        "Continuous skills development and performance monitoring",
        "Scalable teams tailored to project requirements",
        "Cost savings compared to traditional hiring models"
      ],
      useCases: [
        "Technical projects requiring niche expertise",
        "Knowledge-intensive business processes",
        "Specialized customer service teams",
        "Healthcare and medical support services",
        "Financial analysis and compliance projects",
        "Engineering and R&D initiatives"
      ],
      strategyHighlights: [
        "Rigorous multi-step vetting process for talent selection",
        "Continuous training and upskilling programs",
        "Industry-specific team formation for faster results",
        "Dedicated account managers to ensure seamless collaboration"
      ],
      industriesServed: [
        "Information Technology",
        "Healthcare & Medical",
        "Finance & Banking",
        "Engineering & Manufacturing",
        "E-commerce & Customer Support"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Skilled professionals collaborating"
        },
        {
          url: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
          caption: "Ongoing professional development"
        },
        {
          url: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",
          caption: "Rigorous vetting process"
        }
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      shortDescription: "Expand or streamline your workforce instantly to match business demands. Scale your operations up or down dynamically with our flexible staffing solutions.",
      fullDescription: "Our scalable staffing solutions allow you to adjust your team size quickly and efficiently, enabling you to meet changing market demands, seasonal surges, or short-term project needs without the burden of traditional hiring processes. Whether you're launching a new product, expanding into new markets, or handling a sudden increase in workload, our elastic workforce model ensures you always have the right talent in place. With no fixed overheads or long-term commitments, you maintain agility while focusing on growth and innovation.",
      benefits: [
        "Rapid team expansion during peak demand",
        "Right-size operations during slow periods",
        "Zero HR administrative overhead",
        "Access to diverse skill sets on short notice",
        "Reduced time-to-market for new projects",
        "Flexible contracts with cost efficiency"
      ],
      useCases: [
        "Seasonal or holiday-driven businesses",
        "Large-scale product launches and marketing campaigns",
        "Project-based assignments requiring specialized teams",
        "Startups in rapid growth phases",
        "Temporary coverage for employee absences"
      ],
      strategyHighlights: [
        "On-demand workforce deployment",
        "Multi-skill talent pool to meet diverse needs",
        "Scalable from single hires to full project teams",
        "Short-term or long-term engagement flexibility"
      ],
      industriesServed: [
        "E-commerce & Retail",
        "Marketing & Advertising",
        "Information Technology",
        "Events & Hospitality",
        "Manufacturing & Logistics"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1705234384679-119488a72a2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Business growth trajectory"
        },
        {
          url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
          caption: "Flexible team scaling"
        },
        {
          url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
          caption: "Elastic workforce model"
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      shortDescription: "Enterprise-grade protection with strict compliance standards, ensuring your data remains secure, private, and fully compliant with global regulations.",
      fullDescription: "Your sensitive data is protected with our enterprise-grade security protocols. We implement ISO 27001 certified processes, regular penetration testing, and comprehensive staff training. Our facilities feature biometric access controls, encrypted communications, and strict need-to-know policies to ensure complete confidentiality and compliance with GDPR, HIPAA, and other regulations.",
      benefits: [
        "Reduced security risks",
        "Regulatory compliance",
        "Secure data handling",
        "Regular security audits"
      ],
      useCases: [
        "Healthcare data processing",
        "Financial services",
        "Legal document handling",
        "Confidential business operations"
      ],
      strategyHighlights: [
        "ISO 27001 certified security frameworks",
        "Continuous vulnerability assessments",
        "Employee security awareness training",
        "Encrypted data transmission and storage"
      ],
      industriesServed: [
        "Healthcare & Medical",
        "Finance & Banking",
        "Legal & Compliance",
        "Technology & Software",
        "Government & Public Sector"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1740477959006-798042a324aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Data encryption processes"
        },
        {
          url: "https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/anchor-info/what-is-network-infrastructure-info-628x353.jpg", 
          caption: "Network security infrastructure"
        }
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus on Core",
      shortDescription: "We handle routine operations so your team can prioritize strategic growth and innovation.",
      fullDescription: "Free up your internal resources from time-consuming operational tasks and redirect your energy toward strategic initiatives. We take care of the day-to-day execution so your team can concentrate on innovation, business development, and customer relationships. Our partnership approach ensures alignment with your core objectives while we manage the operational details.",
      benefits: [
        "Increased leadership bandwidth",
        "Higher-value work focus",
        "Reduced operational distractions",
        "Improved strategic outcomes"
      ],
      useCases: [
        "Leadership teams needing focus",
        "Innovation-driven companies",
        "Businesses undergoing transformation",
        "Teams with limited bandwidth"
      ],
      strategyHighlights: [
        "Delegation of routine tasks to experts",
        "Customized operational workflows",
        "Seamless integration with your teams",
        "Continuous performance monitoring and reporting"
      ],
      industriesServed: [
        "Technology & SaaS",
        "Financial Services",
        "Healthcare",
        "Manufacturing",
        "Consulting & Professional Services"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Executive strategic planning session"
        },
        {
          url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
          caption: "Core team focusing on innovation"
        },
        {
          url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
          caption: "Effective task delegation"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 60% while maintaining quality standards."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "Round-the-clock service delivery across different time zones."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Workforce",
      description: "Access to trained professionals with domain expertise."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale operations up or down based on business requirements."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description: "Enterprise-grade security protocols and compliance standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus on Core Business",
      description: "Concentrate on strategic initiatives while we handle routine tasks."
    }
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "E-commerce & Retail",
    "Real Estate",
    "Technology & IT",
    "Insurance",
    "Manufacturing",
    "Education",
    "Travel & Hospitality",
    "Legal Services"
  ];

  const features = [
    "ISO 27001 Certified Security",
    "99.9% Uptime Guarantee",
    "Multi-language Support",
    "Advanced Analytics & Reporting",
    "Dedicated Account Manager",
    "Flexible Pricing Models"
  ];

  const technologies = [
    { name: "Cloud Computing", icon: <Cloud className="w-6 h-6" /> },
    { name: "AI & Automation", icon: <Cpu className="w-6 h-6" /> },
    { name: "Data Analytics", icon: <BarChart2 className="w-6 h-6" /> },
    { name: "CRM Integration", icon: <Layers className="w-6 h-6" /> },
    { name: "Cybersecurity", icon: <Lock className="w-6 h-6" /> },
    { name: "Process Optimization", icon: <Settings className="w-6 h-6" /> }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="text-[#ffffff] min-h-screen mt-30" ref={containerRef}>
      <ScrollToTop />
      {/* Hero Section with Image */}
      <section className="min-h-screen rounded-2xl shadow-lg shadwow-[#06140b] bg-[#ffffff] flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            className="text-[#000000]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-3xl sm:text-5xl lg:text:3xl xl:text-6xl 2xl:text-5xl font-light font-nunito leading-tight mb-6">
              <span className="block">Empower Your Growth with Scalable Business Support</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"></span>
            </h1>

            <p className="text-lg md:text-xl text-[#000000] mb-8">
              Streamline operations, optimize performance, and drive innovation with our all-in-one managed business services.
            </p>

            <div className="flex sm:flex-row gap-2">
              <Link href="/contact">
                <button className="bg-[#021688] hover:bg-blue-700 text-[#fefdfd] px-8 py-4 rounded-lg font-semibold text-xs sm:text-lg transition-all duration-300 flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="border border-[#fffff] hover:bg-white/10 text-[#000000] px-8 py-4 rounded-lg font-semibold text-xs sm:text-lg transition-all duration-300">
                  Book a Free Call
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://www.pragmatica.ch/wp-content/uploads/2024/02/workflow-optimization-process-automation-pragmatica.png"
              alt="Business Collaboration"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-[url('/solss.jpg')] bg-cover bg-center font-barlow">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-semibold mb-4 text-black text-start sm:text-center">
              Our Solutions
            </h2>
            <p className="sm:text-xl sm:text-center text-start text-sm text-black max-w-3xl sm:mx-auto">
              Discover our tailored services designed to meet your operational goals. We may be newly launched in this sector, but we bring extensive experience working with reputed companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border bg-white/70 border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all group flex flex-col"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                <p className="text-black mb-4 flex-grow">{service.shortDescription}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => openModal(service)}
                    className="text-black hover:text-blue-300 font-medium flex items-center group-hover:underline transition-all"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
        </section>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#ffffff] py-12">
        <section className="px-4 md:px-8 max-w-7xl mx-auto rounded-3xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:text-center text-start text-black">Why Choose Us?</h2>
            <p className="sm::text-xl text-sm text-[#000000] text-start max-w-3xl sm:mx-auto">
              Discover the advantages of partnering with us for your business process outsourcing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-black mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{benefit.title}</h3>
                  <p className="text-[#000000] sm:text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Industries Section */}
      <div className="bg-[#ffffff]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Industries We Serve</h2>
            <p className="text-xl text-[#000000] max-w-3xl mx-auto">
              Providing specialized BPO solutions across diverse industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Globe className="w-8 h-8 mx-auto mb-3 text-black group-hover:scale-110 transition-transform duration-300" />
                <p className="font-medium text-sm text-black">{industry}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Technology Stack Section */}
      <div className="bg-[#ffffff] py-12">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto rounded-3xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Technology Stack</h2>
            <p className="text-xl text-[#000000] max-w-3xl mx-auto">
              Cutting-edge technologies powering our BPO solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-black mb-3">
                  {tech.icon}
                </div>
                <p className="font-medium text-sm text-center text-black">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* key features section */}
      <div className="bg-[#ff0909]">
        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-4xl text-start sm:text-center font-bold mb-4 text-white">Key Features</h2>
            <p className="sm:text-xl text-sm text-[#ffffff] max-w-3xl text-start sm:mx-auto">
              Advanced capabilities and guarantees that set us apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-white border border-gray-700 rounded-lg hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <CheckCircle className="w-6 h-6 text-red-400" />
                <span className="font-medium text-black">{feature}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Process Section - Redesign */}
      <div className="bg-[#ffffff] overflow-x-hidden">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-black font-medium mb-2 block">Our Workflow</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Streamlined BPO Process</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-[#000000] max-w-3xl mx-auto">
              Our structured approach ensures efficiency and quality at every stage
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 top-0"></div>

            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  title: "Discovery Phase",
                  description: "We conduct a thorough analysis of your business objectives, operational workflows, and market environment to uncover pain points and opportunities. This foundational step ensures we align our strategies with your long-term growth vision.",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  title: "Solution Design",
                  description: "Our experts craft a tailored digital strategy and workflow solution, specifically engineered to meet your unique business needs. We focus on scalability, cost-efficiency, and innovation to deliver results-driven solutions that support sustainable growth.",
                  icon: <Lightbulb className="w-6 h-6" />
                },
                {
                  title: "Implementation",
                  description: "We ensure a seamless deployment of customized solutions into your existing ecosystem with minimal operational disruption. Our team manages every step — from setup to staff training — to accelerate adoption and maximize return on investment.",
                  icon: <Cog className="w-6 h-6" />
                },
                {
                  title: "Continuous Improvement",
                  description: "Post-launch, we provide continuous monitoring, optimization, and performance tracking to ensure your systems evolve with your business. Through data-driven insights, we fine-tune operations for efficiency, security, and long-term success.",
                  icon: <TrendingUp className="w-6 h-6" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>

                  <div className={`lg:w-5/12 p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="text-blue-400 font-mono mr-2">0{index + 1}</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-[#ffffff] text-sm md:text-base">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <div className="bg-[#ffffff]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { value: "500+", label: "Projects Delivered", icon: <Award className="w-8 h-8 mx-auto mb-4 text-blue-200" /> },
              { value: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-8 h-8 mx-auto mb-4 text-blue-200" /> },
              { value: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8 mx-auto mb-4 text-blue-200" /> },
              { value: "60%", label: "Cost Reduction", icon: <DollarSign className="w-8 h-8 mx-auto mb-4 text-blue-200" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-red-600 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-blue-200 mb-2">{stat.value}</div>
                <p className="text-[#ffffff] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-[#ffffff]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our BPO solutions can drive efficiency and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Request a Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}