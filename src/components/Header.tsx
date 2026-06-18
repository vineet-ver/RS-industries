import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Menu, X, Cpu, Shield, Landmark } from "lucide-react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Precision Range", target: "products" },
    { label: "Industries Served", target: "industries" },
    { label: "Manufacturing Excellence", target: "excellence" },
    { label: "Why RS", target: "why-choose-us" },
    { label: "Spec Customizer", target: "precision-customizer" },
    { label: "Corporate Headquarters", target: "contact" }
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-4"
          : "bg-white/10 backdrop-blur-xs py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Title */}
          <button
            onClick={() => {
              onNavClick("hero");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#1D4ED8] flex items-center justify-center rounded-sm">
              <div className="w-4 h-4 border-2 border-white rotate-45"></div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tighter uppercase italic text-industrial-dark">RS INDUSTRIES</span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-gray-400 font-medium uppercase">
                // Delhi, India
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => onNavClick(item.target)}
                className={`relative font-sans text-[11px] tracking-widest font-semibold uppercase py-1.5 transition-colors cursor-pointer-hover ${
                  activeSection === item.target
                    ? "text-[#1D4ED8]"
                    : "text-gray-500 hover:text-industrial-dark"
                }`}
              >
                {item.label}
                {activeSection === item.target && (
                  <motion.div
                    layoutId="activeHeaderDot"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1D4ED8]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call-to-actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8796013177"
              className="flex items-center gap-2 font-mono text-[11px] tracking-wider font-bold text-gray-700 hover:text-[#1D4ED8] transition-colors px-3 py-1.5 rounded-sm hover:bg-gray-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>8796013177</span>
            </a>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/918796013177?text=Hello%20RS%20Industries%2C%20I%20would%20like%20to%20request%20a%20commercial%20quote%20for%20your%20premium%20industrial%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white border border-gray-200 text-[11px] font-bold uppercase tracking-widest text-[#111827] hover:bg-gray-50 rounded-sm transition-colors cursor-pointer"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Handheld/Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:8796013177"
              className="p-2 text-gray-700 hover:text-brand-blue rounded-full hover:bg-gray-100 transition-colors"
              title="Call Sales Office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-brand-blue focus:outline-none rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Handheld Nav Expansion Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <div className="grid grid-cols-1 gap-1 border-t border-gray-100 pt-3">
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => {
                      onNavClick(item.target);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left font-display text-sm tracking-wide font-medium py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                      activeSection === item.target
                        ? "bg-blue-50 text-brand-blue font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 uppercase font-sans font-extrabold tracking-wider text-[10px]">
                <a
                  href="tel:8796013177"
                  className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-xl hover:bg-gray-200 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call Officer</span>
                </a>
                <a
                  href="https://wa.me/918796013177?text=Hello%20RS%20Industries%2C%20I%20am%20inquiring%20about%20your%20range%20of%20precision%20tools."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-blue text-white py-3 rounded-xl hover:bg-blue-700 transition-colors text-center shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Specs</span>
                </a>
              </div>
              <div className="pt-2 text-center">
                <p className="font-mono text-[9px] text-gray-400">
                  RS Industries Delhi • Serving Global Procurement Since 2022
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
