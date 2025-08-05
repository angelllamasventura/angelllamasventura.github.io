import React from "react";

const Hero = () => (
  <section
    style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "visible",
      background: "none",
      boxShadow: "none",
      padding: "7rem 1rem 4rem 1rem"
    }}
  >
    {/* Fondo decorativo circular, sin cuadrados */}
    <div style={{
      position: "absolute",
      top: "-120px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70vw",
      maxWidth: 700,
      height: 340,
      background: "radial-gradient(circle at 50% 40%, #ffe7c7 0%, #fbeee6 70%, transparent 100%)",
      zIndex: 0,
      filter: "blur(24px)",
      opacity: 0.7,
      pointerEvents: "none"
    }} />
    <div style={{
      position: "absolute",
      bottom: "-120px",
      right: "50%",
      transform: "translateX(50%)",
      width: "50vw",
      maxWidth: 400,
      height: 220,
      background: "radial-gradient(circle at 60% 60%, #e6d3c4 0%, #b08b5e 80%, transparent 100%)",
      zIndex: 0,
      filter: "blur(32px)",
      opacity: 0.4,
      pointerEvents: "none"
    }} />
    <style>{`
      .hero-title-anim {
        opacity: 0;
        transform: translateY(40px) scale(0.98);
        animation: heroTitleAnim 1.2s cubic-bezier(.77,0,.18,1) 0.2s both;
        will-change: opacity, transform;
      }
      @keyframes heroTitleAnim {
        0% { opacity: 0; transform: translateY(40px) scale(0.98);}
        100% { opacity: 1; transform: translateY(0) scale(1);}
      }
      .hero-shine {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none;
        background: linear-gradient(120deg,rgba(255,255,255,0.12) 0%,rgba(255,255,255,0.18) 100%);
        mix-blend-mode: lighten;
        animation: heroShineAnim 3.5s linear infinite alternate;
        border-radius: 40px;
      }
      @keyframes heroShineAnim {
        0% { opacity: 0.15;}
        100% { opacity: 0.32;}
      }
      .hero-btn {
        position: relative;
        overflow: hidden;
        z-index: 1;
        background: linear-gradient(90deg, #b08b5e 0%, #7c4d2b 100%);
        color: #fff;
        padding: 1.1rem 3.2rem;
        border-radius: 40px;
        font-size: 1.3rem;
        font-weight: 800;
        text-decoration: none;
        box-shadow: 0 8px 32px #e6d3c4, 0 2px 8px #b08b5e;
        letter-spacing: 1.5px;
        transition: transform 0.2s, box-shadow 0.2s;
        display: inline-block;
      }
      .hero-btn:hover {
        transform: scale(1.07);
        box-shadow: 0 12px 40px #b08b5e;
      }
      .hero-btn .hero-shine {
        border-radius: 40px;
      }
    `}</style>
    <h1 className="hero-title-anim" style={{
      fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
      fontWeight: 900,
      background: "linear-gradient(90deg, #7c4d2b 30%, #b08b5e 80%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      marginBottom: "1.5rem",
      letterSpacing: "2px",
      zIndex: 1,
      textShadow: "0 6px 32px #e6d3c4",
      lineHeight: 1.13,
      minHeight: "3.5em", // evita saltos de layout
      transition: "none"
    }}>
      Café de Especialidad,<br />Experiencia Única
    </h1>
    <p style={{
      fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
      color: "#7c4d2b",
      maxWidth: 600,
      textAlign: "center",
      marginBottom: "2.5rem",
      fontWeight: 500,
      zIndex: 1,
      textShadow: "0 2px 12px #fff"
    }}>
      Descubre el aroma y sabor de los mejores granos seleccionados, en un ambiente acogedor y moderno.
    </p>
    <a
      href="#menu"
      className="hero-btn"
    >
      <span style={{ position: "relative", zIndex: 2 }}>Ver Menú</span>
      <span className="hero-shine"></span>
    </a>
  </section>
);

export default Hero;
