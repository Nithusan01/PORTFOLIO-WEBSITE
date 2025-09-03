import React from "react";

export default function ProjectCart({
  title = "Project Title",
  description = "Short project description goes here.",
  image = "/assets/robot.jpeg",
  tags = [],
  demoUrl,
  codeUrl,
}) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white w-full max-w-md h-[520px] flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      
      {/* Blurred background */}
      <img
        src={image}
        alt={`${title} background`}
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80 group-hover:from-white/60 group-hover:to-white/70 transition-all" />

      {/* Card content */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
        {/* Foreground image */}
        <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-black/5">
          <img
            src={image}
            alt={title}
            className="w-full h-44 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>

        {/* Text */}
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition"
            >
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
