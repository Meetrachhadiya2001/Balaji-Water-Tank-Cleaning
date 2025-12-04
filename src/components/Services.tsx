import React from 'react';
import { Building2, Factory, Stethoscope, Utensils } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    list: ["High Rise Apartments", "Bungalows", "Housing Societies"]
  },
  {
    icon: Factory,
    title: "Industrial",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    list: ["Chemical Factories", "Manufacturing Units", "Warehouses"]
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    list: ["Hospitals & Clinics", "Laboratories", "Pharmaceuticals"]
  },
  {
    icon: Utensils,
    title: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    list: ["Hotels & Resorts", "Banquet Halls", "Restaurants"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-center text-darkBlue mb-12">
          Sectors We <span className="text-primary">Serve</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="text-primary" size={24} />
                  <h3 className="font-display text-xl font-bold text-darkBlue">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.list.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;