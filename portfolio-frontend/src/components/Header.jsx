import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {

  const [activeSection, setActiveSection] = useState("Home");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["Home", "projects", "skills", "contact","about"];
    let current = "Home";
    sections.forEach(id => {
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

  return (
    <header className="bg-gray-50 text-black fixed top-0 left-0 w-full z-50 py-3">
  <div className="relative flex items-center justify-between px-4">
    {/* Left: Logo + Name */}
    <div className="flex items-center space-x-2">
      <a href="#hero">
        <img
          src="/assets/nithusan.jpeg"
          className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
          alt="Portrait of Nithusan smiling..."
        />
      </a>
<h1 className="text-xl font-semibold italic bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent ">
  Balasubramaniam Nithusan
</h1>


    </div>

    {/* Center: Nav absolutely centered */}
   <nav className=" hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-lg font-medium">
  {["Home", "projects", "skills", "contact","about" ].map((id) => (
    <a 
      key={id} 
      href={`#${id}`} 
      className={`hover:text-yellow-400 focus:text-yellow-400 ${
        activeSection === id ? "text-yellow-400 font-semibold" : ""
      }`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  ))}
</nav>
 {/* Mobile Hamburger */}
    <button className="md:hidden text-2xl">☰</button>
    {/* Right: Placeholder for balance */}
    <div className="w-12"></div>
  </div>
</header>



  );
};

export default Header;
