"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FileCheck2, 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  ArrowUpRight,
  Download, 
  CalendarCheck,
  Check
} from 'lucide-react';
import { getAuditSpecsCatalog, type Standard } from '@/data/standards';

export type AuditSpecData = Standard;
export const auditSpecsCatalog = getAuditSpecsCatalog();

interface AuditSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  standardId: string;
}

export default function AuditSpecModal({
  isOpen,
  onClose,
  standardId
}: AuditSpecModalProps) {
  const [mounted, setMounted] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const data = auditSpecsCatalog[standardId] || auditSpecsCatalog["iso-17025"] || Object.values(auditSpecsCatalog)[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Strict double-lock background scroll prevention on both html and body
  useEffect(() => {
    if (isOpen) {
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      return () => {
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
      };
    }
  }, [isOpen]);

  const handleDownload = () => {
    if (!data) return;
    const content = `=====================================================
PRECISION QUALITY SERVICES (PQS)
OFFICIAL AUDIT & CERTIFICATION CRITERIA SPECIFICATION
=====================================================
STANDARD: ${data.code} - ${data.title}
CATEGORY: ${data.category}
VALIDITY: ${data.validity}
ESTIMATED TURNAROUND: ${data.turnaround}
SCOPE REGIME: ${data.iafSector}
AUDITOR PERSON-DAYS: ${data.personDaysGuide}

SCOPE & PURPOSE:
${data.scopeSummary}

KEY AUDIT CHECKPOINTS:
${data.keyCheckpoints.map((c, i) => `  ${i + 1}. ${c}`).join('\n')}

STAGE 1 DOCUMENTATION REQUIREMENTS:
${data.stage1Docs.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

STAGE 2 ON-SITE AUDIT CHECKPOINTS:
${data.stage2Audits.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

DELIVERABLES & ARTIFACTS:
${data.deliverables.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

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
    a.download = `PQS-${data.code.replace(/[^a-zA-Z0-9]/g, '_')}-Audit-Specification.txt`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted || !data) return null;

  return createPortal(
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden overscroll-none"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#061221]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white border border-slate-200/90 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden z-10 my-auto text-left max-h-[90vh] flex flex-col overscroll-contain"
        >
          {/* Header Bar with Official Certification Badge Picture */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200 p-2 shrink-0 flex items-center justify-center shadow-xs">
                <div className="relative w-full h-full">
                  <Image 
                    src={data.badgeImg} 
                    alt={data.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] sm:text-xs font-montserrat font-bold text-pqs-gold uppercase tracking-wider">
                    {data.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] sm:text-xs font-lato text-emerald-600 font-semibold flex items-center gap-1">
                    <ShieldCheck size={12} />
                    Verified Scope
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-montserrat font-black text-pqs-navy truncate">
                  {data.code}
                </h3>
                <p className="text-slate-500 font-lato text-xs truncate">
                  {data.title}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
              aria-label="Close specification modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-slate-800">
            
            {/* Scope Summary */}
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80">
              <span className="text-[11px] font-montserrat font-bold text-pqs-navy uppercase tracking-wider block mb-1">
                Official Standard Purpose &amp; Scope:
              </span>
              <p className="text-slate-600 font-lato text-xs sm:text-sm leading-relaxed font-light">
                {data.scopeSummary}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-2.5">
                <Clock size={16} className="text-pqs-gold shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-montserrat font-semibold">Turnaround</div>
                  <div className="text-pqs-navy font-montserrat font-bold text-xs">{data.turnaround}</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-2.5">
                <CalendarCheck size={16} className="text-pqs-gold shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-montserrat font-semibold">Validity</div>
                  <div className="text-pqs-navy font-montserrat font-bold text-xs truncate" title={data.validity}>{data.validity}</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-pqs-gold shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-montserrat font-semibold">Audit Regime</div>
                  <div className="text-pqs-navy font-montserrat font-bold text-xs truncate" title={data.iafSector}>Accredited</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-2.5">
                <Award size={16} className="text-pqs-gold shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-montserrat font-semibold">Recognition</div>
                  <div className="text-pqs-navy font-montserrat font-bold text-xs">Global Brands</div>
                </div>
              </div>
            </div>

            {/* Auditor Person-Days Formula */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-lato">
              <span className="font-montserrat font-bold text-pqs-navy uppercase tracking-wider text-[11px] block mb-1">
                Auditor Person-Days Formula:
              </span>
              <p className="text-slate-700 leading-relaxed font-light">
                {data.personDaysGuide}
              </p>
            </div>

            {/* Stage 1 Checklist */}
            <div>
              <div className="flex items-center gap-2 text-sm font-montserrat font-bold text-pqs-navy mb-3">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-pqs-navy border border-amber-300 flex items-center justify-center text-xs font-bold">1</span>
                <span>Stage 1: Documentation Pre-Audit Checklist</span>
              </div>
              <div className="space-y-2">
                {data.stage1Docs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-lato text-slate-700">
                    <CheckCircle2 size={15} className="text-pqs-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 2 Checklist */}
            <div>
              <div className="flex items-center gap-2 text-sm font-montserrat font-bold text-pqs-navy mb-3">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-pqs-navy border border-amber-300 flex items-center justify-center text-xs font-bold">2</span>
                <span>Stage 2: On-Site Audit &amp; Technical Verification</span>
              </div>
              <div className="space-y-2">
                {data.stage2Audits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-lato text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-slate-500 mb-2">
                Certified Deliverables &amp; Artifacts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-lato text-slate-700 flex items-start gap-2">
                    <FileCheck2 size={15} className="text-pqs-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-montserrat font-bold text-xs tracking-wider transition-all border border-slate-200 shadow-xs cursor-pointer active:scale-95"
            >
              {downloaded ? <Check size={14} className="text-emerald-600" /> : <Download size={14} className="text-pqs-gold" />}
              <span>{downloaded ? "SPECIFICATION DOWNLOADED" : "DOWNLOAD CRITERIA (.TXT)"}</span>
            </button>

            <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto">
              <Link
                href={`/standards/${data.id}`}
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-pqs-navy hover:bg-pqs-navy-light text-white font-montserrat font-bold text-xs tracking-wider transition-all"
              >
                <span>OPEN FULL PAGE</span>
                <ArrowUpRight size={14} />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-montserrat font-bold text-xs transition-all cursor-pointer active:scale-95"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
