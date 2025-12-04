import React from "react";
import { ShieldCheck, UserCheck, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import aboutUs from "/images/AboutUs.png";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-lightBlue relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBlue mb-6 leading-tight">
              Masters of <span className="text-primary">Hygiene</span> &
              Purification
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Waterborne diseases are a major threat in our community. At{" "}
              <strong className="text-darkBlue">
                Balaji Water Tank Cleaning
              </strong>
              , we go beyond simple cleaning; we sanitize. Traditional manual
              cleaning is ineffective and often unhygienic.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We utilize high-pressure rotary jets, UV radiation, and heavy-duty
              vacuum pumps to ensure your water storage is{" "}
              <span className="bg-green-100 text-green-700 font-bold px-2 rounded">
                99.99% safe
              </span>{" "}
              for consumption.
            </p>

            {/* Why Choose Us Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">Germ Free</h4>
                  <p className="text-sm text-slate-500">
                    UV Sterilization Process
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-primary">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">Hygienic Entry</h4>
                  <p className="text-sm text-slate-500">
                    Full Safety Gear & Protective Equipment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">Certified</h4>
                  <p className="text-sm text-slate-500">
                    Authorized Professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">Fast Service</h4>
                  <p className="text-sm text-slate-500">
                    Done in 60-90 minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Proprietor Card */}
            <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="min-w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h5 className="text-darkBlue font-semibold text-sm uppercase tracking-wide">
                  Authorized Proprietors
                </h5>
                <p className="text-primary font-bold text-lg leading-tight">
                  Vinubhai Rachhadiya <br /> Parth Rachhadiya
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={aboutUs}
                alt="Tank Cleaning Professional"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 md:left-[-30px] bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-primary animate-float hidden md:block">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-primary">15</span>
                <span className="text-3xl font-bold text-primary">+</span>
              </div>
              <div className="text-darkBlue font-bold uppercase tracking-wider text-sm mt-1">
                Years of
                <br />
                Excellence
              </div>
            </div>

            {/* Mobile Badge */}
            <div className="md:hidden absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-primary">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-extrabold text-primary">
                  15+
                </span>
                <span className="text-darkBlue font-bold uppercase text-xs">
                  Years of Excellence
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
