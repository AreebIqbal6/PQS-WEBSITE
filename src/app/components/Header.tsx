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
    <header className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-2 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)]' 
            : 'bg-white/5 backdrop-blur-3xl saturate-200 border border-white/10 shadow-xl'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-50">
            <Image 
              src="/logo_transparent_v2.png" 
              alt="PQS Logo" 
              width={220} 
              height={40} 
              className={`object-contain transition-all duration-500 ease-out group-hover:scale-105 ${isScrolled ? 'w-[140px] md:w-[160px] invert brightness-0' : 'w-[160px] md:w-[220px]'} h-auto`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-10 font-montserrat font-bold text-xs tracking-wider transition-colors duration-500 ${isScrolled ? 'text-pqs-navy' : 'text-white'}`}>
            <Link href="/" className="hover:text-pqs-gold transition-colors duration-300">HOME</Link>
            <div className="group relative cursor-pointer flex items-center gap-1 hover:text-pqs-gold transition-colors duration-300 py-4">
              SERVICES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              {/* Dropdown glass menu */}
              <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-3xl border border-gray-100 rounded-xl p-4 flex flex-col gap-3 shadow-2xl">
                <Link href="/services" className="text-pqs-navy hover:text-pqs-gold transition-colors">All Services</Link>
                <Link href="/services" className="text-pqs-navy hover:text-pqs-gold transition-colors">Textile Training</Link>
                <Link href="/services" className="text-pqs-navy hover:text-pqs-gold transition-colors">Consultancy</Link>
                <Link href="/audits" className="text-pqs-navy hover:text-pqs-gold transition-colors">Audits</Link>
              </div>
            </div>
            <Link href="/about" className="hover:text-pqs-gold transition-colors duration-300">ABOUT US</Link>
            <Link href="/contact" className="hover:text-pqs-gold transition-colors duration-300">CONTACT</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className={`${isScrolled ? 'text-pqs-navy' : 'text-white'} hover:text-pqs-gold transition-colors duration-300 hover:scale-110`}><Search size={20} /></button>
            <Link href="/contact" className={`${isScrolled ? 'bg-pqs-navy text-white hover:bg-pqs-gold hover:text-pqs-navy' : 'bg-white text-black hover:bg-gray-200'} px-7 py-2.5 rounded-full font-bold font-montserrat tracking-wide text-xs shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden ${isScrolled ? 'text-pqs-navy' : 'text-white'} hover:scale-110 transition-transform relative z-50 p-2`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`lg:hidden absolute top-full left-0 w-full ${isScrolled ? 'bg-white/95 border-gray-200 text-pqs-navy' : 'bg-black/60 border-white/10 text-white'} backdrop-blur-3xl saturate-200 border-t flex flex-col items-center py-8 gap-6 font-montserrat z-40 shadow-2xl`}
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} >
              <Link href="/" className="text-xl font-bold tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} >
              <Link href="/services" className="text-xl font-bold tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} >
              <Link href="/about" className="text-xl font-bold tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} >
              <Link href="/contact" className="text-xl font-bold tracking-widest hover:text-pqs-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-4">
              <Link href="/contact" className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest transition-colors ${isScrolled ? 'bg-pqs-navy text-white hover:bg-pqs-gold hover:text-pqs-navy' : 'bg-pqs-gold text-pqs-navy hover:bg-white'}`} onClick={() => setMobileMenuOpen(false)}>
                GET A QUOTE
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
