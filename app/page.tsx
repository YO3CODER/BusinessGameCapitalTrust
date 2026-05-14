"use client";

import React, { useState } from "react";

// --- SERVICES INSTITUTIONNELS (Source: WhatsApp Image 2026-05-14 at 16.21.08 (1).jpeg) ---
const services = [
  {
    title: "ÉPARGNE",
    desc: "Des solutions d'épargne sécurisées et adaptées à vos objectifs."
  },
  {
    title: "PRÊT",
    desc: "Financement de vos projets personnels ou professionnels avec des taux compétitifs."
  },
  {
    title: "ASSURANCE",
    desc: "Protégez ce qui compte le plus avec nos solutions d'assurance adaptées."
  },
  {
    title: "PLACEMENT",
    desc: "Faites fructifier votre argent grâce à des placements rentables et sécurisés."
  },
  {
    title: "COMPTES BANCAIRES",
    desc: "Des comptes courants flexibles et des services bancaires modernes."
  },
  {
    title: "BANQUE EN LIGNE",
    desc: "Gérez vos finances facilement, où que vous soyez et à tout moment."
  },
  {
    title: "ACCOMPAGNEMENT",
    desc: "Un accompagnement personnalisé pour vous aider à atteindre vos ambitions."
  },
  {
    title: "GESTION DE PATRIMOINE",
    desc: "Optimisez et protégez votre patrimoine avec nos experts."
  }
];

