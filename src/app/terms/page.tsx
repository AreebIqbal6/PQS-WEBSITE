"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] pt-40 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-pqs-gold"></div>
            <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">LEGAL</h2>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8">
            Terms & Conditions
          </motion.h1>
          <motion.div variants={fadeInUp} className="prose prose-lg text-gray-600 font-lato max-w-none">
            <p className="mb-6 font-bold">Last Updated: October 2026</p>
            
            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6 leading-relaxed">By accessing this website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws. If you disagree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-6 leading-relaxed">Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">3. User Representations</h2>
            <p className="mb-6 leading-relaxed">By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you will not use the Site for any illegal or unauthorized purpose.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">4. Limitations of Liability</h2>
            <p className="mb-6 leading-relaxed">In no event shall Precision Quality Services (PQS) or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PQS's website.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">5. Revisions and Errata</h2>
            <p className="mb-6 leading-relaxed">The materials appearing on PQS's website could include technical, typographical, or photographic errors. PQS does not warrant that any of the materials on its website are accurate, complete, or current.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
