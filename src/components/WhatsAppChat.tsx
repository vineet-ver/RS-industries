import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, BadgeHelp, CheckCheck, Landmark } from "lucide-react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const presetInquiries = [
    { label: "Request Core Cutters quotation", text: "Hello RS Industries, I would like to receive pricing and physical catalog sheets for your high-performance Core Cutters." },
    { label: "Bulk Slitting Blade wholesale RFQ", text: "Hello RS Industries, I am inquiring about wholesale pricing variables for bulk Top Slitting Cutters." },
    { label: "Inquire on 'Tiger' Strapping Belts", text: "Hello RS Industries, please provide tensile strength test logs and rates for Tiger Polyester Cord Belts." },
    { label: "Confirm Glue Pump delivery schedule", text: "Hello RS Industries, I want to obtain dimensions and logistics lead times for your dual-acting starch Glue Pumps." }
  ];

  const handleSendCustom = () => {
    if (!customMsg.trim()) return;
    const link = `https://wa.me/918796013177?text=${encodeURIComponent(customMsg)}`;
    window.open(link, "_blank");
    setCustomMsg("");
  };

  const handleSelectPreset = (text: string) => {
    const link = `https://wa.me/918796013177?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. Main Chat Box Drawer Layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="w-[325px] sm:w-[350px] bg-white border border-gray-150 rounded-sm shadow-2xl overflow-hidden mb-4 mr-0 origin-bottom-right"
          >
            {/* Header: Chat Executive profile */}
            <div className="bg-[#111827] p-4 flex items-center justify-between border-b border-white/5 text-left">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center font-display font-medium text-white shadow-md">
                  IS
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#111827]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">Isha Singh</h4>
                  <p className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-wider leading-none">
                    Corporate Managing Director
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content: Pre-written template items */}
            <div className="p-4 bg-gray-50 max-h-[280px] overflow-y-auto space-y-3 block text-left">
              <div className="bg-white border border-gray-150 p-3 rounded-sm shadow-xs space-y-1">
                <p className="font-mono text-[9px] text-gray-400 uppercase font-black tracking-widest leading-none">
                  Live Dispatch Agent
                </p>
                <p className="text-gray-700 text-xs">
                  Namaste. Welcome to RS Industries Delhi. Choose a pre-compiled procurement template below for instant routing, or write your custom specification:
                </p>
              </div>

              {/* Preset buttons */}
              <div className="space-y-1.5 pt-1">
                {presetInquiries.map((inq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPreset(inq.text)}
                    className="w-full text-left bg-white hover:bg-blue-50/50 border border-gray-150 hover:border-[#1D4ED8] p-2.5 rounded-sm transition-all font-sans text-xs text-[#111827] font-medium cursor-pointer flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] flex-shrink-0" />
                    <span className="truncate">{inq.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom text writing segment */}
            <div className="p-3 bg-white border-t border-gray-105 flex gap-2">
              <input
                type="text"
                placeholder="Draft custom specifications here..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendCustom()}
                className="flex-1 bg-gray-100/80 border border-gray-200 rounded-sm px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1D4ED8]"
              />
              <button
                onClick={handleSendCustom}
                disabled={!customMsg.trim()}
                className={`p-2.5 rounded-sm flex items-center justify-center transition-colors cursor-pointer ${
                  customMsg.trim() ? "bg-[#1D4ED8] text-white" : "bg-gray-150 text-gray-300"
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust disclaimer */}
            <div className="bg-gray-50 border-t border-gray-100 px-4 py-2 flex items-center justify-between text-[9px] font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCheck className="w-3 h-3 text-green-500" />
                Durable connection protected
              </span>
              <span>RS Industries Delhi Office</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Click Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all border border-emerald-400/20 cursor-pointer flex items-center justify-center gap-2 font-sans text-xs font-black uppercase tracking-wider"
      >
        <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
        {!isOpen && (
          <span className="hidden sm:inline-block pr-1">Consult Procurement Desk</span>
        )}
      </motion.button>
      
    </div>
  );
}
