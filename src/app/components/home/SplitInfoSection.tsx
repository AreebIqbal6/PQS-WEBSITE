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
            <motion.h4 variants={fadeInUp} className="text-pqs-gold font-montserrat font-semibold tracking-wide text-xs md:text-sm uppercase mb-3">The PQS Difference</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-pqs-navy mb-6 tracking-tight leading-[1.12]">
              Real solutions for the factory floor.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg md:text-xl mb-8 leading-relaxed font-light">
              We avoid boardroom theory. Our experts dive into the machines, the materials, and the metrics. We identify root causes and implement changes that stick.
            </motion.p>
            <motion.div variants={staggerContainer} className="flex flex-col gap-3.5 mb-8">
              {[
                { title: "Improved product quality and consistent output", link: "/standards/iso-17025" },
                { title: "Reduction in defects and rework cycles", link: "/services#training" },
                { title: "Better process control across all stages", link: "/services#consultancy" }
              ].map((item, i) => (
                <Link key={i} href={item.link}>
                  <motion.div variants={fadeInUp} whileHover={{ x: 4 }} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-pqs-gold/40 hover:shadow transition-all duration-200 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-pqs-navy/5 group-hover:bg-pqs-gold/20 flex items-center justify-center shrink-0 transition-colors">
                      <CheckCircle className="text-pqs-gold" size={20} />
                    </div>
                    <span className="font-montserrat font-medium text-pqs-navy group-hover:text-pqs-gold transition-colors text-sm md:text-base">{item.title}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Clickable Action Button */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-pqs-navy hover:bg-pqs-gold hover:text-pqs-navy text-white font-montserrat font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <span>Consult with Our Experts</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full relative"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {/* Visual Box with Optimized Next Image */}
            <div className="relative w-full aspect-square rounded-2xl bg-gray-100 overflow-hidden shadow-xl group border border-gray-100">
               <Image 
                 src="/inspector.jpg" 
                 alt="PQS Technical Quality Inspection" 
                 fill 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
                 className="object-cover" 
               />
               <div className="absolute inset-0 bg-pqs-navy/15 mix-blend-overlay"></div>
               
               {/* Anchored Stats Card */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-white/70 shadow-lg rounded-xl p-5 flex justify-between items-center">
                  <div>
                    <div className="text-pqs-navy font-bold text-3xl font-montserrat tracking-tight">100%</div>
                    <div className="text-gray-700 font-lato font-medium text-xs tracking-wide">Quality Focus</div>
                  </div>
                  <div className="w-[1px] h-10 bg-gray-200"></div>
                  <div>
                    <div className="text-pqs-navy font-bold text-3xl font-montserrat tracking-tight">360°</div>
                    <div className="text-gray-700 font-lato font-medium text-xs tracking-wide">Process Mapping</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
