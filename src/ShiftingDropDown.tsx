import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
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
    ArrowsRightLeftIcon,
    BuildingStorefrontIcon,
    BuildingOffice2Icon,
    PaperAirplaneIcon,
    HeartIcon,
    BanknotesIcon,
    DevicePhoneMobileIcon,
    UsersIcon,
    ClipboardIcon,
    CurrencyDollarIcon,
    ExclamationCircleIcon,
    ArrowsUpDownIcon,
    ArrowTrendingDownIcon,
    LifebuoyIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    InformationCircleIcon,
    ScaleIcon,
    MapPinIcon,
    GlobeAltIcon,
    AcademicCapIcon,
    SunIcon,
    NewspaperIcon,
    TrophyIcon,
    CloudIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    BookOpenIcon,
    StarIcon,
    UserIcon,
    HandRaisedIcon,
    GiftIcon,
    ChatBubbleLeftIcon,
    HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import Products from './Products';
import Pricing from './Pricing';
import Blog from './Blog';
import Company from './Company';
import Partners from './Partners';
import Careers from './Careers';

export const ShiftingDropDown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <div className="relative z-50 flex flex-col items-center w-full px-4 sm:px-8 py-4 gap-4 bg-black">
            {/* Mobile Header */}
            <div className="flex w-full items-center justify-between sm:hidden">
                <motion.button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    className="text-neutral-200 text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </motion.button>

                <div className="text-neutral-200 font-semibold text-lg flex-1 text-center">
                    <span>SHANNON</span>
                </div>

                <motion.button
                    aria-label="Start ERP transformation"
                    className="relative px-4 py-1.5 rounded-lg bg-[rgba(52,211,153,0.35)] border border-[rgba(52,211,153,0.6)] hover:bg-[rgba(52,211,153,0.42)] hover:border-[rgba(52,211,153,0.7)] transition-all duration-300 text-amber-50 text-sm flex items-center group shadow-md hover:shadow-[0_0_12px_rgba(52,211,153,0.2)] backdrop-blur-md overflow-hidden"
                    initial={{ "--x": "100%" }}
                    animate={{ "--x": "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                    }}
                >
                    <span className="text-neutral-200 tracking-wide font-medium ">
                        Contact us
                    </span>
                    <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
            </div>


            <div className="hidden sm:flex w-full items-center justify-between">
                <div className="text-neutral-200 font-semibold text-xl md:text-2xl">
                    <span>SHANNON</span>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="relative flex h-fit gap-2 justify-center">
                        <TabsDesktop />
                    </div>
                </div>

                <motion.button
                    aria-label="Start ERP transformation"
                    className="relative rounded-lg bg-[rgba(52,211,153,0.35)] border border-[rgba(52,211,153,0.6)] hover:bg-[rgba(52,211,153,0.42)] hover:border-[rgba(52,211,153,0.7)] transition-all duration-300 text-amber-50 text-sm flex items-center group shadow-md hover:shadow-[0_0_12px_rgba(52,211,153,0.2)] backdrop-blur-md overflow-hidden w-auto text-center"
                    initial={{ "--x": "100" }}
                    animate={{ "--x": "-100" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                    }}
                    style={{
                        fontSize: "clamp(6px, 2vw, 12px)",
                        padding: "clamp(3px, 1.5vw, 6px)",
                    }}
                >
                    <span className="text-neutral-100 tracking-wide font-medium mr-1 px-3 py-1">
                        Contact us
                    </span>
                    <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="sm:hidden fixed inset-x-0 top-16 bottom-0 bg-black flex flex-col pt-4 overflow-y-auto overscroll-contain"
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3 }}
                    >
                        <TabsMobile toggleMenu={toggleMenu} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TabsDesktop = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [direction, setDirection] = useState<null | 'l' | 'r'>(null);

    const handleSelected = (val: number | null) => {
        if (typeof selected === 'number' && typeof val === 'number') {
            setDirection(selected > val ? 'r' : 'l');
        } else if (val === null) {
            setDirection(null);
        }
        setSelected(val);
    };

    return (
        <div onMouseLeave={() => handleSelected(null)} className="relative flex h-fit gap-2 justify-center">
            {TABS.map((t) => (
                <TabDesktop
                    key={t.id}
                    selected={selected}
                    handleSelected={handleSelected}
                    tab={t.id}
                    title={t.title}
                />
            ))}
            <AnimatePresence>
                {selected && (
                    <ContentDesktop direction={direction} selected={selected} />
                )}
            </AnimatePresence>
        </div>
    );
};

const TabDesktop: React.FC<{
    tab: number;
    handleSelected: (val: number | null) => void;
    selected: number | null;
    title: string;
}> = ({ tab, handleSelected, selected, title }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSelected(tab)}
            className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors ${
                selected === tab
                    ? 'bg-neutral-800 text-neutral-50'
                    : 'text-neutral-50 hover:bg-neutral-800/50'
            }`}
        >
            <span>{title}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? 'rotate-180' : ''}`}
            />
        </button>
    );
};

