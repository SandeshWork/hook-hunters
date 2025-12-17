import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg grain-bg" style={{ backgroundColor: 'var(--primary)' }}>
              <span className="flex items-center justify-center h-full text-white">A</span>
            </div>
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl" style={{ color: 'var(--primary-darkest)' }}>Agency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[var(--primary)] transition-colors duration-200">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[var(--primary)] transition-colors duration-200">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 rounded-lg grain-bg text-white transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'var(--primary)' }}>
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-[var(--primary)] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-[var(--primary)] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full py-2.5 rounded-lg grain-bg text-white transition-all duration-300" style={{ backgroundColor: 'var(--primary)' }}>
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
