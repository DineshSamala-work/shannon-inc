import { useEffect } from 'react';
import gsap from 'gsap';

// Import images (adjust paths as needed)
import erpImplementation from './assets/ERP-Implementation.jpg';
import businessProcess from './assets/Business-Process-and-automation.png';
import advancedAnalytics from './assets/Advanced-Analytics.png';
import digitalOperations from './assets/Digital-Operations-strategy.png';
import supplyChain from './assets/Suppy-Chain.png';
import postLaunch from './assets/Post-launch.png';

const services = [
  {
    title: 'ERP Implementation & Rollout',
    img: erpImplementation,
  },
  {
    title: 'Business Process Automation',
    img: businessProcess,
  },
  {
    title: 'Advanced Analytics',
    img: advancedAnalytics,
  },
  {
    title: 'Digital Operations Strategy',
    img: digitalOperations,
  },
  {
    title: 'Supply Chain Optimization',
    img: supplyChain,
  },
  {
    title: 'Post-Launch Excellence',
    img: postLaunch,
  },
];

const Services = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.service-item');

    // Initialize GSAP properties for each service item
    const initialize = () => {
      gsap.set('.service-item img', { 
        opacity: 0, 
        x: 0, 
        y: 0,
        scale: 1,
        zIndex: 10
      });
      gsap.set('.service-item h1', { 
        opacity: 0.7, 
        y: 0 
      });
      gsap.set('.service-item', { 
        backgroundColor: '#000', 
        scale: 1, 
        boxShadow: 'none',
        zIndex: 'auto'
      });
    };
    initialize();

    const cleanupFunctions: Array<() => void> = [];
    
    elems.forEach((elem) => {
      const img = elem.querySelector('img') as HTMLImageElement | null;
      const h1 = elem.querySelector('h1') as HTMLHeadingElement | null;
      
      let xTo: gsap.QuickToFunc | null = null;
      let yTo: gsap.QuickToFunc | null = null;

      if (img) {
        xTo = gsap.quickTo(img, 'x', { duration: 0.2, ease: 'power3.out' });
        yTo = gsap.quickTo(img, 'y', { duration: 0.2, ease: 'power3.out' });
        
        // Make sure image is positioned absolutely and has proper dimensions
        gsap.set(img, {
          position: 'absolute',
          width: '300px',
          maxWidth: '40vw',
          height: 'auto',
          pointerEvents: 'none'
        });
      }

      const handlePointerEnter = () => {
        gsap.to(elem, { 
          zIndex: 20,
          duration: 0 
        });
        
        if (img) {
          gsap.to(img, {
            opacity: 1,
            scale: 1.1,
            duration: 0.3,
            ease: 'power3.out',
          });
        }
        
        if (h1) {
          gsap.to(h1, {
            opacity: 1,
            y: -5,
            duration: 0.3,
            delay: 0.1,
            ease: 'power3.out',
          });
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

      const handlePointerMove = (e: PointerEvent) => {
        if (!img || !xTo || !yTo) return;
        
        const rect = elem.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Position image relative to mouse (centered)
        const offsetX = mouseX - (img.offsetWidth / 2);
        const offsetY = mouseY - (img.offsetHeight / 2);
        
        xTo(offsetX);
        yTo(offsetY);
      };

      const handlePointerLeave = () => {
        if (img) {
          gsap.to(img, {
            opacity: 0,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power3.out',
          });
        }
        
        if (h1) {
          gsap.to(h1, {
            opacity: 0.7,
            y: 0,
            duration: 0.3,
            ease: 'power3.out',
          });
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
          zIndex: 'auto'
        });
      };

      elem.addEventListener('pointerenter', handlePointerEnter);
      elem.addEventListener('pointermove', handlePointerMove as EventListener);
      elem.addEventListener('pointerleave', handlePointerLeave);

      cleanupFunctions.push(() => {
        elem.removeEventListener('pointerenter', handlePointerEnter);
        elem.removeEventListener('pointermove', handlePointerMove as EventListener);
        elem.removeEventListener('pointerleave', handlePointerLeave);
      });
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <div className="bg-black w-full text-white">
      <div className="pt-20 pb-10 text-center">
        <h1 className="text-[8vw] font-bold uppercase text-neutral-600 tracking-tight">
          (Our Services)
        </h1>
      </div>
      <div className="px-[10vw]">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`service-item relative w-full py-8 border-t border-gray-500 ${
              idx === services.length - 1 ? 'border-b' : ''
            }`}
          >
            <img
              src={service.img}
              alt={service.title}
              className="absolute w-[300px] max-w-[40vw] object-contain pointer-events-none"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                console.error(`Failed to load image: ${service.img}`);
              }}
            />
            <h1 className="text-[4vw] uppercase tracking-tighter font-semibold relative z-0">
              {service.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;