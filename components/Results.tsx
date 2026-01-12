
import React from 'react';

const Results: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Responsable de Facturación",
      company: "Transportes del Sur (50 vehículos)",
      content: "Reducimos 4 horas diarias de trabajo administrativo. Antes facturar nos llevaba medio día, ahora son 10 minutos.",
      results: ["-70% tiempo facturación", "+15% mejora cobranzas", "0 errores en 6 meses"],
      color: "bg-white"
    },
    {
      name: "Carlos Méndez",
      role: "Gerente General",
      company: "Logística Express (30 terceros)",
      content: "Por primera vez sabemos exactamente cuánto ganamos por ruta. Descubrimos que 3 clientes nos daban pérdida y renegociamos las tarifas.",
      results: ["+23% margen operativo", "Control de 30 transportistas", "Rutas no rentables identificadas"],
      color: "bg-brand-primary text-white"
    },
    {
      name: "Roberto Fernández",
      role: "Director de Operaciones",
      company: "Freight Solutions Argentina",
      content: "Antes teníamos 50 chats de WhatsApp, ahora todo está en un solo lugar con trazabilidad completa.",
      results: ["100% trazabilidad", "Multi-moneda nativo", "Documentación centralizada"],
      color: "bg-white"
    }
  ];

  return (
    <section className="py-32 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div className="reveal">
            <span className="font-brand font-bold text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">Testimonios</span>
            <h2 className="text-4xl md:text-5xl font-brand font-bold text-brand-primary leading-tight uppercase">
              Lo que dicen <br />
              <span className="text-brand-accent italic">nuestros clientes</span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="text-brand-slate text-lg leading-relaxed max-w-md">
              Empresas de logística que ya transformaron su operación con Jaguar comparten sus resultados concretos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {testimonials.map((t, i) => (
            <div key={i} className={`${t.color} p-8 rounded-2xl border border-brand-border flex flex-col hover:shadow-xl transition-all duration-500`}>
              <p className="text-base font-medium leading-relaxed italic mb-6">"{t.content}"</p>

              {/* Results badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {t.results.map((result, j) => (
                  <span key={j} className={`text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full ${t.color === 'bg-brand-primary text-white' ? 'bg-white/20' : 'bg-brand-accent/10 text-brand-accent'}`}>
                    {result}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-current/10">
                <h4 className="font-bold text-sm">{t.name}</h4>
                <p className="text-[11px] opacity-70 font-medium">{t.role}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mt-1">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
