import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How often should I get my water tank cleaned?",
        answer: "We recommend cleaning your water tank at least twice a year (every 6 months) for optimal water quality. However, for hospitals, hotels, and food industries, quarterly cleaning (every 3 months) is advisable to maintain the highest hygiene standards."
    },
    {
        question: "Is it safe for workers to enter the water tank?",
        answer: "Absolutely! Our trained technicians enter tanks wearing complete protective gear including sanitized gloves, safety boots, protective coveralls, face masks, and hair nets. All equipment is thoroughly sterilized before and after each service to ensure maximum hygiene and safety."
    },
    {
        question: "How long does the cleaning process take?",
        answer: "The complete cleaning process typically takes 60-90 minutes depending on the tank size. This includes dewatering, sludge removal, high-pressure cleaning, vacuuming, anti-bacterial treatment, and UV sterilization."
    },
    {
        question: "What is the German technology you use?",
        answer: "We use advanced German-engineered high-pressure rotary jet systems and heavy-duty vacuum pumps that ensure thorough cleaning of tank walls, ceiling, and floor. Combined with UV radiation sterilization, this technology eliminates 99.9% of bacteria and contaminants."
    },
    {
        question: "Do you provide a water quality report after cleaning?",
        answer: "Yes! After completing the cleaning process, we provide documentation including before and after photos, and can arrange for water quality testing if requested. We stand behind our work with a satisfaction guarantee."
    },
    {
        question: "What areas do you serve?",
        answer: "We primarily serve Rajkot and surrounding areas. We cater to residential complexes, bungalows, hospitals, hotels, restaurants, industries, and commercial establishments of all sizes."
    },
    {
        question: "How much does the service cost?",
        answer: "The cost depends on the tank size, location, and type of service required. Please call us at +91 94269 28007 for a free quote. We offer competitive pricing and special rates for housing societies and bulk bookings."
    },
    {
        question: "Do I need to be present during the cleaning?",
        answer: "While it's not mandatory, we recommend having someone present to grant access to the tank and to review the work upon completion. Our team will show you before and after photos and explain the entire process."
    },
    {
        question: "What safety measures do you take during COVID-19?",
        answer: "We follow strict COVID-19 protocols including temperature checks, sanitization of all equipment, mandatory masks and gloves, and maintaining social distancing. Our team is fully vaccinated and follows all health guidelines."
    },
    {
        question: "Can you clean underground and overhead tanks?",
        answer: "Yes! We are equipped to clean all types of water storage tanks including underground tanks, overhead tanks, sump tanks, and large industrial storage tanks. Our equipment is suitable for tanks of all sizes and configurations."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 border border-primary/30 bg-primary/5 rounded-full text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                        FAQ
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBlue mb-4">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Got questions? We've got answers. Find everything you need to know about our water tank cleaning services.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left border border-slate-100 hover:border-primary/30"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="font-display text-lg md:text-xl font-bold text-darkBlue pr-4">
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6 text-lg">
                        Still have questions? We're here to help!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        Contact Us Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
