"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers, Search } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

export default function ServicesCards() {
  return (
    <section className="py-20 relative z-20 bg-pqs-dark border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Training */}
          <Link href="/services#training" className="block h-full">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 group transition-all duration-200 relative overflow-hidden h-full cursor-pointer hover:shadow-xl hover:border-pqs-gold/40"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-pqs-gold/40 transition-colors duration-200">
                <BookOpen size={24} className="text-pqs-gold" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">Training</h3>
              <p className="text-gray-400 font-lato text-sm mb-8 leading-relaxed font-light">
                Practical, industry-focused programs for production teams and quality personnel. Root cause analysis taught right on the floor.
              </p>
              <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-colors duration-200">
                <ArrowRight size={16} className="group-hover:text-pqs-navy transition-colors text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Card 2: Consultancy */}
          <Link href="/services#consultancy" className="block h-full">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 group transition-all duration-200 relative overflow-hidden h-full md:translate-y-6 cursor-pointer hover:shadow-xl hover:border-pqs-gold/40"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-pqs-gold/40 transition-colors duration-200">
                <Layers size={24} className="text-pqs-gold" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">Consultancy</h3>
              <p className="text-gray-400 font-lato text-sm mb-8 leading-relaxed font-light">
                Strengthen processes and build effective quality systems. We implement CAPA and rigorous process mapping for sustainability.
              </p>
              <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-colors duration-200">
                <ArrowRight size={16} className="group-hover:text-pqs-navy transition-colors text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Card 3: Troubleshooting */}
          <Link href="/services#training" className="block h-full">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 group transition-all duration-200 relative overflow-hidden h-full cursor-pointer hover:shadow-xl hover:border-pqs-gold/40"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-pqs-gold/40 transition-colors duration-200">
                <Search size={24} className="text-pqs-gold" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-3 text-white">Troubleshooting</h3>
              <p className="text-gray-400 font-lato text-sm mb-8 leading-relaxed font-light">
                Structured support to resolve recurring issues at the source. Deep data collection, investigation, and permanent verification.
              </p>
              <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-colors duration-200">
                <ArrowRight size={16} className="group-hover:text-pqs-navy transition-colors text-white" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
