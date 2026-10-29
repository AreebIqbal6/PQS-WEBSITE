"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  FileCheck2, 
  Download, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  CalendarCheck,
  Check,
  Award
} from 'lucide-react';
import { Standard, STANDARDS_CATALOG } from '@/data/standards';

interface Props {
  standard: Standard;
}

export default function StandardDetailClient({ standard }: Props) {
  const [downloaded, setDownloaded] = useState(false);

  // Filter related standards from the catalog
  const relatedStandards = STANDARDS_CATALOG.filter(
    (s) => s.id !== standard.id
  ).slice(0, 4);

  const handleDownload = () => {
    const content = `=====================================================
PRECISION QUALITY SERVICES (PQS)
OFFICIAL AUDIT & CERTIFICATION CRITERIA SPECIFICATION
=====================================================
STANDARD: ${standard.code} - ${standard.title}
CATEGORY: ${standard.category}
VALIDITY: ${standard.validity}
ESTIMATED TURNAROUND: ${standard.turnaround}
SCOPE REGIME: ${standard.iafSector}
AUDITOR PERSON-DAYS: ${standard.personDaysGuide}

SCOPE & PURPOSE:
${standard.scopeSummary}

KEY AUDIT CHECKPOINTS:
${standard.keyCheckpoints.map((c, i) => `  ${i + 1}. ${c}`).join('\n')}

STAGE 1 DOCUMENTATION REQUIREMENTS:
${standard.stage1Docs.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

STAGE 2 ON-SITE AUDIT CHECKPOINTS:
${standard.stage2Audits.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

DELIVERABLES & ARTIFACTS:
${standard.deliverables.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

ISSUED BY:
Precision Quality Services (PQS) Technical Desk
Karachi Office: R-332/9, Dastagir, F.B Area, Karachi, 75950, Pakistan
Direct Lines: 0311-2226714 | 0332-2673373
WhatsApp Inquiry: +92 300 9260495
Official Email: precisionqualityserviceslabs@gmail.com
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PQS-${standard.code.replace(/[^a-zA-Z0-9]/g, '_')}-Audit-Specification.txt`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Precision Quality Services, I would like to inquire about audit and certification readiness for ${standard.code} (${standard.name}).`
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800">
      
      {/* Top Breadcrumb & Hero */}
      <section className="relative pt-40 sm:pt-44 md:pt-48 pb-20 bg-pqs-dark text-white border-b border-pqs-gold/20 overflow-hidden">
        {/* Background photo & overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105" 
          style={{ backgroundImage: `url('${standard.heroImage}')` }} 
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/85 to-pqs-dark/60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pqs-gold/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-montserrat text-gray-400 mb-6 flex-wrap tracking-wider">
            <Link href="/" className="hover:text-pqs-gold transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/#accreditations" className="hover:text-pqs-gold transition-colors">ACCREDITATIONS</Link>
            <span>/</span>
            <span className="text-pqs-gold font-bold">{standard.code}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-6xl">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border border-gray-100 p-2 shadow-2xl shrink-0 flex items-center justify-center">
                <Image 
                  src={standard.badgeImg} 
                  alt={standard.name} 
                  width={96} 
                  height={96} 
                  className="object-contain p-1"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pqs-gold/15 text-pqs-gold font-montserrat text-xs font-bold uppercase tracking-widest mb-2.5 border border-pqs-gold/30">
                  <ShieldCheck size={14} />
                  <span>{standard.category}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-black text-white leading-tight">
                  {standard.code}
                </h1>
                <p className="text-gray-300 font-lato text-base sm:text-lg mt-1 font-light max-w-2xl">
                  {standard.title}
                </p>
              </div>
            </div>

            {/* Top Quick Actions */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full lg:w-auto">
              <Link
                href={`/contact?standard=${encodeURIComponent(standard.id)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pqs-gold hover:bg-white text-pqs-navy font-montserrat font-bold text-xs tracking-wider shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <CalendarCheck size={16} />
                <span>REQUEST AUDIT</span>
              </Link>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-montserrat font-semibold text-xs border border-white/20 transition-all w-full sm:w-auto cursor-pointer"
              >
                {downloaded ? <Check size={16} className="text-emerald-400" /> : <Download size={16} className="text-pqs-gold" />}
                <span>{downloaded ? "DOWNLOADED" : "DOWNLOAD SPEC (.TXT)"}</span>
              </button>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-6xl">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between min-h-[96px]">
              <div className="text-[11px] font-montserrat text-pqs-gold font-bold uppercase tracking-wider">Turnaround</div>
              <div className="text-sm sm:text-base font-montserrat font-bold text-white mt-1.5 leading-snug break-words">{standard.turnaround}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between min-h-[96px]">
              <div className="text-[11px] font-montserrat text-pqs-gold font-bold uppercase tracking-wider">Certificate Validity</div>
              <div className="text-sm sm:text-base font-montserrat font-bold text-white mt-1.5 leading-snug break-words" title={standard.validity}>{standard.validity}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between min-h-[96px]">
              <div className="text-[11px] font-montserrat text-pqs-gold font-bold uppercase tracking-wider">Scope Regime</div>
              <div className="text-sm sm:text-base font-montserrat font-bold text-white mt-1.5 leading-snug break-words" title={standard.iafSector}>
                {standard.iafSector}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between min-h-[96px]">
              <div className="text-[11px] font-montserrat text-pqs-gold font-bold uppercase tracking-wider">Buyer Acceptance</div>
              <div className="text-sm sm:text-base font-montserrat font-bold text-white mt-1.5 leading-snug break-words">Globally Endorsed</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Primary Content Column */}
            <div className="lg:w-2/3 flex flex-col gap-10">
              
              {/* Scope & Purpose */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider mb-2">
                  Standard Compliance Scope
                </div>
                <h2 className="text-2xl font-montserrat font-black text-pqs-navy mb-4">
                  Audit Framework &amp; Industry Relevance
                </h2>
                <p className="text-slate-600 font-lato text-base leading-relaxed font-light mb-6">
                  {standard.scopeSummary}
                </p>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                  <ShieldCheck size={20} className="text-pqs-gold shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-lato text-xs sm:text-sm leading-relaxed">
                    <strong>Person-Day Calculation:</strong> {standard.personDaysGuide}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider mb-2">
                  Core Competencies
                </div>
                <h3 className="text-2xl font-montserrat font-black text-pqs-navy mb-4">
                  Key Verification Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {standard.features.map((feature, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-pqs-navy font-bold text-xs flex items-center justify-center mb-3">
                        <CheckCircle2 size={16} className="text-pqs-gold" />
                      </div>
                      <span className="font-montserrat font-bold text-xs text-pqs-navy">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 1 Documentation Requirements */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider block">
                      Phase 01 Protocol
                    </span>
                    <h3 className="text-2xl font-montserrat font-black text-pqs-navy">
                      Stage 1 Documentation Checklists
                    </h3>
                  </div>
                  <span className="text-[11px] font-montserrat font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                    Mandatory Desk Review
                  </span>
                </div>
                <p className="text-slate-600 font-lato text-xs sm:text-sm font-light mb-6">
                  Prior to lead auditor deployment on-site, the facility must submit the following verified documentation for preliminary gap analysis:
                </p>

                <div className="space-y-3">
                  {standard.stage1Docs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-lato font-light">
                      <span className="w-6 h-6 rounded-lg bg-amber-100 text-pqs-navy font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 2 On-Site Verification Checkpoints */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider block">
                      Phase 02 Verification
                    </span>
                    <h3 className="text-2xl font-montserrat font-black text-pqs-navy">
                      Stage 2 On-Site Audit Checkpoints
                    </h3>
                  </div>
                  <span className="text-[11px] font-montserrat font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                    Facility Floor Audit
                  </span>
                </div>
                <p className="text-slate-600 font-lato text-xs sm:text-sm font-light mb-6">
                  Qualified PQS lead auditors inspect operational floors, machinery calibrations, risk registers, and worker safety practices across manufacturing and logistics facilities:
                </p>

                <div className="space-y-3">
                  {standard.stage2Audits.map((chk, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-lato font-light">
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Audit Deliverables */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider mb-2">
                  Certified Deliverables
                </div>
                <h3 className="text-2xl font-montserrat font-black text-pqs-navy mb-6">
                  Official Audit Artifacts &amp; Documentation
                </h3>

                <ul className="space-y-3.5">
                  {standard.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-lato font-light">
                      <FileCheck2 size={17} className="text-pqs-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:w-1/3 flex flex-col gap-8">
              
              {/* Application Callout Box */}
              <div className="bg-gradient-to-br from-pqs-dark to-pqs-navy text-white rounded-3xl p-8 shadow-xl border border-pqs-gold/30">
                <div className="text-xs font-montserrat text-pqs-gold uppercase tracking-widest mb-2 font-bold">
                  Precision Quality Services
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">
                  Schedule Your {standard.code} Audit
                </h3>
                <p className="text-gray-300 font-lato text-xs leading-relaxed mb-6 font-light">
                  Submit facility headcounts, multi-site structures, and desired deployment dates. Preliminary gap analysis reports dispatched within 48 business hours.
                </p>

                <Link
                  href={`/contact?standard=${encodeURIComponent(standard.id)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-pqs-gold hover:bg-white text-pqs-navy font-montserrat font-bold text-xs tracking-wider shadow-md transition-all"
                >
                  <span>SUBMIT AUDIT APPLICATION</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Regional PQS Desk */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider mb-4">
                  PQS Technical Audit Desk
                </div>

                <div className="space-y-4 text-xs font-lato text-slate-600">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-montserrat font-bold text-pqs-navy text-sm">Karachi Bureau (Head Office)</div>
                    <div className="text-slate-500 mt-0.5 flex items-start gap-1.5 pt-1">
                      <MapPin size={13} className="text-pqs-gold shrink-0 mt-0.5" />
                      <span>R-332/9, Dastagir, F.B Area, Karachi, 75950, Pakistan</span>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-col gap-1">
                      <a href="tel:03112226714" className="inline-flex items-center gap-1.5 text-pqs-navy font-montserrat font-bold hover:text-pqs-gold">
                        <Phone size={12} className="text-pqs-gold" />
                        <span>0311-2226714</span>
                      </a>
                      <a href="tel:03322673373" className="inline-flex items-center gap-1.5 text-pqs-navy font-montserrat font-bold hover:text-pqs-gold">
                        <Phone size={12} className="text-pqs-gold" />
                        <span>0332-2673373</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <Mail size={14} className="text-pqs-gold shrink-0" />
                    <a href="mailto:precisionqualityserviceslabs@gmail.com" className="hover:text-pqs-gold text-slate-700 break-all text-[11px] sm:text-xs font-medium">
                      precisionqualityserviceslabs@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Standards */}
              {relatedStandards.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <div className="text-xs font-montserrat font-bold text-pqs-navy uppercase tracking-wider mb-4">
                    Other Accredited Standards
                  </div>
                  <div className="space-y-3">
                    {relatedStandards.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/standards/${rel.id}`}
                        className="group flex items-center gap-3 p-3 rounded-2xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 transition-all"
                      >
                        <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 shrink-0">
                          <Image src={rel.badgeImg} alt={rel.name} fill className="object-contain p-0.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-montserrat font-bold text-slate-900 group-hover:text-pqs-navy truncate">
                            {rel.code}
                          </div>
                          <div className="text-[11px] font-lato text-slate-500 truncate">
                            {rel.tagline}
                          </div>
                        </div>
                        <ArrowRight size={13} className="text-slate-400 group-hover:text-pqs-gold group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
