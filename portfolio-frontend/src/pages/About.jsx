import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaGraduationCap, FaCode, FaLightbulb, FaMapMarkerAlt } from "react-icons/fa";
import { SiSpringboot, SiReact, SiMongodb, SiPython } from "react-icons/si";

export const About = () => {
  const stats = [
    { icon: <FaCode className="w-6 h-6" />, label: "Projects Completed", value: "7+" },
    { icon: <FaGraduationCap className="w-6 h-6" />, label: "Years Learning", value: "3+" },
    { icon: <FaLightbulb className="w-6 h-6" />, label: "Technologies", value: "10+" },
  ];

  const technologies = [
    { icon: <SiReact className="w-8 h-8 text-cyan-500" />, name: "React" },
    { icon: <SiSpringboot className="w-8 h-8 text-green-500" />, name: "Spring Boot" },
    { icon: <SiMongodb className="w-8 h-8 text-green-600" />, name: "MongoDB" },
    { icon: <SiPython className="w-8 h-8 text-blue-500" />, name: "Python" },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            About Me
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Journey</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main About Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Header with Avatar */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="/assets/nithusan.jpeg"
                    alt="Nithusan Balasubramaniam"
                    className="relative w-24 h-24 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="text-center sm:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Nithusan Balasubramaniam
                  </h2>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-yellow-600 dark:text-yellow-400 mb-3">
                    <FaGraduationCap className="w-5 h-5" />
                    <p className="text-lg font-semibold">
                      Undergraduate at University of Kelaniya
                    </p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 dark:text-gray-400">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <p>Based in Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a final-year <span className="font-semibold text-yellow-600 dark:text-yellow-400">Electronics and Computer Science</span> undergraduate with a strong passion for software development, machine learning, and Internet of Things. My journey in technology began with curiosity and has evolved into a deep love for creating innovative solutions.
                </p>
                
                <p>
                  I thrive on <span className="font-semibold text-yellow-600 dark:text-yellow-400">solving complex problems</span> and transforming ideas into functional, user-friendly applications. Whether it's building responsive web interfaces or developing robust backend systems, I enjoy every step of the development process.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and expand my knowledge in the ever-evolving tech landscape.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl text-yellow-600 dark:text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Tech & Social */}
          <div className="space-y-8">
            {/* Technologies Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Core Technologies
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-2xl border border-gray-200/30 dark:border-gray-600/30 hover:border-yellow-400/30 dark:hover:border-yellow-500/30 transition-all duration-300 group hover:scale-105"
                  >
                    {tech.icon}
                    <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: <FaLinkedin className="w-6 h-6" />, label: "LinkedIn", href: "www.linkedin.com/in/balasubramaniam-nithusan-8482aa248", color: "hover:text-blue-600" },
                  { icon: <FaGithub className="w-6 h-6" />, label: "GitHub", href: "https://github.com/Nithusan01", color: "hover:text-gray-900 dark:hover:text-white" },
                  { icon: <FaTwitter className="w-6 h-6" />, label: "Twitter", href: "https://x.com/nithusan01", color: "hover:text-sky-400" },
                  { icon: <FaInstagram className="w-6 h-6" />, label: "Instagram", href: "https://www.instagram.com/nithusan_balasubramaniam?igsh=MTZiZWlpZWo0cTV2dQ==", color: "hover:text-pink-500" },
                  { icon: <FaEnvelope className="w-6 h-6" />, label: "Email", href: "mailto:b.nithusan01@gmail.com", color: "hover:text-red-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-2xl bg-gray-50/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 border border-gray-200/30 dark:border-gray-600/30 hover:border-yellow-400/30 dark:hover:border-yellow-500/30 transition-all duration-300 group hover:scale-105 ${social.color}`}
                  >
                    <div className="p-2 bg-white dark:bg-gray-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-3xl p-6 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-3">Let's Work Together!</h3>
              <p className="text-yellow-100 mb-4 text-sm">
                Interested in collaborating? I'm always open to discussing new opportunities and innovative projects.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-yellow-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};