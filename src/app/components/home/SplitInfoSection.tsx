"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

export default function SplitInfoSection() {
  return (
    <section className="py-32 bg-[#fafafa] relative z-30 overflow-hidden">
      {/* PQS Stamp Watermark */}
      <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] opacity-[0.03] pointer-events-none rotate-12 mix-blend-multiply">
        <Image src="/stamp.png" alt="PQS Stamp" fill sizes="700px" className="object-contain" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="text-pqs-gold font-montserrat font-bold tracking-[0.2em] uppercase mb-4 text-sm">THE PQS DIFFERENCE</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-montserrat font-black text-pqs-navy mb-8 tracking-tight leading-[1.1]">
              Real solutions for the factory floor.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-xl mb-10 leading-relaxed font-light">
              We avoid boardroom theory. Our experts dive into the machines, the materials, and the metrics. We identify root causes and implement changes that stick.
            </motion.p>
            <motion.div variants={staggerContainer} className="flex flex-col gap-4 mb-8">
              {[
                { title: "Improved product quality and consistent output", link: "/standards/iso-17025" },
                { title: "Reduction in defects and rework cycles", link: "/services#training" },
                { title: "Better process control across all stages", link: "/services#consultancy" }
              ].map((item, i) => (
                <Link key={i} href={item.link}>
                  <motion.div variants={fadeInUp} whileHover={{ x: 6 }} className="flex items-center gap-5 p-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-pqs-gold/40 hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-pqs-navy/5 group-hover:bg-pqs-gold/20 flex items-center justify-center shrink-0 transition-colors">
                      <CheckCircle className="text-pqs-gold" size={24} />
                    </div>
                    <span className="font-montserrat font-semibold text-pqs-navy group-hover:text-pqs-gold transition-colors text-sm md:text-base">{item.title}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Clickable Action Button */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-pqs-navy hover:bg-pqs-gold hover:text-pqs-navy text-white font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>CONSULT WITH OUR EXPERTS</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full relative"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {/* Visual Box with Optimized Next Image */}
            <div className="relative w-full aspect-square rounded-[3rem] bg-gray-200 overflow-hidden shadow-2xl group">
               <Image 
                 src="/inspector.jpg" 
                 alt="PQS Technical Quality Inspection" 
                 fill 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-pqs-navy/20 mix-blend-overlay"></div>
               
               {/* Floating Glass Stats - GPU Hardware Accelerated */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-6 flex justify-between items-center animate-float-subtle">
                  <div>
                    <div className="text-pqs-navy font-black text-4xl font-montserrat">100%</div>
                    <div className="text-gray-800 font-lato font-bold text-sm uppercase tracking-widest">Quality Focus</div>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-400/60"></div>
                  <div>
                    <div className="text-pqs-navy font-black text-4xl font-montserrat">360°</div>
                    <div className="text-gray-800 font-lato font-bold text-sm uppercase tracking-widest">Process Mapping</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
