import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cities, City } from '../data/cities';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import SpeechButton from '../components/SpeechButton';

const CityPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const navigate = useNavigate();
  const [city, setCity] = useState<City | null>(null);
  
  useEffect(() => {
    const foundCity = cities.find(c => c.slug === citySlug);
    
    if (foundCity) {
      setCity(foundCity);
      document.title = `${foundCity.name} - Hiraa`;
    } else {
      navigate('/');
    }
  }, [citySlug, navigate]);
  
  // Şehir sayfası için konuşma metni oluştur
  let speechText = '';
  if (city) {
    speechText += `${city.name}. ${city.description}. ${city.content.intro} `;
    city.content.sections.forEach(section => {
      speechText += `${section.title}. ${section.content} `;
    });
    if (city.highlights && city.highlights.length > 0) {
      speechText += 'Öne çıkan özellikler: ' + city.highlights.join(', ') + '. ';
    }
  }

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }
  
  return (
    <div>
      <SpeechButton text={speechText} />
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${city.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white px-4 md:px-8">
          <button 
            onClick={() => navigate('/')}
            className="absolute top-24 md:top-32 left-4 md:left-8 flex items-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Geri</span>
          </button>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {city.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {city.description}
          </motion.p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-12">
              {city.content.intro}
            </p>
            
            <div className="space-y-16">
              {city.content.sections.map((section, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                      {section.title}
                    </h2>
                    <p className="text-stone-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                  
                  {section.image && (
                    <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Highlights */}
            <div className="mt-16 p-8 bg-stone-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Öne Çıkan Özellikler</h3>
              <ul className="space-y-2">
                {city.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;