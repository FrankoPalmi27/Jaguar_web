
import React from 'react';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { ModalType } from '../types';

interface FinalCTAProps {
  onOpenModal: (type: ModalType) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-32 bg-brand-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-brand font-bold text-white uppercase mb-8 leading-tight">
            Dejá de improvisar. <br />
            <span className="text-brand-accent">Empezá a escalar.</span>
          </h2>

          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Jaguar te devuelve el control de tu operación. Hablemos de cómo puede funcionar para tu empresa.
          </p>

          {/* CTA Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 md:p-12 mb-12">
            <button
              onClick={() => onOpenModal('demo')}
              className="bg-white text-brand-primary px-12 py-5 rounded-full font-brand font-bold text-sm uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 group inline-flex items-center gap-3 mb-8"
            >
              Solicitar Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm">Conversación de 30 minutos</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm">Analizamos tu operación actual</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm">Demo personalizada a tu caso</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm">Sin compromiso</span>
              </div>
            </div>
          </div>

          {/* Alternative contact */}
          <p className="text-white/60 text-sm mb-6">
            ¿Preferís conocer más antes de hablar? Escribinos:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:sales@obsidiangrid.com.ar"
              className="flex items-center gap-2 text-white/80 hover:text-brand-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">sales@obsidiangrid.com.ar</span>
            </a>
            <a
              href="https://wa.me/5493416113261"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-brand-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">+54 9 3416113261</span>
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm italic">
            "No es solo software. Es una forma más inteligente de operar."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
