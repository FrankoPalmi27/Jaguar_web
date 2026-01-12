
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <svg width="36" height="28" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 45L40 10L90 10L50 50L40 70L5 45Z" fill="white" />
                <path d="M50 50L80 20L90 10L50 50Z" fill="#3A7C99" />
              </svg>
              <div className="flex flex-col">
                <span className="font-brand font-bold text-2xl tracking-tight leading-none">JAGUAR</span>
                <span className="font-brand text-brand-accent text-xs tracking-wide opacity-80">Plataforma Logística</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              SaaS Enterprise de alta precisión diseñado para el control absoluto de flotas complejas y auditoría de márgenes operativos.
            </p>
            <div className="flex items-center gap-4">
               <div className="h-px w-10 bg-white/20"></div>
               <span className="font-brand text-xs opacity-40">by Obsidian Grid</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-sans font-semibold text-sm mb-6 text-brand-accent">Sistemas</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#operativa" className="text-white/50 hover:text-brand-accent transition-colors">Gestión</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Auditoría</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Central POD</a></li>
              <li><a href="#seguridad" className="text-white/50 hover:text-brand-accent transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-sans font-semibold text-sm mb-6 text-brand-accent">Compañía</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Empresa</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Partners</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Metodología</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Legal</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-sans font-semibold text-sm mb-6 text-brand-accent">Contacto</h5>
            <div className="space-y-6">
              <p className="text-white/50 text-sm leading-relaxed">
                Av. Corrientes 1248, Piso 12<br />C1043 CABA, Argentina
              </p>
              <div className="pt-4 border-t border-white/10">
                <a href="mailto:info@obsidiangrid.com" className="font-brand text-white hover:text-brand-accent transition-colors text-sm">
                  info@obsidiangrid.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-brand text-white/30 text-xs">
            © {new Date().getFullYear()} Jaguar Logistics. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-white/30 text-xs">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online</span>
             <span>AES-256</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
