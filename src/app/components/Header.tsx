"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Search, ArrowRight, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { STANDARDS_CATALOG } from '@/data/standards';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    import('@/lib/liquid-glass').catch((err) => {
      console.error('Failed to load liquid-glass:', err);
    });
  }, []);

  const handleOurServicesClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/services') {
      e.preventDefault();
      const catalogEl = document.getElementById('services-catalog') || document.getElementById('services-list');
      if (catalogEl) {
        let top = 0;
        let current: HTMLElement | null = catalogEl;
        while (current) {
          top += current.offsetTop;
          current = current.offsetParent as HTMLElement | null;
        }
        window.scrollTo({
          top: Math.max(0, top - 80),
          behavior: 'smooth'
        });
      }
    }
  };

  const NAV_ITEMS = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services', label: 'Our Services', href: '/services', onClick: handleOurServicesClick },
    { id: 'audits', label: 'Audits', href: '/audits' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    if (pathname?.startsWith('/services')) return 'services';
    if (pathname?.startsWith('/audits')) return 'audits';
    if (pathname?.startsWith('/about')) return 'about';
    if (pathname?.startsWith('/contact')) return 'contact';
    return '';
  };
  const activeNavId = getActiveTab();

  useEffect(() => {
    let lastScrolled = window.scrollY > 20;
    setIsScrolled(lastScrolled);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrolled = window.scrollY > 20;
          if (currentScrolled !== lastScrolled) {
            lastScrolled = currentScrolled;
            setIsScrolled(currentScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDropdownClick = (category: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/services') {
      window.history.replaceState(null, '', category === 'all' ? '/services' : `/services#${category}`);
      window.dispatchEvent(new CustomEvent('pqs-category-navigate', { detail: { category } }));
    }
  };

  const filteredStandards = STANDARDS_CATALOG.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.code.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        (isScrolled || mobileMenuOpen) ? 'py-2.5 sm:py-3' : 'py-5 sm:py-6'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <liquid-glass
            renderer="css"
            no-pointer=""
            style={{ display: 'block', background: 'transparent', minHeight: 0 }}
          >
            <div 
              glass=""
              className={`relative flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full ${
                (isScrolled || mobileMenuOpen)
                  ? 'liquid-glass-pill px-6 py-2 text-white' 
                  : 'bg-transparent border border-transparent shadow-none px-4 sm:px-6 py-3 text-white'
              }`}
            >
              {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10" title="PQS - Precision Quality Services">
              <Image 
                src="/banner_wordmark_white.png" 
                alt="Precision Quality Services" 
                width={220} 
                height={24} 
                priority
                className={`object-contain transition-all duration-300 group-hover:opacity-90 ${
                  (isScrolled || mobileMenuOpen) ? 'w-[140px] md:w-[165px]' : 'w-[160px] md:w-[210px]'
                } h-auto`}
              />
            </Link>

            {/* Desktop Nav with Spring Bouncing Tab Switcher */}
            <nav 
              onMouseLeave={() => setHoveredNav(null)}
              className="relative z-10 hidden lg:flex items-center gap-1 p-1 rounded-full font-montserrat font-medium text-xs tracking-wider"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeNavId === item.id;
                const isHovered = hoveredNav === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={item.onClick}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    className="relative px-3.5 py-1.5 rounded-full transition-colors duration-200 select-none"
                  >
                    {/* Bouncing hover indicator */}
                    {isHovered && !isActive && (
                      <motion.span
                        layoutId="navHoverPill"
                        transition={{ type: "spring", stiffness: 450, damping: 28, bounce: 0.2 }}
                        className="absolute inset-0 rounded-full bg-white/10 pointer-events-none"
                      />
                    )}

                    {/* Spring bouncing active tab indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveTabIndicator"
                        transition={{ 
                          type: "spring", 
                          stiffness: 420, 
                          damping: 24, 
                          bounce: 0.32 
                        }}
                        className="absolute inset-0 rounded-full bg-white/15 border border-white/20 pointer-events-none"
                      />
                    )}

                    <motion.span 
                      whileTap={{ scale: 0.92 }}
                      className={`relative z-10 transition-colors duration-200 block ${
                        isActive ? 'text-pqs-gold font-semibold' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="relative z-10 hidden lg:flex items-center gap-5">
              {/* Interactive Search Icon */}
              <button 
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-white hover:text-pqs-gold transition-colors duration-200 cursor-pointer p-1.5 rounded-full hover:bg-white/10"
                title="Search standards and services (Ctrl+K)"
                aria-label="Open search"
              >
                <Search size={18} />
              </button>

              <Link 
                href="/contact" 
                className="bg-pqs-gold hover:bg-white text-pqs-navy font-montserrat font-semibold text-xs tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="relative z-10 flex items-center gap-2 lg:hidden">
              <button 
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-white p-2 focus:outline-hidden"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-white p-2 focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
          </liquid-glass>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden container mx-auto px-4 mt-3"
            >
              <div className="bg-[#0A1E35]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col gap-5 text-white font-montserrat font-medium text-sm tracking-wide shadow-2xl">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pqs-gold transition-colors py-1"
                >
                  Home
                </Link>
                
                <Link 
                  href="/services" 
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleOurServicesClick(e);
                  }}
                  className="hover:text-pqs-gold transition-colors py-1"
                >
                  Our Services
                </Link>
                <Link 
                  href="/audits" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pqs-gold transition-colors py-1"
                >
                  Audits
                </Link>

                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pqs-gold transition-colors py-1"
                >
                  About Us
                </Link>

                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pqs-gold transition-colors py-1"
                >
                  Contact
                </Link>

                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-pqs-gold hover:bg-white text-pqs-navy font-montserrat font-semibold text-xs tracking-wide px-6 py-3 rounded-full text-center transition-all duration-300 shadow-sm mt-2"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Quick Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 pt-24 sm:pt-28"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#061221]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 text-slate-800"
            >
              {/* Search Bar Input */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
                <Search size={20} className="text-pqs-gold shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search standards (ISO 17025, GOTS, ZDHC, PPWR, CE)..."
                  className="w-full text-slate-900 placeholder:text-slate-400 font-montserrat text-sm outline-none bg-transparent"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-slate-700 text-xs px-2 py-1 rounded bg-slate-100"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setSearchOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center shrink-0"
                  aria-label="Close search"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Search Results List */}
              <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
                <div className="text-[11px] font-montserrat font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                  Accredited Standards ({filteredStandards.length})
                </div>

                {filteredStandards.map((std) => (
                  <Link
                    key={std.id}
                    href={`/standards/${std.id}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                        <Image src={std.badgeImg} alt={std.name} width={36} height={36} className="object-contain" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-montserrat font-bold text-xs text-slate-900 group-hover:text-pqs-navy truncate">
                          {std.code} &bull; <span className="font-semibold text-slate-600">{std.name}</span>
                        </div>
                        <div className="text-[11px] font-lato text-slate-500 truncate">
                          {std.tagline}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-pqs-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                ))}

                {filteredStandards.length === 0 && (
                  <div className="text-center py-10 text-slate-400 text-sm font-lato">
                    No standards matching "{searchQuery}".
                  </div>
                )}
              </div>

              {/* Bottom Quick Links */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-montserrat text-slate-500 px-4">
                <span>Quick jump: <kbd className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[10px]">ESC</kbd> to close</span>
                <Link 
                  href="/services" 
                  onClick={() => setSearchOpen(false)}
                  className="text-pqs-gold hover:underline font-bold"
                >
                  View All Services &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
