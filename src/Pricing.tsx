import { MdStore, MdHealthAndSafety, MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { FaBuilding, FaPlaneDeparture, FaUniversity, FaChartLine } from 'react-icons/fa';
import { HiOutlineUsers, HiOutlineCog, HiOutlineClipboardCheck, HiOutlineCurrencyDollar, HiOutlineBriefcase, HiOutlineDeviceMobile } from 'react-icons/hi';
import { BiErrorCircle, BiTrendingDown, BiTransferAlt } from 'react-icons/bi';

const Pricing: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                {/* By Industry */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(By Industry)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdStore className="text-white" /> Retail and eCommerce
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdOutlinePrecisionManufacturing className="text-white" /> Manufacturing and Distribution
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaBuilding className="text-white" /> Construction and Real Estate
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaPlaneDeparture className="text-white" /> Travel and Logistics
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <MdHealthAndSafety className="text-white" /> Healthcare and Agriculture
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaUniversity className="text-white" /> Banking and Financial Services
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaChartLine className="text-white" /> Private Equity
                        </a>
                    </div>
                </div>

                {/* By Role */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(By Role)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineDeviceMobile className="text-white" /> eCommerce and Digital
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineUsers className="text-white" /> Sales and Marketing
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineClipboardCheck className="text-white" /> Supply Chain and Procurement
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineCurrencyDollar className="text-white" /> Finance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineCog className="text-white" /> Operations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineBriefcase className="text-white" /> Information Technology
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineUsers className="text-white" /> Human Resources
                        </a>
                    </div>
                </div>

                {/* By Challenge */}
                <div className="flex flex-col">
                    <h3 className="mb-2 text-sm font-medium whitespace-nowrap text-white">(By Current Challenge)</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <FaChartLine className="text-white" /> Digital Commerce Financial Performance
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <BiErrorCircle className="text-white" /> Failed Digital Transformation Implementation
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <BiTransferAlt className="text-white" /> Supply Chain Planning Issues
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <BiTrendingDown className="text-white" /> Operational Inefficiencies
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineUsers className="text-white" /> Misaligned Departmental Expectations
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineDeviceMobile className="text-white" /> Outgrowing Systems
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white whitespace-nowrap">
                            <HiOutlineBriefcase className="text-white" /> Outdated Business Model
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