export default function CapitalTrustDark() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "2250150301931";
  const logoPath = "/logo.jpeg";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Plus+Jakarta+Sans:wght@200;300;400;600&display=swap');
        
        .font-serif-luxury { font-family: 'Cinzel', serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }

        .gold-gradient-text {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 45%, #B38728 70%, #FBF5B7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-gold {
          background: transparent;
          color: #d4af37;
          border: 1px solid #d4af37;
          padding: 1rem 2.5rem;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 9px;
        }

        .btn-gold:hover {
          background: #d4af37;
          color: #05070a;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
        }

        .card-dark {
          background: #0a0e14;
          border: 1px solid #1a202c;
          transition: all 0.5s ease;
        }

        .card-dark:hover {
          border-color: #d4af37;
          background: #0d121a;
        }

        .nav-link {
          font-size: 9px;
          letter-spacing: 0.3em;
          transition: color 0.3s ease;
          color: #94a3b8;
        }

        .nav-link:hover { color: #d4af37; }
      `}</style>

      {/* --- OVERLAY & MOBILE MENU --- */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[100] transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#05070a] border-l border-white/5 z-[110] transition-transform duration-500 p-12 flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-20 text-gold-gradient-text">✕</button>
        <nav className="flex flex-col gap-10 font-serif-luxury">
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-widest">ACCUEIL</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-widest">SERVICES</a>
          <button onClick={openWhatsApp} className="btn-gold mt-10">WHATSAPP</button>
        </nav>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 h-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src={logoPath} alt="Capital Trust Logo" className="h-16 w-auto" />
            <div className="hidden lg:block border-l border-white/10 pl-6">
              <p className="font-serif-luxury text-sm tracking-[0.2em] leading-none mb-1">CAPITAL TRUST</p>
              <p className="text-[7px] uppercase tracking-[0.4em] text-slate-500">Votre confiance, notre engagement</p>
            </div>
          </div>

          <div className="hidden md:flex gap-12 items-center font-serif-luxury">
            <a href="#accueil" className="nav-link">ACCUEIL</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <button onClick={openWhatsApp} className="btn-gold">CONTACT DIRECT</button>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-gold-gradient-text">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 9h16M4 15h16" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-48 pb-32 px-6 min-h-screen flex items-center">
        {/* Background Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <span className="inline-block h-px w-12 bg-gold/50 mb-8 align-middle"></span>
            <span className="font-serif-luxury text-gold tracking-[0.5em] text-[10px] ml-4 uppercase">Partenaire Financier de Confiance</span>
            
            <h1 className="text-5xl md:text-8xl font-serif-luxury leading-[1.1] mb-12 mt-6 tracking-tight">
              Bâtissons <br />
              <span className="gold-gradient-text italic">l'avenir.</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-16 max-w-md font-light leading-relaxed">
              Des solutions sur mesure pour réaliser vos projets et sécuriser votre patrimoine avec excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
              <button onClick={openWhatsApp} className="btn-gold px-14 py-5">OUVRIR UN COMPTE</button>
              <a href="#services" className="font-serif-luxury text-[9px] tracking-[0.4em] text-slate-500 hover:text-gold transition-colors">
                DÉCOUVRIR NOS OFFRES —
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Finance de Luxe" 
                className="w-full h-[700px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (Source Image 1) --- */}
      <section id="services" className="py-40 px-6 bg-[#030508]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h3 className="font-serif-luxury text-gold tracking-[0.7em] text-[10px] uppercase mb-6">Expertise & Patrimoine</h3>
            <h2 className="text-4xl md:text-5xl font-serif-luxury uppercase tracking-widest gold-gradient-text">Nos Solutions Bancaires</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {services.map((s, i) => (
              <div key={i} className="bg-[#05070a] p-14 flex flex-col group card-dark">
                <div className="w-1 h-12 bg-gold/30 mb-10 group-hover:bg-gold transition-colors duration-500"></div>
                <h4 className="font-serif-luxury text-xs mb-8 tracking-[0.2em] group-hover:text-gold transition-colors uppercase leading-loose">{s.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-light mb-10 flex-1">
                  {s.desc}
                </p>
                <button onClick={openWhatsApp} className="text-[8px] font-bold tracking-[0.3em] uppercase text-slate-600 group-hover:text-gold transition-colors text-left">
                  AUDIT CONSEIL 
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (Source Image 1 & 2) --- */}
      <footer className="bg-black pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-5">
              <img src={logoPath} alt="Capital Trust" className="h-24 mb-12" />
              <p className="font-serif-luxury gold-gradient-text tracking-[0.3em] text-[11px] mb-8 uppercase">Capital Trust Bank</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
                La transparence, la sécurité et la proximité au service de votre réussite financière.
              </p>
            </div>

            <div className="md:col-span-3">
              <h5 className="font-serif-luxury text-gold uppercase text-[10px] tracking-[0.5em] mb-12">ASSISTANCE</h5>
              <div className="space-y-6 text-[11px] text-slate-500 tracking-[0.2em] font-light">
                <p className="hover:text-white transition-colors">+225 01 50 30 19 31</p>
                <p className="hover:text-white transition-colors">+225 07 67 01 38 15</p>
                <p className="hover:text-white transition-colors lowercase">contact@capitaltrust.ci</p>
              </div>
            </div>

            <div className="md:col-span-4">
              <h5 className="font-serif-luxury text-gold uppercase text-[10px] tracking-[0.5em] mb-12">RÉSIDENCE</h5>
              <div className="space-y-6 text-[11px] text-slate-500 tracking-[0.2em] font-light">
                <p>Abidjan, Côte d'Ivoire</p>
                <p>Quartier Bonoumin</p>
                <div className="pt-8 border-t border-white/5">
                  <p className="font-serif-luxury italic text-[11px] text-slate-600 normal-case tracking-normal">Votre succès est notre priorité</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[8px] uppercase tracking-[0.5em] text-slate-700">© 2026 CAPITAL TRUST — BÂTISSONS ENSEMBLE VOTRE AVENIR</p>
            <div className="flex gap-12 text-[8px] uppercase tracking-[0.4em] font-bold text-slate-600">
              <span className="hover:text-gold transition-colors cursor-pointer">LÉGAL</span>
              <span className="hover:text-gold transition-colors cursor-pointer">PRIVACY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}