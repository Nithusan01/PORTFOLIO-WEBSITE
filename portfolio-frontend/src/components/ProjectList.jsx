import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCart";
import { FaCode, FaSpinner, FaExclamationTriangle } from "react-icons/fa";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API =  "https://portfolio-website-wnt4.vercel.app/" || "http://localhost:5000/" ;

  useEffect(() => {
    axios.get(`${API}api/projects`)
      .then(res => {
        setProjects(res.data);
        setError(null);
      })
      .catch(err => {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Modern skeleton loader
  const SkeletonCard = () => (
    <div className="group relative h-full rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden animate-pulse">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-700/50 to-transparent -translate-x-full animate-shimmer" />
      
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Image skeleton */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-300 dark:bg-gray-600 h-48 sm:h-56 mb-5"></div>
        
        {/* Content skeleton */}
        <div className="flex-1 space-y-4">
          {/* Title skeleton */}
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          
          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
          </div>
          
          {/* Tags skeleton */}
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-16"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-14"></div>
          </div>
        </div>
        
        {/* Buttons skeleton */}
        <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex gap-3">
            <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded-xl flex-1"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded-xl flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Error state component
  const ErrorState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
        <FaExclamationTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Unable to Load Projects
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {error || "There was an issue loading the projects. Please check your connection and try again."}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
      >
        Retry
      </button>
    </div>
  );

  // Empty state component
  const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <FaCode className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No Projects Found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        It looks like there are no projects to display at the moment. Check back soon for updates!
      </p>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <FaCode className="w-4 h-4" />
            My Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects. Each project represents 
            unique challenges and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={`skeleton-${idx}`} />
            ))
          ) : error ? (
            <ErrorState />
          ) : projects.length === 0 ? (
            <EmptyState />
          ) : (
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                {...project}
              />
            ))
          )}
        </div>

        {/* Loading spinner for initial load */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <FaSpinner className="w-6 h-6 animate-spin" />
              <span className="font-medium">Loading amazing projects...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}