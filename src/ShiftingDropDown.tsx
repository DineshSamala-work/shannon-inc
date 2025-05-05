import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, ReactNode, useEffect } from 'react';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import Products from './Products';
import Pricing from './Pricing';
import Blog from './Blog';
import Company from './Company';
import Partners from './Partners';
import Careers from './Careers';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const ShiftingDropDown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-8 py-4 gap-4">
        
            <div className="sm:hidden flex w-full items-center justify-between">
            
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-neutral-200 text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <FiMenu />
                </motion.button>

                <div className="text-neutral-200 font-semibold text-lg flex-1 text-center flex justify-center">
                    <span>SHANNON</span>
                </div>

                <motion.button
                    aria-label="Start ERP transformation"
                    className="relative px-6 py-2 rounded-lg bg-[rgba(52,211,153,0.35)] border border-[rgba(52,211,153,0.6)] hover:bg-[rgba(52,211,153,0.42)] hover:border-[rgba(52,211,153,0.7)] transition-all duration-300 text-amber-50 text-sm flex items-center group shadow-md hover:shadow-[0_0_12px_rgba(52,211,153,0.2)] backdrop-blur-md overflow-hidden w-auto text-center mt-6"
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
                    <span className="text-neutral-100 tracking-wide font-medium mr-1 px-3 py-2">
                        Contact us
                    </span>
                    <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
            </div>

            <div className="hidden sm:flex sm:w-full sm:justify-center sm:gap-8 sm:items-center">
            
                <div className="text-neutral-200 font-semibold text-lg sm:text-xl md:text-2xl text-left flex-1">
                    <span>SHANNON</span>
                </div>

                <motion.button
                    className="relative px-2 py-1 rounded-md radiant-gradient linear-mask overflow-hidden w-auto text-center"
                    initial={{ "--x": "100" }}
                    animate={{ "--x": "-100" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 1,
                        type: 'spring',
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                    }}
                    style={{
                        fontSize: "clamp(6px, 2vw, 12px)",  
                        padding: "clamp(3px, 1.5vw, 6px)"   
                    }}
                >
                    <span className="text-neutral-100 tracking-wide font-medium">Transform Now</span>
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
            </div>

            <div
                className={`sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:flex sm:gap-4 sm:items-center ${isMenuOpen ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0 flex flex-row gap-4`}
            >
                <div className="inline-flex flex-wrap h-auto sm:h-10 rounded-full bg-neutral-900 border border-neutral-500 p-1 text-neutral-200 transition-all shadow-lg shadow-neutral-900/50">
                    <Tabs />
                </div>
            </div>
        </div>
    );
};

const Tabs = () => {
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
                <Tab
                    key={t.id}
                    selected={selected}
                    handleSelected={handleSelected}
                    tab={t.id}
                >
                    {t.title}
                </Tab>
            ))}
            <AnimatePresence>
                {selected && (
                    <Content direction={direction} selected={selected} />
                )}
            </AnimatePresence>
        </div>
    );
};

const Content: React.FC<{ selected: number | null; direction: 'l' | 'r' | null; }> = ({ selected, direction }) => {
    const isLastTab = selected === TABS.length;
    return (
        <motion.div
            id="overlay-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={`absolute top-[calc(100%_+_24px)] w-auto rounded-1xl border border-neutral-500 bg-neutral-900 p-4 ${isLastTab ? 'right-0' : ''}`}
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

const Tab: React.FC<{ children: ReactNode; tab: number; handleSelected: (val: number | null) => void; selected: number | null; }> = ({ children, tab, handleSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSelected(tab)}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${selected === tab
                    ? 'bg-neutral-800 text-neutral-50'
                    : 'text-neutral-50 hover:bg-neutral-800/50'
                }`}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? 'rotate-180' : ''}`}
            />
        </button>
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
            className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-50 bg-neutral-900"
        />
    );
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
