"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-2 liquid-glass-dark border border-white/10`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-50">
            <Image 
              src="/logo_cutout.png" 
              alt="PQS Logo" 
              width={isScrolled ? 180 : 220} 
              height={40} 
              className="object-contain transition-all duration-500 ease-out group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 font-montserrat font-bold text-xs tracking-wider text-white">
            <Link href="/" className="hover:text-pqs-gold transition-colors duration-300">HOME</Link>
            <div className="group relative cursor-pointer flex items-center gap-1 hover:text-pqs-gold transition-colors duration-300 py-4">
              SERVICES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              {/* Dropdown glass menu */}
              <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 liquid-glass-dark rounded-xl p-4 flex flex-col gap-3">
                <Link href="/services" className="text-white hover:text-pqs-gold transition-colors">All Services</Link>
                <Link href="/services" className="text-white hover:text-pqs-gold transition-colors">Textile Training</Link>
                <Link href="/services" className="text-white hover:text-pqs-gold transition-colors">Consultancy</Link>
                <Link href="/services" className="text-white hover:text-pqs-gold transition-colors">Audits</Link>
              </div>
            </div>
            <Link href="/about" className="hover:text-pqs-gold transition-colors duration-300">ABOUT US</Link>
            <Link href="/contact" className="hover:text-pqs-gold transition-colors duration-300">CONTACT</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-white hover:text-pqs-gold transition-colors duration-300 hover:scale-110"><Search size={20} /></button>
            <Link href="/contact" className="bg-pqs-gold text-pqs-navy px-7 py-2.5 rounded-full font-bold font-montserrat tracking-wide text-xs hover:bg-white shadow-lg hover:shadow-[0_10px_20px_rgba(200,169,81,0.3)] transition-all duration-300 hover:-translate-y-0.5">
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white hover:scale-110 transition-transform relative z-50 p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Awwwards Style Fullscreen Liquid Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-0 left-0 w-full h-screen liquid-glass flex flex-col justify-center items-center gap-8 font-montserrat text-pqs-navy z-40"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} >
              <Link href="/" className="text-3xl font-black tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} >
              <Link href="/services" className="text-3xl font-black tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} >
              <Link href="/about" className="text-3xl font-black tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} >
              <Link href="/contact" className="text-3xl font-black tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
              <Link href="/contact" className="bg-pqs-gold text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                GET A QUOTE
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
