"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function SplitInfoSection() {
  return (
    <section className="py-32 bg-[#fafafa] relative z-30 overflow-hidden">
      {/* PQS Stamp Watermark */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] opacity-[0.03] pointer-events-none rotate-12 mix-blend-multiply">
         <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="text-pqs-gold font-montserrat font-bold tracking-[0.2em] uppercase mb-4 text-sm">THE PQS DIFFERENCE</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-montserrat font-black text-pqs-navy mb-8 tracking-tight leading-[1.1]">
              Real solutions for the factory floor.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-xl mb-10 leading-relaxed font-light">
              We avoid boardroom theory. Our experts dive into the machines, the materials, and the metrics. We identify root causes and implement changes that stick.
            </motion.p>
            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              {[
                "Improved product quality and consistent output",
                "Reduction in defects and rework cycles",
                "Better process control across all stages"
              ].map((text, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ x: 10 }} className="flex items-center gap-5 p-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-pqs-navy/5 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-pqs-gold" size={24} />
                  </div>
                  <span className="font-montserrat font-semibold text-pqs-navy">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full relative"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
          >
            {/* Abstract Graphic Element using PQS Image */}
            <div className="relative w-full aspect-square rounded-[3rem] bg-gray-200 overflow-hidden shadow-2xl group">
               <motion.div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                 style={{ backgroundImage: "url('/inspector.jpg')" }}
               />
               <div className="absolute inset-0 bg-pqs-navy/20 mix-blend-overlay"></div>
               
               {/* Floating Glass Stats */}
               <motion.div 
                  variants={fadeInUp} 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-3xl saturate-200 border border-white/40 shadow-xl rounded-2xl p-6 flex justify-between items-center"
               >
                  <div>
                    <div className="text-pqs-navy font-black text-4xl font-montserrat">100%</div>
                    <div className="text-gray-800 font-lato font-bold text-sm uppercase tracking-widest">Quality Focus</div>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-400"></div>
                  <div>
                    <div className="text-pqs-navy font-black text-4xl font-montserrat">360°</div>
                    <div className="text-gray-800 font-lato font-bold text-sm uppercase tracking-widest">Process Mapping</div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
