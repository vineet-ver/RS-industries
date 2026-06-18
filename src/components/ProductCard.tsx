import { useState } from "react";
import { motion } from "motion/react";
import { Product } from "../types";
import { Settings, CheckCircle, HelpCircle, FileText, ChevronRight, Zap } from "lucide-react";

interface ProductCardProps {
  key?: string;
  product: Product;
  onOpenSpecs: (product: Product) => void;
}

export default function ProductCard({ product, onOpenSpecs }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Custom high-precision SVG Vector Blueprint Renderer for each product
  const renderProductSVG = (id: string) => {
    switch (id) {
      case "core-cutters":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px] text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
            {/* Circular metal ring with depth */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
            <circle cx="100" cy="100" r="75" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
            
            {/* Knife bevel layer */}
            <circle cx="100" cy="100" r="71" fill="none" stroke="#94A3B8" strokeWidth="3" />
            <circle cx="100" cy="100" r="68" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
            
            {/* Center Mounting Shaft & keyway */}
            <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="94" y="58" width="12" height="15" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="28" fill="#F8FAFC" />
            
            {/* Concentric helper calibration rings */}
            <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
            
            {/* Sharpness bevel pointer representation */}
            <path d="M 160 60 L 180 40 L 195 40" fill="none" stroke="#1D4ED8" strokeWidth="1" />
            <circle cx="160" cy="60" r="2.5" fill="#1D4ED8" />
            <text x="180" y="34" className="font-mono text-[7px]" fill="#1D4ED8">62 HRC</text>
          </svg>
        );
      case "top-slitting-cutters":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px] text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
            {/* Outer perimeter with dynamic cut segments */}
            <circle cx="100" cy="100" r="76" fill="none" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="12, 3" />
            <circle cx="100" cy="100" r="69" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            
            {/* Center keyway hole */}
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="91" y="54" width="18" height="12" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="38" fill="#F8FAFC" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="#E2E8F0" strokeWidth="1" />
            
            {/* Precision index radial layout */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
            
            {/* Shear overlap path */}
            <path d="M 40 160 L 60 180 L 120 180" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="40" cy="160" r="2" fill="#475569" />
            <text x="65" y="175" className="font-mono text-[7px]" fill="#475569">SHEAR ANGLE: 3°</text>
          </svg>
        );
      case "teeth-cutters":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px] text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
            {/* Linear punch plate blueprint with custom fine serrated profile */}
            <rect x="15" y="80" width="170" height="40" fill="#F1F5F9" stroke="currentColor" strokeWidth="1.5" rx="3" />
            {/* Linear micro-teeth serrated edge top */}
            <path d="M 15 80 
                     L 25 70 L 35 80 L 45 70 L 55 80 L 65 70 L 75 80 L 85 70 L 95 80 L 105 70 L 115 80 L 125 70 L 135 80 L 145 70 L 155 80 L 165 70 L 175 80 L 185 70" 
                  fill="none" stroke="#111827" strokeWidth="2.5" />
            
            {/* Standard circular mounting slots */}
            <rect x="35" y="93" width="22" height="10" rx="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" />
            <rect x="89" y="93" width="22" height="10" rx="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" />
            <rect x="143" y="93" width="22" height="10" rx="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" />
            
            <line x1="46" y1="90" x2="46" y2="106" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <line x1="100" y1="90" x2="100" y2="106" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            
            {/* Teeth pitch pointer card */}
            <path d="M 115 75 L 135 45 L 165 45" fill="none" stroke="#1D4ED8" strokeWidth="1" />
            <circle cx="115" cy="75" r="2" fill="#1D4ED8" />
            <text x="138" y="39" className="font-mono text-[7px]" fill="#1D4ED8">PITCH: 2.2mm V-PRO</text>
          </svg>
        );
      case "tiger-polyester-cord-belts":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px] text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
            {/* Solid buckle graphic */}
            <rect x="60" y="55" width="80" height="90" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="70" y="65" width="60" height="30" rx="3" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.2" />
            <rect x="70" y="100" width="60" height="35" rx="3" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.2" />
            
            {/* Strapping cord going through buckle */}
            <path d="M 80 20 L 80 180" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
            {/* Interlacing heavy mesh thread lines inside belt */}
            <path d="M 80 20 L 80 180" stroke="#FFFFFF" strokeWidth="10" strokeDasharray="3,5" strokeLinecap="round" />
            <path d="M 120 20 L 120 180" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
            <path d="M 120 20 L 120 180" stroke="#E2E8F0" strokeWidth="10" strokeDasharray="3,5" strokeLinecap="round" />
            
            <circle cx="100" cy="100" r="15" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="1.5" />
            <text x="100" y="103" textAnchor="middle" className="font-mono font-bold text-[8px]" fill="#1D4ED8">TIGER</text>
          </svg>
        );
      case "glue-pump":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px] text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
            {/* Box frame of pneumatic pump block */}
            <rect x="50" y="45" width="100" height="110" rx="6" fill="#F8FAFC" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Left/Right double acting diaphragm chambers */}
            <rect x="34" y="60" width="16" height="80" rx="3" fill="#E2E8F0" stroke="currentColor" strokeWidth="1.2" />
            <rect x="150" y="60" width="16" height="80" rx="3" fill="#E2E8F0" stroke="currentColor" strokeWidth="1.2" />
            
            {/* Air flow pipes inside block */}
            <line x1="50" y1="100" x2="150" y2="100" stroke="#F1F5F9" strokeWidth="10" />
            <line x1="50" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
            
            {/* Central pneumatic pressure air manifold control valve */}
            <circle cx="100" cy="100" r="22" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="16" fill="rgba(29, 78, 216, 0.08)" />
            
            {/* Inlet / Outlet structural flanges */}
            <rect x="85" y="25" width="30" height="20" rx="2" fill="#E2E8F0" stroke="currentColor" strokeWidth="1.2" />
            <rect x="85" y="155" width="30" height="20" rx="2" fill="#E2E8F0" stroke="currentColor" strokeWidth="1.2" />
            
            <path d="M 125 100 L 175 100 L 175 80" fill="none" stroke="#1D4ED8" strokeWidth="1" />
            <circle cx="125" cy="100" r="2" fill="#1D4ED8" />
            <text x="175" y="72" className="font-mono text-[7px]" fill="#1D4ED8" textAnchor="middle">8 BAR AIR</text>
          </svg>
        );
      case "corrugated-thin-blades":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px] text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
            {/* Super fine high speed outer circle edge */}
            <circle cx="100" cy="100" r="82" fill="none" stroke="#E2E8F0" strokeWidth="1" />
            
            {/* Dynamic rotating segments highlighting cutting */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#111827" strokeWidth="1" />
            <circle cx="100" cy="100" r="79" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="100" cy="100" r="77" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="30, 8" />
            
            {/* Radial polish laser lines */}
            <line x1="100" y1="100" x2="160" y2="40" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            <line x1="100" y1="100" x2="40" y2="160" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            <line x1="100" y1="100" x2="40" y2="40" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            <line x1="100" y1="100" x2="160" y2="160" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            
            {/* Ultra solid center bore structure */}
            <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="42" fill="#F8FAFC" />
            <circle cx="100" cy="100" r="30" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            
            {/* Tiny locking pin holes present on corrugated slitting wheels */}
            <circle cx="100" cy="80" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="100" cy="120" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="80" cy="100" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="120" cy="100" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="0.8" />
            
            <circle cx="100" cy="100" r="5" fill="#1D4ED8" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      id={`product-card-${product.id}`}
      layoutId={`product-card-container-${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white border border-gray-150 rounded-sm p-6 relative flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/60"
    >
      {/* Absolute technical micro-label */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#F3F5F7] px-2 py-0.5 rounded-sm border border-gray-150">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse-slow" />
        <span className="font-mono text-[8px] font-bold tracking-widest text-gray-500 uppercase">
          {product.category}
        </span>
      </div>

      <div className="space-y-4">
        {/* Render Vector Blueprint Mockup with elegant technical box */}
        <div className="bg-[#F3F5F7] h-[180px] rounded-sm flex items-center justify-center p-4 relative overflow-hidden transition-all duration-500 group-hover:bg-blue-50/20">
          {/* Schematic visual grid backing */}
          <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient(ellipse at center, transparent 70%, white 100%) pointer-events-none" />
          
          <div className="relative w-full h-full flex items-center justify-center scale-95 transition-all duration-500 group-hover:scale-105">
            {product.image ? (
              <img src={product.image} alt={product.imageAlt} className="w-full h-full object-contain rounded-sm" />
            ) : (
              <div className="group-hover:rotate-6 transition-all duration-500 flex items-center justify-center w-full h-full">
                {renderProductSVG(product.id)}
              </div>
            )}
          </div>
        </div>

        {/* Product Meta Core Information */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-industrial-dark leading-tight uppercase group-hover:text-[#1D4ED8] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed h-[52px] overflow-hidden text-ellipsis line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Snapshot Specs Table */}
        <div className="border-t border-b border-gray-150 py-3 space-y-1.5">
          <p className="font-mono text-[9px] tracking-wider text-gray-400 font-bold uppercase">
            Product Calibrations
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {product.specifications.slice(0, 4).map((spec, idx) => (
              <div key={idx} className="space-y-0.5 text-left border-l border-gray-150 pl-2">
                <span className="text-[9px] text-gray-400 block font-light">
                  {spec.label}
                </span>
                <span className="text-[10px] text-gray-800 font-bold block truncate" title={spec.value}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons to Trigger Details Experience */}
      <div className="grid grid-cols-1 gap-2 pt-4">
        <button
          onClick={() => onOpenSpecs(product)}
          className="w-full flex items-center justify-center gap-1 bg-[#1D4ED8] hover:bg-blue-700 text-white font-sans text-[11px] font-bold uppercase tracking-widest py-3.5 rounded-sm transition-colors cursor-pointer group/btn"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Interactive Schematic</span>
          <ChevronRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <a
          href={`https://wa.me/918796013177?text=${encodeURIComponent(`Hello RS Industries, I want to inquire about the commercial specifications and wholesale pricing of: ${product.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center block bg-[#F3F5F7] hover:bg-gray-200 text-[#111827] font-sans text-[11px] font-bold uppercase tracking-widest py-3 rounded-sm border border-gray-200/40 transition-all cursor-pointer"
        >
          WhatsApp RFQ Direct
        </a>
      </div>
    </motion.div>
  );
}
