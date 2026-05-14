"use client";

import React, { useState, useEffect } from "react";

// --- DONNÉES ---
const stats = [
  { label: "Actifs sous gestion", value: "€2.4B+" },
  { label: "Clients Privés", value: "12,000+" },
  { label: "Pays de présence", value: "14" },
  { label: "Années d'excellence", value: "25" }
];

const expertises = [
  { 
    title: "Gestion de Fortune", 
    desc: "Une approche holistique pour la préservation et la croissance de votre capital intergénérationnel."
  },
  { 
    title: "Corporate Banking", 
    desc: "Solutions de financement structuré et conseils en fusion-acquisition pour les grandes entreprises."
  },
  { 
    title: "Lending Solutions", 
    desc: "Lignes de crédit sur mesure, Lombard et financements immobiliers internationaux."
  },
  { 
    title: "Asset Management", 
    desc: "Accès exclusif à des fonds privés et des opportunités d'investissement non cotées."
  }
];

export default function CapitalTrustPremium() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "2250150301931";
  const logoPath = "/logo.jpeg";
  const openWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}`, "_blank");

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');
        
        :root { --gold: #b8860b; --gold-light: #d4af37; --dark: #121212; }
        .font-serif-luxury { font-family: 'Cinzel', serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; margin: 0; }
        
        .gold-gradient {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 45%, #AA8232 70%, #FFD700 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .nav-scrolled { background: rgba(255,255,255,0.98) !important; box-shadow: 0 10px 30px rgba(0,0,0,0.05); height: 75px !important; }

        .btn-luxury {
          position: relative; padding: 1.2rem 2.5rem; background: var(--dark); color: white;
          font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px;
          border: none; cursor: pointer; transition: 0.4s; overflow: hidden;
        }
        .btn-luxury:hover { background: var(--gold); transform: translateY(-3px); }

        .card-expertise {
          padding: 50px; background: #fff; border: 1px solid #eee;
          transition: all 0.5s ease; position: relative;
        }
        .card-expertise:hover { 
          border-color: var(--gold); transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .market-ticker { display: flex; white-space: nowrap; animation: marquee 35s linear infinite; }
      `}</style>

      {/* --- MARCHÉ FINANCIER --- */}
      <div style={{ background: '#121212', color: '#fff', padding: '10px 0', fontSize: '10px', letterSpacing: '1px', overflow: 'hidden' }}>
        <div className="market-ticker">
          {[1,2,3].map(i => (
            <span key={i} style={{ marginRight: '60px' }}>
              CAC 40: <span style={{color:'#00ff00'}}>+1.24%</span> &nbsp;&nbsp;|&nbsp;&nbsp; 
              OR (SPOT): <span style={{color:'#d4af37'}}>$2,345.10</span> &nbsp;&nbsp;|&nbsp;&nbsp; 
              EUR/USD: 1.0842 &nbsp;&nbsp;|&nbsp;&nbsp; 
              S&P 500: <span style={{color:'#00ff00'}}>+0.45%</span> &nbsp;&nbsp;|&nbsp;&nbsp;
              CAPITAL TRUST INDEX: <span style={{color:'#d4af37'}}>STABLE</span>
            </span>
          ))}
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav style={{ 
        position: "fixed", top: 35, width: "100%", zIndex: 100, height: 95, 
        display: "flex", alignItems: "center", justifyContent: "space-between", 
        padding: "0 5%", transition: "0.4s ease", background: "transparent" 
      }} className={scrolled ? "nav-scrolled" : ""}>
        <img src={logoPath} alt="Capital Trust Logo" style={{ height: 55 }} />
        
        <div className="hidden md:flex" style={{ gap: 40, alignItems: "center" }}>
          <a href="#about" className="font-serif-luxury" style={{ fontSize: 10, textDecoration: "none", color: "#1a1a1a", fontWeight: 700, letterSpacing: '1px' }}>L'INSTITUTION</a>
          <a href="#expertise" className="font-serif-luxury" style={{ fontSize: 10, textDecoration: "none", color: "#1a1a1a", fontWeight: 700, letterSpacing: '1px' }}>EXPERTISES</a>
          <a href="#contact" className="font-serif-luxury" style={{ fontSize: 10, textDecoration: "none", color: "#1a1a1a", fontWeight: 700, letterSpacing: '1px' }}>MONDE</a>
          <button className="btn-luxury" onClick={openWhatsApp}>ACCÈS PRIVÉ</button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
           <div style={{ width: 25, height: 2, background: '#1a1a1a', marginBottom: 5 }}></div>
           <div style={{ width: 25, height: 2, background: '#1a1a1a', marginBottom: 5 }}></div>
           <div style={{ width: 25, height: 2, background: '#1a1a1a' }}></div>
        </button>
      </nav>

      {/* --- SIDEBAR MOBILE --- */}
      <div style={{
          position: "fixed", top: 0, right: isMobileMenuOpen ? 0 : "-100%",
          width: "320px", height: "100vh", background: "#fff", zIndex: 200,
          transition: "0.5s cubic-bezier(0.16, 1, 0.3, 1)", display: "flex", flexDirection: "column",
          padding: "40px", boxShadow: "-15px 0 40px rgba(0,0,0,0.1)"
      }}>
        <button onClick={() => setMobileMenuOpen(false)} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--gold)' }}>✕</button>
        <div style={{ marginTop: '60px', display: 'flex', flexDirection: "column", gap: '35px' }}>
          <img src={logoPath} alt="Logo" style={{ height: 40, width: 'fit-content', marginBottom: '20px' }} />
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-serif-luxury" style={{ fontSize: '14px', textDecoration: 'none', color: '#1a1a1a', letterSpacing: '2px', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px' }}>L'INSTITUTION</a>
          <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="font-serif-luxury" style={{ fontSize: '14px', textDecoration: 'none', color: '#1a1a1a', letterSpacing: '2px', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px' }}>EXPERTISES</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-serif-luxury" style={{ fontSize: '14px', textDecoration: 'none', color: '#1a1a1a', letterSpacing: '2px', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px' }}>PRÉSENCE MONDIALE</a>
          <button className="btn-luxury" style={{ marginTop: '20px' }} onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}>ACCÈS PRIVÉ</button>
        </div>
      </div>
      {isMobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)', zIndex: 199 }} />}

      {/* --- HERO SECTION --- */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: 850 }}>
            <h6 className="font-serif-luxury" style={{ color: 'var(--gold)', letterSpacing: '6px', marginBottom: '25px', fontSize: '11px' }}>DEPUIS 1998</h6>
            <h1 className="font-serif-luxury" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1, marginBottom: '35px', color: '#000' }}>
              La préservation <br />
              <span className="gold-gradient" style={{ fontStyle: 'italic' }}>du capital.</span>
            </h1>
            <p style={{ fontSize: '20px', color: '#555', lineHeight: 1.7, marginBottom: '50px', fontWeight: 300, maxWidth: '650px' }}>
              Capital Trust Bank accompagne les patrimoines les plus exigeants à travers des solutions de gestion privée fondées sur la discrétion et la performance.
            </p>
            <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
              <button className="btn-luxury" onClick={openWhatsApp}>NOUS CONTACTER</button>
              <button style={{ background: 'none', border: 'none', borderBottom: '1px solid #1a1a1a', padding: '10px 0', cursor: 'pointer', fontFamily: 'Cinzel', fontSize: '10px', letterSpacing: '2px', fontWeight: 700 }}>DÉCOUVRIR NOS FONDS</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHIFFRES CLÉS --- */}
      <section style={{ padding: '100px 5%', background: '#121212', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <h2 className="font-serif-luxury" style={{ fontSize: '42px', color: 'var(--gold-light)', marginBottom: '10px', fontWeight: 400 }}>{s.value}</h2>
              <p style={{ fontSize: '10px', letterSpacing: '3px', color: '#888', fontWeight: 600 }}>{s.label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- L'INSTITUTION --- */}
      <section id="about" style={{ padding: '150px 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Bureau" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '-25px', right: '-25px', background: 'var(--gold)', color: 'white', padding: '40px', maxWidth: '280px' }}>
              <p className="font-serif-luxury" style={{ fontSize: '16px', lineHeight: 1.5 }}>L'intégrité et la rigueur sont les fondements de notre maison.</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif-luxury" style={{ fontSize: '2.5rem', marginBottom: '35px', lineHeight: 1.2 }}>Une vision ancrée dans la tradition.</h2>
            <p style={{ lineHeight: 2, color: '#555', marginBottom: '35px', fontSize: '16px' }}>
              Fondée avec une vocation d'excellence, Capital Trust Bank combine le savoir-faire des grandes maisons internationales avec une connaissance approfondie des marchés émergents. Notre modèle repose sur une relation de confiance exclusive et durable.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px' }}>
                <h5 className="font-serif-luxury" style={{ fontSize: '12px', marginBottom: '10px' }}>DISCRÉTION</h5>
                <p style={{ fontSize: '13px', color: '#777' }}>Respect total de la confidentialité.</p>
              </div>
              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px' }}>
                <h5 className="font-serif-luxury" style={{ fontSize: '12px', marginBottom: '10px' }}>SUR-MESURE</h5>
                <p style={{ fontSize: '13px', color: '#777' }}>Stratégies uniques par client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISES --- */}
      <section id="expertise" style={{ padding: '120px 5%', background: '#fcfcfc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
            <h6 className="font-serif-luxury" style={{ color: 'var(--gold)', letterSpacing: '5px', fontSize: '11px', marginBottom: '15px' }}>NOS DOMAINES</h6>
            <h2 className="font-serif-luxury" style={{ fontSize: '3rem', color: '#1a1a1a' }}>Expertises <span className="gold-gradient">Sélectives</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {expertises.map((ex, i) => (
              <div key={i} className="card-expertise">
                <div style={{ width: '30px', height: '2px', background: 'var(--gold)', marginBottom: '30px' }}></div>
                <h4 className="font-serif-luxury" style={{ fontSize: '17px', marginBottom: '20px', letterSpacing: '1px' }}>{ex.title}</h4>
                <p style={{ color: '#666', lineHeight: 1.8, fontSize: '14px', fontWeight: 300 }}>{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ background: "#0a0a0a", color: "#fff", padding: "100px 5% 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 60, marginBottom: 80 }}>
            <div>
              <img src={logoPath} alt="Logo" style={{ height: 45, marginBottom: '30px' }} />
              <p style={{ color: '#555', lineHeight: 1.8, fontSize: '13px' }}>
                Siège Social : Boulevard Lagunaire, Cocody Bonoumin, Abidjan. <br />
                Agréé par la Commission Bancaire de l'UMOA.
              </p>
            </div>
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: '11px', letterSpacing: '2px', marginBottom: '30px', color: 'var(--gold)' }}>NAVIGATION</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#555', fontSize: '13px' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Gouvernance</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Rapports Annuels</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Confidentialité</a>
              </div>
            </div>
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: '11px', letterSpacing: '2px', marginBottom: '30px', color: 'var(--gold)' }}>CONTACT</h5>
              <p style={{ color: '#555', fontSize: '13px', lineHeight: 2 }}>
                T: +225 01 50 30 19 31 <br />
                E: contact@capitaltrust.ci <br />
                Du Lundi au Vendredi (9h - 18h)
              </p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "40px", textAlign: "center", fontSize: "10px", color: "#333", letterSpacing: '2px' }}>
            © 2026 CAPITAL TRUST PRIVATE BANKING. TOUS DROITS RÉSERVÉS.
          </div>
        </div>
      </footer>
    </div>
  );
}