import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">

        {/* Page Title - Centered */}
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    About Me
                </h1>
            </div>


    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-10 md:px-20 pb-20 flex-1  ">
         {/* Left Side - About Me Card */}
                <div className="flex-1 max-w-xl bg-gray-100 shadow-lg rounded-2xl p-14 space-y-4 flex flex-col justify-between flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl  ">
                    <div className="flex-1 max-w-xl bg-white shadow-lg rounded-2xl p-6 border border-black ">
                        <h2 className="text-2xl font-bold text-gray-800 px-7">
                            Balasubramaniam Nithusan
                        </h2>
                        
                        <p className="text-gray-600 font-bold px-7 pb-4">
                            Undergraduate at University of Kelaniya
                        </p>

                        <div>
                            <div className="text-gray-600 py-3 px-7">
                                <p>
                                    Final-year Electronics and Computer Science undergraduate
                                    with a strong interest in software development, machine learning,
                                    and Internet of Things.
                                </p>
                            </div>
                            <div className="text-gray-600 py-3 px-7">
                                <p>
                                    I enjoy building innovative projects, solving challenging
                                    problems, and continuously learning new technologies.
                                </p>
                            </div>
                        </div>


                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-4 text-gray-600 px-7">
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-8 h-8 hover:text-blue-600 transition-colors" />
                            </a>
                            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-8 h-8 hover:text-black transition-colors" />
                            </a>
                            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="w-8 h-8 hover:text-sky-400 transition-colors" />
                            </a>
                            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-8 h-8 hover:text-pink-500 transition-colors" />
                            </a>
                            <a href="mailto:b.nithusan01@gmail.com">
                                <FaEnvelope className="w-8 h-8 hover:text-red-500 transition-colors" />
                            </a>
                        </div>

                    </div>
                </div>
    </div>
   </div> 
  )
}
