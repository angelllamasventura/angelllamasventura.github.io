import React from "react";

const navLinkStyle: React.CSSProperties = {
  margin: "0 1.2rem",
  color: "#7c4d2b",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "1.13rem",
  letterSpacing: "1px",
  transition: "color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s",
  padding: "0.6rem 1.5rem",
  borderRadius: "22px",
  position: "relative",
  zIndex: 1,
  boxShadow: "0 2px 8px 0 rgba(124,77,43,0.07)",
  background: "rgba(255,255,255,0.45)",
  backdropFilter: "blur(4px)",
  cursor: "pointer"
};

const navLinkActive: React.CSSProperties = {
  ...navLinkStyle,
  background: "linear-gradient(90deg, #7c4d2b 60%, #b08b5e 100%)",
  color: "#fff",
  boxShadow: "0 4px 16px #e6d3c4, 0 2px 8px #b08b5e"
};

const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto", active: true }
];

const Header = () => (
  <header
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(16px)",
      boxShadow: "0 8px 32px 0 rgba(124,77,43,0.12)",
      zIndex: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.7rem 0",
      transition: "background 0.3s"
    }}
  >
    <div
      style={{
        width: "92vw",
        maxWidth: 1400,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          fontWeight: 900,
          fontSize: "2.3rem",
          letterSpacing: "2.5px",
          color: "#7c4d2b",
          textShadow: "0 4px 24px #e6d3c4, 0 1px 0 #fff",
          fontFamily: "'Montserrat', sans-serif",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem"
        }}
      >
        <span style={{
          display: "inline-block",
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #b08b5e 0%, #7c4d2b 100%)",
          boxShadow: "0 2px 12px #e6d3c4",
          marginRight: 10,
          position: "relative"
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" style={{position:"absolute",top:5,left:5}}>
            <ellipse cx="9" cy="12" rx="8" ry="8" fill="#fff8f0" />
            <ellipse cx="13" cy="12" rx="7" ry="7" fill="#e6d3c4" />
            <ellipse cx="15" cy="12" rx="4" ry="4" fill="#b08b5e" />
          </svg>
        </span>
        Café Aroma
      </div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          marginLeft: "2vw",
          minWidth: 0,
          flexWrap: "wrap"
        }}
      >
        {navLinks.map((link, idx) =>
          link.active ? (
            <a key={idx} href={link.href} style={navLinkActive}>
              {link.label}
            </a>
          ) : (
            <a
              key={idx}
              href={link.href}
              style={navLinkStyle}
              onMouseOver={e => {
                e.currentTarget.style.background = "rgba(124,77,43,0.08)";
                e.currentTarget.style.transform = "scale(1.07)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.45)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {link.label}
            </a>
          )
        )}
      </nav>
    </div>
    <style>{`
      @media (max-width: 900px) {
        header nav {
          flex-wrap: wrap;
          justify-content: flex-end !important;
        }
        header div[style*="font-weight: 900"] {
          font-size: 1.5rem !important;
        }
      }
      @media (max-width: 600px) {
        header nav {
          flex-direction: column;
          align-items: flex-end !important;
        }
        header nav a {
          margin: 0.3rem 0 !important;
          font-size: 1rem !important;
        }
        header div[style*="font-weight: 900"] {
          font-size: 1.1rem !important;
        }
        header > div {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
      }
    `}</style>
  </header>
);

export default Header;
