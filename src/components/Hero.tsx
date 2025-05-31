import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cities } from '../data/cities';

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cities.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentCity = cities[activeIndex];

  const handleCityClick = (slug: string) => {
    navigate(`/sehir/${slug}`);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      {cities.map((city, index) => (
        <div
          key={city.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${city.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-center mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Türkiye'nin Kalbinde Bir Yolculuk
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-center max-w-2xl mb-12 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Her şehrin kendine has hikayesi, sizi bekliyor
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {cities.map((city, index) => (
            <motion.button 
              key={city.id}
              className={`text-sm md:text-base px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 ${
                index === activeIndex 
                  ? 'bg-white text-stone-800 font-medium' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              onClick={() => handleCityClick(city.slug)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {city.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Hero;