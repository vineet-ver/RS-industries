import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, Cog, ShieldCheck, Award, MessageSquare, PhoneCall, 
  ChevronRight, Calendar, Landmark, Settings, ArrowUpRight, 
  Wrench, Activity, ChevronDown, Check, Star, CornerDownRight, FileText, Anchor, Disc
} from "lucide-react";

import { PRODUCTS, INDUSTRIES, PROCESS_STEPS, TECHNICAL_METRICS } from "./data";
import { Product, Industry } from "./types";

// Import Custom Modular Components
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import SpecsModal from "./components/SpecsModal";
import InteractiveKnifeViewer from "./components/InteractiveKnifeViewer";
import WorkflowTimeline from "./components/WorkflowTimeline";
import InteractiveMap from "./components/InteractiveMap";
import WhatsAppChat from "./components/WhatsAppChat";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeIndustryId, setActiveIndustryId] = useState<string>("paper-mills");
  const [isLoading, setIsLoading] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  // Structural Pre-Loader Sequence Simulator
  useEffect(() => {
    const timer = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300); // smooth dismiss transition
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Viewport Scroll-Spy Engine
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sections = ["hero", "products", "industries", "excellence", "why-choose-us", "precision-customizer", "contact"];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = el.offsetTop - 90;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden antialiased">
      
      {/* 1. STRUCTURAL PRE-LOADER GRID */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#0F172A] text-white flex flex-col justify-between p-8 md:p-12 blueprint-grid"
          >
            {/* Visual background lines */}
            <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />

            {/* Header label in loader */}
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                SYSTEM INITIALIZING // HOST REGION-NCR
              </span>
              <span>DEV-STAGE // RS-MDR-2026</span>
            </div>

            {/* Center Loading CAD Simulation */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="relative">
                {/* Rotating technical gear SVG */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="w-16 h-16 md:w-24 md:h-24 text-blue-500 opacity-80"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="38" />
                    <circle cx="50" cy="50" r="16" />
                    <line x1="50" y1="5" x2="50" y2="45" />
                    <line x1="50" y1="55" x2="50" y2="95" />
                    <line x1="5" y1="50" x2="45" y2="50" />
                    <line x1="55" y1="50" x2="95" y2="50" />
                    <path d="M 18 18 L 82 82 M 18 82 L 82 18" strokeDasharray="3,3" />
                  </svg>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-xs">
                  RS
                </div>
              </div>

              <div className="space-y-2 text-center max-w-sm">
                <h2 className="font-display font-bold uppercase tracking-widest text-base md:text-lg">
                  RS INDUSTRIES DELHI
                </h2>
                <p className="font-mono text-[9px] text-gray-400 leading-relaxed uppercase">
                  CALIBRATING DUAL-LAP METALLURGY BEVEL SYSTEMS • HIGH-CAPACITY PRESS
                </p>
                
                {/* ProgressBar */}
                <div className="w-[180px] h-1.5 bg-gray-800/80 rounded-full mx-auto overflow-hidden border border-white/5 relative">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${Math.min(bootProgress, 100)}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
                <div className="font-mono text-[10px] text-blue-400 font-extrabold mt-1">
                  SYS STATUS: {Math.min(bootProgress, 100)}% CONFORMANCE
                </div>
              </div>
            </div>

            {/* Bottom corporate label in loader */}
            <div className="flex justify-between items-end text-[9px] font-mono text-gray-500 leading-none">
              <p>PRECISION STEEL CUTTINGS & ACCESSORIES RANGE</p>
              <p>SERVED INDUSTRIAL POWER-MILLS SYSTEM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CORPORATE HEADER */}
      <Header onNavClick={handleNavClick} activeSection={activeSection} />

      {/* 3. HERO SECTION (Professional Polish Split Precision Showcase) */}
      <section
        id="hero"
        className="relative min-h-[96vh] pt-[130px] pb-16 flex items-center justify-center overflow-hidden bg-white blueprint-grid"
      >
        {/* Underlay Fine Lines Grid */}
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none" />

        {/* Ambient Silver Backlight Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/40 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-gray-100/50 blur-3xl opacity-80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Main Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left side: Premium branding & copy values */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Decorative brand ornament */}
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#1D4ED8]" />
                <span className="text-[10px] font-bold text-[#1D4ED8] uppercase tracking-[0.3em]">Est. 2022 | Delhi, India</span>
              </div>

              {/* Huge Cinematic Headline */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="font-display font-black text-5xl sm:text-6xl lg:text-[76px] text-industrial-dark tracking-tight leading-[0.95] uppercase"
                >
                  ENGINEERED<br />FOR <span className="text-gray-300">PRECISION.</span>
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-sans text-sm md:text-base lg:text-lg text-gray-500 max-w-xl leading-relaxed font-normal"
                >
                  Global-grade manufacturing solutions for Paper Mills, Core Mills, and specialized Slitting industries. Experience the apex of Indian engineering excellence.
                </motion.p>
              </div>

              {/* Interactive CTAs */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2 font-sans font-extrabold uppercase tracking-widest text-[#111827] text-xs"
              >
                <button
                  onClick={() => handleNavClick("products")}
                  className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-blue-700 text-white px-8 py-4 px-8 py-5 flex items-center justify-center gap-4 rounded-sm transition-colors cursor-pointer"
                  id="explore-products-btn"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">Explore Products</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/918796013177?text=Hello%20RS%20Industries%2C%20I%20am%20reviewing%20your%20website%20and%2520wish%20to%20request%20a%20commercial%2520quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#F3F5F7] text-[#111827] text-xs font-bold uppercase tracking-widest hover:bg-gray-200 px-8 py-[18px] border border-gray-200/50 rounded-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Technical Specs</span>
                </a>
              </motion.div>

              {/* Grid of Key Corporate Indicators */}
              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-150 pt-8 max-w-md">
                <div>
                  <div className="text-3xl font-black text-industrial-dark">400+</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-black mt-1">Global Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-[#111827] font-black">0.02mm</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-black mt-1">Tolerance Precision</div>
                </div>
              </div>

            </div>

            {/* Right side: High-precision CAD circle system showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#F3F5F7] border border-gray-200 p-12 rounded-3xl flex items-center justify-center overflow-hidden h-[450px] lg:h-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
                <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />
                
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 border-[0.5px] border-gray-300 rounded-full flex items-center justify-center bg-white shadow-2xl relative p-4 overflow-hidden">
                    <img src="/core-cutter.png" alt="Precision Core Cutter" className="w-full h-full object-contain rounded-full scale-105 animate-spin-slow" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-4 sm:p-5 bg-white shadow-xl border border-gray-100 w-52 sm:w-56">
                    <div className="text-[9px] font-bold text-[#1D4ED8] uppercase mb-1">Key Application</div>
                    <div className="text-[11.5px] font-semibold leading-relaxed text-gray-600">High-velocity slitting for premium tape mills.</div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 p-8 flex flex-col items-end pointer-events-none">
                  <span className="text-[90px] sm:text-[110px] font-black text-[#1D4ED8]/10 leading-none select-none">2026</span>
                  <span className="text-[9px] font-bold text-[#1D4ED8] uppercase tracking-[0.5em] -mt-3">Advanced Systems</span>
                </div>
              </div>
            </div>

          </div>

          {/* Under-HUD Interactive Simulator readout bar spanning full width */}
          <div className="mt-16 w-full">
            <motion.div
              initial={{ y: 55, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-full pt-4 relative shrink-0 text-left"
            >
              <div className="bg-gray-50 border border-gray-150 rounded-2xl p-4 md:p-6 shadow-xs overflow-hidden relative">
                <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
                
                {/* HUD Overlay details */}
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono border-b border-gray-200 pb-3 mb-4">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse-slow" />
                    <span>NAGOI PLANT ASSEMBLY DYNAMICS // MACHINE DEPOT DEL-110041</span>
                  </div>
                  <div>COORD: 28.6811° N, 77.0592° E</div>
                </div>

                {/* Grid of micro-readouts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono text-[10px]">
                  <div className="p-3 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-[100px]">
                    <div className="text-gray-400 uppercase">Radial Runout</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-sans">≤0.005mm</p>
                      <span className="text-[8px] text-blue-600 block font-semibold mt-0.5">Laser Bench Tested</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-[100px]">
                    <div className="text-gray-400 uppercase">Tensile Peak</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-sans">2,400 Kg</p>
                      <span className="text-[8px] text-blue-600 block font-semibold mt-0.5">Tiger Band Force</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-[100px]">
                    <div className="text-gray-400 uppercase">Heat Threshold</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-sans">1180 °C</p>
                      <span className="text-[8px] text-blue-600 block font-semibold mt-0.5">Vacuum Austenization</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-[100px]">
                    <div className="text-gray-400 uppercase">Grinding finish</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-sans">Ra 0.05 µm</p>
                      <span className="text-[8px] text-blue-600 block font-semibold mt-0.5">Mirror Bevel Polish</span>
                    </div>
                  </div>
                </div>

                {/* Swipe cue indicator inside hero block */}
                <div className="flex items-center justify-center gap-1.5 mt-4 text-[9px] font-mono text-gray-400">
                  <Cog className="w-3.5 h-3.5 animate-spin-slow text-[#1D4ED8]" />
                  <span>DYNAMICS COMPLIANT WITH CRYO-TEMPERED INDUSTRIAL STEEL STANDARDS</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* PRIMARY SECTORS DIVIDER BAR */}
      <div className="bg-[#111827] text-white py-10 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="px-4">
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Primary Sector</div>
            <div className="text-sm font-medium">Paper & Core Mills</div>
          </div>
          <div className="px-4 pt-4 md:pt-0">
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Precision Tools</div>
            <div className="text-sm font-medium">Slitting & Teeth Cutters</div>
          </div>
          <div className="px-4 pt-4 md:pt-0">
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Mechanical Gear</div>
            <div className="text-sm font-medium">Tiger Cord Belts</div>
          </div>
          <div className="px-4 pt-4 md:pt-0">
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Specialized</div>
            <div className="text-sm font-medium">Glue Pumps & Blades</div>
          </div>
        </div>
      </div>

      {/* 4. BRAND CORE MOTTO & TELEMETRY NUMBERS SECTION */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-16 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {TECHNICAL_METRICS.map((metric, idx) => (
              <div key={idx} className="pt-6 md:pt-0 pb-6 md:pb-0 px-4 space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#94A3B8] block uppercase">
                  RS Metric System
                </span>
                <p className="font-display font-black text-4.5xl lg:text-5.5xl text-brand-dark leading-none">
                  {metric.value}
                </p>
                <p className="font-sans text-xs font-semibold text-gray-500 max-w-[180px] mx-auto leading-tight">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT STORYTELLING SECTION */}
      <section className="bg-white py-24 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium branding values */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-brand-blue font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
                About RS Industries Delhi
              </span>
              <h2 className="font-display font-black text-3.5xl md:text-5xl text-industrial-dark tracking-tight leading-none">
                Delivering High-Performance With Uncompromised Standards.
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-normal">
                <p>
                  Started in 2022 in Nangloi, Delhi, RS Industries has evolved from a local tooling workshop into an international-grade precision manufacturer. We serve high-profile paper conversion centers, board mills, slitting bureaus, and automated tape packaging corporations across three continents.
                </p>
                <p>
                  Our manufacturing core commits to zero-defect engineering. By pairing raw metallurgical inputs directly from Swedish hot furnaces with German computerized tool grinders, we eliminate web-shearing imperfections. The results are knives and accessories that stay sharp up to 4.2x longer than conventional imports.
                </p>
              </div>

              {/* Badges block */}
              <div className="grid grid-cols-2 gap-4 pt-3 uppercase font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-gray-800">ISO 9001:2015 Cert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-gray-800">Swedish Steel Forged</span>
                </div>
              </div>
            </div>

            {/* Right side: Metallurgy graphic overview */}
            <div className="lg:col-span-7">
              <div className="bg-industrial-silver/70 border border-gray-150 p-6 md:p-10 rounded-3xl relative overflow-hidden blueprint-grid">
                <div className="absolute inset-0 blueprint-grid-fine opacity-30 pointer-events-none" />
                
                <div className="space-y-6">
                  {/* Visual gauge chart mock */}
                  <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                    <span>METALLURGICAL COMPARISON CHART</span>
                    <span className="text-[#1D4ED8] font-bold">REINFORCED SERIES</span>
                  </div>

                  {/* Stat columns */}
                  <div className="space-y-4">
                    {/* Grade M2/D2 comparison */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-[10px] text-gray-600">
                        <span>RS CRYO-D2 TOOL STEEL</span>
                        <span>64 HRC EXTRA STABLE</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full w-[95%]" />
                      </div>
                    </div>

                    {/* Standard carbon steel comparison */}
                    <div className="space-y-1.5 opacity-60">
                      <div className="flex justify-between font-mono text-[10px] text-gray-600">
                        <span>STANDARD RE-GROUND CARBIDE</span>
                        <span>48-52 HRC FRICTION FAILURE</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-500 rounded-full w-[50%]" />
                      </div>
                    </div>

                    {/* Tiger bands breakout strength */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-[10px] text-gray-600">
                        <span>TIGER STRAP BREAKOUT BREAKPAYLOAD</span>
                        <span>2400 KG PEAK LIMIT</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full w-[88%]" />
                      </div>
                    </div>
                  </div>

                  {/* Call and discuss about story card */}
                  <div className="bg-white border border-gray-150 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
                    <div className="space-y-0.5 text-center sm:text-left">
                      <p className="font-extrabold text-gray-900 uppercase">Consult Our Forging Metallurgist</p>
                      <p className="text-gray-500 leading-none">Discuss technical hardness levels regarding custom materials.</p>
                    </div>
                    <a
                      href="tel:8796013177"
                      className="bg-brand-dark hover:bg-brand-blue text-white font-extrabold uppercase px-5 py-3 rounded-xl transition-all inline-block shrink-0"
                    >
                      Ring Sales Office
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PRODUCTS INTERACTIVE SHOWCASE SECTION */}
      <section id="products" className="bg-gray-50 border-t border-b border-gray-100 py-24 relative overflow-hidden text-center">
        {/* Background vectors */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute top-[30%] right-[-10%] w-[35%] h-[35%] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header section */}
          <div className="space-y-3.5 max-w-2.5xl mx-auto mb-16 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
              RS Core Production Catalogue
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl text-gray-950 tracking-tight leading-none">
              Precision Cutting & Auxiliary Solutions.
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-normal">
              Every item represents mechanical integrity, high-end finishing, and sub-micron tolerances, ensuring zero mill downtime and pristine edge profiles.
            </p>
          </div>

          {/* Grid list of Product Card modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenSpecs={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. CUSTOM SPECS CALIBRATOR (Interactive CAD Slider Widget) */}
      <section id="precision-customizer" className="bg-white py-24 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-3.5 max-w-2.5xl mx-auto mb-16 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
              Custom Engineered Blade CAD
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl text-gray-950 tracking-tight leading-none">
              Design Beyond Standard Limits.
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-normal">
              Tailor specific dimensions, bevel styles, and material composition. Submit your live CAD configuration parameters straight to our Nangloi machine depot over WhatsApp for immediate feedback on pricing.
            </p>
          </div>

          <InteractiveKnifeViewer />

        </div>
      </section>

      {/* 8. INDUSTRIES WE SERVE INTERACTIVE ACCORDION GRID */}
      <section id="industries" className="bg-gray-50 border-t border-b border-gray-100 py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* Header */}
          <div className="space-y-3.5 max-w-2.5xl mx-auto mb-16 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
              Industrial Use Cases
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl text-gray-950 tracking-tight leading-none">
              Sectors Relying On RS Operations.
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              From continuous paper mills to high-speed self-adhesive BOPP slitting centers, our components are optimized to handle continuous raw web tension.
            </p>
          </div>

          {/* Interactive tabs split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Tabs Buttons Column */}
            <div className="lg:col-span-4 flex flex-cols flex-col gap-2.5 self-center">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeIndustryId === ind.id
                      ? "bg-white border-brand-blue shadow-lg shadow-gray-200/50"
                      : "border-gray-25/50 hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-base text-gray-905">
                      {ind.name}
                    </h3>
                    <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      activeIndustryId === ind.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-mono tracking-wider truncate uppercase mt-1">
                    {ind.accentTitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Tab content column */}
            <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-6 md:p-10 flex flex-col justify-between blueprint-grid relative">
              <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="border-b border-gray-100 pb-4">
                  <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest uppercase">
                    Client Integration Sheet
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-gray-950 mt-1 leading-none-0">
                    {activeIndustry.name} Operations
                  </h3>
                  <p className="font-sans text-xs italic text-gray-500 mt-1">
                    {activeIndustry.accentTitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {activeIndustry.description}
                </p>

                {/* Sub-Use cases listed */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[11px] font-black text-gray-400 uppercase tracking-widest">
                    Common Integration Areas
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {activeIndustry.useCases.map((uc, i) => (
                      <li key={i} className="flex items-center gap-2 pl-2 border-l-2 border-brand-blue">
                        <CornerDownRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dynamic metrics indicators */}
              <div className="border-t border-gray-100 pt-6 mt-8">
                <div className="grid grid-cols-3 gap-4 text-center font-mono">
                  {activeIndustry.metrics.map((met, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[9px] text-[#94A3B8] block uppercase">
                        {met.label}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-brand-dark block font-display">
                        {met.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. MANUFACTURING EXCELLENCE WORKFLOW SECTION (5-step process) */}
      <section id="excellence" className="bg-white py-24 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-3.5 max-w-2.5xl mx-auto mb-16 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
              Metropolitan Forging Pipeline
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl text-gray-950 tracking-tight leading-none">
              Workflow Excellence Standard.
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              RS Industries maintains an elaborate 5-stage mechanical workflow configuration, scaling each blade from chemical ultrasonic compound checks up to laser final dimension validation.
            </p>
          </div>

          <WorkflowTimeline />

        </div>
      </section>

      {/* 10. WHY CHOOSE US (Highlight premium features with reflective glassmorphism cards) */}
      <section id="why-choose-us" className="bg-gray-50 border-t border-b border-gray-100 py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="space-y-3.5 max-w-2.5xl mx-auto mb-16 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
              Client Protection Standards
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl text-gray-950 tracking-tight leading-none">
              Engineered Values That Deliver.
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Our steel retains extreme sharp bevel bounds up to 4.2x greater than carbon alternatives, drastically dropping your operational mill maintenance run budgets.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Precision card */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest">VALUE STACK / 01</span>
              <h3 className="font-display font-bold text-lg text-gray-905 mt-1.5 mb-1 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-blue" />
                Precision Engineering
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                We calibrate bevel angles, face-flat concentric tolerances to ±0.01mm bounds, promising flawless rotary slitting under high web force levels.
              </p>
            </div>

            {/* Life card */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest">VALUE STACK / 02</span>
              <h3 className="font-display font-bold text-lg text-gray-905 mt-1.5 mb-1 flex items-center gap-2">
                <Settings className="w-5 h-5 text-brand-blue animate-spin-slow" />
                Vast Wear Durability
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                By deep-immersing forged components in sub-zero liquid nitrogen at -196°C, we restructure alloys, boosting structural wear limits up to 4x.
              </p>
            </div>

            {/* Finishing card */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest">VALUE STACK / 03</span>
              <h3 className="font-display font-bold text-lg text-gray-905 mt-1.5 mb-1 flex items-center gap-2">
                <Disc className="w-5 h-5 text-brand-blue" />
                Accurate Polish Finishing
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Our grinding bays polish blade body bevel cheeks to mirror Ra less than 0.05µm finish indices, dropping heat buildup and adhesive BOPP adhesive transfer.
              </p>
            </div>

            {/* Supply card */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest">VALUE STACK / 04</span>
              <h3 className="font-display font-bold text-lg text-gray-905 mt-1.5 mb-1 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-brand-blue" />
                Reliable Dynamic Supply
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                With a direct transit pipeline along Delhi's high-speed NH-10 Rohtak Road network, we service multi-ton mill dispatches across absolute schedules.
              </p>
            </div>

            {/* Pricing card */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest">VALUE STACK / 05</span>
              <h3 className="font-display font-bold text-lg text-gray-905 mt-1.5 mb-1 flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-blue" />
                Highly Competitive Pricing
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                By maintaining raw alloy sintering internally right at our Nangloi machine depot, we save 30% regarding intermediary importers, passing cost savings to clients.
              </p>
            </div>

            {/* Support card */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold tracking-widest">VALUE STACK / 06</span>
              <h3 className="font-display font-bold text-lg text-gray-905 mt-1.5 mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                High Operational Output
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                With zero edge burring or core tube tearing, our cutters guarantee structural integrity for BOPP, cardboard cores, and prime paper mill webs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 11. TRUST & QUALITY STANDARDS SEGMENT */}
      <section className="bg-white py-24 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-gray-950/20">
            <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
            <div className="absolute -top-1/3 -right-1/4 w-[60%] h-[80%] rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="font-mono text-[10px] tracking-widest text-brand-blue font-black uppercase bg-blue-900/40 px-3 py-1 rounded-sm border border-blue-800/50">
                  Global Enterprise Compliance
                </span>
                <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
                  A High-Tonnage Trusted Brand.
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  RS Industries caters exclusively to enterprise bulk accounts, paper manufacturing conglomerates, and high-speed box scorer lines. By implementing continuous heat batch controls, we certify each shipment is free from crystallographic defects.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand-blue" />
                    <span>ASTM Steel Grades Only</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand-blue" />
                    <span>Concentric Radial Check</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand-blue" />
                    <span>Nangloi In-House Forgery</span>
                  </div>
                </div>
              </div>

              {/* Instant call action card */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="font-display font-bold text-lg text-white">Commercial Account Desk</h3>
                <p className="text-gray-400 text-xs">
                  Speak directly with Managing Director Isha Singh regarding regional distribution rights or specialized custom tool specs.
                </p>
                
                <div className="space-y-2 font-mono text-xs text-brand-blue">
                  <a
                    href="tel:8796013177"
                    className="flex items-center justify-center gap-2.5 bg-white text-brand-dark hover:bg-gray-100 font-sans font-black uppercase tracking-widest py-3.5 rounded-xl transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Call Sales +91 8796013177</span>
                  </a>
                  
                  <a
                    href="https://wa.me/918796013177?text=Hello%20RS%20Industries%2C%20I%20want%2520to%20place%20a%20commercial%2520bulk%20RFQ%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-emerald-500 text-white hover:bg-emerald-600 font-sans font-black uppercase tracking-widest py-3.5 rounded-xl transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-emerald-500" />
                    <span>WhatsApp Corporate Desk</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION / INTEGRATED VECTOR MAP HUD (F-22 Laxmi Park, Nangloi, Delhi) */}
      <section id="contact" className="bg-gray-50 border-t border-b border-gray-100 py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="space-y-3.5 max-w-2.5xl mx-auto mb-16 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase bg-blue-50 px-3 py-1 rounded-sm">
              Headquarters Mapping System
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl text-gray-950 tracking-tight leading-none">
              Locate Our Logistics Depot.
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Visit our Delhi assembly plant to inspect lathe grinding bays first-hand. Our plant is located directly within the West Delhi Laxmi Park manufacturing corridor.
            </p>
          </div>

          {/* Integrated custom vector mapping deck */}
          <InteractiveMap />

        </div>
      </section>

      {/* 13. MODERN LUXURY FOOTER SCREEN */}
      <footer className="bg-brand-dark text-white pt-20 pb-10 text-left border-t border-white/5 relative overflow-hidden">
        {/* Underlay lines */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: Brand details logo */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue rounded-xs flex items-center justify-center font-display font-black text-white text-lg">
                  RS
                </div>
                <div>
                  <h3 className="font-display font-black text-lg tracking-tight">RS INDUSTRIES</h3>
                  <p className="font-mono text-[8px] text-gray-400 tracking-[0.25em] leading-none uppercase">
                    METALLURGICAL EXCELLENCE SINCE 2022
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                 दिल्ली, भारत में आधारित उच्च गुणवत्ता वाले औद्योगिक कटर, स्लिटिंग नाइफ और टाइगर बेल्ट के सर्वोपरि निर्माता। 
                Supplying premium heavy cutters, circular blades and dynamic pumps designed to eliminate board processing delays.
              </p>
              <div className="pt-2 font-mono text-[10px] text-gray-500">
                <p>REGISTERY CODES: IND-DL-9938827-0100</p>
                <p>MANUFACTURING DEPOT: Nangloi Industrial Corridor</p>
              </div>
            </div>

            {/* Column 2: Product links */}
            <div className="md:col-span-3 space-y-3 font-sans text-xs">
              <h4 className="font-mono text-[9px] text-[#1D4ED8] font-bold tracking-widest uppercase">
                Machining Range
              </h4>
              <ul className="space-y-2 text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                {PRODUCTS.map((prod) => (
                  <li key={prod.id}>
                    <button
                      onClick={() => handleNavClick("products")}
                      className="hover:text-white transition-colors cursor-pointer-hover text-left"
                    >
                      • {prod.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate Contact details card */}
            <div className="md:col-span-4 space-y-3 font-sans text-xs">
              <h4 className="font-mono text-[9px] text-[#1D4ED8] font-bold tracking-widest uppercase">
                Managing Director's Office
              </h4>
              <div className="space-y-2 text-gray-400 font-semibold leading-relaxed">
                <p className="text-white font-bold">RS Industries Delhi</p>
                <p>Managing Director: Isha Singh</p>
                <p>Address: F-22 Laxmi Park, Nangloi, Delhi - 110041</p>
                <p>Hotline Call Support: +91 8796013177</p>
                <p className="font-mono text-[10px] text-brand-blue">EXPORTS & BULK REGIONAL SUPPLY CHANNELS ACTIVE</p>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic bottom copyrights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-8 text-center text-xs font-mono text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 RS Industries Delhi. Engineered to international standards. Absolute rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-help uppercase text-[9px]">ISO 9001:215 Compliant</span>
            <span className="hover:text-white transition-colors cursor-help uppercase text-[9px]">A ₹20 Lakh+ Premium Digital Experience</span>
          </div>
        </div>

      </footer>

      {/* 14. COMPREHENSIVE FLOATING CONCIERGE WIDGET */}
      <WhatsAppChat />

      {/* 15. EXPANDED BLUEPRINT PRODUCT SPECS DRAWER MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <SpecsModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
