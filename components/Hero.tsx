
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Cpu, MousePointer2, ShieldCheck, Activity, BarChart3, Radio } from 'lucide-react';
import { ModalType } from '../types';

interface HeroProps {
  onOpenModal: (type: ModalType) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rawMouse, setRawMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setRawMouse({ x: clientX, y: clientY });
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-48 pb-12 overflow-hidden selection:bg-brand-accent selection:text-white"
    >
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Logistics Stock Video Of Roadways AirWays Seaways Railways - Cargo-FikkQTfbaOs.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-primary/70"></div>
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-24 relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
          
          {/* LEFT: STRATEGIC COPY */}
          <div className="reveal active">
            <div className="mb-14">
              <h2 className="text-white font-brand text-5xl md:text-7xl xl:text-8xl font-bold leading-none uppercase tracking-[-0.05em] mb-4">
                JAGUAR
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-[#67E8F9]"></div>
                <p className="font-brand text-[#67E8F9] font-bold tracking-[0.3em] text-[9px] uppercase">
                  Infrastructure & Logistics Suite
                </p>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium text-white leading-[1.1] mb-16 tracking-tight max-w-xl">
              Arquitectura de control <br />
              <span className="text-[#67E8F9] font-bold italic">para operaciones de precisión.</span>
            </h1>

            <div className="flex flex-wrap items-center gap-8 mb-24">
              <button
                onClick={() => onOpenModal('demo')}
                className="bg-white text-brand-primary px-10 py-5 rounded-full font-brand font-bold text-[9px] uppercase tracking-[0.25em] hover:bg-brand-orange hover:text-white transition-all duration-500 shadow-xl hover:-translate-y-1 active:scale-95 group flex items-center gap-3"
              >
                Solicitar Acceso <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button className="flex items-center gap-4 text-white font-brand font-bold opacity-50 hover:opacity-100 transition-opacity">
                <Play className="w-3.5 h-3.5" />
                <span className="text-[8px] uppercase tracking-[0.2em]">Interface_Tour</span>
              </button>
            </div>

            {/* Micro-metrics */}
            <div className="flex items-center gap-12 border-t border-white/20 pt-10 opacity-60">
               <div className="flex flex-col gap-1">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-white/70">SEC_LATENCY</span>
                  <span className="text-sm font-brand font-bold text-white tracking-tighter">0.14ms</span>
               </div>
               <div className="w-px h-6 bg-white/30"></div>
               <div className="flex flex-col gap-1">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-white/70">UPTIME_GUARANTEE</span>
                  <span className="text-sm font-brand font-bold text-white tracking-tighter">99.99%</span>
               </div>
            </div>
          </div>

          {/* RIGHT: THE VIEWPORT */}
          <div className="relative reveal active hidden lg:block" style={{ transitionDelay: '0.2s' }}>
            {/* Floating glow behind card */}
            <div
              className="absolute -inset-4 bg-brand-accent/20 rounded-[60px] blur-3xl opacity-50"
              style={{ transform: `perspective(2000px) rotateX(${mousePos.y * -0.04}deg) rotateY(${mousePos.x * 0.04}deg)` }}
            ></div>
            <div
              className="relative bg-white/95 backdrop-blur-sm border border-white/50 p-10 rounded-[48px] shadow-[0_25px_80px_-12px_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(58,124,153,0.3)] transition-transform duration-700 ease-out"
              style={{ transform: `perspective(2000px) rotateX(${mousePos.y * -0.04}deg) rotateY(${mousePos.x * 0.04}deg)` }}
            >
              {/* Top Viewport Header */}
              <div className="flex justify-between items-center mb-14">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center border border-brand-primary/10">
                       <Activity className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                       <span className="font-mono text-[8px] font-bold text-brand-slate uppercase block opacity-30 mb-0.5">Buffer_ID: J-2940</span>
                       <span className="text-[11px] font-brand font-bold text-brand-primary uppercase tracking-widest">Main_Operations_HUD</span>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-border"></div>
                 </div>
              </div>

              {/* Central Key Metrics */}
              <div className="grid grid-cols-2 gap-12 mb-14">
                 <div className="relative group">
                    <p className="text-[8px] font-brand font-bold text-brand-accent uppercase tracking-[0.2em] mb-3">Flota_Operativa</p>
                    <div className="flex items-baseline gap-2 overflow-hidden">
                       <span className="text-6xl font-brand font-bold text-brand-primary tracking-tighter group-hover:text-brand-accent transition-colors duration-500">84</span>
                       <span className="text-sm font-brand font-bold text-brand-slate opacity-40">NODOS</span>
                    </div>
                    <div className="mt-4 h-[1px] w-full bg-brand-border relative overflow-hidden">
                       <div className="absolute top-0 left-0 h-full w-[84%] bg-brand-accent origin-left animate-bar-grow"></div>
                    </div>
                 </div>
                 <div className="relative group">
                    <p className="text-[8px] font-brand font-bold text-brand-accent uppercase tracking-[0.2em] mb-3">Margen_Neto</p>
                    <div className="flex items-baseline gap-2 overflow-hidden">
                       <span className="text-6xl font-brand font-bold text-brand-primary tracking-tighter group-hover:text-brand-accent transition-colors duration-500">12.4</span>
                       <span className="text-sm font-brand font-bold text-brand-slate opacity-40">%_USD</span>
                    </div>
                    <div className="mt-4 h-[1px] w-full bg-brand-border relative overflow-hidden">
                       <div className="absolute top-0 left-0 h-full w-[65%] bg-brand-primary origin-left animate-bar-grow" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                 </div>
              </div>

              {/* Refined Data Visualization */}
              <div className="bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 border border-brand-border/40 rounded-3xl p-6 relative overflow-hidden group">
                 {/* Ambient glow effect */}
                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                 <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                       <span className="text-[8px] font-mono font-bold text-brand-slate uppercase tracking-widest">Real_Time_Flow_Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[8px] font-mono text-brand-accent">LIVE</span>
                       <BarChart3 className="w-3.5 h-3.5 text-brand-accent" />
                    </div>
                 </div>
                 <div className="h-32 flex items-end gap-1.5 relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                       {[0, 1, 2, 3].map((_, i) => (
                         <div key={i} className="w-full h-px bg-brand-border/30"></div>
                       ))}
                    </div>
                    {/* Bars with gradient */}
                    {[35, 60, 45, 80, 55, 70, 95, 40, 65, 85, 50, 90, 75, 60, 45, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm origin-bottom animate-bar-grow relative group/bar cursor-pointer"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                      >
                        {/* Gray base */}
                        <div className="absolute inset-0 bg-brand-slate/20 rounded-t-sm transition-opacity duration-300 group-hover/bar:opacity-0"></div>
                        {/* Blue on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent to-brand-primary rounded-t-sm opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>
                        {/* Glow effect on hover */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-2 bg-brand-accent/50 blur-sm rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                 </div>
                 {/* Bottom stats */}
                 <div className="flex justify-between mt-4 pt-3 border-t border-brand-border/30">
                    <span className="text-[8px] font-mono text-brand-slate/60">00:00</span>
                    <span className="text-[8px] font-mono text-brand-accent font-bold">+12.4% vs ayer</span>
                    <span className="text-[8px] font-mono text-brand-slate/60">24:00</span>
                 </div>
              </div>

              {/* Bottom Security Badges */}
              <div className="mt-10 pt-8 border-t border-brand-border/40 flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                       <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                       <span className="font-mono text-[8px] font-bold text-brand-slate uppercase">TLS_v4</span>
                    </div>
                    <div className="w-px h-3 bg-brand-border"></div>
                    <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: '0.1s' }}>
                       <Cpu className="w-3.5 h-3.5 text-brand-slate/40" />
                       <span className="font-mono text-[8px] font-bold text-brand-slate uppercase">CORE_OPTIMIZED</span>
                    </div>
                 </div>
                 <span className="font-brand font-bold text-[8px] text-brand-primary/30 uppercase tracking-[0.2em]">© 2026 JLS-ENTERPRISE</span>
              </div>

              {/* Hover Label Refined */}
              <div 
                className="absolute -top-3 -right-3 bg-white border border-brand-border px-4 py-2 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-105"
                style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
              >
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></div>
                 <span className="font-mono text-[8px] font-bold text-brand-primary uppercase tracking-tighter">TELEMETRY_SESSION: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISCRETE PARTNER FOOTER */}
      <div className="w-full px-6 lg:px-12 xl:px-24 mt-20 opacity-40 transition-opacity hover:opacity-100 duration-1000">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-12 border-t border-white/20 pt-10">
          {['METRO_LINK', 'QUARTZ', 'AXON_CORE', 'OCEANIC', 'PRIME_GRID'].map(logo => (
            <span key={logo} className="font-brand font-bold text-white text-[8px] tracking-[0.5em] uppercase hover:text-brand-accent cursor-default transition-colors">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
