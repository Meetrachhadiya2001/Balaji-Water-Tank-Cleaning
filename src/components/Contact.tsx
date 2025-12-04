import React from 'react';
import { Phone, User, MapPin, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-darkBlue overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/images/water-tank-service-contact.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Ready for a <span className="text-secondary">Clean Start?</span>
          </h2>
          <p className="text-blue-100 text-lg">Call us directly for a quote. We are just a phone call away.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {/* Contact Card */}
          <div className="flex-1 min-w-[300px] max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-6 text-secondary">
              <Phone size={48} />
            </div>
            <h3 className="text-2xl font-display font-bold text-center mb-8">Call The Experts</h3>

            <div className="space-y-4">
              <a href="tel:09426928007" className="flex items-center gap-4 bg-white text-darkBlue p-4 rounded-xl hover:bg-secondary hover:text-white transition-all group">
                <div className="p-2 bg-blue-100 rounded-full text-primary group-hover:bg-white group-hover:text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-lg">+91 94269 28007</div>
                  <div className="text-sm opacity-70">Vinubhai Rachhadiya</div>
                </div>
              </a>

              <a href="tel:9687600715" className="flex items-center gap-4 bg-white text-darkBlue p-4 rounded-xl hover:bg-secondary hover:text-white transition-all group">
                <div className="p-2 bg-blue-100 rounded-full text-primary group-hover:bg-white group-hover:text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-lg">+91 96876 00715</div>
                  <div className="text-sm opacity-70">Support Line</div>
                </div>
              </a>

              <a href="tel:8160312707" className="flex items-center gap-4 bg-white text-darkBlue p-4 rounded-xl hover:bg-secondary hover:text-white transition-all group">
                <div className="p-2 bg-blue-100 rounded-full text-primary group-hover:bg-white group-hover:text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-lg">+91 81603 12707</div>
                  <div className="text-sm opacity-70">Parth Rachhadiya</div>
                </div>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex-1 min-w-[300px] max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-6 text-secondary">
              <MapPin size={48} />
            </div>
            <h3 className="text-2xl font-display font-bold text-center mb-6">Visit Office</h3>

            <p className="text-center text-lg leading-relaxed mb-8 text-blue-100">
              Uma Mandap Service,<br />
              "Satyam Shivam Sundaram" Apt,<br />
              Opp. Wockhardt Hospital,<br />
              University Road, Rajkot – 360005
            </p>

            <a
              href="https://maps.app.goo.gl/PJVTS1TDCNqQdbfP8"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary rounded-xl font-bold uppercase tracking-wider hover:bg-secondary transition-colors"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.737190863868!2d70.75172347602283!3d22.28774884333902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbd043989751%3A0xad3c8a3e5836682b!2sUma%20Mandap%20Service!5e0!3m2!1sen!2sin!4v1732860000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Balaji Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;