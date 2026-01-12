
import React from 'react';
import { ShieldCheck, Zap, Layers } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-brand-primary/30"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">
          <div className="reveal">
            <span className="font-brand font-bold text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-10 block">Solución de Gestión</span>
            <h2 className="text-5xl md:text-7xl font-brand font-bold mb-12 tracking-tighter leading-[0.9] uppercase text-brand-primary">
              SOFTWARE <br />
              <span className="text-brand-slate/30">CRÍTICO</span> <br />
              PARA FLOTAS.
            </h2>
            <p className="text-brand-slate text-xl mb-16 leading-relaxed max-w-lg font-medium opacity-80">
              Jaguar no es un servicio de transporte; es el motor técnico que dirige, monitorea y optimiza su infraestructura logística desde un único punto de control.
            </p>

            <div className="space-y-12">
              {[
                { icon: <ShieldCheck />, title: "Integridad de Facturación", desc: "Validación inmutable de tarifas y evidencias antes de cada emisión financiera." },
                { icon: <Zap />, title: "Despliegue Estandarizado", desc: "Metodología de implementación técnica que garantiza operatividad en 45 días." },
                { icon: <Layers />, title: "Escala sin Fricción", desc: "Arquitectura pensada para soportar desde flotas medianas hasta operaciones multinacionales." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-14 h-14 border border-brand-border rounded-2xl flex items-center justify-center shrink-0 bg-brand-light group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h4 className="font-brand font-bold text-xs uppercase mb-3 tracking-[0.2em] text-brand-primary">{item.title}</h4>
                    <p className="text-brand-slate text-[13px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-brand-border border border-brand-border shadow-2xl reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-px">
              <div className="bg-white p-16 text-center group hover:bg-brand-light transition-colors">
                <div className="text-5xl font-brand font-bold mb-4 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">100%</div>
                <div className="text-[9px] text-brand-accent uppercase tracking-[0.3em] font-black">Trazabilidad</div>
              </div>
              <div className="bg-white p-16 text-center group hover:bg-brand-light transition-colors">
                <div className="text-5xl font-brand font-bold mb-4 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">45d</div>
                <div className="text-[9px] text-brand-accent uppercase tracking-[0.3em] font-black">Go-Live</div>
              </div>
            </div>
            <div className="space-y-px">
              <div className="bg-white p-16 text-center group hover:bg-brand-light transition-colors">
                <div className="text-5xl font-brand font-bold mb-4 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">99.9%</div>
                <div className="text-[9px] text-brand-accent uppercase tracking-[0.3em] font-black">Uptime_SLA</div>
              </div>
              <div className="bg-white p-16 text-center group hover:bg-brand-light transition-colors">
                <div className="text-5xl font-brand font-bold mb-4 text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">+12%</div>
                <div className="text-[9px] text-brand-accent uppercase tracking-[0.3em] font-black">Eficacia_KPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
