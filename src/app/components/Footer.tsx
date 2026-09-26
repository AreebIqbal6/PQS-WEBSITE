import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-pqs-dark text-white pt-24 pb-12 border-t-[6px] border-pqs-gold relative z-30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image src="/logo_transparent_v2.png" alt="PQS Logo" width={220} height={40} className="mb-8" />
            <p className="text-gray-400 font-lato leading-relaxed mb-8 text-lg">
              Precision Quality Services (PQS) is a specialized textile consultancy and training company focused on helping textile organizations improve quality and operational performance.
            </p>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-8 text-white tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-lato font-medium">
              <li><Link href="/" className="hover:text-pqs-gold hover:translate-x-2 transition-all duration-300 inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-pqs-gold hover:translate-x-2 transition-all duration-300 inline-block">About Us</Link></li>
              <li><Link href="/services" className="hover:text-pqs-gold hover:translate-x-2 transition-all duration-300 inline-block">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-pqs-gold hover:translate-x-2 transition-all duration-300 inline-block">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-8 text-white tracking-wide">Our Services</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-lato font-medium">
              <li className="hover:text-pqs-gold transition-colors cursor-pointer">Textile Training</li>
              <li className="hover:text-pqs-gold transition-colors cursor-pointer">Textile Consultancy</li>
              <li className="hover:text-pqs-gold transition-colors cursor-pointer">Troubleshooting</li>
              <li className="hover:text-pqs-gold transition-colors cursor-pointer">Process Control</li>
              <li className="hover:text-pqs-gold transition-colors cursor-pointer">Quality Audits</li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-8 text-white tracking-wide">Contact Info</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-lato font-medium">
              <li className="flex items-center gap-3"><span className="text-pqs-gold font-bold">P:</span> +1 234 567 890</li>
              <li className="flex items-center gap-3"><span className="text-pqs-gold font-bold">E:</span> info@pqs-textiles.com</li>
              <li className="flex items-center gap-3"><span className="text-pqs-gold font-bold">A:</span> 123 Textile Avenue, Industrial Zone</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-lato font-semibold">
          <p>&copy; {new Date().getFullYear()} Precision Quality Services. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-pqs-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-pqs-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
