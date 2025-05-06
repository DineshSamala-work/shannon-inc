import React from 'react';
import { 
    BriefcaseIcon, 
    UsersIcon, 
    UserIcon, 
    HandRaisedIcon, 
    GiftIcon, 
    MapPinIcon, 
    BookOpenIcon, 
    ClipboardIcon, 
    ChatBubbleLeftIcon, 
    HandThumbUpIcon 
} from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <BriefcaseIcon className="w-7 h-7 text-emerald-400/70" /> Open Roles
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <UsersIcon className="w-7 h-7 text-emerald-400/70" /> Life at Company
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <UserIcon className="w-7 h-7 text-emerald-400/70" /> Early Careers
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <HandRaisedIcon className="w-7 h-7 text-emerald-400/70" /> Diversity & Inclusion
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <GiftIcon className="w-7 h-7 text-emerald-400/70" /> Benefits & Perks
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <MapPinIcon className="w-7 h-7 text-emerald-400/70" /> Career Pathways
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <BookOpenIcon className="w-7 h-7 text-emerald-400/70" /> Learning & Development
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ClipboardIcon className="w-7 h-7 text-emerald-400/70" /> Hiring Process
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <ChatBubbleLeftIcon className="w-7 h-7 text-emerald-400/70" /> Employee Testimonials
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                            <HandThumbUpIcon className="w-7 h-7 text-emerald-400/70" /> Referral Program
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;