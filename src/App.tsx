import { useState, useEffect } from 'react';
import IndustriesWeServe from './IndustriesWeServe';
import LandingPage from './LandingPage';
import Marquee from './Marquee';
import Services from './Services';
import { ShiftingDropDown } from './ShiftingDropDown';
import WhatWeDo from './WhatWeDo';
import Footer from './Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    
      <div className="bg-black min-h-screen">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen text-white">
            Loading...
          </div>
        ) : (
          <>
            <ShiftingDropDown />
            <Marquee />
            <LandingPage />
            <WhatWeDo />
            <IndustriesWeServe />
            <Services />
            <Footer />
          </>
        )}
      </div>
    );
    
};

export default App;