import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, RotateCcw, ShieldAlert, BadgeCheck, FileCheck, CircleDot, Zap, HelpCircle } from "lucide-react";

export default function InteractiveKnifeViewer() {
  const [od, setOd] = useState<number>(250); // Outer Diameter in mm
  const [idValue, setIdValue] = useState<number>(75); // Inner Diameter in mm
  const [thickness, setThickness] = useState<number>(3.0); // Thickness in mm
  const [bevel, setBevel] = useState<string>("Single 45°"); // Bevel angle
  const [material, setMaterial] = useState<string>("D2 Tool Steel"); // Steel Grades

  const materialsList = [
    { name: "D2 Tool Steel", density: 7.8, hardness: "60-62 HRC", speedRating: "High Resistance" },
    { name: "M2 High Speed Steel", density: 8.1, hardness: "63-65 HRC", speedRating: "Ultra High Velocity" },
    { name: "Tungsten Carbide YG12X", density: 14.5, hardness: "91-93 HRA", speedRating: "Extreme Endurance" },
    { name: "SUS 440C Stainless", density: 7.7, hardness: "58-60 HRC", speedRating: "Anti-Corrosion Specialized" }
  ];

  const selectedMat = materialsList.find((m) => m.name === material) || materialsList[0];

  // Limit check to ensure ID is always smaller than OD
  const handleIdChange = (val: number) => {
    if (val < od - 40) {
      setIdValue(val);
    }
  };

  const handleOdChange = (val: number) => {
    setOd(val);
    if (idValue >= val - 40) {
      setIdValue(val - 50);
    }
  };

  // Technical Calculations
  const radiusOuter = od / 2;
  const radiusInner = idValue / 2;
  const volumeCm3 = (Math.PI * (Math.pow(radiusOuter / 10, 2) - Math.pow(radiusInner / 10, 2)) * (thickness / 10));
  const estimatedMassGrams = Math.round(volumeCm3 * selectedMat.density);
  
  // Safe RPM = 120,000 / (OD in meters)
  const maxSafeRpm = Math.round(120000 / (od / 1000));
  const dynamicTensionMPa = Math.round(350 * (thickness / 2) + (od / 5));

  const generateWhatsAppLink = () => {
    const text = `Hello RS Industries, I would like to request a commercial quote for custom engineered blades with these exact specifications:
- Blade Type: High-Precision Slitting / Core Cutter
- Outer Diameter: ${od} mm
- Core Bore (ID): ${idValue} mm
- Thickness: ${thickness} mm
- Knife Material: ${material} (${selectedMat.hardness})
- Bevel Profile Edge: ${bevel}
- Calculated Mass: ${estimatedMassGrams}g

Please let me know pricing and estimated bulk dispatch delivery schedule. Address inquiry to the Engineering Division.`;
    return `https://wa.me/918796013177?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#F3F5F7]/40 border border-gray-150 rounded-sm p-6 lg:p-10 blueprint-grid relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-60 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row gap-10 items-center">
        {/* Technical Vector Drawing Window */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="mb-4 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#1D4ED8] uppercase font-bold bg-blue-50 px-2.5 py-1 rounded-sm">
              Real-time CAD Vector Simulator
            </span>
            <h4 className="font-display font-bold text-lg text-industrial-dark mt-1 uppercase">
              Custom Blade Geometry Builder
            </h4>
          </div>

          <div className="relative w-full max-w-[400px] h-[400px] bg-white border border-gray-150 rounded-sm shadow-inner flex items-center justify-center p-4">
            {/* Engineering Annotations Overlay */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-gray-400 space-y-0.5 leading-none">
              <p>DRAWING ID: RS-PREC-${od}-${idValue}</p>
              <p>UNITS: MILLIMETERS (MM)</p>
              <p>REJECTION LIMIT: 0.005mm concentricity</p>
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-right text-brand-blue flex items-center gap-1.5 leading-none">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse-slow" />
              <span>LIVE RENDER MODEL ACTIVE</span>
            </div>

            {/* Dynamic Vector Core Blade SVG */}
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full max-w-[280px] max-h-[280px]"
            >
              {/* Outer Dimension Circular Indicator line */}
              <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(29, 78, 216, 0.15)" strokeWidth="1" strokeDasharray="3,3" />
              <text x="150" y="22" textAnchor="middle" fill="#1D4ED8" className="font-mono text-[8px] font-bold">
                OD: {od}mm
              </text>

              {/* Dynamic Outer Blade Ring (Steel Metal Gradient Fill) */}
              <defs>
                <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="45%" stopColor="#E2E8F0" />
                  <stop offset="85%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#475569" />
                </radialGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Cutter Body */}
              <circle
                cx="150"
                cy="150"
                r={130}
                fill="url(#metalGrad)"
                filter="url(#shadow)"
                className="transition-all duration-300"
              />

              {/* Bevel Shadow Overlay to show thickness gradient to the edge */}
              <circle
                cx="150"
                cy="150"
                r={124}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="6"
                className="opacity-80 transition-all duration-300"
              />

              {/* Outer Cutting Edge highlights (Bevel line) */}
              <circle
                cx="150"
                cy="150"
                r={129}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                className="transition-all duration-300"
              />

              {/* Inner Diameter Core Bore Cutout */}
              <circle
                cx="150"
                cy="150"
                r={radiusInner * 0.9} // scaled ratio for visualization
                fill="#FFFFFD"
                stroke="#111827"
                strokeWidth="2.5"
                className="transition-all duration-300"
              />

              {/* Keyway Notch Slot often present in circular slitting cutters */}
              <rect
                x="144"
                y={150 - radiusInner * 0.9 - 10}
                width="12"
                height="16"
                fill="#FFFFFD"
                stroke="#111827"
                strokeWidth="2.5"
                className="transition-all duration-300"
              />

              {/* Inner Diameter circular line coverup */}
              <circle
                cx="150"
                cy="150"
                r={radiusInner * 0.9 - 1}
                fill="#FFFFFF"
                className="transition-all duration-300"
              />
              <rect
                x="145.5"
                y={150 - radiusInner * 0.9 - 9}
                width="9"
                height="12"
                fill="#FFFFFF"
                className="transition-all duration-300"
              />

              {/* Core ID annotations */}
              <line x1="150" y1="150" x2={150 + radiusInner * 0.9} y2="150" stroke="#1D4ED8" strokeWidth="1.5" />
              <text x={150 + 6} y="145" fill="#1D4ED8" className="font-mono text-[9px] font-bold">
                Bore ID: {idValue}mm
              </text>

              {/* Core center coordinate hairs */}
              <line x1="150" y1="120" x2="150" y2="180" stroke="rgba(29, 78, 216, 0.2)" strokeWidth="1" />
              <line x1="120" y1="150" x2="180" y2="150" stroke="rgba(29, 78, 216, 0.2)" strokeWidth="1" />
              <circle cx="150" cy="150" r="2" fill="#1D4ED8" />

              {/* Bevel marker details */}
              <path d="M 230 70 L 255 45" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="230" cy="70" r="3" fill="#1D4ED8" />
              <text x="258" y="42" fill="#475569" className="font-mono text-[8px] font-medium" textAnchor="start">
                Edge bevel: {bevel}
              </text>
            </svg>

            {/* Scale Gauge Dimension Card */}
            <div className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 shadow-md border border-gray-100 rounded-lg p-2 font-mono text-[9px] text-gray-500 space-y-1 pointer-events-none">
              <p className="font-bold text-gray-800">SCALE BAR</p>
              <div className="h-1 bg-gray-600 rounded-full w-10 relative">
                <span className="absolute -bottom-3 left-0 text-[7px]">0mm</span>
                <span className="absolute -bottom-3 right-0 text-[7px]">50mm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spec Adjustable Sliders & Telemetry */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
              Precision Configuration Deck
            </span>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 tracking-tight">
              Machining Specification Console
            </h3>
            <p className="text-gray-500 text-sm">
              Adjust dimensional limits to compute manufacturing variables. This matches the actual production tolerances of our Nangloi machine depot.
            </p>
          </div>

          {/* Interactive Input Tuning Controls */}
          <div className="space-y-4 bg-white rounded-sm border border-gray-150 p-5 shadow-xs">
            {/* Outer Diameter Slider */}
            <div>
              <div className="flex justify-between items-center mb-1 font-mono text-xs">
                <span className="text-gray-600 flex items-center gap-1.5 font-sans font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  Outer Diameter (OD)
                </span>
                <span className="font-mono text-[#1D4ED8] font-bold px-1.5 py-0.5 bg-blue-50 rounded-sm">
                  {od} mm
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="400"
                value={od}
                onChange={(e) => handleOdChange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
              />
              <div className="flex justify-between text-[9px] text-gray-400 font-mono mt-1">
                <span>Min: 100mm</span>
                <span>Paper reel / Log Saws Standard</span>
                <span>Max: 400mm</span>
              </div>
            </div>

            {/* Inner Dia standard slider */}
            <div>
              <div className="flex justify-between items-center mb-1 font-mono text-xs">
                <span className="text-gray-600 flex items-center gap-1.5 font-sans font-bold">
                  <span className="w-2 h-2 rounded-full bg-gray-800" />
                  Inner Core Bore (ID)
                </span>
                <span className="font-mono text-gray-800 font-bold px-1.5 py-0.5 bg-gray-100 rounded-sm">
                  {idValue} mm
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="200"
                value={idValue}
                onChange={(e) => handleIdChange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-dark"
              />
              <div className="flex justify-between text-[9px] text-gray-400 font-mono mt-1">
                <span>Min: 25mm</span>
                <span>Keyway mounting hub size</span>
                <span>Max: 200mm</span>
              </div>
            </div>

            {/* Thickness and Hardness controls */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Thickness (T)
                </label>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800 rounded-sm px-3 py-2 focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
                >
                  <option value={1.2}>1.2 mm (Razor Slit)</option>
                  <option value={2.0}>2.0 mm (Rotary Shear)</option>
                  <option value={3.0}>3.0 mm (Core standard)</option>
                  <option value={4.0}>4.0 mm (Heavy duty)</option>
                  <option value={5.5}>5.5 mm (Industrial Sawn)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Edge Bevel Profile
                </label>
                <select
                  value={bevel}
                  onChange={(e) => setBevel(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800 rounded-sm px-3 py-2 focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
                >
                  <option value="Single 45°">Single Bevel 45°</option>
                  <option value="Double 30°">Double Bevel 30° (Standard)</option>
                  <option value="Double Compound">Dual Compound 22° / 35°</option>
                  <option value="Fine Hollow-Ground">Fine Hollow-Ground (Foil slit)</option>
                </select>
              </div>
            </div>

            {/* Steel Material selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Alloy Composition / Metallurgical Grade
              </label>
              <div className="grid grid-cols-2 gap-2 text-left">
                {materialsList.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => setMaterial(m.name)}
                    className={`p-2.5 rounded-sm border text-left transition-all cursor-pointer ${
                      material === m.name
                        ? "border-[#1D4ED8] bg-blue-50/55 shadow-xs"
                        : "border-gray-150 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-xs font-bold text-gray-900 leading-none mb-1">
                      {m.name}
                    </p>
                    <div className="flex justify-between font-mono text-[9px] text-gray-500">
                      <span>{m.hardness}</span>
                      <span className="text-[#1D4ED8]">{m.density} g/cm³</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Production Realtime Telemetry Readout */}
          <div className="bg-brand-dark text-white rounded-sm p-5 border border-white/5 shadow-xl font-mono text-xs">
            <h5 className="text-gray-400 font-bold mb-3 tracking-widest text-[10px] uppercase flex items-center justify-between">
              <span>Machining Diagnostics Panel</span>
              <span className="text-green-400 flex items-center gap-1 font-bold text-[9px]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                DYNAMICS CALIBRATED
              </span>
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="space-y-0.5 border-r border-white/10 pr-2">
                <span className="text-[10px] text-gray-400">ESTIMATED MASS</span>
                <p className="text-lg text-white font-extrabold font-sans">
                  {estimatedMassGrams} <span className="text-xs font-mono text-[#1D4ED8] font-bold">g</span>
                </p>
              </div>
              <div className="space-y-0.5 border-r border-white/10 pr-2">
                <span className="text-[10px] text-gray-400 font-mono">RPM THRESHOLD</span>
                <p className="text-lg text-white font-extrabold font-sans">
                  {maxSafeRpm} <span className="text-xs font-mono text-gray-400">rpm</span>
                </p>
              </div>
              <div className="space-y-0.5 border-r border-white/10 pr-2">
                <span className="text-[10px] text-gray-400">YIELD LIMIT</span>
                <p className="text-lg text-white font-extrabold font-sans">
                  {dynamicTensionMPa} <span className="text-xs font-mono text-gray-400">MPa</span>
                </p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-400">CHIP TOLERANCE</span>
                <p className="text-lg text-green-300 font-extrabold font-sans text-ellipsis overflow-hidden whitespace-nowrap">
                  {selectedMat.hardness}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3 justify-between text-[10px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-yellow-500" />
                Speeds exceed safe RPM bound at user's risk. Standard coolant flushing required.
              </span>
            </div>
          </div>

          {/* Call To Action - Request custom quote on WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#1D4ED8] hover:bg-blue-700 text-white font-sans text-[11px] font-bold uppercase tracking-widest py-4 rounded-sm shadow-md transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Submit Live CAD Config via WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
