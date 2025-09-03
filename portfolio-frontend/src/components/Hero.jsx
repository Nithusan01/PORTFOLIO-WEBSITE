import React, { useState, useEffect } from "react";

export default function Hero() {
  const name = "Nithusan";
  const professions = ["Software Engineer", "Web Developer", "ML Enthusiast"];
  const [text, setText] = useState("");
  const [professionIndex, setProfessionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // typing speed

  useEffect(() => {
    const currentProfession = professions[professionIndex];
    let timeout;

    if (!isDeleting && text.length < currentProfession.length) {
      timeout = setTimeout(() => {
        setText(currentProfession.slice(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentProfession.slice(0, text.length - 1));
      }, speed / 2);
    } else if (!isDeleting && text.length === currentProfession.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setProfessionIndex((professionIndex + 1) % professions.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, professionIndex]);

  return (
    <div className="min-h-screen text-center md:text-left bg-white flex flex-col md:flex-row items-center justify-between px-60 ">
      
      {/* Left Section: Name + Details */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I'm <span className="text-yellow-500">{name}</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-6 h-10">
          {text}
          <span className="border-r-2 border-gray-600 animate-pulse ml-1"></span>
        </h2>

        <p className="text-gray-500 max-w-xl text-base sm:text-lg mb-6">
          I am a passionate developer with a love for building modern web
          applications. I enjoy learning new technologies, solving challenging
          problems, and creating projects that make a difference.
        </p>

        <a
          href="/assets/NITHUSAN.B.pdf"
          download
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded shadow-lg transition inline-block"
        >
          Download My CV
        </a>
      </div>

      {/* Right Section: Image with Border + Transparent Background */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
       <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="p-2 border-4 border-yellow-500 rounded-full bg-white/20 backdrop-blur-sm shadow-[0_0_20px_#facc15] animate-pulse">
          <img
            src="/assets/nithusan.jpeg"
            alt="Hero"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>
      </div>
      </div>

    </div>
  );
}
