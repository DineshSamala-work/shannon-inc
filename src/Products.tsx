import React from 'react';
import { 
    CubeIcon, 
    Cog6ToothIcon, 
    ArrowPathIcon, 
    ChartBarIcon, 
    TruckIcon, 
    ChartPieIcon, 
    ListBulletIcon, 
    BriefcaseIcon, 
    DocumentTextIcon, 
    ArrowsRightLeftIcon 
} from '@heroicons/react/24/outline';

const Products: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                {/* ERP */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(ERP)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <CubeIcon className="w-7 h-7 text-emerald-400/70" /> ERP Selection and Strategy
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <Cog6ToothIcon className="w-7 h-7 text-emerald-400/70" /> ERP Implementation
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ArrowPathIcon className="w-7 h-7 text-emerald-400/70" /> ERP Project Recovery
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ChartBarIcon className="w-7 h-7 text-emerald-400/70" /> ERP Optimization
                        </a>
                    </div>
                </div>

                {/* Supply Chain */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(Supply Chain)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <TruckIcon className="w-7 h-7 text-emerald-400/70" /> Supply Chain and Operations Transformation
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ChartPieIcon className="w-7 h-7 text-emerald-400/70" /> Supply Chain Technology Architecture
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <Cog6ToothIcon className="w-7 h-7 text-emerald-400/70" /> Supply Chain Software Selection
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ListBulletIcon className="w-7 h-7 text-emerald-400/70" /> Sales and Operations Planning
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <TruckIcon className="w-7 h-7 text-emerald-400/70" /> Inventory and Logistics Optimization
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ChartPieIcon className="w-7 h-7 text-emerald-400/70" /> Supply Chain Network Design and Optimization
                        </a>
                    </div>
                </div>

                {/* Business and Tech Advisory */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-medium whitespace-nowrap text-white">(Business and Technology Advisory)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <BriefcaseIcon className="w-7 h-7 text-emerald-400/70" /> Business Process Re-engineering
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ChartBarIcon className="w-7 h-7 text-emerald-400/70" /> Business Process Improvement
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <DocumentTextIcon className="w-7 h-7 text-emerald-400/70" /> Business Process Documentation
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <CubeIcon className="w-7 h-7 text-emerald-400/70" /> Change and Project Management
                        </a>
                        <a href="#" className="text-base text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <ArrowsRightLeftIcon className="w-7 h-7 text-emerald-400/70" /> Post Merger Integration
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;