import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobeComponent = lazy(() => import('./components/GlobeComponent'));

const Preloader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    const globeTimer = setTimeout(() => setShowGlobe(true), 300);

    return () => {
      clearInterval(interval);
      clearTimeout(globeTimer);
    };
  }, []);

  const letters = 'SHANNON'.split('');

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const barVariants = {
    initial: { width: '0%' },
    animate: (percent: number) => ({
      width: `${percent}%`,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        mass: 0.5,
      },
    }),
  };

  const containerVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <AnimatePresence>
      {percentage <= 100 && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
          variants={containerVariants}
          initial="visible"
          exit="hidden"
        >
          {showGlobe && (
            <div className="absolute inset-0 opacity-20">
              <Suspense fallback={<div className="w-full h-full bg-black" />}>
                <GlobeComponent />
              </Suspense>
            </div>
          )}
          
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-gray-900/30 to-transparent"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
          
          <div className="relative z-10 text-center">
            <div className="flex justify-center space-x-1 text-4xl md:text-6xl font-bold mb-8">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <div className="w-80 md:w-96 h-3 bg-gray-900 rounded-full overflow-hidden shadow-lg">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                variants={barVariants}
                initial="initial"
                animate="animate"
                custom={percentage}
                style={{
                  boxShadow: '0 0 10px rgba(52, 211, 153, 0.8), 0 0 20px rgba(52, 211, 153, 0.6)',
                }}
              />
            </div>

            <motion.div 
              className="mt-4 text-emerald-400 font-mono text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {percentage}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;