
import React from 'react';

const steps = [
  {
    n: "01",
    title: "Discovery & Setup",
    desc: "Relevamos tus flujos operativos actuales y configuramos los parámetros base del sistema."
  },
  {
    n: "02",
    title: "Migración Mínima",
    desc: "Carga de catálogos críticos (clientes, unidades, rutas, tarifas) para asegurar continuidad."
  },
  {
    n: "03",
    title: "Capacitación",
    desc: "Workshops prácticos dirigidos a operadores, administradores y gerencia financiera."
  },
  {
    n: "04",
    title: "Go-Live Asistido",
    desc: "Salida a producción con acompañamiento intensivo para resolver dudas en tiempo real."
  }
];

const Implementation: React.FC = () => {
  return (
    <section id="implementacion" className="py-24 bg-white border-b border-navy-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Metodología de Implementación</h2>
          <p className="text-navy-500 max-w-xl mx-auto italic">Acompañamos tu transición digital para minimizar la resistencia interna.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-black text-navy-50 mb-4">{step.n}</div>
              <div className="relative -top-10 pl-2 border-l-2 border-navy-900">
                <h4 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h4>
                <p className="text-sm text-navy-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-navy-50 rounded border border-navy-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h5 className="font-bold text-navy-900 text-lg">¿Listo para modernizar tu operación?</h5>
              <p className="text-navy-600 text-sm">Nuestro equipo técnico está listo para analizar tu caso particular.</p>
           </div>
           <button className="bg-navy-900 text-white px-8 py-3 rounded-sm font-bold hover:bg-navy-800 transition-colors">
              Hablar con un consultor
           </button>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
