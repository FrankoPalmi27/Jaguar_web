
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MODULES } from '../constants';

const Modules: React.FC<{id: string}> = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24 items-start">
          
          <div className="reveal active">
            <h2 className="text-4xl md:text-6xl font-brand font-bold text-brand-primary leading-tight uppercase mb-12">
              LOGÍSTICA <br />
              <span className="text-brand-slate/30">INTELIGENTE:</span> <br />
              DIVERSA GAMA <br />
              DE MÓDULOS.
            </h2>
            
            <div className="divide-y divide-brand-border border-t border-brand-border">
              {MODULES.map((module, i) => (
                <div key={i} className="group py-8 flex items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300">
                  <div className="flex items-center gap-8">
                    <span className="text-technical text-brand-slate font-bold opacity-30">0{i+1}</span>
                    <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{module.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-brand-slate opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>

            <p className="mt-16 text-brand-slate text-sm leading-relaxed max-w-sm">
              Jaguar ofrece una experiencia logística sin fisuras, adaptándose a diversas necesidades de transporte y auditoría.
            </p>
            
            <button className="mt-10 btn-primary px-10">Ver todos los servicios</button>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal active">
             <div className="space-y-4">
                <div className="img-card h-[400px]">
                   <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Service 1" />
                </div>
                <div className="bg-brand-primary p-8 rounded-[24px] text-white flex justify-between items-center">
                   <span className="font-brand font-bold text-xs uppercase tracking-widest">Dashboards</span>
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">888</div>
                </div>
             </div>
             <div className="space-y-4 pt-16">
                <div className="img-card h-[300px]">
                   <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Service 2" />
                </div>
                <div className="bg-brand-light p-10 rounded-[24px] border border-brand-border">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Optimize operations</span>
                   </div>
                   <p className="text-brand-primary text-xs font-medium leading-relaxed">Jaguar optimiza flujos de trabajo con precisión y experiencia técnica.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Modules;
