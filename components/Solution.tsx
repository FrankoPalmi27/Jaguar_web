
import React from 'react';
import { Truck, FileCheck, FolderOpen, Bell, BarChart3, DollarSign } from 'lucide-react';

const Solution: React.FC = () => {
  const capabilities = [
    { icon: <Truck />, title: "Gestionar viajes de punta a punta", desc: "Creación, asignación, seguimiento y cierre en tiempo real." },
    { icon: <FileCheck />, title: "Automatizar facturación y costos", desc: "Facturas desde viajes. Costos extras. OCs. Liquidaciones automáticas." },
    { icon: <FolderOpen />, title: "Centralizar documentación con OCR", desc: "Remitos, PODs, COAs en un solo lugar. OCR con IA para extracción." },
    { icon: <Bell />, title: "Anticiparse a riesgos", desc: "Alertas de vencimientos: licencias, VTV, seguros, contratos." },
    { icon: <BarChart3 />, title: "Decidir con datos reales", desc: "Rentabilidad por viaje, cliente, ruta. Márgenes reales actualizados." },
    { icon: <DollarSign />, title: "Operar en multimoneda", desc: "ARS y USD nativos. Sin conversiones manuales ni errores." }
  ];

  return (
    <section id="solucion" className="py-32 bg-white relative overflow-hidden">
      {/* Video Background - Right 50% */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 hidden lg:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Trucks Stock Video-p10x4nxuA-s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-brand-primary/20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <span className="font-brand font-bold text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">La Solución</span>
          <h2 className="text-4xl md:text-6xl font-brand font-bold mb-8 tracking-tighter leading-[0.95] uppercase text-brand-primary">
            Operaciones + Finanzas + <br />
            <span className="text-brand-slate/30">Compliance</span> integrados.
          </h2>
          <p className="text-brand-slate text-xl leading-relaxed font-medium">
            Profesionalizamos y posibilitamos la escala de la gestión logística, eliminando la improvisación y devolviendo control, visibilidad y rentabilidad al negocio.
          </p>
          <p className="text-brand-primary font-bold text-lg mt-6 italic">
            No es solo software: es una forma más inteligente de operar.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 reveal">
          {capabilities.map((item, i) => (
            <div key={i} className="bg-brand-light border border-brand-border rounded-2xl p-8 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-brand-border rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <h4 className="font-brand font-bold text-sm uppercase mb-3 tracking-wide text-brand-primary">{item.title}</h4>
              <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border border border-brand-border shadow-xl reveal">
          <div className="bg-white p-10 md:p-12 text-center group hover:bg-brand-light transition-colors">
            <div className="text-4xl md:text-5xl font-brand font-bold mb-3 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">+30%</div>
            <div className="text-[10px] text-brand-accent uppercase tracking-widest font-bold">Eficiencia operativa</div>
          </div>
          <div className="bg-white p-10 md:p-12 text-center group hover:bg-brand-light transition-colors">
            <div className="text-4xl md:text-5xl font-brand font-bold mb-3 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">10-15</div>
            <div className="text-[10px] text-brand-accent uppercase tracking-widest font-bold">Horas ahorro/semana</div>
          </div>
          <div className="bg-white p-10 md:p-12 text-center group hover:bg-brand-light transition-colors">
            <div className="text-4xl md:text-5xl font-brand font-bold mb-3 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">0</div>
            <div className="text-[10px] text-brand-accent uppercase tracking-widest font-bold">Errores facturación</div>
          </div>
          <div className="bg-white p-10 md:p-12 text-center group hover:bg-brand-light transition-colors">
            <div className="text-4xl md:text-5xl font-brand font-bold mb-3 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">100%</div>
            <div className="text-[10px] text-brand-accent uppercase tracking-widest font-bold">Márgenes visibles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
