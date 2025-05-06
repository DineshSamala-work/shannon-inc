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
} from "@heroicons/react/24/outline";

gsap.registerPlugin(SplitText);

const WhatWeDo: React.FC = () => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    let marqueeAnimation: gsap.core.Tween | null = null; // Store animation for pause/resume


    useEffect(() => {
        if (!paragraphRef.current) return;

        const split = new SplitText(".whatText", { type: "words" });

        gsap.from(split.words, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
            duration: 1.5,
        });

        if (marqueeRef.current) {
            const cards = gsap.utils.toArray(marqueeRef.current.children) as HTMLElement[];
            const cardWidth = cards[0].offsetWidth;
            const gap = 32;
            const totalWidth = (cardWidth + gap) * 5;

            marqueeAnimation = gsap.to(cards, {
                x: `-${totalWidth}`,
                duration: 25,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(
                        (x: number) => parseFloat(x.toString()) % totalWidth,
                        "px"
                    ),
                },
            });
        }

        return () => {
            if (marqueeAnimation) marqueeAnimation.kill();
        };
    }, []);

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
                        Empower your business with end-to-end ERP consulting—from platform
                        selection to implementation, customization, and integration. We align
                        systems with your goals through deep process expertise, ensuring modern
                        workflows, real-time insights, and scalable digital transformation.
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
                        ref={marqueeRef}
                        className="flex items-center gap-8 py-4 will-change-transform"
                        onMouseEnter={() =>
                            marqueeAnimation && marqueeAnimation.timeScale(0)
                        }
                        onMouseLeave={() =>
                            marqueeAnimation && marqueeAnimation.timeScale(1)
                        }
                    >
                        {/* Enterprise Scale */}
                        <div className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card">
                            <div className="flex items-center gap-2 mb-2">
                                <BuildingOffice2Icon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Enterprise Scale
                                </p>
                            </div>
                            <p className="text-3xl font-bold">$100M+</p>
                            <p className="text-xs text-gray-400 mt-1">Annual revenue</p>
                        </div>

                        {/* Compliance */}
                        <div className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card">
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheckIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Compliance
                                </p>
                            </div>
                            <p className="text-2xl font-bold">SOC 2 Type II</p>
                            <p className="text-xs text-gray-400 mt-1">Audited security</p>
                        </div>

                        {/* Global Reach */}
                        <div className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card">
                            <div className="flex items-center gap-2 mb-2">
                                <GlobeAltIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Global Reach
                                </p>
                            </div>
                            <p className="text-3xl font-bold">37</p>
                            <p className="text-xs text-gray-400 mt-1">Countries served</p>
                        </div>

                        {/* Implementation */}
                        <div className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card">
                            <div className="flex items-center gap-2 mb-2">
                                <ClockIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Implementation
                                </p>
                            </div>
                            <p className="text-3xl font-bold">9mo</p>
                            <p className="text-xs text-gray-400 mt-1">Average timeline</p>
                        </div>

                        {/* Client Testimonial */}
                        <div className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card">
                            <div className="flex items-center gap-2 mb-2">
                                <ChatBubbleLeftIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Client Testimonial
                                </p>
                            </div>
                            <p className="text-sm italic">"Reduced costs by 28%"</p>
                            <p className="text-xs text-gray-400 mt-2">— Fortune 500 Client</p>
                        </div>

                        {/* Duplicates for seamless looping */}
                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <BuildingOffice2Icon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Enterprise Scale
                                </p>
                            </div>
                            <p className="text-3xl font-bold">$100M+</p>
                            <p className="text-xs text-gray-400 mt-1">Annual revenue</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheckIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Compliance
                                </p>
                            </div>
                            <p className="text-2xl font-bold">SOC 2 Type II</p>
                            <p className="text-xs text-gray-400 mt-1">Audited security</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <GlobeAltIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Global Reach
                                </p>
                            </div>
                            <p className="text-3xl font-bold">37</p>
                            <p className="text-xs text-gray-400 mt-1">Countries served</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <ClockIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Implementation
                                </p>
                            </div>
                            <p className="text-3xl font-bold">9mo</p>
                            <p className="text-xs text-gray-400 mt-1">Average timeline</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <ChatBubbleLeftIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Client Testimonial
                                </p>
                            </div>
                            <p className="text-sm italic">"Reduced costs by 28%"</p>
                            <p className="text-xs text-gray-400 mt-2">— Fortune 500 Client</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <BuildingOffice2Icon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Enterprise Scale
                                </p>
                            </div>
                            <p className="text-3xl font-bold">$100M+</p>
                            <p className="text-xs text-gray-400 mt-1">Annual revenue</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheckIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Compliance
                                </p>
                            </div>
                            <p className="text-2xl font-bold">SOC 2 Type II</p>
                            <p className="text-xs text-gray-400 mt-1">Audited security</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <GlobeAltIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Global Reach
                                </p>
                            </div>
                            <p className="text-3xl font-bold">37</p>
                            <p className="text-xs text-gray-400 mt-1">Countries served</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <ClockIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Implementation
                                </p>
                            </div>
                            <p className="text-3xl font-bold">9mo</p>
                            <p className="text-xs text-gray-400 mt-1">Average timeline</p>
                        </div>

                        <div
                            className="bg-emerald-900/30 border border-emerald-400/20 rounded-xl p-6 min-w-[250px] sm:min-w-[300px] flex-shrink-0 marquee-card"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <ChatBubbleLeftIcon className="text-emerald-400 h-4 w-4 icon" />
                                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                                    Client Testimonial
                                </p>
                            </div>
                            <p className="text-sm italic">"Reduced costs by 28%"</p>
                            <p className="text-xs text-gray-400 mt-2">— Fortune 500 Client</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .what-we-do .word-circled {
          display: inline-block;
          padding: 5px 5px;
          outline: 0.3px dashed white;
          margin: 0 2px;
          line-height: 1.4;
        }
        .what-we-do .radiant-gradient {
          background: linear-gradient(45deg, #10b981, #6ee7b7);
        }
        .what-we-do .linear-mask {
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        }
        .what-we-do .linear-overlay {
          background: rgba(0, 0, 0, 0.1);
        }
        .what-we-do .marquee-card:hover .icon {
          transform: scale(1.2);
          transition: transform 0.2s ease;
        }
      `}</style>
        </div>
    );
};

export default WhatWeDo;