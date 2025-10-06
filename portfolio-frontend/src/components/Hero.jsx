import { useState, useEffect } from "react";

export default function Hero() {
  const name = "Nithusan";
  const professions = ["Software Engineer", "Web Developer", "ML Enthusiast"];
  const [text, setText] = useState("");
  const [professionIndex, setProfessionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentProfession = professions[professionIndex];
    let timeout;

    if (!isDeleting && text.length < currentProfession.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentProfession.slice(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentProfession.slice(0, text.length - 1));
      }, speed / 2);
    } else if (!isDeleting && text.length === currentProfession.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      // Move to next profession
      setIsDeleting(false);
      setProfessionIndex((professionIndex + 1) % professions.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, professionIndex, professions, speed]);

  return (
    <section
      id="Home"
      className="min-h-screen scroll-mt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left mt-20 md:mt-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="text-yellow-500 dark:text-yellow-400">{name}</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-12 sm:h-16 flex items-center justify-center md:justify-start">
          <span className="min-h-[1em]">{text}</span>
          <span className="border-r-2 border-gray-600 dark:border-gray-400 animate-pulse ml-1 inline-block h-8"></span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 max-w-xl text-base sm:text-lg mb-8 leading-relaxed">
          I am a passionate developer with a love for building modern web
          applications. I enjoy learning new technologies, solving challenging
          problems, and creating projects that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/assets/NITHUSAN.B.pdf"
            download
            className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download My CV
          </a>
          
          <a
            href="#contact"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg shadow hover:scale-105 transition-all duration-300 transform inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
        <div className="relative group">
          {/* Animated background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
          
          {/* Image container */}
          <div className="relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border-4 border-yellow-500 dark:border-yellow-400">
            <img
              src="/assets/nithusan.jpeg"
              alt="Nithusan - Software Engineer"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-inner"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23fbbf24'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3EImage%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-yellow-200 dark:border-yellow-600">
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">👨‍💻 Developer</span>
          </div>
          
          <div className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-yellow-200 dark:border-yellow-600">
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">🚀 Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}