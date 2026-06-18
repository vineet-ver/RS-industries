import { motion } from "motion/react";
import { Product } from "../types";
import { X, MessageSquare, PhoneCall, ShieldCheck, Cpu, HardHat, Disc, Hammer, Key, Factory } from "lucide-react";

interface SpecsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function SpecsModal({ product, onClose }: SpecsModalProps) {
  if (!product) return null;

  const generateWhatsAppLink = () => {
    const text = `Hello RS Industries, I am interested in placing an inquiry about: "${product.name}". 
Could you please share a commercial wholesale quotation, bulk production lead time, and shipping details to my factory location?
Product Details:
- Category: ${product.category}
- Specific Use Cases: ${product.useCases.slice(0, 2).join(", ")}`;
    return `https://wa.me/918796013177?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Ambient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md"
      />

      {/* Main Spec Sheet Container */}
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-sm border border-gray-150 shadow-2xl z-10 p-6 md:p-10 blueprint-grid text-left"
      >
        <div className="absolute inset-0 blueprint-grid-fine opacity-30 pointer-events-none" />

        {/* Close Button top corner */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid Section: Drawing sheet style */}
        <div className="relative space-y-8">
          {/* Header section of specimen */}
          <div className="border-b border-gray-100 pb-5">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-blue uppercase px-2 py-0.5 bg-blue-50 rounded-sm">
                SPECIFICATION SHEET // ID-${product.id.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#94A3B8]">
                ISO 9001:2015 REGISTERED
              </span>
            </div>
            <h2 className="font-display font-black text-2xl md:text-3.5xl text-gray-950 tracking-tight leading-none">
              {product.name}
            </h2>
            <p className="font-mono text-xs text-gray-400 mt-1 uppercase">
              REINFORCED INDUSTRIAL CATEGORY: {product.category}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Full description, Specifications list */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-gray-900 text-base">
                  Operational Description
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Specifications Block Table */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-gray-900 text-base">
                  Technical Specifications Matric
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="bg-gray-50/70 border border-gray-150 p-3 rounded-sm flex flex-col">
                      <span className="font-sans text-[10px] text-gray-400 font-medium">
                        {spec.label}
                      </span>
                      <span className="font-mono text-xs text-brand-dark font-semibold mt-1">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases tags */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-gray-900 text-sm flex items-center gap-1.5">
                  <Factory className="w-4 h-4 text-[#1D4ED8]" />
                  Target Factory Integrations
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.useCases.map((uc, i) => (
                    <span
                      key={i}
                      className="font-sans text-[11px] font-semibold text-gray-600 bg-gray-100/80 border border-gray-150 px-3 py-1 rounded-sm"
                    >
                      • {uc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Geometry, Features, Call now */}
            <div className="lg:col-span-5 space-y-6">
              {product.image && (
                <div className="bg-[#F3F5F7] border border-gray-150 p-4 rounded-sm flex items-center justify-center h-[200px] overflow-hidden relative">
                  <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
                  <img src={product.image} alt={product.imageAlt} className="w-full h-full object-contain rounded-sm" />
                </div>
              )}
              {/* Engineering Blueprint Box */}
              <div className="bg-[#111827] text-white rounded-sm p-5 border border-white/5 relative overflow-hidden shadow-lg shadow-gray-950/20">
                <div className="absolute top-2 right-2 text-[8px] font-mono text-white/30">
                  REF_DWG_402
                </div>
                <h4 className="font-mono text-[9px] text-[#1D4ED8] font-bold tracking-widest uppercase mb-3.5 block">
                  Cutter Core Geometry Parameters
                </h4>
                
                <div className="space-y-3.5 text-xs font-mono">
                  {product.bladeGeometry ? (
                    <>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-gray-400">OUTER DIAMETER:</span>
                        <span className="text-white font-bold">{product.bladeGeometry.outerDiameter}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-gray-400">INNER BORE (ID):</span>
                        <span className="text-white font-bold">{product.bladeGeometry.innerDiameter}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-gray-400">CORPUS THICKNESS:</span>
                        <span className="text-white font-bold">{product.bladeGeometry.thickness}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-gray-400">SURFACE HARDNESS:</span>
                        <span className="text-green-300 font-bold">{product.bladeGeometry.hardnessRating}</span>
                      </div>
                      <div className="flex justify-between pb-0.5">
                        <span className="text-gray-400">ALLOY COMPOSITION:</span>
                        <span className="text-[#1D4ED8] font-bold">{product.bladeGeometry.materialGrade}</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-6 text-gray-400 font-sans text-xs space-y-1">
                      <p>Piston Aux Valve Configuration</p>
                      <p className="text-[10px] text-gray-500 font-mono">Dual Self-Adjusting Starch Intake Flow Valve</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic list features */}
              <div className="bg-blue-50/20 border border-blue-100/50 rounded-sm p-4 space-y-3">
                <h4 className="font-display font-semibold text-[#1D4ED8] text-xs tracking-wider uppercase">
                  RS Engineered Premium Features
                </h4>
                <ul className="space-y-2.5">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                      <ShieldCheck className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trigger Direct Communications */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs text-center border-b border-gray-150 pb-2 mb-2 font-mono text-gray-400">
                  COMMERCIAL PURCHASE SECTOR CODES
                </div>
                
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#1D4ED8] hover:bg-blue-700 text-white font-sans text-xs font-black uppercase tracking-widest py-3.5 rounded-sm shadow-lg shadow-blue-500/10 transition-colors text-center cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Request Quote on WhatsApp</span>
                </a>

                <a
                  href="tel:8796013177"
                  className="w-full flex items-center justify-center gap-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-sans text-xs font-black uppercase tracking-widest py-3.5 rounded-sm transition-colors text-center cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Call Delhi Sales (8796013177)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
