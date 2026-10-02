"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ClipboardList } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Audits() {
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
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">SERVICES</h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight">
              Quality Audits
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8 leading-tight">
                Comprehensive evaluation for international standards.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-6">
                Our Quality Audits provide a deep, objective assessment of your factory conditions, quality control systems, and production lines to ensure you meet rigorous international standards and buyer requirements.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-4 mt-8 mb-10">
                {[
                  "Factory capacity and capability assessments",
                  "In-line and final random inspections (FRI)",
                  "Social compliance and safety evaluations",
                  "Quality Management System (QMS) audits"
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 text-pqs-navy font-semibold font-lato">
                    <CheckCircle size={20} className="text-pqs-gold shrink-0" /> {item}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-pqs-navy text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-pqs-gold shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">REQUEST AUDIT</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2 flex items-center justify-center">
              <motion.div variants={fadeInUp} className="w-full max-w-md liquid-glass-dark p-12 rounded-[3rem] shadow-2xl relative overflow-hidden bg-pqs-navy/5">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pqs-gold/20 rounded-full blur-3xl"></div>
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 relative z-10">
                  <ClipboardList size={40} className="text-pqs-gold" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-pqs-navy mb-4 relative z-10">Actionable Reports</h3>
                <p className="text-gray-600 font-lato leading-relaxed relative z-10">
                  Every audit concludes with a highly detailed, data-backed report outlining non-conformances, root causes, and a clear Corrective Action Plan (CAPA).
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
