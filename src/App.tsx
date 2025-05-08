import { useState, useEffect } from 'react';
import IndustriesWeServe from './IndustriesWeServe';
import LandingPage from './LandingPage';
import Marquee from './Marquee';
import Services from './Services';
import { ShiftingDropDown } from './ShiftingDropDown';
import WhatWeDo from './WhatWeDo';
import Preloader from './Preloader'; // Import the Preloader component
import Footer from './Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or tie this to actual asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust duration as needed (matches Preloader's 50ms * 100 = 5000ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ShiftingDropDown />
          <Marquee />
          <LandingPage />
          <WhatWeDo />
          <IndustriesWeServe />
          <Services />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default App;