"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const services = [
  {
    title: "Textile Training",
    desc: "Practical, industry-focused programs for production teams and quality personnel. Root cause analysis taught right on the floor.",
    img: "/unsplash_1.jpg"
  },
  {
    title: "Textile Consultancy",
    desc: "Strengthen processes and build effective quality systems. We implement CAPA and rigorous process mapping for sustainability.",
    img: "/unsplash_2.jpg"
  },
  {
    title: "Troubleshooting",
    desc: "Structured support to resolve recurring issues at the source. Deep data collection, investigation, and permanent verification.",
    img: "/unsplash_4.jpg"
  },
  {
    title: "Quality Audits",
    desc: "Comprehensive evaluation of factory conditions, quality control systems, and social compliance to meet international standards.",
    img: "/unsplash_3.jpg"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 pt-32 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/unsplash_0.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">WHAT WE DO</h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight">
              Our Services
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Stamp Watermark */}
        <div className="absolute top-[40%] right-[-15%] w-[800px] h-[800px] opacity-[0.02] pointer-events-none rotate-[25deg] mix-blend-multiply">
           <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="flex flex-col gap-24">
            
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.img}')` }}
                    />
                    <div className="absolute inset-0 bg-pqs-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-12">
                  <div className="text-pqs-gold font-montserrat font-black text-6xl md:text-8xl opacity-20 mb-[-2rem] ml-[-1rem]">0{index + 1}</div>
                  <h2 className="text-3xl md:text-4xl font-montserrat font-black text-pqs-navy mb-6">{service.title}</h2>
                  <p className="text-gray-600 font-lato text-lg leading-relaxed mb-8">{service.desc}</p>
                  <ul className="flex flex-col gap-4 mb-8">
                    {["Root cause analysis", "System optimization", "Continuous verification"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-pqs-navy font-semibold font-lato">
                        <CheckCircle size={20} className="text-pqs-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-bold font-montserrat tracking-widest text-pqs-navy hover:text-pqs-gold transition-colors group">
                    REQUEST SERVICE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

    </div>
  );
}
