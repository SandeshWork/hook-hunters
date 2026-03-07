import image_996c804a9c933ece4d76a0049f31ba416cab95ab from 'figma:asset/996c804a9c933ece4d76a0049f31ba416cab95ab.png'
import image_dc80f18b4be205b631c74d6ac6b437273c0614a5 from 'figma:asset/dc80f18b4be205b631c74d6ac6b437273c0614a5.png'
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo1 from '../../imports/1.svg';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              src={image_996c804a9c933ece4d76a0049f31ba416cab95ab}
              alt="HookHunters"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 relative ${
                  isActive(link.path)
                    ? 'text-[#1c3439]'
                    : 'text-gray-600 hover:text-[#1c3439]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#bbd7dd]/30 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105"
            >
              Get Growth Plan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#1c3439]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1c3439]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'bg-[#bbd7dd]/30 text-[#1c3439]'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  Get Growth Plan
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
