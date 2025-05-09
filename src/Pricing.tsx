import React from 'react';
import { 
    BuildingStorefrontIcon, 
    Cog6ToothIcon, 
    BuildingOffice2Icon, 
    PaperAirplaneIcon, 
    HeartIcon, 
    BanknotesIcon, 
    ChartBarIcon, 
    DevicePhoneMobileIcon, 
    UsersIcon, 
    ClipboardIcon, 
    CurrencyDollarIcon, 
    BriefcaseIcon, 
    ExclamationCircleIcon, 
    ArrowsUpDownIcon, 
    ArrowTrendingDownIcon 
} from '@heroicons/react/24/outline';

const Pricing: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                
                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(By Industry)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BuildingStorefrontIcon className="w-7 h-7 text-emerald-400/70" /> Retail and eCommerce
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <Cog6ToothIcon className="w-7 h-7 text-emerald-400/70" /> Manufacturing and Distribution
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BuildingOffice2Icon className="w-7 h-7 text-emerald-400/70" /> Construction and Real Estate
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <PaperAirplaneIcon className="w-7 h-7 text-emerald-400/70" /> Travel and Logistics
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <HeartIcon className="w-7 h-7 text-emerald-400/70" /> Healthcare and Agriculture
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BanknotesIcon className="w-7 h-7 text-emerald-400/70" /> Banking and Financial Services
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ChartBarIcon className="w-7 h-7 text-emerald-400/70" /> Private Equity
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(By Role)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <DevicePhoneMobileIcon className="w-7 h-7 text-emerald-400/70" /> eCommerce and Digital
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <UsersIcon className="w-7 h-7 text-emerald-400/70" /> Sales and Marketing
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ClipboardIcon className="w-7 h-7 text-emerald-400/70" /> Supply Chain and Procurement
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <CurrencyDollarIcon className="w-7 h-7 text-emerald-400/70" /> Finance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <Cog6ToothIcon className="w-7 h-7 text-emerald-400/70" /> Operations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BriefcaseIcon className="w-7 h-7 text-emerald-400/70" /> Information Technology
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <UsersIcon className="w-7 h-7 text-emerald-400/70" /> Human Resources
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(By Current Challenge)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ChartBarIcon className="w-7 h-7 text-emerald-400/70" /> Digital Commerce Financial Performance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ExclamationCircleIcon className="w-7 h-7 text-emerald-400/70" /> Failed Digital Transformation Implementation
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ArrowsUpDownIcon className="w-7 h-7 text-emerald-400/70" /> Supply Chain Planning Issues
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ArrowTrendingDownIcon className="w-7 h-7 text-emerald-400/70" /> Operational Inefficiencies
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <UsersIcon className="w-7 h-7 text-emerald-400/70" /> Misaligned Departmental Expectations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <DevicePhoneMobileIcon className="w-7 h-7 text-emerald-400/70" /> Outgrowing Systems
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BriefcaseIcon className="w-7 h-7 text-emerald-400/70" /> Outdated Business Model
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;