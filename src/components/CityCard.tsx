import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { City } from '../data/cities';

interface CityCardProps {
  city: City;
  index: number;
}

const CityCard: React.FC<CityCardProps> = ({ city, index }) => {
  return (
    <motion.div
      className="group relative h-96 overflow-hidden rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{
          backgroundImage: `url(${city.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">{city.name}</h3>
        <p className="text-white/90 mb-6 line-clamp-3">{city.shortDescription}</p>
        
        <Link 
          to={`/sehir/${city.slug}`}
          className="inline-flex items-center font-medium text-white hover:text-amber-300 transition-colors"
        >
          <span>Hikayeyi Oku</span>
          <motion.span 
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default CityCard;