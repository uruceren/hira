import React from 'react';
import { motion } from 'framer-motion';
import SpeechButton from '../components/SpeechButton';

const AboutPage: React.FC = () => {
  // Sayfa içeriğini sesli anlatım için metin olarak derliyorum
  const speechText = `Hakkımızda. Hiraa, Türkiye'nin eşsiz şehirlerini, kültürlerini ve hikayelerini keşfetmek isteyen herkes için oluşturulmuş bir platform. Amacımız, Türkiye'nin zengin kültürel mirasını ve şehirlerinin benzersiz karakterlerini, samimi bir anlatımla sizlere sunmak. Her şehrin kendine has bir ruhu, bir hikayesi var. Biz de bu hikayeleri, o şehirleri deneyimlemiş biri gözünden anlatmaya çalışıyoruz. Turistik bilgilerden ziyade, bir şehrin ruhunu, atmosferini, günlük yaşamını ve insanlarını anlatan içerikler sunuyoruz. Vizyonumuz: Türkiye'nin her köşesini, en samimi şekilde keşfetmenize yardımcı olmak. Sadece turistik yerleri değil, yerel yaşamın bir parçası olan mekanları, tatları ve gelenekleri de sizlerle paylaşmak istiyoruz. Böylece, bir şehri ziyaret ettiğinizde, kendinizi oranın bir parçası gibi hissedebilirsiniz. Neden Hiraa? Hiraa, Türkçe'de yolculuk anlamına gelen bir kelimedir. Biz de sizleri Türkiye'nin en güzel şehirlerinde bir yolculuğa çıkarmak istiyoruz. Bu yolculukta, sadece fiziksel mekanları değil, o şehirlerin ruhunu, kültürünü ve insanlarını da keşfedeceksiniz. Eğer siz de bizim gibi seyahat etmeyi, yeni yerler keşfetmeyi ve farklı kültürleri tanımayı seviyorsanız, Hiraa tam size göre. Türkiye'nin kalbinde bir yolculuğa çıkmaya hazır mısınız?`;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SpeechButton text={speechText} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hakkımızda
          </motion.h1>
          
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl leading-relaxed mb-6">
              Hiraa, Türkiye'nin eşsiz şehirlerini, kültürlerini ve hikayelerini keşfetmek isteyen herkes için oluşturulmuş bir platform. Amacımız, Türkiye'nin zengin kültürel mirasını ve şehirlerinin benzersiz karakterlerini, samimi bir anlatımla sizlere sunmak.
            </p>
            
            <p className="mb-8">
              Her şehrin kendine has bir ruhu, bir hikayesi var. Biz de bu hikayeleri, o şehirleri deneyimlemiş biri gözünden anlatmaya çalışıyoruz. Turistik bilgilerden ziyade, bir şehrin ruhunu, atmosferini, günlük yaşamını ve insanlarını anlatan içerikler sunuyoruz.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Vizyonumuz</h2>
            <p className="mb-8">
              Türkiye'nin her köşesini, en samimi şekilde keşfetmenize yardımcı olmak. Sadece turistik yerleri değil, yerel yaşamın bir parçası olan mekanları, tatları ve gelenekleri de sizlerle paylaşmak istiyoruz. Böylece, bir şehri ziyaret ettiğinizde, kendinizi oranın bir parçası gibi hissedebilirsiniz.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Neden Hiraa?</h2>
            <p className="mb-4">
              Hiraa, Türkçe'de "yolculuk" anlamına gelen bir kelimedir. Biz de sizleri Türkiye'nin en güzel şehirlerinde bir yolculuğa çıkarmak istiyoruz. Bu yolculukta, sadece fiziksel mekanları değil, o şehirlerin ruhunu, kültürünü ve insanlarını da keşfedeceksiniz.
            </p>
            <p>
              Eğer siz de bizim gibi seyahat etmeyi, yeni yerler keşfetmeyi ve farklı kültürleri tanımayı seviyorsanız, Hiraa tam size göre. Türkiye'nin kalbinde bir yolculuğa çıkmaya hazır mısınız?
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;