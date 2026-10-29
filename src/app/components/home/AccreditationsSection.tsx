"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, FileCheck2 } from 'lucide-react';
import { getAccreditationStandards } from '@/data/standards';
import AuditSpecModal from '../ui/AuditSpecModal';

const certifications = getAccreditationStandards();

export default function AccreditationsSection() {
  const [specModalId, setSpecModalId] = useState<string | null>(null);

  return (
    <section id="accreditations" className="py-28 relative z-20 bg-pqs-dark noise-bg border-t border-b border-pqs-gold/20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-pqs-gold/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-20 right-0 w-[600px] h-[600px] bg-[#0A1E35]/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-pqs-gold/30 backdrop-blur-md mb-6"
          >
            <ShieldCheck size={16} className="text-pqs-gold" />
            <span className="text-pqs-gold font-montserrat font-bold text-xs tracking-[0.25em] uppercase">
              ACCREDITED COMPLIANCE FRAMEWORKS &bull; GLOBAL STANDARDS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-white leading-tight tracking-tight mb-6"
          >
            Making Compliance Real Across <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold via-[#e8d28a] to-white italic font-normal">
              8 International Standards
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 font-lato text-lg md:text-xl font-light leading-relaxed"
          >
            Precision Quality Services (PQS) bridges factory floor execution with rigorous international accreditation. We prepare, audit, test, and certify your operations for premier global buyers.
          </motion.p>
        </div>

        {/* 8 Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-pqs-gold/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,169,81,0.15)]"
            >
              {/* Top Accent Gradient on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pqs-gold/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div>
                {/* Badge Card Wrapper */}
                <Link 
                  href={`/standards/${cert.id}`}
                  className="block bg-[#FFFFFF] rounded-xl p-3 mb-6 shadow-md border border-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  title={`View ${cert.name} certification specification`}
                >
                  <div className="relative w-full h-24">
                    <Image 
                      src={cert.badgeImg} 
                      alt={cert.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-1" 
                    />
                  </div>
                </Link>

                {/* Title & Tagline */}
                <Link href={`/standards/${cert.id}`} className="block group/link">
                  <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-pqs-gold transition-colors mb-1 flex items-center justify-between">
                    <span>{cert.name}</span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-all" />
                  </h3>
                  <div className="text-pqs-gold font-lato text-xs font-semibold tracking-wider uppercase mb-3">
                    {cert.tagline}
                  </div>
                </Link>

                {/* Scope Description */}
                <p className="text-gray-400 font-lato text-sm leading-relaxed mb-6 font-light">
                  {cert.scope}
                </p>
              </div>

              {/* Bullet Features & Specification Actions */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <ul className="flex flex-col gap-2 mb-5">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-lato">
                      <CheckCircle2 size={13} className="text-pqs-gold shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Specification Button & Direct Page Link */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSpecModalId(cert.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-pqs-gold hover:text-pqs-navy text-white font-montserrat font-bold text-xs tracking-wider border border-white/15 transition-all cursor-pointer active:scale-[0.98] group/btn"
                  >
                    <FileCheck2 size={14} className="text-pqs-gold group-hover/btn:text-pqs-navy transition-colors" />
                    <span>VIEW SPECIFICATION</span>
                  </button>
                  <Link
                    href={`/standards/${cert.id}`}
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-white/10 hover:bg-pqs-gold hover:text-pqs-navy text-white font-montserrat font-bold text-xs border border-white/15 transition-all"
                    title={`View dedicated ${cert.name} scope page`}
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-pqs-gold/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-2xl"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-montserrat font-black text-white mb-2">
              Need Verification or Audit Preparation for Your Facility?
            </h4>
            <p className="text-gray-300 font-lato text-base font-light">
              Our certified auditors and technical consultants review your readiness, manage testing submissions, and align your operations with buyer compliance protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-pqs-gold text-pqs-navy font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-white shadow-[0_0_30px_rgba(200,169,81,0.3)] hover:-translate-y-0.5"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowRight size={15} />
            </Link>

            <a 
              href="https://wa.me/923009260495?text=Hello%20PQS,%20I%20am%20interested%20in%20certification%20and%20audit%20readiness%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white font-montserrat font-bold text-xs tracking-widest px-7 py-4 rounded-full transition-all duration-300 hover:border-pqs-gold hover:bg-pqs-gold/10"
            >
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>
        </motion.div>

        {/* Specification Modal for Selected Certification */}
        <AuditSpecModal
          isOpen={!!specModalId}
          onClose={() => setSpecModalId(null)}
          standardId={specModalId || "iso-17025"}
        />

      </div>
    </section>
  );
}
