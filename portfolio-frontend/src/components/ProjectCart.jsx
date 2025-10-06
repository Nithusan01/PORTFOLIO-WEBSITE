import React from "react";
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from "react-icons/fa";

export default function ProjectCard({
  title = "Project Title",
  description = "Short project description goes here.",
  image = "/assets/robot.jpeg",
  tags = [],
  demoUrl,
  codeUrl,
}) {
  return (
    <div className="group relative h-full rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-yellow-400/30 dark:hover:border-yellow-500/30 overflow-hidden">
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-700/40 group-hover:from-yellow-50/20 group-hover:via-amber-50/10 group-hover:to-white/30 dark:group-hover:from-yellow-900/10 dark:group-hover:via-amber-900/5 dark:group-hover:to-gray-800/30 transition-all duration-500" />
      
      {/* Background blur effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover scale-110 blur-2xl opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700"
          aria-hidden="true"
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Image container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-yellow-400/20 transition-all duration-500">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EProject Image%3C/text%3E%3C/svg%3E";
            }}
          />
          
          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          
          {/* View buttons on image hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 hover:bg-yellow-500 hover:text-white transition-all duration-300"
                  aria-label={`View ${title} demo`}
                >
                  <FaEye className="w-5 h-5" />
                </a>
              )}
              {codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  aria-label={`View ${title} code`}
                >
                  <FaCode className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 pt-5">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          {tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col sm:flex-row gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <FaExternalLinkAlt className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Live Demo
              </a>
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300 group"
              >
                <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-yellow-400 to-amber-500 transform rotate-45 translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}