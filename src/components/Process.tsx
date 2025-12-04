import React from 'react';
import { Droplet, Trash2, ShowerHead, Wind, SprayCan, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: Droplet, title: "Dewatering", desc: "Mechanized draining of stored water." },
  { icon: Trash2, title: "Sludge Removal", desc: "Removal of dirt and mud using special pumps." },
  { icon: ShowerHead, title: "High Pressure", desc: "Cleaning walls & ceiling with rotary jets." },
  { icon: Wind, title: "Vacuuming", desc: "Sucking out remaining contaminants." },
  { icon: SprayCan, title: "Anti-Bacterial", desc: "Spray application to kill germs." },
  { icon: Sun, title: "UV Radiation", desc: "Final sterilization using UV radiators." },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-darkBlue text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our 6-Stage <span className="text-secondary">German Process</span>
          </h2>
          <p className="text-blue-200">Complete sanitization with trained professionals using full protective gear for maximum hygiene.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-primary transition-colors duration-300 relative"
            >
              {/* Step Number Bubble */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary text-darkBlue font-bold rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-primary transition-colors">
                {index + 1}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-secondary group-hover:text-white transition-colors">
                  <step.icon size={48} strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-blue-200 group-hover:text-white/90">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;