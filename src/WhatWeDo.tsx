import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    BuildingOffice2Icon,
    GlobeAltIcon,
    ClockIcon,
    ShieldCheckIcon,
    ChatBubbleLeftIcon,
    ArrowRightIcon,
    CpuChipIcon,
    CloudArrowUpIcon,
    ChartBarIcon,
    ArrowsRightLeftIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(SplitText);

const WhatWeDo: React.FC = () => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const marqueeRefLeft = useRef<HTMLDivElement>(null);
    const marqueeRefRight = useRef<HTMLDivElement>(null);
    let marqueeAnimationLeft: gsap.core.Tween | null = null;
    let marqueeAnimationRight: gsap.core.Tween | null = null;
    useEffect(() => {
        if (!paragraphRef.current) return;

        const split = new SplitText(".whatText", { type: "words" });

        gsap.from(split.words, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
            duration: 1.5,
        });

        const setupAnimations = () => {
            if (marqueeRefLeft.current) {
                const cards = gsap.utils.toArray(marqueeRefLeft.current.children) as HTMLElement[];
                if (cards.length > 0) {
                    const cardWidth = 300;
                    const gap = 32;
                    const totalWidth = (cardWidth + gap) * (cards.length / 2); 

                    gsap.set(marqueeRefLeft.current, { x: 0 });

                    marqueeAnimationLeft = gsap.to(marqueeRefLeft.current, {
                        x: `-=${totalWidth}`,
                        duration: 15,
                        ease: "none",
                        repeat: -1,
                        onRepeat: () => {
                            gsap.set(marqueeRefLeft.current, { x: 0 });
                        },
                    });
                }
            }

            if (marqueeRefRight.current) {
                const cards = gsap.utils.toArray(marqueeRefRight.current.children) as HTMLElement[];
                if (cards.length > 0) {
                    const cardWidth = 300;
                    const gap = 32;
                    const totalWidth = (cardWidth + gap) * (cards.length / 2);

                    gsap.set(marqueeRefRight.current, { x: -totalWidth });

                    marqueeAnimationRight = gsap.to(marqueeRefRight.current, {
                        x: 0,
                        duration: 15,
                        ease: "none",
                        repeat: -1,
                        onRepeat: () => {
                            gsap.set(marqueeRefRight.current, { x: -totalWidth });
                        },
                    });
                }
            }
        };

        const timer = setTimeout(setupAnimations, 100);
        return () => {
            clearTimeout(timer);
            if (marqueeAnimationLeft) marqueeAnimationLeft.kill();
            if (marqueeAnimationRight) marqueeAnimationRight.kill();
        };
    }, []);

    const businessMetricsCards = [
        {
            icon: <BuildingOffice2Icon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Enterprise Scale",
            value: "$100M+",
            description: "Annual revenue",
        },
        {
            icon: <ShieldCheckIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Compliance",
            value: "SOC 2 Type II",
            description: "Audited security",
        },
        {
            icon: <GlobeAltIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Global Reach",
            value: "37",
            description: "Countries served",
        },
        {
            icon: <ClockIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Implementation",
            value: "9mo",
            description: "Average timeline",
        },
        {
            icon: <ChatBubbleLeftIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Client Testimonial",
            value: '"Reduced costs by 28%"',
            description: "— Fortune 500 Client",
        },
    ];

    const erpFeaturesCards = [
        {
            icon: <CpuChipIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "System Integration",
            value: "95%",
            description: "Seamless connectivity",
        },
        {
            icon: <CloudArrowUpIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Cloud Migration",
            value: "100%",
            description: "Success rate",
        },
        {
            icon: <ChartBarIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Real-time Analytics",
            value: "Instant",
            description: "Business insights",
        },
        {
            icon: <ArrowsRightLeftIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "Workflow Automation",
            value: "60%",
            description: "Efficiency gain",
        },
        {
            icon: <UserGroupIcon className="text-emerald-400 h-4 w-4 icon" />,
            title: "User Training",
            value: "500+",
            description: "Employees trained",
        },
    ];

    const renderCards = (cards: typeof businessMetricsCards, prefix: string) => {
        return [...cards, ...cards].map((card, index) => (
            <div
                key={`${prefix}-${card.title}-${index}`}
                className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 w-[420px] h-[150px] flex-shrink-0 marquee-card flex flex-col justify-between"
            >
                <div className="flex items-center gap-2 mb-2">
                    {card.icon}
                    <p className="text-xs text-emerald-400 uppercase tracking-wider truncate">
                        {card.title}
                    </p>
                </div>
                <p
                    className={`${card.title === "Client Testimonial" ? "text-sm italic" : "text-2xl font-bold"
                        } truncate`}
                >
                    {card.value}
                </p>
                <p className="text-xs text-gray-400 mt-1 truncate">{card.description}</p>
            </div>
        ));
    };

    return (
        <div
            className="what-we-do relative"
            style={{
                backgroundColor: "black",
                color: "white",
                minHeight: "100vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
            }}
        >
            <div className="grid-top">
                <h1 className="text-[8vw] font-bold uppercase text-neutral-600 m-0 tracking-tight whatText">
                    (What we do)
                </h1>
            </div>

            <div
                className="grid-bottom-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                }}
            >
                <div className="flex justify-center items-start h-full w-full p-2 relative">
                    <p
                        ref={paragraphRef}
                        className="paragraph text-base sm:text-lg md:text-xl leading-snug md:leading-tight text-center max-w-4xl m-0 relative"
                    >
                        Empower your business with <span className="text-emerald-400">ERP consulting</span> — from platform
                        selection to <span className="text-emerald-400">implementation</span>, customization, and
                        <span className="text-emerald-400"> integration</span>. We align systems with your goals through deep
                        <span className="text-emerald-400"> process expertise</span>, ensuring modern workflows,
                        <span className="text-emerald-400"> real-time insights</span>, and
                        <span className="text-emerald-400"> digital transformation</span>.
                    </p>
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
                    <span className="text-neutral-100 tracking-wide font-medium mr-1 px-3 py-1">
                        Contact us
                    </span>
                    <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>

                <div className="w-full mt-16 overflow-hidden">
                    <div
                        ref={marqueeRefLeft}
                        className="flex items-center gap-8 py-4 will-change-transform"
                        style={{ width: "max-content" }}
                        onMouseEnter={() => marqueeAnimationLeft && marqueeAnimationLeft.pause()}
                        onMouseLeave={() => marqueeAnimationLeft && marqueeAnimationLeft.play()}
                    >
                        {renderCards(businessMetricsCards, "metrics")}
                    </div>
                </div>

                <div className="w-full mt-5 overflow-hidden">
                    <div
                        ref={marqueeRefRight}
                        className="flex items-center gap-8 py-4 will-change-transform"
                        style={{ width: "max-content" }}
                        onMouseEnter={() => marqueeAnimationRight && marqueeAnimationRight.pause()}
                        onMouseLeave={() => marqueeAnimationRight && marqueeAnimationRight.play()}
                    >
                        {renderCards(erpFeaturesCards, "features")}
                    </div>
                </div>
            </div>

            <style>{`
                .what-we-do .marquee-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-sizing: border-box;
                }
                .what-we-do .marquee-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                .what-we-do .marquee-card:hover .icon {
                    transform: scale(1.3);
                }
                @media (max-width: 640px) {
                    .what-we-do .marquee-card {
                        width: 250px;
                        height: 130px;
                    }
                    .what-we-do .marquee-card p.text-2xl {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default WhatWeDo;