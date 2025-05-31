import React from 'react';
import CityCard from './CityCard';
import { cities } from '../data/cities';

const CityGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          Keşfedilmeyi Bekleyen Şehirler
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <CityCard key={city.id} city={city} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGrid;