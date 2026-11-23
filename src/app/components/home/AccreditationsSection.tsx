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
    <section id="accreditations" className="py-24 relative z-20 bg-pqs-dark border-t border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <ShieldCheck size={15} className="text-pqs-gold" />
            <span className="text-pqs-gold font-montserrat font-semibold text-xs tracking-wide">
              Accredited Frameworks &bull; Global Standards
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight tracking-tight mb-6"
          >
            Making Compliance Real Across <br className="hidden md:block" />
            <span className="text-[#e8d28a] font-normal">
              8 International Standards
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-300 font-lato text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
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
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-pqs-gold/40 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl"
            >
              <div>
                {/* Badge Card Wrapper */}
                <Link 
                  href={`/standards/${cert.id}`}
                  className="block bg-[#FFFFFF] rounded-xl p-3 mb-6 shadow-sm border border-gray-100 flex items-center justify-center transition-colors"
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
                  <h3 className="text-lg font-montserrat font-bold text-white group-hover:text-pqs-gold transition-colors mb-1 flex items-center justify-between">
                    <span>{cert.name}</span>
                    <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                  </h3>
                  <div className="text-pqs-gold/90 font-lato text-xs font-semibold tracking-wide mb-3">
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-pqs-gold hover:text-pqs-navy text-white font-montserrat font-semibold text-xs border border-white/10 transition-colors cursor-pointer active:scale-[0.98] group/btn whitespace-nowrap"
                  >
                    <FileCheck2 size={14} className="text-pqs-gold group-hover/btn:text-pqs-navy transition-colors" />
                    <span>View Specification</span>
                  </button>
                  <Link
                    href={`/standards/${cert.id}`}
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-white/5 hover:bg-pqs-gold hover:text-pqs-navy text-white font-montserrat font-semibold text-xs border border-white/10 transition-colors"
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
        {/* Facility CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl bg-white/[0.04] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-2">
              Need Verification or Audit Preparation for Your Facility?
            </h4>
            <p className="text-gray-300 font-lato text-base font-light">
              Our certified auditors and technical consultants review your readiness, manage testing submissions, and align your operations with buyer compliance protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2.5 bg-pqs-gold text-pqs-navy font-montserrat font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Schedule an Audit</span>
              <ArrowRight size={16} />
            </Link>
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
