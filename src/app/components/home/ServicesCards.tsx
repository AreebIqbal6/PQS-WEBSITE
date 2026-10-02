"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers, Search } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function ServicesCards() {
  return (
    <section className="py-24 relative z-20 bg-pqs-dark noise-bg -mt-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-10%" }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <Link href="/services">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="liquid-glass-dark rounded-[2rem] p-8 md:p-10 group transition-all duration-500 ease-out relative overflow-hidden h-full cursor-pointer hover:shadow-2xl hover:shadow-pqs-gold/10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pqs-gold/10 rounded-full blur-3xl group-hover:bg-pqs-gold/30 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <BookOpen size={28} className="text-pqs-gold" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4 text-white">Training</h3>
              <p className="text-gray-400 font-lato mb-12 leading-relaxed">
                Practical, industry-focused programs for production teams and quality personnel. Root cause analysis taught right on the floor.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-pqs-navy transition-colors text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Card 2 */}
          <Link href="/services">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="liquid-glass-dark rounded-[2rem] p-8 md:p-10 group transition-all duration-500 ease-out relative overflow-hidden h-full md:translate-y-12 cursor-pointer hover:shadow-2xl hover:shadow-pqs-gold/10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pqs-gold/10 rounded-full blur-3xl group-hover:bg-pqs-gold/30 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Layers size={28} className="text-pqs-gold" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4 text-white">Consultancy</h3>
              <p className="text-gray-400 font-lato mb-12 leading-relaxed">
                Strengthen processes and build effective quality systems. We implement CAPA and rigorous process mapping for sustainability.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-pqs-navy transition-colors text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Card 3 */}
          <Link href="/services">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="liquid-glass-dark rounded-[2rem] p-8 md:p-10 group transition-all duration-500 ease-out relative overflow-hidden h-full cursor-pointer hover:shadow-2xl hover:shadow-pqs-gold/10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pqs-gold/10 rounded-full blur-3xl group-hover:bg-pqs-gold/30 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Search size={28} className="text-pqs-gold" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4 text-white">Troubleshooting</h3>
              <p className="text-gray-400 font-lato mb-12 leading-relaxed">
                Structured support to resolve recurring issues at the source. Deep data collection, investigation, and permanent verification.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-pqs-navy transition-colors text-white" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
