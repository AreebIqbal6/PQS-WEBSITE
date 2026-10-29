import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { getFooterCertLogos } from '@/data/standards';
import WhatsAppIcon from './ui/WhatsAppIcon';

const footerCertLogos = getFooterCertLogos();

export default function Footer() {
  return (
    <footer className="bg-pqs-dark text-white pt-20 pb-12 border-t-[4px] border-pqs-gold relative z-30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group" title="Precision Quality Services - Home">
              <Image 
                src="/logo_transparent_v2.png" 
                alt="PQS Logo" 
                width={220} 
                height={40} 
                className="h-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <Link 
              href="/about" 
              className="text-pqs-gold hover:text-white font-montserrat italic font-medium text-sm tracking-wider mb-6 block transition-colors"
            >
              Making Compliance Real &rarr;
            </Link>
            <p className="text-gray-400 font-lato leading-relaxed text-sm font-light mb-6">
              Precision Quality Services (PQS) delivers accredited laboratory testing coordination, ISO management certifications, sustainability audits, and factory floor quality systems.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-pqs-gold hover:text-pqs-navy text-pqs-gold text-xs font-montserrat font-bold tracking-wider border border-pqs-gold/30 transition-all"
              >
                <span>REQUEST CONSULTATION</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              <li>
                <Link href="/" className="hover:text-pqs-gold hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pqs-gold hover:translate-x-1 transition-all inline-block">
                  About PQS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-pqs-gold hover:translate-x-1 transition-all inline-block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/audits" className="hover:text-pqs-gold hover:translate-x-1 transition-all inline-block">
                  Quality Audits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pqs-gold hover:translate-x-1 transition-all inline-block">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance Scope - All 8 Standards individually clickable */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Compliance Scope
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-gray-400 font-lato text-xs">
              <li>
                <Link href="/standards/iso-17025" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>ISO 17025 (Testing Labs)</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/iso-9001" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>ISO 9001:2015 (Quality QMS)</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/zdhc" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>ZDHC Gateway &amp; MRSL</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/gots" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>GOTS (Organic Standard)</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/grs" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>GRS (Global Recycled)</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/ppwr" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>EU PPWR Circularity</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/en-15343" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>EN 15343 Recycled Plastics</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/standards/ce-marking" className="hover:text-pqs-gold hover:translate-x-1 transition-all flex items-center justify-between group">
                  <span>CE Marking Conformity</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-pqs-gold transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Contact Desk
            </h3>
            <ul className="flex flex-col gap-3.5 text-gray-300 font-lato text-sm">
              <li className="flex items-start gap-3">
                <Phone size={17} className="text-pqs-gold shrink-0 mt-0.5" />
                <div>
                  <a href="tel:03112226714" className="hover:text-pqs-gold font-medium transition-colors" title="Call Kashif Iqbal">0311-2226714</a> &bull; <a href="tel:03322673373" className="hover:text-pqs-gold font-medium transition-colors" title="Call Areeb Iqbal">0332-2673373</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon size={17} className="text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/923009260495" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 font-medium transition-colors"
                  title="Chat with PQS on WhatsApp"
                >
                  WhatsApp: 0300-9260495
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="text-pqs-gold shrink-0 mt-0.5" />
                <a 
                  href="mailto:precisionqualityserviceslabs@gmail.com" 
                  className="hover:text-pqs-gold transition-colors break-all text-xs"
                  title="Send official email"
                >
                  precisionqualityserviceslabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-pqs-gold shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=R-332/9,+Dastagir,+F.B+Area,+Karachi,+75950,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pqs-gold text-xs leading-relaxed block transition-colors"
                  title="Open PQS Karachi Office on Google Maps"
                >
                  R-332/9, Dastagir, F.B Area, Karachi, 75950, Pakistan.
                  <span className="block text-[10px] text-pqs-gold mt-0.5 font-montserrat font-bold">Open in Google Maps &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Certifications Row - All 8 Clickable Badges */}
        <div className="border-t border-white/10 pt-8 pb-10">
          <div className="text-center mb-6">
            <Link 
              href="/#accreditations" 
              className="inline-block text-xs font-montserrat font-bold tracking-[0.2em] text-gray-400 hover:text-pqs-gold uppercase transition-colors"
              title="View all accredited frameworks"
            >
              ACCREDITED COMPLIANCE FRAMEWORKS &bull; RECOGNIZED STANDARDS &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-5xl mx-auto items-center">
            {footerCertLogos.map((logo, idx) => (
              <Link 
                key={idx} 
                href={`/standards/${logo.id}`}
                title={`${logo.name} – Click to View Dedicated Specification`}
                className="bg-white border border-gray-200 hover:border-pqs-gold rounded-xl p-2 flex items-center justify-center shadow-xs hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 w-full h-[58px] cursor-pointer group relative overflow-hidden"
              >
                <div className="relative w-full h-9">
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    fill 
                    sizes="(max-width: 768px) 25vw, 12vw" 
                    className="object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-lato gap-4">
          <p>&copy; {new Date().getFullYear()} Precision Quality Services (PQS). All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-pqs-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pqs-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
