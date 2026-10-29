"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, ClipboardList, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getAuditStandards } from '@/data/standards';

const auditStandards = getAuditStandards();

export default function Audits() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER / HERO BANNER */}
      <section className="relative min-h-[500px] md:min-h-[560px] flex flex-col justify-center pt-44 md:pt-52 pb-24 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/audits_hero.jpg')] bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/85 to-pqs-dark/50"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-5 pt-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                FACILITY &bull; QUALITY &bull; SOCIAL COMPLIANCE
              </h2>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-5">
              Quality &amp; Compliance Audits
            </h1>
            <p className="text-gray-300 font-lato text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Objective, rigorous evaluation of manufacturing facilities, laboratories, and supply chains for international standards.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pqs-navy/5 text-pqs-navy font-montserrat font-bold text-xs uppercase tracking-wider mb-6">
                <ShieldCheck size={15} className="text-pqs-gold" />
                <span>Auditing Expertise</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8 leading-tight">
                Comprehensive evaluation for international buyer compliance.
              </h2>
              <p className="text-gray-600 font-lato text-lg leading-relaxed mb-6 font-light">
                Our Quality Audits provide an objective, deep-dive assessment of your production lines, quality control labs, chemical inventories, and environmental safeguards to ensure you meet high-stringency buyer codes.
              </p>
              
              <div className="flex flex-col gap-4 mt-8 mb-10">
                {[
                  "Factory capacity and technical capability assessments",
                  "In-line inspections and Final Random Inspections (FRI)",
                  "ISO 17025 laboratory quality system readiness checks",
                  "Chemical management and ZDHC MRSL conformance verification",
                  "Traceability audits for GOTS, GRS, PPWR, and EN 15343"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-pqs-navy font-semibold font-lato text-sm md:text-base">
                    <CheckCircle2 size={19} className="text-pqs-gold shrink-0" /> {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-pqs-navy text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-pqs-gold hover:text-pqs-navy shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-xs md:text-sm tracking-widest">REQUEST AN AUDIT</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="https://wa.me/923009260495?text=Hello%20PQS,%20I%20would%20like%20to%20request%20an%20audit%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-pqs-navy font-montserrat font-bold text-xs md:text-sm tracking-wider px-7 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <WhatsAppIcon size={18} className="text-[#25D366] shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="w-full bg-white border border-gray-200 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-pqs-navy/5 flex items-center justify-center mb-6">
                  <ClipboardList size={32} className="text-pqs-gold" />
                </div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-black text-pqs-navy mb-4">
                  Actionable Audit Reports &amp; CAPA
                </h3>
                <p className="text-gray-600 font-lato text-base leading-relaxed mb-6 font-light">
                  Every audit produces an exhaustive, data-backed technical report detailing compliance scores, risk matrices, and prioritized Corrective &amp; Preventive Action Plans (CAPA) that factory teams can execute immediately.
                </p>
                <div className="border-t border-gray-100 pt-6 flex flex-col gap-3 text-xs font-lato text-gray-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Clear photographic evidence and quantitative test metrics</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Root cause classification (Man, Machine, Method, Material)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Follow-up verification and closing audit validation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Audit Standards Grid */}
          <div className="mt-28 pt-16 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h3 className="text-3xl font-montserrat font-black text-pqs-navy mb-3">
                Standards We Audit Against
              </h3>
              <p className="text-gray-600 font-lato text-sm font-light">
                Tailored audit protocols covering global regulatory frameworks and retailer requirements. Click any standard to inspect full scope and Stage 1/Stage 2 criteria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {auditStandards.map((std, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <Link 
                      href={`/standards/${std.id}`}
                      className="block bg-gray-50 rounded-xl p-3 mb-5 border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform"
                      title={`Inspect ${std.name} audit scope`}
                    >
                      <div className="relative w-full h-16">
                        <Image src={std.badge} alt={std.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" />
                      </div>
                    </Link>
                    <Link href={`/standards/${std.id}`}>
                      <h4 className="text-base font-montserrat font-bold text-pqs-navy group-hover:text-pqs-gold transition-colors mb-2">
                        {std.title}
                      </h4>
                    </Link>
                    <p className="text-gray-600 font-lato text-xs leading-relaxed font-light mb-4">
                      {std.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/standards/${std.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-pqs-navy group-hover:text-pqs-gold transition-colors"
                    >
                      <span>VIEW AUDIT SCOPE</span>
                      <ArrowUpRight size={14} className="text-pqs-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <span className="text-[10px] font-montserrat uppercase tracking-wider text-slate-400 font-semibold">
                      Stage 1 &amp; 2
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
