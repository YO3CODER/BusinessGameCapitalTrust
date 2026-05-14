"use client";

import React, { useState } from "react";

// --- DONNÉES INSTITUTIONNELLES ---
const services = [
  { title: "ÉPARGNE", desc: "Des solutions d'épargne sécurisées et adaptées à vos objectifs pour bâtir votre futur." },
  { title: "PRÊT", desc: "Financement de vos projets immobiliers ou professionnels avec des taux préférentiels." },
  { title: "ASSURANCE", desc: "Une protection complète pour votre famille, vos biens et votre activité professionnelle." },
  { title: "PLACEMENT", desc: "Expertise en gestion d'actifs pour maximiser vos rendements en toute sérénité." },
  { title: "COMPTES BANCAIRES", desc: "Une gestion simplifiée avec nos cartes Premium et nos services de conciergerie." },
  { title: "BANQUE EN LIGNE", desc: "Accès sécurisé 24h/7j à vos comptes via notre interface digitale haute performance." },
  { title: "ACCOMPAGNEMENT", desc: "Un conseiller dédié pour une stratégie financière personnalisée et efficace." },
  { title: "GESTION DE PATRIMOINE", desc: "Ingénierie patrimoniale pour la transmission et l'optimisation fiscale." }
];

const values = [
  { title: "SÉCURITÉ", desc: "Protocoles de cryptage de niveau bancaire international pour vos actifs." },
  { title: "PROXIMITÉ", desc: "Une présence forte à Abidjan et un conseiller qui connaît votre dossier." },
  { title: "INNOVATION", desc: "Des outils digitaux de pointe pour une banque sans frontières." }
];

