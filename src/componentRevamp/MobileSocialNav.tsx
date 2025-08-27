// components/MobileSocialNav.tsx

import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaWhatsapp,
    FaTwitterSquare,
} from "react-icons/fa";

const MobileSocialNav: React.FC = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-[#101010] border-t border-gray-700 z-50 md:hidden">
            <div className="flex justify-around items-center py-4">
                <a
                    href="https://www.instagram.com/unmfoundationindia/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition"
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="https://whatsapp.com/channel/0029VawuE4NFy72H25gnzO1v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                >
                    <FaWhatsapp size={22} />
                </a>
                <a
                    href="https://www.facebook.com/people/UnM-Foundation-India/61565708144198/?_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600 transition"
                >
                    <FaFacebookF size={24} />
                </a>
                <a
                    href="https://youtube.com/@unmfoundationindia?si=e4tCwDuKF5kB2vjo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition"
                >
                    <FaYoutube size={24} />
                </a>
                <a
                    href="https://x.com/UnMIndia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition"
                >
                    <FaTwitterSquare size={22} />
                </a>
            </div>
        </nav>
    );
};

export default MobileSocialNav;
