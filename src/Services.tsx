import { useEffect } from 'react';
import gsap from 'gsap';

const services = [
  {
    title: 'ERP Implementation & Rollout',
    img: 'src/assets/ERP-Implementation.jpg',
  },
  {
    title: 'Business Process Automation',
    img: 'src/assets/Business-process-and-automation.png',
  },
  {
    title: 'Advanced Analytics',
    img: 'src/assets/Advanced-Analytics.png',
  },
  {
    title: 'Digital Operations Strategy',
    img: 'src/assets/Digital-Operations-strategy.png',
  },
  {
    title: 'Supply Chain Optimization',
    img: 'src/assets/Supply-Chain.png',
  },
  {
    title: 'Post-Launch Excellence',
    img: 'src/assets/Post-launch.png',
  },
];

const Services = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.service-item') as NodeListOf<HTMLElement>;

    const initialize = () => {
      elems.forEach((elem) => {
        const img = elem.querySelector('img') as HTMLImageElement | null;
        const h1 = elem.querySelector('h1') as HTMLHeadingElement | null;
        if (img) gsap.set(img, { opacity: 0, x: 0, y: 0 });
        if (h1) gsap.set(h1, { opacity: 0.7, y: 0 });
        gsap.set(elem, { backgroundColor: '#000', scale: 1, boxShadow: 'none' });
      });
    };
    initialize();

    elems.forEach((elem) => {
      const img = elem.querySelector('img') as HTMLImageElement | null;
      const h1 = elem.querySelector('h1') as HTMLHeadingElement | null;
      let xTo: gsap.QuickToFunc | null = null;
      let yTo: gsap.QuickToFunc | null = null;

      if (img) {
        xTo = gsap.quickTo(img, 'x', { duration: 0.2, ease: 'power3.out' });
        yTo = gsap.quickTo(img, 'y', { duration: 0.2, ease: 'power3.out' });
      }

      const handlePointerEnter = () => {
        if (img) {
          gsap.to(img, { opacity: 1, duration: 0.3, ease: 'power3.out' });
        }
        if (h1) {
          gsap.to(h1, { opacity: 1, y: -5, duration: 0.3, delay: 0.1, ease: 'power3.out' });
        }
        gsap.to(elem, {
          backgroundColor: 'rgba(6, 78, 59, 0.3)',
          borderLeftColor: 'rgba(16, 185, 129, 0.2)',
          borderRightColor: 'rgba(16, 185, 129, 0.2)',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
          borderStyle: 'solid',
          scale: 1.02,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          duration: 0.3,
          ease: 'power3.out',
        });
      };

      const handlePointerMove = (e: Event) => {
        if (!img || !xTo || !yTo) return;
        const mouseEvent = e as MouseEvent;
        const rect = elem.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        xTo(x);
        yTo(y);
      };

      const handlePointerLeave = () => {
        if (img) {
          gsap.to(img, { opacity: 0, x: 0, y: 0, duration: 0.3, ease: 'power3.out' });
        }
        if (h1) {
          gsap.to(h1, { opacity: 0.7, y: 0, duration: 0.3, ease: 'power3.out' });
        }
        gsap.to(elem, {
          backgroundColor: '#000',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power3.out',
        });
      };

      elem.addEventListener('pointerenter', handlePointerEnter);
      elem.addEventListener('pointermove', handlePointerMove);
      elem.addEventListener('pointerleave', handlePointerLeave);

      return () => {
        elem.removeEventListener('pointerenter', handlePointerEnter);
        elem.removeEventListener('pointermove', handlePointerMove);
        elem.removeEventListener('pointerleave', handlePointerLeave);
      };
    });
  }, []);

  return (
    <div className="bg-black w-full text-white">
      <div className="pt-20 pb-10 text-center">
        <h1 className="text-[8vw] font-bold uppercase text-neutral-600 tracking-tight">(Our Services)</h1>
      </div>
      <div className="px-[10vw]">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`service-item relative w-full py-8 border-t border-gray-500 ${idx === services.length - 1 ? 'border-b' : ''}`}
          >
            <img
              src={service.img}
              alt={service.title}
              className="absolute pointer-events-none w-[300px] max-w-[40vw] top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 z-10 object-contain"
            />
            <h1 className="text-[4vw] uppercase tracking-tighter font-semibold">{service.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
