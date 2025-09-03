import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white mt-10">
                <div className="max-w-6xl mx-auto px-4 py-4 text-center">
                    © {new Date().getFullYear()} My Portfolio. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
