"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] pt-40 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-pqs-gold"></div>
            <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">LEGAL</h2>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8">
            Privacy Policy
          </motion.h1>
          <motion.div variants={fadeInUp} className="prose prose-lg text-gray-600 font-lato max-w-none">
            <p className="mb-6 font-bold">Effective Date: October 2026</p>
            
            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-12 mb-4">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">Precision Quality Services ("PQS", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">2. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us. This may include your name, email address, phone number, and company details.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed">We use the information we collect to provide, operate, and maintain our website, improve our services, understand and analyze how you use our website, and communicate with you, either directly or through one of our partners, including for customer service and providing you with updates.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">4. Sharing Your Information</h2>
            <p className="mb-6 leading-relaxed">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

            <h2 className="text-2xl font-montserrat font-bold text-pqs-navy mt-10 mb-4">5. Contact Us</h2>
            <p className="mb-6 leading-relaxed">If you have questions or comments about this Privacy Policy, please contact us via our Contact page.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
