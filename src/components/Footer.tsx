import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1221] text-slate-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 text-white">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 border-2 border-secondary/30">
                <img src="/images/CutoutLogo.png" alt="Balaji Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-tight">BALAJI</span>
                <span className="text-lg font-semibold text-secondary tracking-wider">WATER TANK CLEANING</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing hygienic water solutions to Rajkot since inception. We use German technology for safe and effective tank cleaning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3 text-center">
              <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
              <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
              <a href="#process" className="hover:text-secondary transition-colors">Our Process</a>
              <a href="#services" className="hover:text-secondary transition-colors">Services</a>
              <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"><MessageCircle size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5 text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Balaji Water Tank Cleaning. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;