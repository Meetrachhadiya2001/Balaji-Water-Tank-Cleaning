import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [bubbles, setBubbles] = useState<{ id: number; left: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBubble = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 30 + 10,
        duration: Math.random() * 5 + 3,
      };
      setBubbles((prev) => [...prev, newBubble]);

      // Cleanup old bubbles
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, newBubble.duration * 1000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-darkBlue">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center animate-[zoomEffect_20s_infinite_alternate]"
        style={{ backgroundImage: "url('/images/water-tank-cleaning-hero.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-darkBlue/80 to-primary/80" />

      {/* Animated Water Waves */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] opacity-30 z-10 animate-wave"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/SochavaAG/example-assets/master/wave-shape.png')",
          backgroundSize: '1000px 150px'
        }}
      />
      <div className="absolute bottom-2 left-0 w-full h-[150px] opacity-20 z-10 animate-wave-reverse"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/SochavaAG/example-assets/master/wave-shape.png')",
          backgroundSize: '1000px 150px'
        }}
      />

      {/* Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute bottom-[-50px] rounded-full border border-white/30 bg-white/10"
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animation: `floatUp ${b.duration}s linear forwards`,
            }}
          />
        ))}
      </div>

      {/* CSS Keyframes for bubbles injected via style tag in component since tailwind config is static */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-2 border border-secondary/50 bg-black/30 backdrop-blur-sm rounded-full text-secondary text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
            German Technology • Mechanized
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-3 sm:mb-6 drop-shadow-2xl">
            PURE WATER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">
              HEALTHY LIFE
            </span>
          </h1>
          <p className="font-light text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-5 sm:mb-10 leading-relaxed">
            Expert mechanized water tank cleaning services in Rajkot. We use high-pressure vacuum cleaners and UV radiation to ensure 99.9% bacteria-free water.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-primary rounded-full font-bold text-white shadow-lg shadow-cyan-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <Phone size={18} /> Book Service Now
              </span>
            </a>
            <a
              href="#process"
              className="px-8 py-4 border border-white/30 rounded-full font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              How It Works <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;