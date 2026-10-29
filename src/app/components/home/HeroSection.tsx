"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } } };

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-pqs-dark">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/unsplash_0.jpg" 
          alt="Precision Quality Services Hero Background" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover opacity-30 mix-blend-luminosity scale-105"
        />
      </div>
      <div className="absolute inset-0 z-10 hero-overlay"></div>
      
      {/* Hardware-Accelerated CSS Geometric Circles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border border-pqs-gold/15 opacity-50 animate-spin-slow pointer-events-none"
        />
        <div 
          className="absolute bottom-[-30%] left-[-15%] w-[1000px] h-[1000px] rounded-full border border-white/5 opacity-50 animate-spin-slow-reverse pointer-events-none"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 my-auto">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }} 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          
          {/* Top Tagline Pill - Clickable to About Page */}
          <motion.div variants={fadeInUp}>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-pqs-gold/30 hover:border-pqs-gold/60 backdrop-blur-md mb-8 transition-all group"
              title="Learn more about PQS"
            >
              <div className="h-[2px] w-8 bg-pqs-gold"></div>
              <h2 className="font-montserrat font-bold tracking-[0.2em] text-xs md:text-sm italic text-white group-hover:text-pqs-gold transition-colors">
                Making Compliance Real
              </h2>
              <div className="h-[2px] w-8 bg-pqs-gold"></div>
            </Link>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-[1.08] tracking-tight mb-8"
          >
            Laboratory Testing &amp; <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(8px)" }} 
              animate={{ opacity: 1, filter: "blur(0px)" }} 
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold via-[#e8d28a] to-white italic font-light inline-block"
            >
              Certified Compliance
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-base sm:text-lg md:text-2xl max-w-3xl mb-10 font-light leading-relaxed">
            Accredited <strong className="text-white font-medium">ISO 17025</strong> testing protocols, sustainability certifications (<strong className="text-white font-medium">GOTS, GRS, ZDHC, PPWR, EN 15343</strong>), and factory-floor quality management tailored for international supply chains.
          </motion.p>

          {/* Clickable Action Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-pqs-gold hover:bg-white text-pqs-navy font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(200,169,81,0.3)] hover:-translate-y-0.5"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowRight size={15} />
            </Link>

            <Link 
              href="/#accreditations" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs tracking-widest px-7 py-4 rounded-full border border-white/20 transition-all duration-300"
            >
              <ShieldCheck size={16} className="text-pqs-gold" />
              <span>EXPLORE STANDARDS</span>
            </Link>

            <a 
              href="https://wa.me/923009260495?text=Hello%20PQS,%20I%20would%20like%20to%20inquire%20about%20your%20testing%20and%20certification%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-montserrat font-semibold text-xs tracking-wider px-6 py-4 rounded-full border border-white/10 hover:border-emerald-400 transition-all duration-300"
            >
              <WhatsAppIcon size={16} className="text-[#25D366] shrink-0" />
              <span>WHATSAPP</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
