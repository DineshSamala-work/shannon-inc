import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(SplitText);

const LandingPage = () => {
  const headingRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const animate = () => {
      headingRefs.forEach((ref, i) => {
        if (ref.current) {
          const split = new SplitText(ref.current, { type: "lines" });
          gsap.from(split.lines, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
            delay: i * 0.2,
          });
        }
      });
    };

    const timeout = setTimeout(animate, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center px-4 sm:px-8 md:px-12 py-12 sm:py-16 lg:py-24 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[70vw] h-[70vw] bg-emerald-400/10 blur-3xl rounded-full top-[20%] left-1/2 -translate-x-1/2 opacity-25" />
      </div>

      <div className="max-w-screen-xl mx-auto w-full leading-tight -translate-y-10">
        <h1
          ref={headingRefs[0]}
          className="text-[7vw] sm:text-[5vw] md:text-5xl font-bold text-white mb-2"
        >
          WE IGNITE
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <h1
            ref={headingRefs[1]}
            className="text-[7vw] sm:text-[5vw] md:text-5xl font-bold text-white"
          >
            GLOBAL
          </h1>
          <h1
            ref={headingRefs[2]}
            className="text-[7vw] sm:text-[5vw] md:text-5xl font-bold text-white"
          >
            TRANSFORMATIONS
          </h1>
        </div>

        <h2
          ref={headingRefs[3]}
          className="text-sm sm:text-base md:text-lg mt-4 text-neutral-400 uppercase tracking-wide"
        >
          BASED IN TORONTO
        </h2>
      </div>

      <button
        aria-label="Explore our solutions"
        className="bg-emerald-400/20 border border-emerald-400/40 hover:bg-emerald-400/25 hover:border-emerald-400/60 transition-all duration-300 rounded-lg px-6 py-2 text-emerald-100 text-sm flex items-center group shadow-md hover:shadow-[0_0_12px_rgba(52,211,153,0.3)]"
      >
        <span className="mr-2">Explore our solutions</span>
        <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 text-emerald-100" />
      </button>

      <div className="mt-20 w-full overflow-hidden">
        <div className="flex space-x-10 animate-scroll group hover:[animation-play-state:paused]">
          {Array(2)
            .fill([
              "forbes",
              "adweek",
              "pmi",
              "wf",
              "adweek",
              "rd",
              "pmi",
              "webby",
            ])
            .flat()
            .map((name, i) => (
              <img
                key={`${name}-${i}`}
                src={`https://lazarev.kiev.ua/la24/${name}.svg`}
                alt={name}
                className="h-6 sm:h-8 lg:h-10 opacity-80"
              />
            ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LandingPage;
