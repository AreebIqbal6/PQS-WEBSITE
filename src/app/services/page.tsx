"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, BookOpen, Layers, FlaskConical, Sparkles } from 'lucide-react';
import Link from 'next/link';

type ServiceCategory = 'all' | 'training' | 'consultancy' | 'testing';

interface ServiceItem {
  id: string;
  category: ServiceCategory;
  categoryLabel: string;
  title: string;
  badge: string;
  desc: string;
  img: string;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: "testing",
    category: "testing",
    categoryLabel: "Laboratory Testing",
    title: "ISO 17025 Laboratory Testing & Verification",
    badge: "Testing & Calibration Competence",
    desc: "Rigorous testing protocols for physical textile parameters, chemical safety, fiber blend validation, and colorfastness. Testing reports accepted by international regulatory bodies and global retail brands.",
    img: "/microscope.jpg",
    deliverables: [
      "Physical and mechanical textile testing",
      "Chemical residue screening & fiber composition",
      "Accredited calibration and validated test reporting"
    ]
  },
  {
    id: "consultancy-zdhc",
    category: "consultancy",
    categoryLabel: "Technical Consultancy",
    title: "Chemical & Wastewater Management (ZDHC MRSL)",
    badge: "Roadmap to Zero Hazardous Chemicals",
    desc: "Complete implementation of the ZDHC Manufacturing Restricted Substances List (MRSL), chemical inventory management, and wastewater discharge verification for sustainable dyehouses and wet processing units.",
    img: "/unsplash_2.jpg",
    deliverables: [
      "ZDHC Gateway conformance & chemical inventory audits",
      "Wastewater and sludge testing protocols",
      "Safer chemical alternatives & root-cause substitution"
    ]
  },
  {
    id: "consultancy-sustainability",
    category: "consultancy",
    categoryLabel: "Technical Consultancy",
    title: "Sustainability & Traceability (GOTS & GRS)",
    badge: "Organic Fibers & Recycled Claim Standard",
    desc: "Comprehensive chain-of-custody advisory for Global Organic Textile Standard (GOTS) and Global Recycled Standard (GRS), ensuring full transparency and compliance from raw fiber to final garments.",
    img: "/threads.jpg",
    deliverables: [
      "Transaction Certificate (TC) documentation guidance",
      "Organic fiber integrity & non-contamination controls",
      "Recycled content mass balance and segregation audits"
    ]
  },
  {
    id: "consultancy-circularity",
    category: "consultancy",
    categoryLabel: "Technical Consultancy",
    title: "Circular Plastics & Packaging (PPWR & EN 15343)",
    badge: "EU Circular Economy Compliance",
    desc: "Specialized auditing for post-consumer recycled plastic content and preparation for the European Union's Packaging and Packaging Waste Regulation (PPWR), establishing documented recycled content traceability.",
    img: "/unsplash_4.jpg",
    deliverables: [
      "EN 15343 traceability verification & chain-of-custody",
      "PPWR recyclability grading and reduction assessments",
      "Third-party audit technical file readiness"
    ]
  },
  {
    id: "consultancy-qms",
    category: "consultancy",
    categoryLabel: "Technical Consultancy",
    title: "Quality Management Systems (ISO 9001:2015 & CE)",
    badge: "Factory Performance & European Conformity",
    desc: "End-to-end consulting for ISO 9001:2015 QMS certification and CE marking technical files. We establish Standard Operating Procedures (SOPs), CAPA root-cause defect loops, and supplier audit frameworks.",
    img: "/loom.jpg",
    deliverables: [
      "ISO 9001:2015 gap analysis & internal auditor coaching",
      "CE marking technical documentation & essential safety reviews",
      "Corrective & Preventive Action (CAPA) tracking systems"
    ]
  },
  {
    id: "training",
    category: "training",
    categoryLabel: "Textile Training",
    title: "Factory-Floor Training & Defect Troubleshooting",
    badge: "Operational Excellence & Hands-On Training",
    desc: "Hands-on, floor-level training for quality inspectors, machine operators, and lab technicians. We teach practical root-cause analysis right at the machines to eliminate recurring defects and build sustainable zero-defect cultures.",
    img: "/training.jpg",
    deliverables: [
      "Practical textile quality management & defect identification",
      "Root cause analysis (RCA) & machine-level CAPA implementation",
      "Quality control fundamentals & standard inspection protocols",
      "Statistical process control & yield improvement on production lines"
    ]
  }
];

