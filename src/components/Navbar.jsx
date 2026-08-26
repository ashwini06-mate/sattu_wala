import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#flavors' },
    { name: 'Macro Explorer', href: '#configurator' },
    { name: 'Our Story', href: '#story' },
    { name: 'Nutrition', href: '#nutrition' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav-light py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 rounded-full border-[3px] border-amber-300 bg-[#2d1a09] p-[2px] shadow-[0_8px_18px_rgba(120,53,15,0.18)] transition-transform group-hover:scale-105">
              <img
                src="/logo.jpeg"
                alt="Sattu Wala logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="font-display text-xl sm:text-2xl font-black tracking-[0.08em] text-stone-900 uppercase">
                Sattu
              </span>
              <span className="font-display text-xl sm:text-2xl font-black tracking-[0.08em] text-stone-900 uppercase -mt-1">
                Wala
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-stone-200 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-stone-700 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>31.44g Protein</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg md:hidden bg-white border border-stone-200 text-stone-700 hover:text-stone-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-stone-800 hover:text-amber-600 py-2 border-b border-stone-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
