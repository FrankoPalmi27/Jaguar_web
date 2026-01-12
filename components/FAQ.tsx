
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar Jaguar?",
      answer: "La mayoría de nuestros clientes están operativos en 1-2 semanas. El sistema es intuitivo y viene pre-configurado para operaciones de transporte en LATAM. Ofrecemos migración de datos y capacitación incluida."
    },
    {
      question: "¿Puedo importar mis datos actuales?",
      answer: "Sí. Soportamos importación masiva desde Excel/CSV de clientes, vehículos, conductores y tarifarios. Nuestro equipo te ayuda con la migración sin costo adicional."
    },
    {
      question: "¿Qué pasa si tengo flota propia Y terceros?",
      answer: "Jaguar está diseñado exactamente para ese escenario. Podés gestionar vehículos propios y contratistas desde la misma plataforma, con tarifarios y seguimiento separados."
    },
    {
      question: "¿Funciona con facturación electrónica de AFIP?",
      answer: "Actualmente Jaguar gestiona la facturación interna y exporta PDFs. La integración con facturación electrónica de cada país está en nuestro roadmap."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. Usamos infraestructura cloud de nivel enterprise con encriptación en tránsito y reposo, Row Level Security, y backups automáticos. Cumplimos estándares GDPR."
    },
    {
      question: "¿Qué soporte incluyen?",
      answer: "Todos los planes incluyen soporte por WhatsApp y email en español, con tiempo de respuesta menor a 4 horas en días hábiles. Planes Enterprise incluyen soporte prioritario y SLA garantizado."
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer: "Sí, sin penalidades. Facturamos mes a mes y podés exportar todos tus datos cuando quieras."
    },
    {
      question: "¿Tienen app móvil?",
      answer: "El sistema es 100% responsive y funciona perfectamente desde celular o tablet. Una app nativa dedicada está en desarrollo."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-brand-light border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <span className="font-brand font-bold text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-brand-primary uppercase mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-brand-slate text-lg">
            Todo lo que necesitás saber antes de empezar
          </p>
        </div>

        <div className="space-y-4 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-brand-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-light/50 transition-colors"
              >
                <span className="font-brand font-bold text-brand-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-accent shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-brand-slate leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
