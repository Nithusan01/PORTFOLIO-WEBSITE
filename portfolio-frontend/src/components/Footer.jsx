import React from "react";
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaRegSmile } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      href: "https://linkedin.com/in/nithusan-b", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaGithub className="w-5 h-5" />, 
      href: "https://github.com/nithusanb", 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      icon: <FaEnvelope className="w-5 h-5" />, 
      href: "mailto:b.nithusan01@gmail.com", 
      label: "Email",
      color: "hover:text-red-400"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 border-t border-gray-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-yellow-500 rounded-full blur-sm opacity-20"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <FaCode className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nithusan B</h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Crafting digital experiences with modern technologies. Passionate about building innovative solutions and creating meaningful impact through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium hover:scale-105 transform transition-transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-6">Let's Connect</h4>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-yellow-500/30 backdrop-blur-sm`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                <p>📍 Based in Sri Lanka</p>
                <p className="mt-1">🚀 Available for new opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Nithusan Balasubramaniam.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <FaRegSmile className="w-4 h-4 text-yellow-400" />
              <span>in Sri Lanka</span>
            </div>

            {/* Build info */}
            <div className="text-gray-500 text-xs">
              Built with React & Tailwind CSS
            </div>
          </div>
        </div>

        {/* Floating CTA for mobile */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-sm"
          >
            <FaEnvelope className="w-4 h-4" />
            Get In Touch
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;