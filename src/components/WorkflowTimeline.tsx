import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROCESS_STEPS } from "../data";
import { Hammer, Aperture, Snowflake, Waves, ShieldCheck, Milestone, Cpu, ArrowRight } from "lucide-react";

export default function WorkflowTimeline() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Hammer className="w-5 h-5" />;
      case 1:
        return <Aperture className="w-5 h-5" />;
      case 2:
        return <Snowflake className="w-5 h-5" />;
      case 3:
        return <Waves className="w-5 h-5" />;
      case 4:
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Milestone className="w-5 h-5" />;
    }
  };

  const getStepVisualSVG = (idx: number) => {
    switch (idx) {
      case 0: // Forging
        return (
          <svg viewBox="0 0 160 160" className="w-full h-full max-h-[140px] text-brand-blue">
            <rect x="20" y="50" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
            <path d="M 20 80 Q 80 50 140 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="80" y1="20" x2="80" y2="140" stroke="rgba(29, 78, 216, 0.15)" strokeWidth="0.5" />
            {/* Hot hot spot glowing */}
            <circle cx="80" cy="80" r="25" fill="rgba(29, 78, 216, 0.08)" stroke="#1D4ED8" strokeWidth="1" />
            <circle cx="80" cy="80" r="10" fill="#1D4ED8" className="animate-ping" style={{ animationDuration: '3s' }} />
            <text x="80" y="84" textAnchor="middle" className="font-mono text-[7px]" fill="#FFFFFF">MELT 1180C</text>
          </svg>
        );
      case 1: // CNC
        return (
          <svg viewBox="0 0 160 160" className="w-full h-full max-h-[140px] text-brand-blue">
            <circle cx="80" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="80" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Lathe bit cutting */}
            <line x1="80" y1="80" x2="150" y2="80" stroke="#1D4ED8" strokeWidth="2.5" />
            <polygon points="120,76 130,80 120,84" fill="#1D4ED8" />
            {/* Spinning indicators */}
            <path d="M 40 50 A 50 50 0 0 1 120 50" fill="none" stroke="#1D4ED8" strokeWidth="1.5" />
            <text x="80" y="145" textAnchor="middle" className="font-mono text-[8px] font-bold" fill="currentColor">OKUMA Lathe 0.002mm</text>
          </svg>
        );
      case 2: // Sub Zero Heat treat
        return (
          <svg viewBox="0 0 160 160" className="w-full h-full max-h-[140px] text-brand-blue">
            <rect x="40" y="40" width="80" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Frost crystals lines */}
            <line x1="80" y1="20" x2="80" y2="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <line x1="20" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <circle cx="80" cy="80" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {/* Cooling ring */}
            <circle cx="80" cy="80" r="35" fill="none" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="2,8" className="animate-spin-slow" />
            <text x="80" y="10" textAnchor="middle" className="font-mono text-[8px] font-bold" fill="#1D4ED8">VACUUM LN2 -196°C</text>
          </svg>
        );
      case 3: // Lap Grinding
        return (
          <svg viewBox="0 0 160 160" className="w-full h-full max-h-[140px] text-brand-blue">
            <circle cx="65" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Grinding wheel on the side */}
            <circle cx="115" cy="80" r="30" fill="none" stroke="#1E293B" strokeWidth="1.5" />
            {/* Spark interface */}
            <path d="M 83 60 L 98 45" stroke="#1D4ED8" strokeWidth="1" />
            <circle cx="83" cy="65" r="2" fill="#1D4ED8" />
            <text x="80" y="145" textAnchor="middle" className="font-mono text-[8px] font-bold" fill="currentColor">{"EDGE POLISH Ra < 0.05"}</text>
          </svg>
        );
      case 4: // Laser QA
        return (
          <svg viewBox="0 0 160 160" className="w-full h-full max-h-[140px] text-brand-blue">
            <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Scanning red laser line */}
            <line x1="30" y1="80" x2="130" y2="80" stroke="#EF4444" strokeWidth="1.5" className="animate-pulse" />
            <path d="M 30 80 Q 80 120 130 80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="80" y1="30" x2="80" y2="130" stroke="rgba(29, 78, 216, 0.1)" strokeWidth="0.5" />
            <text x="80" y="24" textAnchor="middle" className="font-mono text-[8px] font-bold" fill="#EF4444">LASER RANGE 100% PASS</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 relative overflow-hidden shadow-xl shadow-gray-200/40">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />

      {/* Grid selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Progress Step Nav */}
        <div className="lg:col-span-4 space-y-3 relative z-10">
          <p className="font-mono text-[10px] tracking-widest text-[#1D4ED8] font-black uppercase">
            Manufacturing Sequence Deck
          </p>
          <div className="space-y-2">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIdx(idx)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeStepIdx === idx
                    ? "bg-brand-dark/100 text-white border-brand-dark shadow-lg shadow-gray-950/15"
                    : "bg-gray-50/70 text-gray-700 border-gray-100 hover:bg-gray-100/90"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-sm ${
                    activeStepIdx === idx ? "bg-brand-blue text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {step.stepNumber}
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-xs uppercase tracking-wider leading-none">
                      {step.title}
                    </h4>
                    <span className={`text-[10px] mt-1 block font-mono ${
                      activeStepIdx === idx ? "text-gray-300" : "text-gray-400"
                    }`}>
                      {step.subtitle.substring(0, 32)}...
                    </span>
                  </div>
                </div>
                <div className={activeStepIdx === idx ? "text-brand-blue" : "text-gray-300"}>
                  {getStepIcon(idx)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Step Expanded View with animations */}
        <div className="lg:col-span-8 bg-industrial-silver/70 border border-gray-100 rounded-2xl p-6 md:p-8 relative min-h-[320px] flex flex-col justify-between blueprint-grid">
          <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6 relative z-10"
            >
              {/* Top Row: Meta description index */}
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="font-mono text-[10px] text-[#1D4ED8] font-bold tracking-widest uppercase">
                  ACTIVE PIPELINE STATION • RS-{PROCESS_STEPS[activeStepIdx].stepNumber}
                </span>
                <span className="font-mono font-black text-xs text-brand-blue bg-blue-50 px-2 py-0.5 rounded-md">
                  {PROCESS_STEPS[activeStepIdx].technicalMetric}
                </span>
              </div>

              {/* Middle Section split: Text vs Technical Drawing Vector */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Step spec text info */}
                <div className="md:col-span-7 space-y-3.5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-medium text-gray-500">
                      {PROCESS_STEPS[activeStepIdx].subtitle}
                    </span>
                    <h3 className="font-display font-black text-xl md:text-2xl text-industrial-dark tracking-tight leading-none">
                      {PROCESS_STEPS[activeStepIdx].title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {PROCESS_STEPS[activeStepIdx].description}
                  </p>
                </div>

                {/* SVG Visual Render representing machinery step */}
                <div className="md:col-span-5 bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-center shadow-xs">
                  {getStepVisualSVG(activeStepIdx)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Controls sequence flow */}
          <div className="border-t border-gray-200/60 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex gap-1">
              {PROCESS_STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeStepIdx ? "w-6 bg-brand-blue" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveStepIdx((prev) => (prev + 1) % PROCESS_STEPS.length)}
              className="flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-xs text-brand-blue hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>Cycle Next Station</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
