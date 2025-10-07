import React from "react";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "b.nithusan01@gmail.com",
      link: "mailto:b.nithusan01@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 757124243",
      link: "tel:+94 757124243",
      color: "bg-green-500",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "jaffna,srilanka",
      link: "#",
      color: "bg-blue-500",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "nithusan",
      link: "www.linkedin.com/in/balasubramaniam-nithusan-8482aa248",
      color: "bg-blue-600",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "nithusan",
      link: "https://github.com/Nithusan01",
      color: "bg-gray-800",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Get In Touch
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Work Together</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether you have a project in mind or just want to chat about technology, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                    rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-600/50 border border-gray-200/30 dark:border-gray-600/30 hover:border-yellow-400/30 dark:hover:border-yellow-500/30 transition-all duration-300 group hover:scale-105"
                  >
                    <div className={`p-3 rounded-xl ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">24h</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Project Success</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-yellow-100 mb-4 text-sm">
                Let's schedule a call to discuss your project requirements and timeline.
              </p>
              <a
                href="https://calendly.com/b-nithusan01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <span>Schedule a Call</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible. All fields are required.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Currently available for freelance work and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;