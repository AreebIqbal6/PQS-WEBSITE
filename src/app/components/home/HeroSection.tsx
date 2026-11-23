"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } } };

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    import('@zerowing/liquid-glass').catch((err) => {
      console.error('Failed to load @zerowing/liquid-glass:', err);
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-pqs-dark">
      {isMounted ? (
        <liquid-glass
          backdrop="/unsplash_0.jpg"
          dim="0.55"
          no-pointer=""
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '7rem',
            paddingBottom: '4rem',
            background: 'transparent',
          }}
        >
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
                  glass=""
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 mb-8 transition-colors group cursor-pointer"
                  style={{
                    '--glass-tint': 'rgba(255, 255, 255, 0.12)',
                    '--glass-frost': '0.2',
                    '--glass-pull': '0',
                    '--glass-shadow': '0',
                  } as React.CSSProperties}
                  title="Learn more about PQS"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pqs-gold"></span>
                  <h2 className="font-montserrat font-medium tracking-wide text-xs md:text-sm text-gray-200 group-hover:text-pqs-gold transition-colors">
                    Making Compliance Real
                  </h2>
                </Link>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={fadeInUp} 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-bold text-white leading-[1.08] tracking-tight mb-8"
              >
                Laboratory Testing &amp; <br />
                <span className="text-[#e8d28a] font-normal inline-block">
                  Certified Compliance
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-base sm:text-lg md:text-xl max-w-3xl mb-10 font-light leading-relaxed">
                Accredited <strong className="text-white font-medium">ISO 17025</strong> testing protocols, sustainability certifications (<strong className="text-white font-medium">GOTS, GRS, ZDHC, PPWR, EN 15343</strong>), and factory-floor quality management tailored for international supply chains.
              </motion.p>

              {/* Clickable Action Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  glass=""
                  className="cta w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-pqs-gold text-pqs-navy font-montserrat font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
                  style={{
                    '--glass-tint': 'rgba(200, 169, 81, 0.9)',
                    '--glass-frost': '0.15',
                    '--glass-pull': '0',
                    '--glass-shadow': '0',
                    color: '#0A1E35',
                  } as React.CSSProperties}
                >
                  <span>Schedule an Audit</span>
                  <ArrowRight size={16} />
                </Link>

                <Link 
                  href="/#accreditations" 
                  glass=""
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-white font-montserrat font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
                  style={{
                    '--glass-tint': 'rgba(255, 255, 255, 0.15)',
                    '--glass-frost': '0.2',
                    '--glass-pull': '0',
                    '--glass-shadow': '0',
                  } as React.CSSProperties}
                >
                  <ShieldCheck size={16} className="text-pqs-gold" />
                  <span>Explore Standards</span>
                </Link>
              </motion.div>

            </motion.div>
          </div>
        </liquid-glass>
      ) : (
        /* Fallback for SSR */
        <div className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-pqs-dark">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: 'url("/unsplash_0.jpg")' }}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="container mx-auto px-4 lg:px-8 relative z-20 my-auto">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-pqs-gold"></span>
                <h2 className="font-montserrat font-medium tracking-wide text-xs md:text-sm text-gray-200">
                  Making Compliance Real
                </h2>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-bold text-white leading-[1.08] tracking-tight mb-8">
                Laboratory Testing &amp; <br />
                <span className="text-[#e8d28a] font-normal inline-block">
                  Certified Compliance
                </span>
              </h1>
              <p className="text-gray-300 font-lato text-base sm:text-lg md:text-xl max-w-3xl mb-10 font-light leading-relaxed">
                Accredited <strong className="text-white font-medium">ISO 17025</strong> testing protocols, sustainability certifications (<strong className="text-white font-medium">GOTS, GRS, ZDHC, PPWR, EN 15343</strong>), and factory-floor quality management tailored for international supply chains.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
