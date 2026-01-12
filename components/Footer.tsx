
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <svg width="36" height="28" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 45L40 10L90 10L50 50L40 70L5 45Z" fill="white" />
                <path d="M50 50L80 20L90 10L50 50Z" fill="#3A7C99" />
              </svg>
              <div className="flex flex-col">
                <span className="font-brand font-bold text-2xl tracking-tight leading-none">JAGUAR</span>
                <span className="font-brand text-brand-accent text-xs tracking-wide opacity-80">Logistic Suite</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Sistema de gestión integral para empresas de logística, forwarders y transporte.
            </p>
            <p className="text-white/40 text-xs italic">
              "Creado desde la operación. Diseñado para escalar."
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-brand font-bold text-sm mb-5 text-brand-accent uppercase tracking-wider">Producto</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#operativa" className="text-white/50 hover:text-brand-accent transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Precios</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Casos de uso</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-brand font-bold text-sm mb-5 text-brand-accent uppercase tracking-wider">Empresa</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Quiénes somos</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Contacto</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-brand font-bold text-sm mb-5 text-brand-accent uppercase tracking-wider">Contacto</h5>
            <div className="space-y-4">
              <a href="mailto:hola@jaguarlogistic.com" className="block text-white hover:text-brand-accent transition-colors text-sm">
                hola@jaguarlogistic.com
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-brand-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/30 text-xs">
            © {new Date().getFullYear()} Jaguar. Todos los derechos reservados.
          </div>
          <div className="text-white/30 text-xs">
            Desarrollado en Argentina por profesionales de logística.
          </div>
          <div className="flex items-center gap-4 text-white/30 text-xs">
            <a href="#" className="hover:text-white/50 transition-colors">Términos</a>
            <a href="#" className="hover:text-white/50 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
