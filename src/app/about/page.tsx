"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 pt-32 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/inspector.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">WHO WE ARE</h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight">
              About PQS
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Stamp Watermark */}
        <div className="absolute top-[20%] left-[-20%] w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none -rotate-12 mix-blend-multiply">
           <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8 leading-tight">
                A specialized textile consultancy focused on the real challenges of the factory floor.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-6">
                Precision Quality Services (PQS) is a specialized textile consultancy and training company focused on helping textile organizations improve quality, productivity, process control, and operational performance.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-10">
                We avoid boardroom theory. Our experts dive directly into the machines, the materials, and the metrics. We identify root causes and implement changes that stick for the long-term, building sustainable zero-defect cultures.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-pqs-navy text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-pqs-gold shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">GET IN TOUCH</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={fadeInUp} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-[url('/threads.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
                </motion.div>
                <motion.div variants={fadeInUp} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl translate-y-12">
                  <div className="w-full h-full bg-[url('/loom.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