export default function CapitalTrustFinal() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "2250150301931";
  const logoPath = "/logo.jpeg";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');
        .font-serif-luxury { font-family: 'Cinzel', serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; margin: 0; background-color: #fff; }
        .gold-gradient-text {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 45%, #AA8232 70%, #FFD700 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .btn-gold {
          background: transparent; color: #b8860b; border: 1px solid #b8860b;
          padding: 1rem 2.2rem; font-family: 'Cinzel', serif; font-weight: 600;
          transition: all 0.4s ease; cursor: pointer; text-transform: uppercase;
          letter-spacing: 2px; font-size: 10px; text-decoration: none;
        }
        .btn-gold:hover { background: #b8860b; color: #fff; box-shadow: 0 10px 20px rgba(184, 134, 11, 0.15); }
        .footer-link { color: #4b5563; text-decoration: none; transition: color 0.3s; font-size: 13px; }
        .footer-link:hover { color: #b8860b; }
        @media (max-width: 1024px) { 
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; } 
          .hero-content { align-items: center !important; } 
          .hero-image { display: none; } 
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, height: 90, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <img src={logoPath} alt="Logo" style={{ height: 50 }} />
        
        {/* Menu Desktop */}
        <div className="hidden md:flex" style={{ gap: 40, alignItems: "center" }}>
          <a href="#services" className="font-serif-luxury" style={{ fontSize: 10, color: "#1a1a1a", textDecoration: "none", letterSpacing: "0.2em", fontWeight: 600 }}>EXPERTISES</a>
          <a href="#valeurs" className="font-serif-luxury" style={{ fontSize: 10, color: "#1a1a1a", textDecoration: "none", letterSpacing: "0.2em", fontWeight: 600 }}>VALEURS</a>
          <button className="btn-gold" onClick={openWhatsApp}>Espace Client</button>
        </div>

        {/* Bouton Burger Mobile */}
        <button 
          className="flex md:hidden" 
          onClick={() => setMobileMenuOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "6px", padding: "10px", zIndex: 60 }}
        >
          <span style={{ width: "25px", height: "2px", background: "#b8860b", display: "block" }}></span>
          <span style={{ width: "25px", height: "2px", background: "#b8860b", display: "block" }}></span>
          <span style={{ width: "25px", height: "2px", background: "#b8860b", display: "block" }}></span>
        </button>
      </nav>

      {/* --- SIDEBAR MOBILE --- */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          right: isMobileMenuOpen ? 0 : "-100%",
          width: "300px",
          height: "100vh",
          background: "#fff",
          zIndex: 100,
          transition: "right 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: isMobileMenuOpen ? "-10px 0 30px rgba(0,0,0,0.05)" : "none",
          borderLeft: "1px solid rgba(184,134,11,0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "40px 30px",
          boxSizing: "border-box"
        }}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          style={{ background: "none", border: "none", cursor: "pointer", alignSelf: "flex-end", color: "#b8860b", fontSize: "24px", marginBottom: "60px" }}
        >
          ✕
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
          <a href="#services" className="font-serif-luxury" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: 13, color: "#1a1a1a", textDecoration: "none", letterSpacing: "0.2em", borderBottom: "1px solid #f0f0f0", paddingBottom: "15px" }}>
            EXPERTISES
          </a>
          <a href="#valeurs" className="font-serif-luxury" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: 13, color: "#1a1a1a", textDecoration: "none", letterSpacing: "0.2em", borderBottom: "1px solid #f0f0f0", paddingBottom: "15px" }}>
            VALEURS
          </a>
          <button className="btn-gold" style={{ width: "100%", marginTop: "20px" }} onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}>
            Espace Client
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)", zIndex: 99 }} />
      )}

      {/* --- HERO SECTION --- */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "140px 5% 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="hero-content">
            <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 25 }}>
              <span style={{ width: 40, height: 1, background: "#b8860b" }} />
              <span className="font-serif-luxury" style={{ fontSize: 10, color: "#b8860b", letterSpacing: "0.4em", fontWeight: 700 }}>PRIVATE BANKING</span>
            </div>
            <h1 className="font-serif-luxury" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 1.1, marginBottom: 30, color: "#000" }}>
              Bâtissons <br /><span className="gold-gradient-text" style={{ fontStyle: "italic" }}>l'avenir.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "#4b5563", lineHeight: 1.8, maxWidth: 580, marginBottom: 45, fontWeight: 400 }}>
              Des solutions sur mesure pour réaliser vos projets et sécuriser votre patrimoine avec excellence. 
              Une approche personnalisée pour chaque étape de votre vie financière.
            </p>
            <button className="btn-gold" onClick={openWhatsApp}>Prendre Rendez-vous</button>
          </div>
          <div className="hero-image" style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="Finance Luxe" style={{ width: "100%", height: 550, objectFit: "cover", borderRadius: "4px", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }} />
          </div>
        </div>
      </section>

      {/* --- VALEURS SECTION --- */}
      <section id="valeurs" style={{ padding: "100px 5%", background: "#fcfcfc" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
          {values.map((v, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #f0f0f0", padding: "40px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <h3 className="font-serif-luxury gold-gradient-text" style={{ fontSize: "14px", marginBottom: "20px", letterSpacing: "0.2em", fontWeight: 700 }}>{v.title}</h3>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" style={{ padding: "120px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 className="font-serif-luxury" style={{ fontSize: "2rem", textAlign: "center", marginBottom: 80, letterSpacing: "0.2em", color: "#000" }}>NOS EXPERTISES <span className="gold-gradient-text">PRIVÉES</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: "#fcfcfc", padding: "40px", border: "1px solid #f0f0f0", transition: "transform 0.3s ease" }}>
                <h4 className="font-serif-luxury" style={{ color: "#b8860b", marginBottom: 20, fontSize: "13px", fontWeight: 700 }}>{s.title}</h4>
                <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ background: "#f8f9fa", borderTop: "1px solid #eee", padding: "100px 5% 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 60, marginBottom: 80 }}>
            <div>
              <img src={logoPath} alt="Logo" style={{ height: 60, marginBottom: 25 }} />
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.8" }}>
                Capital Trust Bank est une institution financière agréée dédiée à la gestion de fortune et aux solutions bancaires haut de gamme.
              </p>
            </div>
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: "11px", color: "#b8860b", marginBottom: 25, letterSpacing: "0.2em", fontWeight: 700 }}>SERVICES</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <a href="#" className="footer-link">Comptes Courants</a>
                <a href="#" className="footer-link">Crédits Immobiliers</a>
                <a href="#" className="footer-link">Gestion de Fortune</a>
                <a href="#" className="footer-link">Cartes de Crédit Luxe</a>
              </div>
            </div>
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: "11px", color: "#b8860b", marginBottom: 25, letterSpacing: "0.2em", fontWeight: 700 }}>SUPPORT</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <a href="#" className="footer-link">Centre de Sécurité</a>
                <a href="#" className="footer-link">Nous Contacter</a>
                <a href="#" className="footer-link">Opposition Cartes</a>
                <a href="#" className="footer-link">F.A.Q</a>
              </div>
            </div>
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: "11px", color: "#b8860b", marginBottom: 25, letterSpacing: "0.2em", fontWeight: 700 }}>SIÈGE SOCIAL</h5>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.8" }}>
                Abidjan, Cocody Bonoumin<br />
                Côte d'Ivoire<br />
                Tél: +225 01 50 30 19 31
              </p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #eee", paddingTop: "40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
            <p style={{ fontSize: "11px", color: "#999", letterSpacing: "0.1em" }}>© 2026 CAPITAL TRUST BANK. TOUS DROITS RÉSERVÉS.</p>
            <div style={{ display: "flex", gap: "30px" }}>
              <a href="#" className="footer-link" style={{ fontSize: "11px" }}>Mentions Légales</a>
              <a href="#" className="footer-link" style={{ fontSize: "11px" }}>Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}