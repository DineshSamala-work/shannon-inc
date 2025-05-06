import React from 'react';
import { 
    InformationCircleIcon, 
    UserIcon, 
    ScaleIcon, 
    MapPinIcon, 
    GlobeAltIcon, 
    AcademicCapIcon, 
    SunIcon, 
    NewspaperIcon, 
    ChartBarIcon, 
    TrophyIcon 
} from '@heroicons/react/24/outline';

const Company: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <InformationCircleIcon className="w-7 h-7 text-emerald-400/70" /> About Us
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <UserIcon className="w-7 h-7 text-emerald-400/70" /> Leadership
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ScaleIcon className="w-7 h-7 text-emerald-400/70" /> Our Values
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <MapPinIcon className="w-7 h-7 text-emerald-400/70" /> Our Journey
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <GlobeAltIcon className="w-7 h-7 text-emerald-400/70" /> Global Presence
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <AcademicCapIcon className="w-7 h-7 text-emerald-400/70" /> Corporate Governance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <SunIcon className="w-7 h-7 text-emerald-400/70" /> Sustainability
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <NewspaperIcon className="w-7 h-7 text-emerald-400/70" /> Newsroom
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ChartBarIcon className="w-7 h-7 text-emerald-400/70" /> Investor Relations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <TrophyIcon className="w-7 h-7 text-emerald-400/70" /> Certifications & Awards
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;