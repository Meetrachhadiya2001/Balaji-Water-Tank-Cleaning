import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Facebook, Instagram, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/images/CutoutLogo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 py-3 bg-white/70 backdrop-blur-md shadow-lg"
            : "top-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl w-[90%] md:w-[95%] max-w-[1280px] mx-auto rounded-full"
        }`}
      >
        <div
          className={`container mx-auto px-6 flex justify-between items-center ${
            !isScrolled ? "max-w-none" : ""
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group">
            <div
              className={`relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 overflow-hidden bg-white transition-transform duration-300 group-hover:rotate-12 shrink-0 ${
                isScrolled ? "border-primary" : "border-secondary"
              }`}
            >
              <img
                src={logo}
                alt="Balaji Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-base lg:text-2xl leading-none tracking-wide ${
                  isScrolled ? "text-darkBlue" : "text-white"
                }`}
              >
                BALAJI
              </span>
              <span
                className={`text-[0.6rem] lg:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase ${
                  isScrolled ? "text-primary" : "text-secondary"
                }`}
              >
                Water Tank Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider relative group ${
                  isScrolled
                    ? "text-darkBlue hover:text-primary"
                    : "text-white hover:text-secondary"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 ${
                isScrolled
                  ? "bg-gradient-to-r from-primary to-blue-500 text-white"
                  : "bg-white text-primary hover:bg-secondary hover:text-white"
              }`}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 text-2xl transition-colors ${
              isScrolled ? "text-darkBlue" : "text-white"
            }`}
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Matches Image 3 Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0b1120] text-white h-[100dvh]"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <a href="#" className="flex items-center gap-2 md:gap-3 group">
                <div
                  className={`relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 overflow-hidden bg-white transition-transform duration-300 group-hover:rotate-12 shrink-0 ${
                    isScrolled ? "border-primary" : "border-secondary"
                  }`}
                >
                  <img
                    src={logo}
                    alt="Balaji Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-display font-bold text-base lg:text-2xl leading-none tracking-wide ${
                      isScrolled ? "text-darkBlue" : "text-white"
                    }`}
                  >
                    BALAJI
                  </span>
                  <span
                    className={`text-[0.6rem] lg:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase ${
                      isScrolled ? "text-primary" : "text-secondary"
                    }`}
                  >
                    Water Tank Cleaning
                  </span>
                </div>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-display font-medium text-white hover:text-secondary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 w-full max-w-xs"
              >
                <a
                  href="tel:09426928007"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary rounded-lg text-white font-bold text-lg uppercase shadow-lg shadow-primary/40 hover:bg-blue-600 transition-colors"
                >
                  <Phone size={20} /> Call Now
                </a>
              </motion.div>
            </div>

            {/* Mobile Footer Area */}
            <div className="p-8 bg-black/20 text-center shrink-0">
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <Send size={18} />
                </a>
              </div>
              <p className="text-white/40 text-sm">© 2025 Balaji Cleaning</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
