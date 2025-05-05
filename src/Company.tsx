import React from "react";
import {
    FaInfoCircle,
    FaUserTie,
    FaBalanceScale,
    FaRoad,
    FaGlobe,
    FaGavel,
    FaLeaf,
    FaNewspaper,
    FaChartLine,
    FaAward
} from "react-icons/fa";

const Company: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaInfoCircle className="text-white" /> About Us
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaUserTie className="text-white" /> Leadership
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaBalanceScale className="text-white" /> Our Values
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaRoad className="text-white" /> Our Journey
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaGlobe className="text-white" /> Global Presence
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaGavel className="text-white" /> Corporate Governance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaLeaf className="text-white" /> Sustainability
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaNewspaper className="text-white" /> Newsroom
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaChartLine className="text-white" /> Investor Relations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaAward className="text-white" /> Certifications & Awards
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
