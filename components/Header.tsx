
import React from 'react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="fixed top-8 left-0 w-full z-50 px-6">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-brand-border rounded-full py-3 px-8 shadow-sm flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
            <span className="font-brand font-bold text-sm tracking-tighter leading-none text-brand-primary">JAGUAR</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['Operación', 'Auditoría', 'Seguridad'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[9px] font-brand font-bold uppercase tracking-[0.2em] text-brand-slate hover:text-brand-primary transition-all">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={onOpenModal} className="bg-brand-primary text-white text-[9px] font-brand font-bold uppercase tracking-[0.2em] py-2.5 px-6 rounded-full hover:bg-brand-orange transition-all">
            Agendar Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
