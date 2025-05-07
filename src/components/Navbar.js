'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navLinks - removed About Us and Contact Us
  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' }, 
    { name: 'Articles', href: '/#articles', id: 'articles' }, 
    { name: 'Scriptures', href: '/#scriptures', id: 'scriptures' }, 
    { name: 'For You', href: '/#for-you', id: 'for-you' }, 
  ];

  const mobileMenuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: { type: 'tween', duration: 0.3, ease: 'easeIn' }
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'tween', duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md border-b border-slate-200' : 'bg-white'} py-4 rounded-none`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-slate-900">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group py-1">
            <Image 
              src="/svarupa-logo.svg" 
              alt="Svarupa Logo" 
              width={42} 
              height={42} 
              className="mr-3 filter drop-shadow(0 0 8px rgba(255, 204, 85, 0.3)) transition-transform duration-300 group-hover:animate-pulse-slow"
            />
            <span className="text-xl font-bold font-martel bg-gradient-to-r from-primary-blue to-[#52729D] bg-clip-text text-transparent">Svarupa</span>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-10 items-center ml-10 text-slate-800">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold font-martel transition-all duration-300 ease-in-out hover:text-primary-blue ${activePage === link.id ? 'text-primary-blue after:absolute after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2 after:h-[3px] after:w-[60%] after:rounded-full after:bg-[#F9C753]' : ''}`}
              onClick={() => { 
                if (link.href.startsWith('/#') || link.href === '/') {
                  setActivePage(link.id);
                }
                // No need to check isMenuOpen for desktop links
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="text-sm font-semibold font-martel text-slate-600 relative transition-all duration-300 ease-in-out hover:text-primary-blue hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 rounded-md px-4 py-2 mx-2">
            Sign In
          </Link>
          <Link 
            href="/get-started" 
            className="bg-glow-blue text-white text-sm font-semibold font-martel px-6 py-2.5 rounded-full shadow-glow-blue hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 transform hover:-translate-y-0.5"
            style={{
              transition: 'all 0.5s ease-in-out'
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-blue"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu - With Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 " // Removed transform and transition, handled by Framer Motion
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            ></motion.div>
            
            {/* Menu Panel */}
            <motion.div 
              className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg"
              variants={mobileMenuVariants}
            >
              <div className="p-5 pt-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="text-xl font-martel font-bold text-primary-blue" onClick={() => setIsMenuOpen(false)}>
                    Svarupa
                  </Link>
                  {/* Close button can be simpler if menu button itself toggles */}
                </div>
                <div className="space-y-5"> {/* Adjusted spacing */}
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className={`block text-base font-martel font-medium transition-colors duration-200 hover:text-primary-blue ${activePage === link.id ? 'text-primary-blue' : 'text-slate-700'}`}
                      onClick={() => {
                        if (link.href.startsWith('/#') || link.href === '/') {
                          setActivePage(link.id);
                        }
                        setIsMenuOpen(false); 
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-8 border-t border-slate-200 mt-8"> {/* Adjusted spacing */}
                    <Link href="/signin" className="block text-base font-martel font-medium text-slate-600 transition-colors duration-200 hover:text-primary-blue mb-5"> {/* Adjusted spacing and font */}
                      Sign In
                    </Link>
                    <Link 
                      href="/get-started" 
                      className="w-full text-center bg-glow-blue text-white text-sm font-semibold font-martel px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] block"
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
