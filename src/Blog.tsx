import React from 'react';
import { 
    BuildingStorefrontIcon, 
    TruckIcon, 
    Cog6ToothIcon, 
    BuildingOffice2Icon, 
    UsersIcon, 
    LifebuoyIcon, 
    BriefcaseIcon, 
    ShoppingCartIcon, 
    UserGroupIcon 
} from '@heroicons/react/24/outline';

const Blog: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(Operational Layers)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BuildingStorefrontIcon className="w-7 h-7 text-emerald-400/70" /> Warehouse Management Systems
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <TruckIcon className="w-7 h-7 text-emerald-400/70" /> Transportation Management Systems
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <Cog6ToothIcon className="w-7 h-7 text-emerald-400/70" /> Product LifeCycle Management
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BuildingOffice2Icon className="w-7 h-7 text-emerald-400/70" /> Manufacturing Execution Systems
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 mt-7">
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <UsersIcon className="w-7 h-7 text-emerald-400/70" /> Human Capital Management
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <LifebuoyIcon className="w-7 h-7 text-emerald-400/70" /> Field Service Management
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <BriefcaseIcon className="w-7 h-7 text-emerald-400/70" /> Enterprise Resource Planning
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <ShoppingCartIcon className="w-7 h-7 text-emerald-400/70" /> Ecommerce Solutions
                        </a>
                        <a href="#" className="flex items-center gap-2 text-base text-neutral-400 hover:text-white whitespace-nowrap">
                            <UserGroupIcon className="w-7 h-7 text-emerald-400/70" /> Customer Relationship Management
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;