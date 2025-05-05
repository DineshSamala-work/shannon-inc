import { FaWarehouse, FaTruckMoving, FaCogs, FaIndustry } from 'react-icons/fa';
import { MdPeople, MdSupportAgent, MdBusinessCenter, MdShoppingCart, MdGroups } from 'react-icons/md';

const Blog: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                {/* Operational Layers */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(Operational Layers)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaWarehouse className="text-white" /> Warehouse Management Systems
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaTruckMoving className="text-white" /> Transportation Management Systems
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaCogs className="text-white" /> Product LifeCycle Management
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaIndustry className="text-white" /> Manufacturing Execution Systems
                        </a>
                    </div>
                </div>

                {/* More Layers */}
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 mt-7">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdPeople className="text-white" /> Human Capital Management
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdSupportAgent className="text-white" /> Field Service Management
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdBusinessCenter className="text-white" /> Enterprise Resource Planning
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdShoppingCart className="text-white" /> Ecommerce Solutions
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdGroups className="text-white" /> Customer Relationship Management
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