const tabs = [
  { id: 'all' as ServiceCategory, label: 'All Services', icon: Sparkles, count: 6 },
  { id: 'training' as ServiceCategory, label: 'Textile Training', icon: BookOpen, count: 1 },
  { id: 'consultancy' as ServiceCategory, label: 'Consultancy', icon: Layers, count: 4 },
  { id: 'testing' as ServiceCategory, label: 'Laboratory Testing', icon: FlaskConical, count: 1 },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('all');

  const getAbsoluteTop = (el: HTMLElement): number => {
    let top = 0;
    let current: HTMLElement | null = el;
    while (current) {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }
    return top;
  };

  const performScroll = (tabId: ServiceCategory) => {
    // Wait for React to re-render the filtered cards into the DOM
    setTimeout(() => {
      let targetEl: HTMLElement | null = null;
      if (tabId === 'training') {
        targetEl = document.getElementById('training');
      } else if (tabId === 'consultancy') {
        targetEl = document.getElementById('consultancy') || document.getElementById('consultancy-zdhc');
      } else if (tabId === 'testing') {
        targetEl = document.getElementById('testing');
      }

      if (!targetEl) {
        targetEl = document.getElementById('services-list') || document.getElementById('services-catalog');
      }

      if (targetEl) {
        // Sticky Header (~75px) + Sticky Filter Bar (~55px) + 20px breathing margin = 150px
        const headerAndTabOffset = 150;
        const targetTop = getAbsoluteTop(targetEl) - headerAndTabOffset;

        window.scrollTo({
          top: Math.max(0, Math.round(targetTop)),
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  // Sync hash from URL on mount and hashchange/custom navigation
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleNavigation = (category?: string) => {
      const hash = (category || (typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '')).toLowerCase();
      let selected: ServiceCategory = 'all';
      if (hash.includes('training')) selected = 'training';
      else if (hash.includes('consultancy')) selected = 'consultancy';
      else if (hash.includes('testing')) selected = 'testing';
      else if (hash === 'all') selected = 'all';

      setActiveTab(selected);
      if (hash && hash !== 'all') {
        setTimeout(() => performScroll(selected), 150);
      }
    };

    handleNavigation();

    const handleCustomNavigate = (e: any) => {
      if (e?.detail?.category) {
        handleNavigation(e.detail.category);
      }
    };

    const handleHash = () => handleNavigation();

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('pqs-category-navigate', handleCustomNavigate);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('pqs-category-navigate', handleCustomNavigate);
    };
  }, []);

  const handleTabClick = (tabId: ServiceCategory) => {
    setActiveTab(tabId);
    if (tabId === 'all') {
      window.history.replaceState(null, '', '/services');
    } else {
      window.history.replaceState(null, '', `/services#${tabId}`);
    }
    performScroll(tabId);
  };

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER / HERO BANNER */}
      {/* Generous top padding (pt-44 md:pt-52) and minimum height ensures 'WHAT WE DO' has ample clearance below the top navbar word banner */}
      <section className="relative min-h-[500px] md:min-h-[560px] flex flex-col justify-center pt-44 md:pt-52 pb-24 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/services_hero.jpg')] bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/85 to-pqs-dark/50"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            {/* Tagline / Subtitle with generous spacing */}
            <div className="flex items-center gap-4 mb-5 pt-6">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                WHAT WE DO &bull; MAKING COMPLIANCE REAL
              </h2>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-5">
              Our Services
            </h1>
            
            <p className="text-gray-300 font-lato text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              From accredited laboratory verification and ZDHC chemical protocols to GOTS/GRS sustainability standards and factory-floor textile training.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST & INTERACTIVE TABS */}
      <section id="services-catalog" className="py-16 md:py-24 relative z-30 min-h-[85vh]">
        {/* Stamp Watermark in clipped container to keep sticky positioning intact */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[25%] right-[-15%] w-[800px] h-[800px] opacity-[0.025] rotate-[25deg] mix-blend-multiply">
            <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Section Subtitle */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pqs-navy/5 text-pqs-navy font-montserrat font-bold text-xs uppercase tracking-wider">
              <ShieldCheck size={15} className="text-pqs-gold" />
              <span>Select Category to Filter</span>
            </div>
          </div>

          {/* STICKY SERVICE TABS BAR */}
          <div className="sticky top-[68px] md:top-[76px] z-30 py-2 mb-12 md:mb-16 -mx-4 px-4 bg-[#fafafa]/90 backdrop-blur-xl border-b border-gray-200/60 shadow-xs flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl md:rounded-full bg-gray-200/80 backdrop-blur-md border border-gray-300 shadow-inner max-w-4xl">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl md:rounded-full font-montserrat font-bold text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-pqs-navy text-pqs-gold shadow-md shadow-pqs-navy/30'
                        : 'text-gray-700 hover:text-pqs-navy hover:bg-white'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-pqs-gold' : 'text-gray-500'} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono shrink-0 ${isActive ? 'bg-pqs-gold/20 text-pqs-gold' : 'bg-gray-300 text-gray-700'}`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DYNAMIC SERVICES LIST */}
          <div id="services-list" className="flex flex-col gap-24 transition-opacity duration-300 pb-20">
            {filteredServices.map((service, index) => {
              const isFirstConsultancy = service.category === 'consultancy' && (index === 0 || filteredServices[index - 1]?.category !== 'consultancy');
              const domId = isFirstConsultancy ? 'consultancy' : service.id;
              return (
                <div 
                  key={service.id} 
                  id={domId}
                  className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center scroll-mt-40`}
                >
                  {isFirstConsultancy && <span id="consultancy-zdhc" className="sr-only" />}
                
                {/* Service Image (100% Unique & Relatable) */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border border-gray-100 bg-gray-900">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.img}')` }}
                    />
                    <div className="absolute inset-0 bg-pqs-navy/15 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="text-pqs-gold font-montserrat font-black text-6xl md:text-8xl opacity-20 mb-[-2rem] ml-[-1rem]">
                    0{index + 1}
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pqs-navy/5 text-pqs-navy text-xs font-montserrat font-bold uppercase tracking-wider mb-3">
                    <ShieldCheck size={14} className="text-pqs-gold" />
                    <span>{service.badge}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-black text-pqs-navy mb-4 leading-snug">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 font-lato text-base md:text-lg leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-pqs-navy font-medium font-lato text-sm md:text-base">
                        <CheckCircle2 size={18} className="text-pqs-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-3 text-xs md:text-sm font-bold font-montserrat tracking-widest text-white bg-pqs-navy px-6 py-3.5 rounded-full hover:bg-pqs-gold hover:text-pqs-navy transition-all shadow-md group"
                    >
                      <span>REQUEST QUOTATION</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        </div>
      </section>

    </div>
  );
}
