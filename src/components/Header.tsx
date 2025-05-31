import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold text-stone-800 bg-white/50 rounded-xl px-4 py-1 shadow backdrop-blur-sm font-greatvibes"
            aria-label="Hiraa Ana Sayfa"
          >
            Hiraa
          </Link>
          <img src={logo} alt="Hiraa Logo" className="h-16 w-16 object-contain rounded-full shadow-sm bg-white ml-2" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-amber-600 ${
              location.pathname === '/' ? 'text-amber-600' : 'text-stone-800'
            }`}
          >
            Şehirler
          </Link>
          <Link 
            to="/hakkinda" 
            className={`font-medium transition-colors hover:text-amber-600 ${
              location.pathname === '/hakkinda' ? 'text-amber-600' : 'text-stone-800'
            }`}
          >
            Hakkında
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;