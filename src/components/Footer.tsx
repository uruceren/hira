import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              Hiraa
            </Link>
            <p className="mt-2 max-w-md text-stone-400">
              Türkiye'nin en güzel şehirlerinde, kalbinizi ısıtacak hikayelerin peşinde bir yolculuk.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-white font-medium mb-3">Keşfet</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-amber-500 transition-colors">
                    Şehirler
                  </Link>
                </li>
                <li>
                  <Link to="/hakkinda" className="hover:text-amber-500 transition-colors">
                    Hakkında
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {currentYear} Hiraa. Tüm hakları saklıdır.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            <span>Türkiye'ye sevgilerle</span>
            <Heart size={14} className="ml-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;