
import React, { useState } from 'react';
import { X, CheckCircle2, Lock, Terminal } from 'lucide-react';
import { ModalType } from '../types';

interface ModalProps {
  type: ModalType;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ type, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-petroleum/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-3xl blueprint-border shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="h-2 bg-brand-accent"></div>
        <button onClick={onClose} className="absolute top-10 right-10 text-brand-steel hover:text-brand-petroleum transition-colors z-20">
          <X className="w-6 h-6" />
        </button>

        <div className="p-12 md:p-24 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-10 reveal active">
              <div className="w-24 h-24 bg-brand-light border border-brand-border flex items-center justify-center mx-auto mb-10 group">
                <CheckCircle2 className="w-12 h-12 text-brand-accent" />
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-brand-petroleum mb-6 uppercase">Protocolo Iniciado.</h2>
              <p className="text-brand-steel text-lg leading-relaxed mb-12 font-medium max-w-sm mx-auto">
                Su solicitud de acceso ha sido enviada al área de ingeniería. Un especialista se contactará en &lt; 24hs.
              </p>
              <button onClick={onClose} className="w-full bg-brand-petroleum text-white py-6 text-technical font-black hover:bg-brand-steel transition-all">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-10">
                <Terminal className="w-4 h-4 text-brand-accent" />
                <span className="text-technical font-black text-brand-slate opacity-40">System_Access_Request</span>
              </div>
              
              <h2 className="text-6xl font-black tracking-tighter text-brand-petroleum mb-8 uppercase leading-none">
                {type === 'demo' ? "Agendar Demo." : "Ficha Técnica."}
              </h2>
              <p className="text-brand-steel text-lg mb-16 leading-relaxed font-medium max-w-md">
                Ingrese las credenciales corporativas para iniciar el diagnóstico operativo sin costo comercial.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <label className="text-technical font-bold text-brand-slate">Identity_FullName</label>
                    <input required className="bg-transparent border-b border-brand-border py-4 text-brand-petroleum text-lg font-bold focus:outline-none focus:border-brand-accent transition-all placeholder:text-neutral-300" placeholder="Nombre completo" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-technical font-bold text-brand-slate">Corporate_Entity_ID</label>
                    <input required className="bg-transparent border-b border-brand-border py-4 text-brand-petroleum text-lg font-bold focus:outline-none focus:border-brand-accent transition-all placeholder:text-neutral-300" placeholder="Empresa" />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-technical font-bold text-brand-slate">Auth_Endpoint_Email</label>
                  <input required type="email" className="bg-transparent border-b border-brand-border py-4 text-brand-petroleum text-lg font-bold focus:outline-none focus:border-brand-accent transition-all placeholder:text-neutral-300" placeholder="email@corporativo.com" />
                </div>

                <div className="pt-8">
                  <button type="submit" className="w-full bg-brand-petroleum text-white py-8 text-technical font-black hover:bg-brand-steel transition-all transform hover:scale-[1.01] shadow-2xl">
                    {type === 'demo' ? "Validar Acceso y Continuar" : "Descargar Documentación"}
                  </button>
                  <div className="flex items-center justify-center gap-4 mt-12 opacity-30">
                     <Lock className="w-3 h-3" />
                     <p className="text-[8px] text-brand-steel uppercase tracking-[0.3em] font-black">
                       Secured by Obsidian Grid Encryption Standard.
                     </p>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
