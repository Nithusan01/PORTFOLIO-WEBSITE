import React, { useState, useEffect } from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJava, 
  FaReact, 
  FaGitAlt,
  FaDocker,
  FaDatabase
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiSpringboot, 
  SiMongodb, 
  SiMysql,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiRedis,
   SiPostman,
  SiGithub,
  SiVercel,
  SiLinux
} from "react-icons/si";

export const Skills = () => {
  const [category, setCategory] = useState("frontend");
  const [fade, setFade] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = {
    frontend: [
      { icon: <FaHtml5 className="w-16 h-16" />, name: "HTML", color: "text-orange-500", bg: "bg-orange-500/10" },
      { icon: <FaCss3Alt className="w-16 h-16" />, name: "CSS", color: "text-blue-500", bg: "bg-blue-500/10" },
      { icon: <SiJavascript className="w-16 h-16" />, name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10" },
      { icon: <FaReact className="w-16 h-16" />, name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
      { icon: <SiTailwindcss className="w-16 h-16" />, name: "Tailwind", color: "text-teal-400", bg: "bg-teal-400/10" },
    ],
    backend: [
      { icon: <FaJava className="w-16 h-16" />, name: "Java", color: "text-red-500", bg: "bg-red-500/10" },
      { icon: <SiSpringboot className="w-16 h-16" />, name: "Spring Boot", color: "text-green-500", bg: "bg-green-500/10" },
      { icon: <SiNodedotjs className="w-16 h-16" />, name: "Node.js", color: "text-green-600", bg: "bg-green-600/10" },
      { icon: <SiPython className="w-16 h-16" />, name: "Python", color: "text-blue-400", bg: "bg-blue-400/10" },
    ],
    database: [
      { icon: <SiMongodb className="w-16 h-16" />, name: "MongoDB", color: "text-green-600", bg: "bg-green-600/10" },
      { icon: <SiMysql className="w-16 h-16" />, name: "MySQL", color: "text-blue-600", bg: "bg-blue-600/10" },
      { icon: <SiPostgresql className="w-16 h-16" />, name: "PostgreSQL", color: "text-blue-700", bg: "bg-blue-700/10" },
     
    ],
    tools: [
  { icon: <FaGitAlt className="w-16 h-16" />, name: "Git", color: "text-orange-600", bg: "bg-orange-600/10" },

  { icon: <FaDatabase className="w-16 h-16" />, name: "SQL", color: "text-purple-500", bg: "bg-purple-500/10" },

  { icon: <SiPostman className="w-16 h-16" />, name: "Postman", color: "text-orange-500", bg: "bg-orange-500/10" },

  { icon: <SiGithub className="w-16 h-16" />, name: "GitHub", color: "text-gray-800 dark:text-white", bg: "bg-gray-800/10" },

  { icon: <SiVercel className="w-16 h-16" />, name: "Vercel", color: "text-black dark:text-white", bg: "bg-black/10" },

  
]

  };

  const handleCategoryChange = (cat) => {
    setFade(false);
    setTimeout(() => {
      setCategory(cat);
      setFade(true);
    }, 200);
  };

  if (!mounted) {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading skeleton */}
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto mb-12"></div>
            <div className="flex justify-center gap-4 mb-12">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-24"></div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-40 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Technical Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Continuously learning and adapting to new challenges.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {Object.keys(skillCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group overflow-hidden ${
                category === cat
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg shadow-yellow-500/25 scale-105"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:scale-105 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              }`}
            >
              <span className="relative z-10">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
              
              {/* Hover effect */}
              {category !== cat && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              )}
              
              {/* Active indicator */}
              {category === cat && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6  justify-items-center transition-all duration-500 ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {skillCategories[category].map((skill, index) => (
            <div
              key={index}
              className="group relative  p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 rounded-2xl ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30 mb-4 group-hover:scale-110 transition-transform duration-500 ${skill.color}`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill level indicator (optional) */}
                <div className="mt-3 w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.bg.replace('bg-', 'bg-').replace('/10', '/60')} rounded-full transition-all duration-1000`}
                    style={{ 
                      width: `${Math.random() * 40 + 60}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center gap-3 mt-12 text-sm text-gray-500 dark:text-gray-400">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          Showing {skillCategories[category].length} skills in {category}
        </div>
      </div>
    </section>
  );
};