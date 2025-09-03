import React from 'react'
import ContactForm from '../components/ContactForm'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">

            {/* Page Title - Centered */}
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    Contact With Me
                </h1>
            </div>

            {/* Content Section - Two columns with equal size */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-10 md:px-20 pb-20 flex-1 ">

                {/* Right Side - Contact Form */}
                <div className="flex-1 max-w-xl bg-gray-100 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl ">
                    <ContactForm className="w-full h-full " />
                </div>
            </div>
        </div>
    )
}

export default Contact
