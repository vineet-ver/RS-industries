import { useState } from "react";
import { MapPin, Navigation, Compass, Layers, Globe, Mail, Phone, Clock } from "lucide-react";

export default function InteractiveMap() {
  const [showSatelliteOverlay, setShowSatelliteOverlay] = useState<boolean>(false);
  const [coords, setCoords] = useState({ lat: "28.681149° N", lng: "77.059288° E" });

  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col lg:flex-row">
      
      {/* Map Graphic Screen */}
      <div className="w-full lg:w-7/12 h-[350px] lg:h-[420px] bg-brand-dark relative p-4 flex items-center justify-center overflow-hidden">
        {/* Radar Map blueprint coordinates crosshair backgrounds */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/5 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/5 pointer-events-none" />

        {/* Dynamic Vector Map Plotting */}
        <svg viewBox="0 0 400 300" className="w-full h-full text-white/5 select-none relative z-10 transition-transform duration-700">
          {/* Concentric distance coordinate lines */}
          <circle cx="200" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
          <circle cx="200" cy="150" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
          
          {/* Grid annotations */}
          <text x="200" y="38" textAnchor="middle" className="font-mono text-[6px] fill-white/20">GRID DEL-ZONE-4</text>
          
          {/* Main NH-10 Rohtak Road Highway Corridor Line (yellow/gray tech lines) */}
          <path d="M -50 150 L 450 150" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
          <path d="M -50 150 L 450 150" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="6,4" />
          <text x="320" y="142" className="font-mono text-[7px] fill-white/40">NH-10 ROHTAK ROAD</text>

          {/* Peeragarhi Crossing route */}
          <path d="M 320 -20 L 320 320" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          <text x="325" y="40" className="font-mono text-[6px] fill-white/30" transform="rotate(90,325,40)">PEERAGARHI WYE</text>

          {/* Local Nangloi grid streets */}
          <path d="M 200 150 L 200 350" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <path d="M 200 240 L -20 240" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          <path d="M 200 180 L 420 180" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          
          {/* Nangloi Metro Station coordinates indicator */}
          <rect x="25" y="138" width="50" height="15" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x="50" y="148" textAnchor="middle" className="font-mono text-[7px] fill-white/60">NANGLOI METRO</text>

          {/* Major Industrial landmark hubs */}
          <circle cx="200" cy="240" r="3" fill="rgba(255,255,255,0.2)" />
          <text x="208" y="243" className="font-mono text-[6px] fill-white/40">Nangloi Railway Station Hub</text>

          {/* RS Industries Nangloi Plant plot coordinate location */}
          <g className="cursor-pointer">
            {/* Pulsing ring indicator */}
            <circle cx="200" cy="150" r="16" fill="rgba(29, 78, 216, 0.2)" className="animate-ping" style={{ animationDuration: '2.5s' }} />
            <circle cx="200" cy="150" r="8" fill="rgba(29, 78, 216, 0.4)" />
            <circle cx="200" cy="150" r="4" fill="#1D4ED8" />
            
            {/* Location callout label */}
            <rect x="110" y="94" width="180" height="34" rx="4" fill="rgba(15,23,42,0.95)" stroke="#1D4ED8" strokeWidth="1" />
            <text x="200" y="108" textAnchor="middle" className="font-display font-black text-[9px] fill-white">RS INDUSTRIES REINFORCED</text>
            <text x="200" y="120" textAnchor="middle" className="font-mono text-[7px] fill-blue-400 font-semibold uppercase">F-22 Laxmi Park, Nangloi, Delhi</text>
          </g>
        </svg>

        {/* Realtime Geo Coordinates HUD block */}
        <div className="absolute bottom-4 left-4 bg-gray-950/90 border border-white/5 rounded-xl p-3.5 font-mono text-[10px] text-white/70 space-y-1">
          <p className="text-white font-bold flex items-center gap-1.5 font-sans">
            <Globe className="w-3 text-brand-blue" />
            CORPORATE GEO-ALIGNMENT
          </p>
          <div className="grid grid-cols-2 gap-3 pt-1 border-t border-white/5">
            <div>
              <span className="text-[8px] text-gray-500 block">LATITUDE</span>
              <span className="text-[#1D4ED8] font-bold block">{coords.lat}</span>
            </div>
            <div>
              <span className="text-[8px] text-gray-500 block">LONGITUDE</span>
              <span className="text-[#1D4ED8] font-bold block">{coords.lng}</span>
            </div>
          </div>
        </div>

        {/* Compass indicator top right */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-gray-950/80 border border-white/5 p-2 rounded-xl text-white/50 text-[10px]">
          <Compass className="w-4 h-4 animate-spin-slow text-brand-blue" />
          <span className="font-mono font-bold">N 12° E</span>
        </div>
      </div>

      {/* Corporate Information Panel */}
      <div className="w-full lg:w-5/12 p-6 md:p-8 space-y-6 flex flex-col justify-between text-left">
        <div className="space-y-4">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-[#1D4ED8] font-black uppercase">
              Corporate Registry
            </span>
            <h3 className="font-display font-black text-2xl text-industrial-dark tracking-tight leading-tight mt-0.5">
              RS Industries HQ
            </h3>
            <p className="text-gray-500 text-xs">
              Based in Delhi’s high-growth West Industrial Corridor. Direct rail and road distribution corridors provide rapid delivery schedules across complete Indian mill territories.
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-gray-100">
            {/* Address */}
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-bold text-xs text-gray-905">Plant Address</p>
                <p className="text-[12px] text-gray-500 leading-relaxed font-semibold">
                  F-22 Laxmi Park, Nangloi, Delhi – 110041, India
                </p>
              </div>
            </div>

            {/* Officer */}
            <div className="flex gap-3">
              <Compass className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-bold text-xs text-gray-905">Managing Officer</p>
                <p className="text-[12px] text-gray-500 font-semibold">
                  Isha Singh <span className="text-brand-blue font-mono text-[10px] bg-blue-50 px-1 py-0.5 ml-1.5 rounded-sm">MANAGING DIRECTOR</span>
                </p>
              </div>
            </div>

            {/* Operational Time */}
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-bold text-xs text-gray-905">Dispatch Center Hours</p>
                <p className="text-[12px] text-gray-500 font-semibold">
                  09:00 AM – 07:00 PM IST (Mon – Sat)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 font-sans text-xs">
          <a
            href="https://wa.me/918796013177?text=Hello%20RS%20Industries%2C%20I%20am%20inquiring%20about%20your%20manufactured%20blades."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#1D4ED8] hover:bg-blue-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Launch RFQ</span>
          </a>

          <a
            href="tel:8796013177"
            className="flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-800 font-extrabold border border-gray-150 py-3 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-brand-blue" />
            <span>Call Hotline</span>
          </a>
        </div>

      </div>

    </div>
  );
}