const ContentDesktop: React.FC<{ selected: number | null; direction: 'l' | 'r' | null; }> = ({ selected, direction }) => {
    const isLastTab = selected === TABS.length;
    return (
        <motion.div
            id="overlay-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={`absolute top-[calc(100%+24px)] w-auto rounded-xl border border-neutral-800 bg-black p-4 ${
                isLastTab ? 'right-0' : ''
            }`}
        >
            <Bridge />
            <Nub selected={selected} isLastTab={isLastTab} />
            {TABS.map((t) => (
                <div className="overflow-hidden" key={t.id}>
                    {selected === t.id && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: direction === 'l' ? 100 : direction === 'r' ? -100 : 0,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="relative"
                        >
                            {t.component}
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

const TabsMobile = ({ toggleMenu }: { toggleMenu: () => void }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [direction, setDirection] = useState<null | 'l' | 'r'>(null);

    const handleSelected = (val: number | null) => {
        if (typeof selected === 'number' && typeof val === 'number') {
            setDirection(selected > val ? 'r' : 'l');
        } else if (val === null) {
            setDirection(null);
        }
        setSelected(val);
    };

    return (
        <div className="flex flex-col w-full">
            {TABS.map((t) => (
                <TabMobile
                    key={t.id}
                    selected={selected}
                    handleSelected={handleSelected}
                    tab={t.id}
                    toggleMenu={toggleMenu}
                    title={t.title}
                    direction={direction}
                />
            ))}
        </div>
    );
};

const TabMobile: React.FC<{
    tab: number;
    handleSelected: (val: number | null) => void;
    selected: number | null;
    toggleMenu: () => void;
    title: string;
    direction: 'l' | 'r' | null;
}> = ({ tab, handleSelected, selected, toggleMenu, title }) => {
    const handleClick = () => {
        handleSelected(selected === tab ? null : tab);
    };

    const handleItemClick = () => {
        toggleMenu();
    };

    return (
        <div className="relative w-full">
            <button
                onClick={handleClick}
                className="flex items-center justify-between gap-2 px-4 py-2 text-sm transition-colors w-full text-left text-neutral-50 hover:bg-neutral-800"
            >
                <span>{title}</span>
                <FiChevronDown
                    className={`transition-transform ${selected === tab ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {selected === tab && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full pl-8 bg-black overflow-y-auto overscroll-contain"
                    >
                        <ul className="list-none pl-0 text-neutral-200">
                            {getMobileListItems(title).map((item, index) => (
                                <li
                                    key={index}
                                    className="py-2 flex items-center gap-2 text-sm hover:text-white cursor-pointer"
                                    onClick={handleItemClick}
                                >
                                    {item.icon && (
                                        <item.icon className="w-5 h-5 text-emerald-400/70" />
                                    )}
                                    <a href="#" className="text-neutral-200 hover:text-white">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Bridge = () => {
    return <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;
};

const Nub = ({ selected, isLastTab }: { selected: number | null, isLastTab: boolean }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById('overlay-content');
            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
                left: isLastTab ? 'unset' : `${left}px`,
                right: isLastTab ? '0px' : 'unset',
            }}
            animate={{ left, right: isLastTab ? '0' : undefined }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-50 bg-black"
        />
    );
};

const getMobileListItems = (title: string) => {
    switch (title) {
        case 'Advisory':
            return [
                { text: 'ERP Selection and Strategy', icon: CubeIcon },
                { text: 'ERP Implementation', icon: Cog6ToothIcon },
                { text: 'ERP Project Recovery', icon: ArrowPathIcon },
                { text: 'ERP Optimization', icon: ChartBarIcon },
                { text: 'Supply Chain and Operations Transformation', icon: TruckIcon },
                { text: 'Supply Chain Technology Architecture', icon: ChartPieIcon },
                { text: 'Supply Chain Software Selection', icon: Cog6ToothIcon },
                { text: 'Sales and Operations Planning', icon: ListBulletIcon },
                { text: 'Inventory and Logistics Optimization', icon: TruckIcon },
                { text: 'Supply Chain Network Design and Optimization', icon: ChartPieIcon },
                { text: 'Business Process Re-engineering', icon: BriefcaseIcon },
                { text: 'Business Process Improvement', icon: ChartBarIcon },
                { text: 'Business Process Documentation', icon: DocumentTextIcon },
                { text: 'Change and Project Management', icon: CubeIcon },
                { text: 'Post Merger Integration', icon: ArrowsRightLeftIcon },
            ];
        case 'Solutions':
            return [
                { text: 'Retail and eCommerce', icon: BuildingStorefrontIcon },
                { text: 'Manufacturing and Distribution', icon: Cog6ToothIcon },
                { text: 'Construction and Real Estate', icon: BuildingOffice2Icon },
                { text: 'Travel and Logistics', icon: PaperAirplaneIcon },
                { text: 'Healthcare and Agriculture', icon: HeartIcon },
                { text: 'Banking and Financial Services', icon: BanknotesIcon },
                { text: 'Private Equity', icon: ChartBarIcon },
                { text: 'eCommerce and Digital', icon: DevicePhoneMobileIcon },
                { text: 'Sales and Marketing', icon: UsersIcon },
                { text: 'Supply Chain and Procurement', icon: ClipboardIcon },
                { text: 'Finance', icon: CurrencyDollarIcon },
                { text: 'Operations', icon: Cog6ToothIcon },
                { text: 'Information Technology', icon: BriefcaseIcon },
                { text: 'Human Resources', icon: UsersIcon },
                { text: 'Digital Commerce Financial Performance', icon: ChartBarIcon },
                { text: 'Failed Digital Transformation Implementation', icon: ExclamationCircleIcon },
                { text: 'Supply Chain Planning Issues', icon: ArrowsUpDownIcon },
                { text: 'Operational Inefficiencies', icon: ArrowTrendingDownIcon },
                { text: 'Misaligned Departmental Expectations', icon: UsersIcon },
                { text: 'Outgrowing Systems', icon: DevicePhoneMobileIcon },
                { text: 'Outdated Business Model', icon: BriefcaseIcon },
            ];
        case 'Software Categories':
            return [
                { text: 'Warehouse Management Systems', icon: BuildingStorefrontIcon },
                { text: 'Transportation Management Systems', icon: TruckIcon },
                { text: 'Product LifeCycle Management', icon: Cog6ToothIcon },
                { text: 'Manufacturing Execution Systems', icon: BuildingOffice2Icon },
                { text: 'Human Capital Management', icon: UsersIcon },
                { text: 'Field Service Management', icon: LifebuoyIcon },
                { text: 'Enterprise Resource Planning', icon: BriefcaseIcon },
                { text: 'Ecommerce Solutions', icon: ShoppingCartIcon },
                { text: 'Customer Relationship Management', icon: UserGroupIcon },
            ];
        case 'Company':
            return [
                { text: 'About Us', icon: InformationCircleIcon },
                { text: 'Leadership', icon: UserIcon },
                { text: 'Our Values', icon: ScaleIcon },
                { text: 'Our Journey', icon: MapPinIcon },
                { text: 'Global Presence', icon: GlobeAltIcon },
                { text: 'Corporate Governance', icon: AcademicCapIcon },
                { text: 'Sustainability', icon: SunIcon },
                { text: 'Newsroom', icon: NewspaperIcon },
                { text: 'Investor Relations', icon: ChartBarIcon },
                { text: 'Certifications & Awards', icon: TrophyIcon },
            ];
        case 'Partners':
            return [
                { text: 'ERP Vendors', icon: Cog6ToothIcon },
                { text: 'Cloud Providers', icon: CloudIcon },
                { text: 'Technology Alliances', icon: ChartBarIcon },
                { text: 'Channel Partners', icon: ArrowsRightLeftIcon },
                { text: 'Implementation Partners', icon: UsersIcon },
                { text: 'Startup Ecosystem', icon: LightBulbIcon },
                { text: 'Academic Collaborations', icon: AcademicCapIcon },
                { text: 'Certifications & Compliance', icon: ShieldCheckIcon },
                { text: 'Partner Onboarding', icon: BookOpenIcon },
                { text: 'Success Stories', icon: StarIcon },
            ];
        case 'Careers':
            return [
                { text: 'Open Roles', icon: BriefcaseIcon },
                { text: 'Life at Company', icon: UsersIcon },
                { text: 'Early Careers', icon: UserIcon },
                { text: 'Diversity & Inclusion', icon: HandRaisedIcon },
                { text: 'Benefits & Perks', icon: GiftIcon },
                { text: 'Career Pathways', icon: MapPinIcon },
                { text: 'Learning & Development', icon: BookOpenIcon },
                { text: 'Hiring Process', icon: ClipboardIcon },
                { text: 'Employee Testimonials', icon: ChatBubbleLeftIcon },
                { text: 'Referral Program', icon: HandThumbUpIcon },
            ];
        default:
            return [];
    }
};

const TABS = [
    {
        title: 'Advisory',
        component: <Products />,
    },
    {
        title: 'Solutions',
        component: <Pricing />,
    },
    {
        title: 'Software Categories',
        component: <Blog />,
    },
    {
        title: 'Company',
        component: <Company />,
    },
    {
        title: 'Partners',
        component: <Partners />,
    },
    {
        title: 'Careers',
        component: <Careers />,
    },
].map((n, index) => ({ ...n, id: index + 1 }));