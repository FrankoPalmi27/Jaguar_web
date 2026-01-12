
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pains from './components/Pains';
import Solution from './components/Solution';
import Modules from './components/Modules';
import WhyJaguar from './components/WhyJaguar';
import Results from './components/Results';
import Security from './components/Security';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ModalType } from './types';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-accent selection:text-white">
      <Header onOpenModal={() => setActiveModal('demo')} />
      
      <main>
        <Hero onOpenModal={setActiveModal} />
        <Pains />
        <Solution />
        <Modules id="modulos" />
        <WhyJaguar />
        <Results />
        <Security />
        <FAQ />
        <FinalCTA onOpenModal={setActiveModal} />
      </main>

      <Footer />

      {activeModal && (
        <Modal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default App;
