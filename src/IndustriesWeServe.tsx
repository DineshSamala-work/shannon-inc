import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BuildingOffice2Icon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    Cog6ToothIcon,
    BuildingLibraryIcon,
    TruckIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

// Define interface for industry data
interface Industry {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
    tags: string[];
    work: string[];
    stats: string;
}

// Define industries data
const industries: Industry[] = [
    {
        name: 'Manufacturing',
        Icon: Cog6ToothIcon,
        description: 'Streamlining operations, from supply chain to shop floor.',
        tags: ['Core', 'Automation'],
        work: [
            'Integrated MES with ERP for real-time shop floor tracking',
            'Configured multi-plant BOM structures and production scheduling',
        ],
        stats: '32% efficiency gains',
    },
    {
        name: 'Retail & eCommerce',
        Icon: ShoppingBagIcon,
        description: 'Enhancing customer experiences and backend efficiency.',
        tags: ['Growth', 'Digital'],
        work: [
            'Built omnichannel order orchestration workflows',
            'Deployed dynamic pricing and inventory sync across platforms',
        ],
        stats: '28% revenue increase',
    },
    {
        name: 'Logistics & Supply Chain',
        Icon: TruckIcon,
        description: 'Synchronizing inventory, warehousing, and delivery.',
        tags: ['Infrastructure', 'Tracking'],
        work: [
            'Implemented fleet tracking integrated with dispatch planning',
            'Developed automated ASN and GRN document flows',
        ],
        stats: '45% faster deliveries',
    },
    {
        name: 'Education',
        Icon: BuildingLibraryIcon,
        description: 'Digitizing campus management and financials.',
        tags: ['Emerging', 'Learning'],
        work: [
            'Built student lifecycle management from admissions to alumni',
            'Automated grant allocation and academic budgeting workflows',
        ],
        stats: '60% process automation',
    },
    {
        name: 'Real Estate & Construction',
        Icon: BuildingOffice2Icon,
        description: 'Automating project tracking and resource allocation.',
        tags: ['Legacy', 'Projects'],
        work: [
            'Integrated milestone-based billing with progress tracking',
            'Enabled subcontractor management with role-based access',
        ],
        stats: '35% cost reduction',
    },
    {
        name: 'Finance & Accounting',
        Icon: PresentationChartBarIcon,
        description: 'Integrating budgeting, forecasting, and compliance.',
        tags: ['Core', 'Compliance'],
        work: [
            'Configured cost center budgeting with approval layers',
            'Automated GST filing and real-time compliance dashboards',
        ],
        stats: '90% audit readiness',
    },
];

interface IndustriesWeServeProps {}

const IndustriesWeServe: React.FC<IndustriesWeServeProps> = () => {
    return (
        <div className="bg-black text-white min-h-screen p-[5vh_5vw] box-border">
            
            <section className="text-center mb-16">
                <h1 className="text-[8vw] font-bold uppercase text-neutral-500 tracking-tighter">
                    (Industries We Serve)
                </h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-medium max-w-2xl mx-auto text-neutral-50"
                >
                    Tailored solutions for{' '}
                    <span className="text-emerald-400">industry-specific</span> challenges
                </motion.h2>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {industries.map(({ name, Icon, description, tags, work, stats }, index) => (
                        <motion.article
                            key={name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-black border border-gray-800 rounded-xl h-full p-8 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10"
                            role="region"
                            aria-labelledby={`industry-${name.replace(/\s+/g, '-')}`}
                        >
                            <div className="absolute inset-0 rounded-xl overflow-hidden p-px">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="relative flex flex-col gap-6 h-full">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs uppercase text-amber-50 bg-emerald-400/20 px-3 py-1 rounded-full tracking-wide border border-emerald-400/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Icon
                                        className="w-10 h-10 text-emerald-400/70 p-2 bg-black rounded-lg"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2
                                        id={`industry-${name.replace(/\s+/g, '-')}`}
                                        className="text-2xl font-semibold text-gray-100 mb-2"
                                    >
                                        {name}
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed">{description}</p>
                                </div>

                                <div className="bg-emerald-900/30 border border-emerald-400/20 rounded-lg p-4 mb-6">
                                    <p className="text-emerald-300 text-xs uppercase tracking-wider">
                                        Measured Impact
                                    </p>
                                    <p className="text-2xl font-bold mt-1 text-white">{stats}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-xs uppercase mb-3 tracking-wider">
                                        Key Solutions
                                    </p>
                                    <ul className="space-y-3">
                                        {work.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg
                                                    className="w-4 h-4 text-emerald-400 mt-1 mr-2 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-gray-300 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    className="mt-auto text-emerald-400 text-sm flex items-center gap-2 group-hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    aria-label={`Explore ${name} solutions`}
                                    onClick={() => alert(`Exploring ${name} solutions`)} // Placeholder for navigation
                                >
                                    <span>Explore {name} solutions</span>
                                    <ArrowRightIcon
                                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default IndustriesWeServe;