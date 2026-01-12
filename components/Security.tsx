
import React from 'react';
import { Database, Lock, Users, Shield, Terminal } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="seguridad" className="py-48 bg-brand-light border-y border-brand-border relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-1/2 reveal">
            <div className="inline-flex items-center gap-4 px-5 py-2 bg-white border border-brand-border rounded-full mb-12">
              <Lock className="w-3.5 h-3.5 text-brand-accent" />
              <span className="font-brand font-bold text-[9px] text-brand-primary tracking-[0.3em] uppercase">Security_Protocol: AES-256</span>
            </div>
            
            <h2 className="text-6xl md:text-[88px] font-brand font-bold text-brand-primary uppercase mb-16 leading-[0.85] tracking-tighter">
              AUDITORÍA <br /> <span className="text-brand-slate/20">INMUTABLE.</span>
            </h2>
            
            <p className="text-brand-slate text-xl mb-20 leading-relaxed max-w-xl font-medium">
              Entendemos que la información logística es un activo estratégico. Jaguar está construido sobre pilares de redundancia bancaria y control de acceso granular.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { icon: <Database />, title: "Redundancia Zonal", desc: "Respaldos automatizados en múltiples zonas geográficas para asegurar continuidad absoluta." },
                { icon: <Users />, title: "Control de Roles", desc: "Acceso granular basado en perfiles auditables (Operador, Auditor, Admin, Finanzas)." },
                { icon: <Shield />, title: "Logs Inmutables", desc: "Registro histórico inalterable de cada acción realizada en el sistema con marca de tiempo." },
                { icon: <Terminal />, title: "Cifrado Militar", desc: "Protección TLS en tránsito y cifrado de alta seguridad para datos en reposo." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-14 h-14 border border-brand-border bg-white rounded-2xl flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h4 className="font-brand font-bold text-[10px] text-brand-primary uppercase mb-3 tracking-[0.2em]">{item.title}</h4>
                    <p className="text-[13px] text-brand-slate leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal flex justify-center" style={{ transitionDelay: '0.2s' }}>
             <div className="w-full aspect-square max-w-lg bg-white rounded-[48px] shadow-2xl border border-brand-border flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="w-2/3 aspect-square border-2 border-brand-border rounded-[40px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700">
                   <div className="w-1/2 aspect-square bg-brand-primary rounded-3xl flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(15,47,74,0.5)]">
                      <Lock className="w-16 h-16 text-brand-accent" />
                   </div>
                   {/* Technical tags in Mono */}
                   <div className="absolute top-0 left-0 bg-white border border-brand-border px-3 py-1.5 font-mono font-bold text-[8px] -translate-x-1/2 -translate-y-1/2 text-brand-primary">LAYER_01_SEC</div>
                   <div className="absolute bottom-0 right-0 bg-white border border-brand-border px-3 py-1.5 font-mono font-bold text-[8px] translate-x-1/2 translate-y-1/2 text-brand-primary">ENCRYPT_V4</div>
                </div>
                {/* Visual grid overlay */}
                <div className="absolute inset-0 p-12 opacity-[0.03] pointer-events-none">
                  <div className="w-full h-full border border-brand-primary border-dashed"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
