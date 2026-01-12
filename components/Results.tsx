
import React from 'react';
import { Star } from 'lucide-react';

const Results: React.FC = () => {
  const testimonials = [
    { name: "Michael Davis", role: "CEO LogisSwift", content: "Jaguar's dashboard is intuitive and powerful. Our logistics team thrives.", color: "bg-white" },
    { name: "Jessica Parker", role: "Ops Manager", content: "Increased our on-time deliveries significantly. A must-have for logistics.", color: "bg-brand-orange text-white" },
    { name: "John Smith", role: "CFO Axon", content: "Revolutionized our supply chain. Enhanced visibility and optimized margins.", color: "bg-white" }
  ];

  return (
    <section className="py-32 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
          <div className="reveal active">
             <h2 className="text-4xl md:text-6xl font-brand font-bold text-brand-primary leading-tight uppercase">
               CLIENTES <br />
               <span className="text-brand-accent italic">SATISFECHOS</span> <br />
               COMPARTEN SU <br />
               ÉXITO.
             </h2>
          </div>
          <div className="reveal active" style={{ transitionDelay: '0.2s' }}>
             <p className="text-brand-slate text-lg leading-relaxed max-w-md">
               Nuestros clientes son el testimonio de nuestro compromiso con la excelencia. Descubra cómo Jaguar ha transformado su viaje operativo.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal active">
          {testimonials.map((t, i) => (
            <div key={i} className={`${t.color} p-10 rounded-[24px] border border-brand-border flex flex-col justify-between h-80 hover:shadow-xl transition-all duration-500`}>
              <p className="text-lg font-medium leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center gap-4 pt-10 border-t border-brand-border/10">
                <div className="w-12 h-12 rounded-full bg-brand-light"></div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
