export default function Marquee() {
    const words = ["(Design)", "(Implement)", "(Optimize)"];
  
    return (
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform select-none cursor-default"
          aria-hidden="true"
        >
          {[...words, ...words].map((word, i) => (
            <h1
              key={i}
              className="text-[8vw] sm:text-[15vw] leading-none font-bold uppercase text-white/10 tracking-wider"
            >
              {word}
            </h1>
          ))}
        </div>
  
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
  
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
  
          @media (max-width: 640px) {
            .animate-marquee {
              animation-duration: 40s;
            }
          }
        `}</style>
      </div>
    );
  }
  