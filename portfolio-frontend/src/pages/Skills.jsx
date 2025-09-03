import React from 'react'
import { FaHtml5, FaCss3Alt, FaJava, FaReact } from "react-icons/fa";
import { SiJavascript, SiSpringboot } from "react-icons/si";

export const Skills = () => {
  return (
    <div>

 <section id="skills" className="py-20 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-8 text-gray-800">My Skills</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
    <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition flex flex-col items-center">
      <FaHtml5 className="text-orange-600 text-6xl mb-4" />
      <h3 className="text-lg font-semibold">HTML</h3>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition flex flex-col items-center">
      <FaCss3Alt className="text-blue-600 text-6xl mb-4" />
      <h3 className="text-lg font-semibold">CSS</h3>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition flex flex-col items-center">
      <FaJava className="text-red-600 text-6xl mb-4" />
      <h3 className="text-lg font-semibold">Java</h3>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition flex flex-col items-center">
      <SiSpringboot className="text-green-600 text-6xl mb-4" />
      <h3 className="text-lg font-semibold">Spring Boot</h3>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition flex flex-col items-center">
      <FaReact className="text-blue-500 text-6xl mb-4" />
      <h3 className="text-lg font-semibold">React</h3>
    </div>

     <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition flex flex-col items-center">
      <SiJavascript className="text-blue-500 text-6xl mb-4" />
      <h3 className="text-lg font-semibold">Javascript</h3>
    </div>

  </div>
</section>

    </div>
  )
}
