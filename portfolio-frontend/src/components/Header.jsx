import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = ["Home", "projects", "skills", "contact", "about"];

  // Initialize dark mode from system preference or localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  // Track scroll position for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      let current = "Home";
      navItems.forEach((id) => {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full py-4 px-6 lg:px-8 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-100/50 dark:border-gray-700/50' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <a 
              href="#Home" 
              onClick={() => scrollToSection("Home")}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/assets/nithusan.jpeg"
                  className="relative w-12 h-12 rounded-full border-2 border-white/20 dark:border-gray-700/20 object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                  alt="Portrait of Nithusan"
                />
              </div>
            </a>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                Nithusan
              </h1>
              <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                Balasubramaniam
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                  activeSection === id
                    ? "text-gray-900 dark:text-white font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="relative z-10">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
                
                {/* Active indicator */}
                {activeSection === id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full border border-amber-200/50 dark:border-amber-700/50 shadow-sm"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                
                {/* Bottom line indicator */}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 ${
                  activeSection === id ? 'w-8' : 'w-0 group-hover:w-8'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* Right Section - Social Icons & Dark Mode Toggle */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://github.com/Nithusan01"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="www.linkedin.com/in/balasubramaniam-nithusan-8482aa248"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-900 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200 transition-colors" />
              </a>
              <a 
                href="mailto:b.nithusan01@gmail.com"
                className="group p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-amber-500 group-hover:text-amber-400 transition-colors" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <FaBars className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 animate-in slide-in-from-top duration-300">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2 mb-6">
              {navItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                  {activeSection === id && (
                    <div className="w-2 h-2 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
            
            {/* Mobile Social Icons & Dark Mode */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:b.nithusan01@gmail.com"
                  className="p-3 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800/30 transition-colors duration-300"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
              
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FaSun className="w-5 h-5 text-amber-500" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;