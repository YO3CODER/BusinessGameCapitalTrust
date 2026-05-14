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
    <div className="min-h-screen bg-[#05070a] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');
        .font-serif-luxury { font-family: 'Cinzel', serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; margin: 0; }
        .gold-gradient-text {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 45%, #B38728 70%, #FBF5B7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .btn-gold {
          background: transparent; color: #d4af37; border: 1px solid #d4af37;
          padding: 1rem 2.2rem; font-family: 'Cinzel', serif; font-weight: 600;
          transition: all 0.4s ease; cursor: pointer; text-transform: uppercase;
          letter-spacing: 2px; font-size: 10px; text-decoration: none;
        }
        .btn-gold:hover { background: #d4af37; color: #05070a; box-shadow: 0 0 20px rgba(212, 175, 55, 0.2); }
        .footer-link { color: #6b7280; text-decoration: none; transition: color 0.3s; font-size: 13px; }
        .footer-link:hover { color: #d4af37; }
        @media (max-width: 1024px) { .hero-grid { grid-template-columns: 1fr !important; text-align: center; } .hero-content { align-items: center !important; } .hero-image { display: none; } }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, height: 90, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", background: "rgba(5,7,10,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <img src={logoPath} alt="Logo" style={{ height: 50 }} />
        <div className="hidden md:flex" style={{ gap: 40, alignItems: "center" }}>
          <a href="#services" className="font-serif-luxury" style={{ fontSize: 10, color: "#94a3b8", textDecoration: "none", letterSpacing: "0.2em" }}>EXPERTISES</a>
          <a href="#valeurs" className="font-serif-luxury" style={{ fontSize: 10, color: "#94a3b8", textDecoration: "none", letterSpacing: "0.2em" }}>VALEURS</a>
          <button className="btn-gold" onClick={openWhatsApp}>Espace Client</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "140px 5% 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="hero-content">
            <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 25 }}>
              <span style={{ width: 40, height: 1, background: "#d4af37" }} />
              <span className="font-serif-luxury" style={{ fontSize: 10, color: "#d4af37", letterSpacing: "0.4em" }}>PRIVATE BANKING</span>
            </div>
            <h1 className="font-serif-luxury" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 1.1, marginBottom: 30 }}>
              Bâtissons <br /><span className="gold-gradient-text" style={{ fontStyle: "italic" }}>l'avenir.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "#94a3b8", lineHeight: 1.8, maxWidth: 580, marginBottom: 45, fontWeight: 300 }}>
              Des solutions sur mesure pour réaliser vos projets et sécuriser votre patrimoine avec excellence. 
              Une approche personnalisée pour chaque étape de votre vie financière.
            </p>
            <button className="btn-gold" onClick={openWhatsApp}>Prendre Rendez-vous</button>
          </div>
          <div className="hero-image" style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="Finance Luxe" style={{ width: "100%", height: 550, objectFit: "cover", borderRadius: "2px", filter: "brightness(0.7) grayscale(0.3)" }} />
          </div>
        </div>
      </section>

      {/* --- VALEURS SECTION --- */}
      <section id="valeurs" style={{ padding: "100px 5%", background: "#080a0f" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
          {values.map((v, i) => (
            <div key={i} style={{ border: "1px solid rgba(212,175,55,0.1)", padding: "40px", textAlign: "center" }}>
              <h3 className="font-serif-luxury gold-gradient-text" style={{ fontSize: "14px", marginBottom: "20px", letterSpacing: "0.2em" }}>{v.title}</h3>
              <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" style={{ padding: "120px 5%", background: "#05070a" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 className="font-serif-luxury" style={{ fontSize: "2rem", textAlign: "center", marginBottom: 80, letterSpacing: "0.2em" }}>NOS EXPERTISES <span className="gold-gradient-text">PRIVÉES</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: "#0a0e14", padding: "40px", border: "1px solid #1a202c" }}>
                <h4 className="font-serif-luxury" style={{ color: "#d4af37", marginBottom: 20, fontSize: "13px" }}>{s.title}</h4>
                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER ÉTENDU --- */}
      <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "100px 5% 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 60, marginBottom: 80 }}>
            
            {/* Colonne 1: Brand */}
            <div>
              <img src={logoPath} alt="Logo" style={{ height: 60, marginBottom: 25 }} />
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>
                Capital Trust Bank est une institution financière agréée dédiée à la gestion de fortune et aux solutions bancaires haut de gamme.
              </p>
            </div>

            {/* Colonne 2: Liens */}
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: "11px", color: "#d4af37", marginBottom: 25, letterSpacing: "0.2em" }}>SERVICES</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <a href="#" className="footer-link">Comptes Courants</a>
                <a href="#" className="footer-link">Crédits Immobiliers</a>
                <a href="#" className="footer-link">Gestion de Fortune</a>
                <a href="#" className="footer-link">Cartes de Crédit Luxe</a>
              </div>
            </div>

            {/* Colonne 3: Support & Sécurité */}
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: "11px", color: "#d4af37", marginBottom: 25, letterSpacing: "0.2em" }}>SUPPORT & SÉCURITÉ</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <a href="#" className="footer-link">Centre de Sécurité</a>
                <a href="#" className="footer-link">Nous Contacter</a>
                <a href="#" className="footer-link">Opposition Cartes</a>
                <a href="#" className="footer-link">F.A.Q</a>
              </div>
            </div>

            {/* Colonne 4: Contact Direct */}
            <div>
              <h5 className="font-serif-luxury" style={{ fontSize: "11px", color: "#d4af37", marginBottom: 25, letterSpacing: "0.2em" }}>SIÈGE SOCIAL</h5>
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>
                Abidjan, Cocody Bonoumin<br />
                Côte d'Ivoire<br />
                Tél: +225 01 50 30 19 31
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
            <p style={{ fontSize: "11px", color: "#333", letterSpacing: "0.1em" }}>© 2026 CAPITAL TRUST BANK. TOUS DROITS RÉSERVÉS.</p>
            <div style={{ display: "flex", gap: "30px" }}>
              <a href="#" className="footer-link" style={{ fontSize: "11px" }}>Mentions Légales</a>
              <a href="#" className="footer-link" style={{ fontSize: "11px" }}>Politique de Confidentialité</a>
              <a href="#" className="footer-link" style={{ fontSize: "11px" }}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}