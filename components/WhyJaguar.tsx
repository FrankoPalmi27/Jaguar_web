
import React from 'react';
import { Target, Link, MapPin, Cpu, DollarSign, Users, Cloud } from 'lucide-react';

const WhyJaguar: React.FC = () => {
  const differentiators = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Diseñado por expertos del rubro",
      desc: "No somos una software factory que 'también hace logística'. Somos profesionales de logística que desarrollamos el sistema que hubiéramos querido tener."
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Plataforma integral",
      desc: "Operaciones, finanzas y compliance integrados. No son módulos sueltos que hay que 'conectar'. Un flujo único de trabajo."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Tracking en tiempo real",
      desc: "Sabés dónde está cada viaje, cada vehículo, cada documento. Sin llamar. Sin preguntar. Sin buscar en planillas."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "OCR con inteligencia artificial",
      desc: "Remitos, PODs, facturas. El sistema lee, extrae y organiza automáticamente."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Control granular de roles",
      desc: "Cada usuario ve y hace lo que corresponde a su rol. Auditoría completa de cada acción."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "100% Cloud",
      desc: "Sin instalaciones. Sin servidores locales. Sin IT interno. Accedé desde cualquier lugar, cualquier dispositivo."
    }
  ];

  return (
    <section id="diferenciadores" className="py-32 bg-white border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 reveal">
          <span className="font-brand font-bold text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">Diferenciadores</span>
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-brand-primary uppercase mb-6">
            ¿Por qué <span className="text-brand-accent">Jaguar</span>?
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto">
            No es un ERP adaptado. Es un sistema pensado desde el día uno para logística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-brand-border hover:border-brand-accent hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 bg-brand-light border border-brand-border rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-brand font-bold text-base uppercase tracking-wide text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center reveal">
          <p className="text-brand-primary font-bold text-xl italic max-w-3xl mx-auto">
            "No es solo software. Es una forma más inteligente de operar la logística."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJaguar;
