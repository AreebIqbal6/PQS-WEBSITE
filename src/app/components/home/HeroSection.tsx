"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-pqs-dark">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-[url('/threads.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"></div>
      <div className="absolute inset-0 z-10 hero-overlay"></div>
      
      {/* Animated abstract geometric shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border border-pqs-gold/10 opacity-50"
        />
        <motion.div 
          animate={{ rotate: -360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-30%] left-[-15%] w-[1000px] h-[1000px] rounded-full border border-white/5 opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-pqs-gold"></div>
            <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Precision Quality Services</h2>
            <div className="h-[2px] w-12 bg-pqs-gold"></div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Elevating Textile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold to-white italic font-light">Performance</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg md:text-2xl max-w-3xl mb-12 font-light leading-relaxed">
            Specialized consultancy, training, and troubleshooting rooted in the real challenges of the factory floor. We build sustainable zero-defect cultures.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
            <Link href="/services" className="group relative inline-flex items-center gap-4 bg-pqs-gold text-pqs-navy rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-white shadow-xl hover:-translate-y-1">
              <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">OUR EXPERTISE</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-pqs-navy/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <ArrowRight size={16} className="text-pqs-navy group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-transparent border border-white/30 text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:border-pqs-gold hover:bg-pqs-gold/10">
              <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">GET IN TOUCH</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-gray-400 font-montserrat text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-[1px] h-12 bg-gradient-to-b from-pqs-gold to-transparent" />
      </motion.div>
    </section>
  );
}
