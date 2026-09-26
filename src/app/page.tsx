"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, TrendingUp, Search, BookOpen, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

// Animated Text Character by Character
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: appleEase } }
};
const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <motion.span initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.03 } } }} className={`inline-flex flex-wrap ${className || ''}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap mr-[0.25em] mb-1">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={textVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Magnetic Button Wrapper
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]" ref={containerRef}>
      
      {/* AWWARDS LEVEL HERO */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden bg-pqs-dark">
        {/* Parallax Background using PQS Image */}
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/loom.jpg')",
            y: yBg,
            scale: 1.05
          }} 
        />
        <div className="absolute inset-0 z-10 bg-pqs-navy/70 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-pqs-dark/90 pointer-events-none"></div>
        
        {/* Content */}
        <motion.div 
          className="container mx-auto px-4 lg:px-8 relative z-20"
          style={{ y: yText, opacity }}
        >
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-6xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: 48 }} 
                transition={{ duration: 1, ease: appleEase, delay: 0.5 }} 
                className="h-[2px] bg-pqs-gold"
              ></motion.div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                Precision Quality Services
              </h2>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-[1.05] tracking-tight mb-8">
              <AnimatedText text="Providing Consultancy Services" />
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold to-yellow-200">
                <AnimatedText text="to Textile Industries" />
              </span>
            </h1>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-12">
              <p className="text-lg md:text-xl text-gray-300 font-lato leading-relaxed max-w-xl font-light">
                Technical knowledge meets hands-on problem solving. We help textile manufacturers achieve zero-defect culture and sustainable operational growth.
              </p>
              
              <div className="flex justify-start md:justify-end">
                <MagneticButton>
                  <Link href="/services" className="group relative inline-flex items-center gap-4 bg-transparent border border-white/30 text-white rounded-full px-8 py-4 overflow-hidden liquid-glass transition-all duration-500 hover:border-pqs-gold">
                    <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">DISCOVER SERVICES</span>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-pqs-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <ArrowRight size={18} className="text-pqs-navy group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* LIQUID GLASS SERVICES SECTION */}
      <section className="py-32 relative z-30 bg-pqs-dark text-white noise-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-montserrat font-bold tracking-tight mb-6">Our Core Expertise</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 font-lato text-lg">Specialized methodologies built for the modern textile floor.</motion.p>
            </div>
            <motion.div variants={fadeInUp}>
              <Link href="/services" className="text-pqs-gold hover:text-white transition-colors font-montserrat font-bold tracking-widest text-sm flex items-center gap-2 group">
                VIEW ALL <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div 
              variants={fadeInUp} 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="liquid-glass-dark rounded-[2rem] p-8 md:p-10 group transition-all duration-700 ease-out relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pqs-gold/10 rounded-full blur-3xl group-hover:bg-pqs-gold/30 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <BookOpen size={28} className="text-pqs-gold" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4">Training</h3>
              <p className="text-gray-400 font-lato mb-12 leading-relaxed">
                Practical, industry-focused programs for production teams and quality personnel. Root cause analysis taught right on the floor.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-pqs-navy transition-colors" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeInUp} 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="liquid-glass-dark rounded-[2rem] p-8 md:p-10 group transition-all duration-700 ease-out relative overflow-hidden md:translate-y-12"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pqs-gold/10 rounded-full blur-3xl group-hover:bg-pqs-gold/30 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Layers size={28} className="text-pqs-gold" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4">Consultancy</h3>
              <p className="text-gray-400 font-lato mb-12 leading-relaxed">
                Strengthen processes and build effective quality systems. We implement CAPA and rigorous process mapping for sustainability.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-pqs-navy transition-colors" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={fadeInUp} 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="liquid-glass-dark rounded-[2rem] p-8 md:p-10 group transition-all duration-700 ease-out relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pqs-gold/10 rounded-full blur-3xl group-hover:bg-pqs-gold/30 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Search size={28} className="text-pqs-gold" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4">Troubleshooting</h3>
              <p className="text-gray-400 font-lato mb-12 leading-relaxed">
                Structured support to resolve recurring issues at the source. Deep data collection, investigation, and permanent verification.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pqs-gold group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-pqs-navy transition-colors" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SPLIT INFO SECTION */}
      <section className="py-32 bg-[#fafafa] relative z-30 overflow-hidden">
        {/* PQS Stamp Watermark */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] opacity-[0.03] pointer-events-none rotate-12 mix-blend-multiply">
           <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
            >
              <motion.h4 variants={fadeInUp} className="text-pqs-gold font-montserrat font-bold tracking-[0.2em] uppercase mb-4 text-sm">THE PQS DIFFERENCE</motion.h4>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-montserrat font-black text-pqs-navy mb-8 tracking-tight leading-[1.1]">
                Real solutions for the factory floor.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-xl mb-10 leading-relaxed font-light">
                We avoid boardroom theory. Our experts dive into the machines, the materials, and the metrics. We identify root causes and implement changes that stick.
              </motion.p>
              <motion.div variants={staggerContainer} className="flex flex-col gap-6">
                {[
                  "Improved product quality and consistent output",
                  "Reduction in defects and rework cycles",
                  "Better process control across all stages"
                ].map((text, i) => (
                  <motion.div key={i} variants={fadeInUp} whileHover={{ x: 10 }} className="flex items-center gap-5 p-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-pqs-navy/5 flex items-center justify-center shrink-0">
                      <CheckCircle className="text-pqs-gold" size={24} />
                    </div>
                    <span className="font-montserrat font-semibold text-pqs-navy">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 w-full relative"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
            >
              {/* Abstract Graphic Element using PQS Image */}
              <div className="relative w-full aspect-square rounded-[3rem] bg-gray-200 overflow-hidden shadow-2xl group">
                 <motion.div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                   style={{ backgroundImage: "url('/inspector.jpg')" }}
                 />
                 <div className="absolute inset-0 bg-pqs-navy/20 mix-blend-overlay"></div>
                 
                 {/* Floating Glass Stats */}
                 <motion.div 
                    variants={fadeInUp} 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-8 right-8 liquid-glass rounded-2xl p-6 flex justify-between items-center"
                 >
                    <div>
                      <div className="text-pqs-navy font-black text-4xl font-montserrat">100%</div>
                      <div className="text-gray-800 font-lato font-bold text-sm uppercase tracking-widest">Quality Focus</div>
                    </div>
                    <div className="w-[1px] h-12 bg-gray-400"></div>
                    <div>
                      <div className="text-pqs-navy font-black text-4xl font-montserrat">360°</div>
                      <div className="text-gray-800 font-lato font-bold text-sm uppercase tracking-widest">Process Mapping</div>
                    </div>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
