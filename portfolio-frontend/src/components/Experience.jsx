import React, { useState } from "react";
import { 
  FaGraduationCap, 
  FaRobot, 
  FaMicrochip, 
  FaLaptopCode, 
  FaCalendarAlt, 
  FaAward, 
  FaCheckCircle 
} from "react-icons/fa";

export const Experience = () => {
  const [filter, setFilter] = useState("all");

  const experiences = [
    {
      id: 1,
      type: "research",
      title: "Lead Machine Learning Researcher",
      organization: "University of Kelaniya",
      period: "July 2024 - Present",
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      glow: "group-hover:shadow-amber-500/20",
      description: "Designed a hybrid Bi-LSTM + GRU machine learning model that achieved 97.6% accuracy in predicting cryptocurrency prices for SOL, ADA, and XRP. Solved high-dimensional prediction challenges using deep learning techniques.",
      details: [
        "Integrated CryptoBERT and VADER models for advanced financial sentiment analysis from social media and news feeds.",
        "Implemented metadata-based fake news detection algorithms to filter noise in input pipelines.",
        "Built and evaluated the complete data pipeline using Python, TensorFlow, PyTorch, Hugging Face, Flask, and scikit-learn."
      ],
      tags: ["Python", "TensorFlow", "PyTorch", "Hugging Face", "Flask", "scikit-learn"]
    },
    {
      id: 2,
      type: "robotics",
      title: "Robotics Engineer & Team Lead (Battle Bot)",
      organization: "Robotics Club, University of Kelaniya",
      period: "Aug 2023 - Apr 2024",
      icon: <FaRobot className="w-6 h-6" />,
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      glow: "group-hover:shadow-red-500/20",
      description: "Designed and built a 15 kg combat robot with a high-torque drivetrain and custom pneumatic/active weapon systems. Managed budget, component sourcing, and design cycles.",
      details: [
        "Champion – Robo Battle, University of Kelaniya: Secured 1st place in the prestigious inter-university robotic combat competition.",
        "4th Place & Best Player – IROBEX, NiBM: Led the battle bot team to the Top 4 and received the Best Player award for strategic remote control under high pressure.",
        "Master of Destruction – Electro Combat, University of Jayewardenepura: Won the award for developing the most powerful and destructive bot design in the knockout rounds.",
        "Configured full RC control via FlySky i6X and iA6B receiver for independent drive and weapon channels."
      ],
      tags: ["SolidWorks", "FlySky RC", "Planetary Gears", "Brushed ESCs", "DC Motors"]
    },
    {
      id: 3,
      type: "iot",
      title: "IoT Solutions Developer (Energy Meter)",
      organization: "Academic Project",
      period: "Mar 2023 - Jul 2023",
      icon: <FaMicrochip className="w-6 h-6" />,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      glow: "group-hover:shadow-green-500/20",
      description: "Designed and implemented a smart IoT-based electricity energy consumption monitoring system using microcontrollers and cloud sync for real-time power analytics.",
      details: [
        "Developed a hardware prototype using an ESP32 microcontroller, voltage sensors, and current sensors to read electricity metrics.",
        "Transmitted real-time sensor streams securely to Google Firebase Realtime Database.",
        "Built a cross-platform mobile application in Flutter (Dart) displaying live usage, cost estimation, and automated billing alerts."
      ],
      tags: ["Flutter", "Firebase", "ESP32", "Embedded C", "Sensors"]
    },
    {
      id: 4,
      type: "software",
      title: "Full-Stack Web Developer",
      organization: "Independent Projects",
      period: "Nov 2022 - Feb 2023",
      icon: <FaLaptopCode className="w-6 h-6" />,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      glow: "group-hover:shadow-cyan-500/20",
      description: "Developed several complete full-stack web applications combining fast responsive frontends with robust backend architectures.",
      details: [
        "Movie Review & Recommendation Application: Built using React (frontend), Spring Boot (backend), and MongoDB for relational metadata and reviews.",
        "Developed and optimized RESTful APIs for efficient data fetching, paging, and filtration.",
        "Implemented JWT-based secure authentication, routing, and backend request authorization handlers."
      ],
      tags: ["React JS", "Spring Boot", "MongoDB", "Tailwind CSS", "JWT", "REST APIs"]
    }
  ];

  const categories = [
    { value: "all", label: "All Experience" },
    { value: "research", label: "Research & ML" },
    { value: "robotics", label: "Robotics & IoT" },
    { value: "software", label: "Software Development" }
  ];

  const filteredExperiences = experiences.filter(exp => {
    if (filter === "all") return true;
    if (filter === "robotics") return exp.type === "robotics" || exp.type === "iot";
    return exp.type === filter;
  });

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <FaAward className="w-4 h-4 animate-bounce" />
            My Professional Timeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work & <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive journey detailing my academic research, technical engineering roles, and software creations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                filter === cat.value
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg shadow-yellow-500/25"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical central line (desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-amber-400 to-transparent transform md:-translate-x-1/2 rounded-full opacity-30 dark:opacity-20" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline point */}
                  <div className="absolute left-8 md:left-1/2 top-6 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-md flex items-center justify-center transform -translate-x-1/2 z-20 bg-yellow-500 text-white animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Left spacer / right card layout alignment */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />

                  {/* Experience Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0">
                    <div className={`group relative p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-yellow-400/30 dark:hover:border-yellow-500/30 overflow-hidden ${exp.glow}`}>
                      
                      {/* Decorative corner shape */}
                      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                        <div className={`absolute top-0 right-0 w-12 h-12 transform rotate-45 translate-x-6 -translate-y-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-yellow-400 to-amber-500`} />
                      </div>

                      {/* Header info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-100 dark:border-gray-700/50 pb-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl ${exp.bg} ${exp.color} border ${exp.border} transition-transform duration-500 group-hover:scale-110`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                              {exp.organization}
                            </p>
                          </div>
                        </div>

                        {/* Calendar date tag */}
                        <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 border border-gray-200/30 dark:border-gray-600/30">
                          <FaCalendarAlt className="w-3 h-3 text-yellow-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Detailed Bullet Points */}
                      <ul className="space-y-3 mb-6">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            <FaCheckCircle className="w-4 h-4 text-yellow-500/70 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200/30 dark:border-gray-700/30 hover:border-yellow-400 dark:hover:border-yellow-500 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
