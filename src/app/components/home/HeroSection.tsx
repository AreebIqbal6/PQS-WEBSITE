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
      <div className="absolute inset-0 z-0 bg-[url('/unsplash_0.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"></div>
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
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }} className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.5, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-pqs-gold"></div>
            <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Precision Quality Services</h2>
            <div className="h-[2px] w-12 bg-pqs-gold"></div>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 50, rotateX: 20 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} 
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-[1.05] tracking-tight mb-8 perspective-1000"
          >
            Elevating Textile <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(10px)" }} 
              animate={{ opacity: 1, filter: "blur(0px)" }} 
              transition={{ delay: 0.8, duration: 1.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold to-white italic font-light inline-block"
            >
              Performance
            </motion.span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="text-gray-300 font-lato text-lg md:text-2xl max-w-3xl mb-12 font-light leading-relaxed">
            Specialized consultancy, training, and troubleshooting rooted in the real challenges of the factory floor. We build sustainable zero-defect cultures.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="flex flex-col sm:flex-row gap-6">
            <Link href="/services" className="group relative inline-flex items-center gap-4 bg-pqs-gold text-pqs-navy rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-white shadow-[0_0_40px_rgba(200,169,81,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:-translate-y-1">
              <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">OUR EXPERTISE</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-pqs-navy/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <ArrowRight size={16} className="text-pqs-navy" />
              </div>
            </Link>
            
            <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-transparent border border-white/30 text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:border-pqs-gold hover:bg-pqs-gold/10 hover:shadow-[0_0_30px_rgba(200,169,81,0.2)]">
              <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">GET IN TOUCH</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator removed to prevent overlap on smaller viewports */}
    </section>
  );
}
