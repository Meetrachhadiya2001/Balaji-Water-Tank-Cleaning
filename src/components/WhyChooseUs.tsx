import React from 'react';
import { ShieldCheck, Droplet, UserCheck, Timer, Award, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: ShieldCheck,
        title: "100% Safe & Hygienic",
        description: "Our team follows strict hygiene protocols with full protective gear including gloves, safety boots, and sanitized equipment."
    },
    {
        icon: Droplet,
        title: "99.9% Bacteria Free",
        description: "Advanced UV sterilization and anti-bacterial treatment ensures your water is completely safe for consumption."
    },
    {
        icon: UserCheck,
        title: "Trained Professionals",
        description: "Our certified technicians are trained in German cleaning technology and safety standards."
    },
    {
        icon: Timer,
        title: "Quick Service",
        description: "Complete tank cleaning in just 60-90 minutes with minimal disruption to your daily routine."
    },
    {
        icon: Award,
        title: "15+ Years Experience",
        description: "Trusted by thousands of homes, hospitals, hotels, and industries across Rajkot."
    },
    {
        icon: BadgeCheck,
        title: "Satisfaction Guaranteed",
        description: "We stand behind our work with a quality guarantee and post-service water quality report."
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-choose-us" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 border border-primary/30 bg-primary/5 rounded-full text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                        Why Choose Us
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBlue mb-4">
                        The <span className="text-primary">Balaji Advantage</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Experience the difference with our professional water tank cleaning services backed by German technology and years of expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                        >
                            <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                <benefit.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display text-xl font-bold text-darkBlue mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
