import React from "react";
import {
    FaBriefcase,
    FaUsers,
    FaChild,
    FaHandsHelping,
    FaGift,
    FaRoute,
    FaBookOpen,
    FaClipboardCheck,
    FaCommentDots,
    FaHandshake
} from "react-icons/fa";

const Careers: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaBriefcase className="text-white" /> Open Roles
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaUsers className="text-white" /> Life at Company
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaChild className="text-white" /> Early Careers
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaHandsHelping className="text-white" /> Diversity & Inclusion
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaGift className="text-white" /> Benefits & Perks
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaRoute className="text-white" /> Career Pathways
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaBookOpen className="text-white" /> Learning & Development
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaClipboardCheck className="text-white" /> Hiring Process
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaCommentDots className="text-white" /> Employee Testimonials
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <FaHandshake className="text-white" /> Referral Program
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
