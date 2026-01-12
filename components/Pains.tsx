
import React from 'react';
import { Search, TrendingDown, Clock, ShieldAlert } from 'lucide-react';

const Pains: React.FC = () => {
  const issues = [
    { code: "ERR_01", title: "Fragmentación", icon: <Search className="w-6 h-6" />, desc: "Información dispersa en procesos manuales que imposibilita la toma de decisiones basada en datos verificados." },
    { code: "ERR_02", title: "Margen Opaco", icon: <TrendingDown className="w-6 h-6" />, desc: "Pérdida de rentabilidad neta por falta de auditoría granular en costos extraordinarios y desvíos." },
    { code: "ERR_03", title: "Latencia POD", icon: <Clock className="w-6 h-6" />, desc: "Ciclos de facturación extendidos por demoras críticas en la validación y repatriación de evidencias." },
    { code: "ERR_04", title: "Visibilidad Cero", icon: <ShieldAlert className="w-6 h-6" />, desc: "Operación reactiva ante incidencias de flota por falta de monitoreo técnico preventivo y alertas." }
  ];

  return (
    <section className="py-48 bg-white relative border-y border-brand-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-20 mb-36 reveal">
          <div className="max-w-3xl">
            <span className="font-brand font-bold text-brand-accent text-[10px] tracking-[0.4em] uppercase mb-10 block">Diagnostic_Report_V.4</span>
            <h2 className="text-6xl md:text-[88px] font-brand text-brand-primary uppercase leading-[0.85] tracking-tighter">
              DETECTE <br /> <span className="text-brand-slate/20">FUGAS.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-brand-primary font-bold text-2xl mb-8 border-l-8 border-brand-accent pl-10 leading-snug">
              Jaguar sustituye la incertidumbre por una arquitectura de control técnica.
            </p>
            <div className="h-px w-full bg-brand-border"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border shadow-sm reveal">
          {issues.map((issue, i) => (
            <div key={i} className="bg-white p-14 hover:bg-brand-light transition-all group relative overflow-hidden">
              <span className="text-technical font-bold text-brand-slate opacity-40 mb-12 block">{issue.code}</span>
              <div className="text-brand-primary mb-12 group-hover:text-brand-accent transition-colors">
                {issue.icon}
              </div>
              <h3 className="text-xl font-brand font-bold text-brand-primary mb-8 uppercase tracking-tighter leading-tight group-hover:text-brand-accent transition-colors">{issue.title}</h3>
              <p className="text-[13px] text-brand-slate leading-relaxed font-medium mb-14">{issue.desc}</p>
              
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-border/10 translate-x-8 translate-y-8 rotate-45 group-hover:bg-brand-accent/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pains;
