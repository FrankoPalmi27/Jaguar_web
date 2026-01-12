
import React from 'react';
import { Layers, Eye, FileText, TrendingDown } from 'lucide-react';

const Pains: React.FC = () => {
  const issues = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Operaciones Fragmentadas",
      desc: "Excel, WhatsApp, mails, sistemas aislados. Cada área con su propio 'sistema' que no habla con el otro."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Falta de Visibilidad",
      desc: "No sabés en tiempo real el estado de flota, viajes o conductores. Te enterás de los problemas cuando ya explotaron."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Facturación Manual",
      desc: "Errores, demoras, conflictos con clientes y proveedores. Horas perdidas cruzando datos entre planillas."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Rentabilidad Invisible",
      desc: "¿Cuánto ganás realmente por viaje, ruta o cliente? Sin datos claros, las decisiones se toman a ciegas."
    }
  ];

  return (
    <section className="pt-20 pb-32 bg-white relative border-y border-brand-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-20 reveal">
          <div className="max-w-3xl">
            <span className="font-brand font-bold text-brand-accent text-[10px] tracking-[0.4em] uppercase mb-10 block">El problema que conocemos bien</span>
            <h2 className="text-5xl md:text-7xl font-brand text-brand-primary uppercase leading-[0.9] tracking-tighter">
              Las empresas de <br /> logística hoy <br /> <span className="text-brand-slate/20">enfrentan:</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-brand-primary font-bold text-xl mb-8 border-l-4 border-brand-accent pl-8 leading-snug">
              Conocemos estos problemas porque los vivimos. Jaguar nació para resolverlos.
            </p>
            <div className="h-px w-full bg-brand-border"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border shadow-sm reveal">
          {issues.map((issue, i) => (
            <div key={i} className="bg-white p-10 md:p-14 hover:bg-brand-light transition-all group relative overflow-hidden">
              <div className="text-brand-primary mb-8 group-hover:text-brand-accent transition-colors">
                {issue.icon}
              </div>
              <h3 className="text-lg font-brand font-bold text-brand-primary mb-6 uppercase tracking-tight leading-tight group-hover:text-brand-accent transition-colors">{issue.title}</h3>
              <p className="text-sm text-brand-slate leading-relaxed font-medium">{issue.desc}</p>

              <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-border/10 translate-x-8 translate-y-8 rotate-45 group-hover:bg-brand-accent/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Result Statement */}
        <div className="mt-16 p-8 bg-brand-light border border-brand-border rounded-2xl text-center reveal">
          <p className="text-brand-primary font-bold text-lg">
            Resultado: <span className="text-brand-slate font-medium">Márgenes erosionados, equipos sobrecargados y decisiones tomadas a ciegas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pains;
