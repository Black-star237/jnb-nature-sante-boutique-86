
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Si on est sur la page d'accueil, scroll vers la section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si on est sur une autre page, naviguer vers l'accueil puis scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f5979f13-861a-40d8-908d-7397d6586914.png" 
              alt="Dr. JNB Nature & Santé" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-green-700">Dr. JNB</h1>
              <p className="text-sm text-green-600">Nature & Santé</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')} 
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('specialites')} 
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              Spécialités
            </button>
            <button 
              onClick={() => scrollToSection('traitements')} 
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              Traitements
            </button>
            <Link to="/boutique" className="text-gray-700 hover:text-green-600 transition-colors">
              Boutique
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://wa.me/+237698677491" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('specialites')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Spécialités
              </button>
              <button 
                onClick={() => scrollToSection('traitements')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Traitements
              </button>
              <Link 
                to="/boutique" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Contact
              </button>
              <a 
                href="https://wa.me/+237698677491" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-green-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                📱 WhatsApp: 698 67 74 91
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
