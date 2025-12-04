import React from 'react';
import { ShieldCheck, Wrench, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const protocols = [
    {
        icon: ShieldCheck,
        title: "Full Protective Gear",
        description: "Our technicians wear complete protective equipment including:",
        items: [
            "Sanitized gloves and safety boots",
            "Protective coveralls and face masks",
            "Hair nets and shoe covers",
            "Safety goggles and helmets"
        ]
    },
    {
        icon: Wrench,
        title: "Sanitized Equipment",
        description: "All cleaning equipment is thoroughly sanitized before and after each service:",
        items: [
            "High-pressure vacuum cleaners",
            "Rotary jet cleaning machines",
            "UV radiation equipment",
            "Anti-bacterial spray systems"
        ]
    },
    {
        icon: GraduationCap,
        title: "Trained Personnel",
        description: "Our team undergoes rigorous training and certification:",
        items: [
            "German technology training",
            "Safety protocol certification",
            "Regular health check-ups",
            "Hygiene awareness programs"
        ]
    },
    {
        icon: Sparkles,
        title: "Quality Assurance",
        description: "We maintain the highest standards of cleanliness:",
        items: [
            "Pre-service equipment sterilization",
            "Post-service water quality testing",
            "Documentation and reporting",
            "Customer satisfaction guarantee"
        ]
    }
];

const SafetyHygiene: React.FC = () => {
    return (
        <section id="safety" className="py-20 bg-darkBlue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 border border-secondary/50 bg-secondary/10 rounded-full text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                        Safety First
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-secondary">Hygiene Protocols</span>
                    </h2>
                    <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                        We understand that water tank cleaning requires entering your water storage system. That's why we maintain the strictest hygiene and safety standards to ensure your water remains pure and safe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {protocols.map((protocol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-secondary rounded-xl text-darkBlue">
                                    <protocol.icon size={28} strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold mb-2">
                                        {protocol.title}
                                    </h3>
                                    <p className="text-blue-200 text-sm">
                                        {protocol.description}
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {protocol.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-blue-100">
                                        <div className="mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                        Your Health is Our Priority
                    </h3>
                    <p className="text-white/90 text-lg max-w-3xl mx-auto">
                        We never compromise on hygiene. Every member of our team enters your tank with complete protective gear and sanitized equipment, ensuring your water remains as pure as nature intended.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SafetyHygiene;
