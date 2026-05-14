"use client";

import React, { useState, useEffect } from "react";

const stats = [
  { label: "Actifs sous gestion", value: "€2.4B+" },
  { label: "Clients Privés", value: "12,000+" },
  { label: "Pays de présence", value: "14" },
  { label: "Années d'excellence", value: "25" },
];

const expertises = [
  {
    title: "Gestion de Fortune",
    desc: "Une approche holistique pour la préservation et la croissance de votre capital intergénérationnel.",
  },
  {
    title: "Corporate Banking",
    desc: "Solutions de financement structuré et conseils en fusion-acquisition pour les grandes entreprises.",
  },
  {
    title: "Lending Solutions",
    desc: "Lignes de crédit sur mesure, Lombard et financements immobiliers internationaux.",
  },
  {
    title: "Asset Management",
    desc: "Accès exclusif à des fonds privés et des opportunités d'investissement non cotées.",
  },
];

export default function CapitalTrustPremium() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const whatsappNumber = "2250150301931";
  const logoPath = "/logo.jpeg";
  const openWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}`, "_blank");

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        :root { --gold: #b8860b; --gold-light: #d4af37; --dark: #121212; --ticker-height: 36px; --nav-height: 75px; }
        .font-serif-luxury { font-family: 'Cinzel', serif; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; overflow-x: hidden; }

        .gold-gradient {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 45%, #AA8232 70%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── TICKER ── */
        .ticker-bar {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 110;
          background: #121212; color: #fff;
          padding: 8px 0; font-size: 10px; letter-spacing: 1px; overflow: hidden;
          height: var(--ticker-height);
        }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .market-ticker { display: flex; white-space: nowrap; animation: marquee 35s linear infinite; }

        /* ── NAV ── */
        .main-nav {
          position: fixed;
          top: var(--ticker-height);
          width: 100%;
          z-index: 100;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          transition: background 0.4s ease, box-shadow 0.4s ease;
          background: transparent;
        }
        .main-nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* offset so content is never behind the fixed bar+nav */
        .page-offset {
          padding-top: calc(var(--ticker-height) + var(--nav-height));
        }

        /* ── BUTTONS ── */
        .btn-luxury {
          position: relative; padding: 1rem 2rem;
          background: var(--dark); color: white;
          font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: 2px;
          border: none; cursor: pointer; transition: background 0.4s, transform 0.3s;
          white-space: nowrap; flex-shrink: 0;
        }
        .btn-luxury:hover { background: var(--gold); transform: translateY(-3px); }

        .btn-ghost {
          background: none; border: none; border-bottom: 1px solid #1a1a1a;
          padding: 10px 0; cursor: pointer;
          font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: 2px; font-weight: 700;
          white-space: nowrap;
        }

        /* ── EXPERTISE CARDS ── */
        .card-expertise {
          padding: 40px; background: #fff; border: 1px solid #eee;
          transition: border-color 0.5s, transform 0.5s, box-shadow 0.5s;
        }
        .card-expertise:hover {
          border-color: var(--gold); transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        /* ── HERO ── */
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 60px 5% 80px;
        }

        /* ── ABOUT GRID ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── STATS GRID ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          text-align: center;
        }

        /* ── EXPERTISE GRID ── */
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── FOOTER GRID ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        /* ── NAV LINKS ── */
        .nav-links { display: flex; gap: 40px; align-items: center; }
        .nav-link {
          font-family: 'Cinzel', serif; font-size: 10px;
          text-decoration: none; color: #1a1a1a; font-weight: 700; letter-spacing: 1px;
        }

        /* ── MOBILE SIDEBAR ── */
        .mobile-sidebar {
          position: fixed; top: 0; right: -100%;
          width: min(320px, 85vw); height: 100vh;
          background: #fff; z-index: 200;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; flex-direction: column; padding: 40px;
          box-shadow: -15px 0 40px rgba(0,0,0,0.1);
        }
        .mobile-sidebar.open { right: 0; }

        .mobile-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.2); backdrop-filter: blur(4px); z-index: 199;
        }

        /* ═══════════════════════════════
           RESPONSIVE BREAKPOINTS
        ═══════════════════════════════ */

        /* Tablet (≤ 900px) */
        @media (max-width: 900px) {
          .nav-links { display: none; }

          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .expertise-grid { grid-template-columns: repeat(2, 1fr); }

          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-img-wrapper { order: -1; }

          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }

        /* Mobile (≤ 580px) */
        @media (max-width: 580px) {
          :root { --nav-height: 65px; }

          .hero-section { padding: 40px 5% 60px; min-height: calc(100vh - var(--ticker-height) - var(--nav-height)); }
          
          h1.hero-title { font-size: clamp(2.2rem, 10vw, 3.5rem) !important; }

          .hero-cta { flex-direction: column; align-items: flex-start; gap: 20px !important; }

          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; }
          .stats-section { padding: 70px 5% !important; }

          .about-section { padding: 80px 5% !important; }
          .about-img { height: 320px !important; }
          .about-badge { display: none; }
          .about-feature-grid { grid-template-columns: 1fr !important; }

          .expertise-section { padding: 80px 5% !important; }
          .expertise-grid { grid-template-columns: 1fr; }
          .card-expertise { padding: 30px; }

          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-brand { grid-column: auto; }
          .footer-section { padding: 70px 5% 30px !important; }
        }

        /* Very small (≤ 380px) */
        @media (max-width: 380px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── TICKER ── */}
      <div className="ticker-bar">
        <div className="market-ticker">
          {[1, 2, 3].map((i) => (
            <span key={i} style={{ marginRight: "60px" }}>
              CAC 40: <span style={{ color: "#00ff00" }}>+1.24%</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              OR (SPOT): <span style={{ color: "#d4af37" }}>$2,345.10</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              EUR/USD: 1.0842&nbsp;&nbsp;|&nbsp;&nbsp;
              S&P 500: <span style={{ color: "#00ff00" }}>+0.45%</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              CAPITAL TRUST INDEX: <span style={{ color: "#d4af37" }}>STABLE</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── NAVIGATION ── */}
      <nav className={`main-nav${scrolled ? " scrolled" : ""}`}>
        <img src={logoPath} alt="Capital Trust Logo" style={{ height: 48 }} />

        <div className="nav-links">
          <a href="#about" className="nav-link">L'INSTITUTION</a>
          <a href="#expertise" className="nav-link">EXPERTISES</a>
          <a href="#contact" className="nav-link">MONDE</a>
          <button className="btn-luxury" onClick={openWhatsApp}>ACCÈS PRIVÉ</button>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
          className="hamburger-btn"
        >
          <div style={{ width: 25, height: 2, background: "#1a1a1a", marginBottom: 5 }} />
          <div style={{ width: 25, height: 2, background: "#1a1a1a", marginBottom: 5 }} />
          <div style={{ width: 25, height: 2, background: "#1a1a1a" }} />
        </button>
      </nav>

      {/* Hamburger visible only on mobile via inline style override */}
      <style>{`
        @media (max-width: 900px) { .hamburger-btn { display: block !important; } }
      `}</style>

      {/* ── MOBILE SIDEBAR ── */}
      <div className={`mobile-sidebar${isMobileMenuOpen ? " open" : ""}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{ alignSelf: "flex-end", background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "var(--gold)" }}
          aria-label="Fermer"
        >✕</button>
        <div style={{ marginTop: 50, display: "flex", flexDirection: "column", gap: 30 }}>
          <img src={logoPath} alt="Logo" style={{ height: 38, width: "fit-content", marginBottom: 10 }} />
          {[
            ["#about", "L'INSTITUTION"],
            ["#expertise", "EXPERTISES"],
            ["#contact", "PRÉSENCE MONDIALE"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif-luxury"
              style={{ fontSize: 13, textDecoration: "none", color: "#1a1a1a", letterSpacing: 2, borderBottom: "1px solid #f0f0f0", paddingBottom: 15 }}
            >{label}</a>
          ))}
          <button className="btn-luxury" style={{ marginTop: 10 }} onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}>
            ACCÈS PRIVÉ
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />}

      {/* ── PAGE BODY (offset for fixed ticker+nav) ── */}
      <div className="page-offset">

        {/* ── HERO ── */}
        <section className="hero-section">
          <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
            <div style={{ maxWidth: 850 }}>
              <h6 className="font-serif-luxury" style={{ color: "var(--gold)", letterSpacing: 6, marginBottom: 25, fontSize: 11 }}>
                DEPUIS 1998
              </h6>
              <h1
                className="font-serif-luxury hero-title"
                style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", lineHeight: 1.1, marginBottom: 35, color: "#000" }}
              >
                La préservation <br />
                <span className="gold-gradient" style={{ fontStyle: "italic" }}>du capital.</span>
              </h1>
              <p style={{ fontSize: "clamp(15px, 2.5vw, 20px)", color: "#555", lineHeight: 1.7, marginBottom: 50, fontWeight: 300, maxWidth: 650 }}>
                Capital Trust Bank accompagne les patrimoines les plus exigeants à travers des solutions de gestion privée fondées sur la discrétion et la performance.
              </p>
              <div className="hero-cta" style={{ display: "flex", gap: 25, flexWrap: "wrap" }}>
                <button className="btn-luxury" onClick={openWhatsApp}>NOUS CONTACTER</button>
                <button className="btn-ghost">DÉCOUVRIR NOS FONDS</button>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="stats-section" style={{ padding: "100px 5%", background: "#121212", color: "#fff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i}>
                  <h2 className="font-serif-luxury" style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--gold-light)", marginBottom: 10, fontWeight: 400 }}>
                    {s.value}
                  </h2>
                  <p style={{ fontSize: 10, letterSpacing: 3, color: "#888", fontWeight: 600 }}>{s.label.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── L'INSTITUTION ── */}
        <section id="about" className="about-section" style={{ padding: "130px 5%" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="about-grid">
              <div className="about-img-wrapper" style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Bureau Capital Trust"
                  className="about-img"
                  style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }}
                />
                <div className="about-badge" style={{ position: "absolute", bottom: -25, right: -25, background: "var(--gold)", color: "white", padding: 35, maxWidth: 270 }}>
                  <p className="font-serif-luxury" style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    L'intégrité et la rigueur sont les fondements de notre maison.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-serif-luxury" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: 35, lineHeight: 1.2 }}>
                  Une vision ancrée dans la tradition.
                </h2>
                <p style={{ lineHeight: 2, color: "#555", marginBottom: 35, fontSize: 15 }}>
                  Fondée avec une vocation d'excellence, Capital Trust Bank combine le savoir-faire des grandes maisons internationales avec une connaissance approfondie des marchés émergents. Notre modèle repose sur une relation de confiance exclusive et durable.
                </p>
                <div className="about-feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20 }}>
                    <h5 className="font-serif-luxury" style={{ fontSize: 12, marginBottom: 10 }}>DISCRÉTION</h5>
                    <p style={{ fontSize: 13, color: "#777" }}>Respect total de la confidentialité.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20 }}>
                    <h5 className="font-serif-luxury" style={{ fontSize: 12, marginBottom: 10 }}>SUR-MESURE</h5>
                    <p style={{ fontSize: 13, color: "#777" }}>Stratégies uniques par client.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERTISES ── */}
        <section id="expertise" className="expertise-section" style={{ padding: "120px 5%", background: "#fcfcfc" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <h6 className="font-serif-luxury" style={{ color: "var(--gold)", letterSpacing: 5, fontSize: 11, marginBottom: 15 }}>
                NOS DOMAINES
              </h6>
              <h2 className="font-serif-luxury" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a1a1a" }}>
                Expertises <span className="gold-gradient">Sélectives</span>
              </h2>
            </div>
            <div className="expertise-grid">
              {expertises.map((ex, i) => (
                <div key={i} className="card-expertise">
                  <div style={{ width: 30, height: 2, background: "var(--gold)", marginBottom: 28 }} />
                  <h4 className="font-serif-luxury" style={{ fontSize: 16, marginBottom: 18, letterSpacing: 1 }}>{ex.title}</h4>
                  <p style={{ color: "#666", lineHeight: 1.8, fontSize: 14, fontWeight: 300 }}>{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer id="contact" className="footer-section" style={{ background: "#0a0a0a", color: "#fff", padding: "100px 5% 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="footer-grid">
              <div className="footer-brand">
                <img src={logoPath} alt="Logo Capital Trust" style={{ height: 42, marginBottom: 28 }} />
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: 13, maxWidth: 320 }}>
                  Siège Social : Boulevard Lagunaire, Cocody Bonoumin, Abidjan.<br />
                  Agréé par la Commission Bancaire de l'UMOA.
                </p>
              </div>
              <div>
                <h5 className="font-serif-luxury" style={{ fontSize: 11, letterSpacing: 2, marginBottom: 28, color: "var(--gold)" }}>NAVIGATION</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: 15, color: "#555", fontSize: 13 }}>
                  {["Gouvernance", "Rapports Annuels", "Confidentialité"].map((l) => (
                    <a key={l} href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-serif-luxury" style={{ fontSize: 11, letterSpacing: 2, marginBottom: 28, color: "var(--gold)" }}>CONTACT</h5>
                <p style={{ color: "#555", fontSize: 13, lineHeight: 2 }}>
                  T: +225 01 50 30 19 31<br />
                  E: contact@capitaltrust.ci<br />
                  Du Lundi au Vendredi (9h–18h)
                </p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 35, textAlign: "center", fontSize: 10, color: "#333", letterSpacing: 2 }}>
              © 2026 CAPITAL TRUST PRIVATE BANKING. TOUS DROITS RÉSERVÉS.
            </div>
          </div>
        </footer>

      </div>{/* end page-offset */}
    </div>
  );
}