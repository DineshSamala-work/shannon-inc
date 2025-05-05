import { FiSettings, FiRefreshCw, FiTrendingUp, FiPackage } from 'react-icons/fi';
import { BsTruck, BsDiagram3, BsListCheck } from 'react-icons/bs';
import { FaProjectDiagram, FaBusinessTime } from 'react-icons/fa';
import { MdOutlineMergeType } from 'react-icons/md';

const Products: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                {/* ERP */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(ERP)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiPackage className="text-white" /> ERP Selection and Strategy
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiSettings className="text-white" /> ERP Implementation
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiRefreshCw className="text-white" /> ERP Project Recovery
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiTrendingUp className="text-white" /> ERP Optimization
                        </a>
                    </div>
                </div>

                {/* Supply Chain */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(Supply Chain)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <BsTruck className="text-white" /> Supply Chain and Operations Transformation
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <BsDiagram3 className="text-white" /> Supply Chain Technology Architecture
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiSettings className="text-white" /> Supply Chain Software Selection
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <BsListCheck className="text-white" /> Sales and Operations Planning
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <BsTruck className="text-white" /> Inventory and Logistics Optimization
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <BsDiagram3 className="text-white" /> Supply Chain Network Design and Optimization
                        </a>
                    </div>
                </div>

                {/* Business and Tech Advisory */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(Business and Technology Advisory)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FaBusinessTime className="text-white" /> Business Process Re-engineering
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiTrendingUp className="text-white" /> Business Process Improvement
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FaProjectDiagram className="text-white" /> Business Process Documentation
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <FiPackage className="text-white" /> Change and Project Management
                        </a>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white whitespace-nowrap flex items-center gap-2">
                            <MdOutlineMergeType className="text-white" /> Post Merger Integration
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
