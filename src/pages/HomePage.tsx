import React from 'react';
import Hero from '../components/Hero';
import CityGrid from '../components/CityGrid';
import { motion } from 'framer-motion';
import SpeechButton from '../components/SpeechButton';

const HomePage: React.FC = () => {
  // Sayfa içeriğini sesli anlatım için metin olarak derliyorum
  const speechText = `Hikayeler Yolculuğa Dönüşür. Hiraa ile Türkiye'nin en etkileyici şehirlerini keşfedin. Her şehir, kendi benzersiz hikayesini, kültürünü ve güzelliklerini sizinle paylaşmayı bekliyor. Bu yolculukta sadece şehirleri değil, kendinizi de keşfedeceksiniz.`;

  return (
    <div>
      <SpeechButton text={speechText} />
      <Hero />
      <CityGrid />
      
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Hikayeler Yolculuğa Dönüşür</h2>
            <p className="text-lg text-stone-700 mb-8">
              Hiraa ile Türkiye'nin en etkileyici şehirlerini keşfedin. Her şehir, kendi benzersiz hikayesini, kültürünü ve güzelliklerini sizinle paylaşmayı bekliyor. Bu yolculukta sadece şehirleri değil, kendinizi de keşfedeceksiniz.
            </p>
            <div className="flex justify-center">
              <a 
                href="#sehirler" 
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-300"
              >
                Yolculuğa Başla
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;