import React from 'react';
import { 
    Cog6ToothIcon, 
    CloudIcon, 
    ChartBarIcon, 
    ArrowsRightLeftIcon, 
    UsersIcon, 
    LightBulbIcon, 
    AcademicCapIcon, 
    ShieldCheckIcon, 
    BookOpenIcon, 
    StarIcon 
} from '@heroicons/react/24/outline';

const Partners: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <Cog6ToothIcon className="w-7 h-7 text-emerald-400/70" /> ERP Vendors
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <CloudIcon className="w-7 h-7 text-emerald-400/70" /> Cloud Providers
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ChartBarIcon className="w-7 h-7 text-emerald-400/70" /> Technology Alliances
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ArrowsRightLeftIcon className="w-7 h-7 text-emerald-400/70" /> Channel Partners
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <UsersIcon className="w-7 h-7 text-emerald-400/70" /> Implementation Partners
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <LightBulbIcon className="w-7 h-7 text-emerald-400/70" /> Startup Ecosystem
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <AcademicCapIcon className="w-7 h-7 text-emerald-400/70" /> Academic Collaborations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ShieldCheckIcon className="w-7 h-7 text-emerald-400/70" /> Certifications & Compliance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <BookOpenIcon className="w-7 h-7 text-emerald-400/70" /> Partner Onboarding
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <StarIcon className="w-7 h-7 text-emerald-400/70" /> Success Stories
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;