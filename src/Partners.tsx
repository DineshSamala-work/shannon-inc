import React from "react";
import {
    FaCogs,
    FaCloud,
    FaProjectDiagram,
    FaExchangeAlt,
    FaUsersCog,
    FaLightbulb,
    FaGraduationCap,
    FaShieldAlt,
    FaDoorOpen,
    FaStar
} from "react-icons/fa";

const Partners: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaCogs className="text-white" /> ERP Vendors
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaCloud className="text-white" /> Cloud Providers
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaProjectDiagram className="text-white" /> Technology Alliances
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaExchangeAlt className="text-white" /> Channel Partners
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaUsersCog className="text-white" /> Implementation Partners
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaLightbulb className="text-white" /> Startup Ecosystem
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaGraduationCap className="text-white" /> Academic Collaborations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaShieldAlt className="text-white" /> Certifications & Compliance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaDoorOpen className="text-white" /> Partner Onboarding
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaStar className="text-white" /> Success Stories
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
