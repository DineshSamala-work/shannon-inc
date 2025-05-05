import { useEffect } from 'react';
import gsap from 'gsap';

const Services = () => {
    useEffect(() => {
        const elems = document.querySelectorAll(".elem") as NodeListOf<HTMLElement>;
        let currentlyHovered: HTMLElement | null = null;

        // Reset all images to opacity 0 initially
        const resetAllImages = () => {
            elems.forEach((elem) => {
                const img = elem.querySelector("img") as HTMLImageElement | null;
                if (img) {
                    gsap.set(img, { opacity: 0, x: 0, y: 0, rotate: 0 });
                }
            });
        };
        resetAllImages();

        elems.forEach((elem) => {
            let rotate = 0;

            const handlePointerEnter = () => {
                if (currentlyHovered !== elem) {
                    resetAllImages();
                    currentlyHovered = elem;
                }
            };

            const handlePointerMove = (e: Event) => {
                if (currentlyHovered !== elem) return;
                const mouseEvent = e as MouseEvent;
                const img = elem.querySelector("img") as HTMLImageElement | null;
                const rect = elem.getBoundingClientRect();
                if (!img || !rect) return;

                const diff = mouseEvent.clientY - rect.top;
                const diffrot = mouseEvent.clientX - rotate;
                rotate = mouseEvent.clientX;

                gsap.to(img, {
                    opacity: 1,
                    ease: "power1.out",
                    y: diff - (img.offsetHeight / 2 || 0),
                    x: mouseEvent.clientX - rect.left - (img.offsetWidth / 2 || 0),
                    rotate: gsap.utils.clamp(-20, 20, diffrot),
                    duration: 0.2,
                });
            };

            const handlePointerLeave = () => {
                if (currentlyHovered === elem) {
                    const img = elem.querySelector("img") as HTMLImageElement | null;
                    if (img) {
                        gsap.to(img, {
                            opacity: 0,
                            x: 0,
                            y: 0,
                            rotate: 0,
                            duration: 0.2,
                            delay: 0.05,
                        });
                    }
                    currentlyHovered = null;
                    rotate = 0;
                }
            };

            elem.addEventListener("pointerenter", handlePointerEnter);
            elem.addEventListener("pointermove", handlePointerMove);
            elem.addEventListener("pointerleave", handlePointerLeave);

            // Cleanup event listeners on component unmount
            return () => {
                elem.removeEventListener("pointerenter", handlePointerEnter);
                elem.removeEventListener("pointermove", handlePointerMove);
                elem.removeEventListener("pointerleave", handlePointerLeave);
            };
        });
    }, []);

    return (
        <>
            <div className="grid-top">
                <h1 className="text-[8vw] font-bold uppercase text-neutral-600 m-0 tracking-tight">
                    (Our Services)
                </h1>
            </div>
            <div id="second">
                <div className="elem">
                    <img src="src/assets/ERP-Implementation.jpg" alt="ERP Implementation" />
                    <h1 className="tracking-tighter">ERP Implementation & Rollout</h1>
                </div>
                <div className="elem">
                    <img src="src/assets/Business-process-and-automation.png" alt="Business Process Automation" />
                    <h1 className="tracking-tighter">Business Process Automation</h1>
                </div>
                <div className="elem">
                    <img src="src/assets/Advanced-Analytics.png" alt="Advanced Analytics" />
                    <h1 className="tracking-tighter">Advanced Analytics</h1>
                </div>
                <div className="elem">
                    <img src="src/assets/Digital-Operations-strategy.png" alt="Digital Operations Strategy" />
                    <h1 className="tracking-tighter">Digital Operations Strategy</h1>
                </div>
                <div className="elem">
                    <img src="src\assets\Supply-Chain.png" alt="Supply Chain Optimization" />
                    <h1 className="tracking-tighter">Supply Chain Optimization</h1>
                </div>
                <div className="elem elemlast">
                    <img src="src/assets/Post-launch.png" alt="Post-Launch Excellence" />
                    <h1 className="tracking-tighter">Post-Launch Excellence</h1>
                </div>
            </div>
        </>
    );
};

export default Services;