import React from "react";

const menu = [
  { name: "Espresso", desc: "Intenso y aromático, extraído a la perfección.", price: "2,00€", icon: "☕" },
  { name: "Cappuccino", desc: "Equilibrio perfecto entre café, leche y espuma.", price: "2,80€", icon: "🥛" },
  { name: "V60", desc: "Método de filtrado para resaltar notas frutales.", price: "3,20€", icon: "🫖" },
  { name: "Cold Brew", desc: "Refrescante, infusionado en frío por 12h.", price: "3,50€", icon: "🧊" },
  { name: "Tarta de Zanahoria", desc: "Jugosa, con frosting de queso crema.", price: "3,00€", icon: "🥕" },
  { name: "Croissant Artesano", desc: "Hojaldre crujiente y mantecoso.", price: "1,80€", icon: "🥐" },
];

const MenuSection = () => (
  <section id="menu" style={{ background: "none", boxShadow: "none" }}>
    <style>{`
      .menu-card {
        animation: menuCardFadeIn 1.2s cubic-bezier(.77,0,.18,1) both;
      }
      .menu-card:nth-child(1) { animation-delay: 0.1s;}
      .menu-card:nth-child(2) { animation-delay: 0.2s;}
      .menu-card:nth-child(3) { animation-delay: 0.3s;}
      .menu-card:nth-child(4) { animation-delay: 0.4s;}
      .menu-card:nth-child(5) { animation-delay: 0.5s;}
      .menu-card:nth-child(6) { animation-delay: 0.6s;}
      @keyframes menuCardFadeIn {
        0% { opacity: 0; transform: translateY(40px) scale(0.97);}
        100% { opacity: 1; transform: translateY(0) scale(1);}
      }
      .menu-icon-anim {
        animation: menuIconAnim 1.6s infinite alternate;
      }
      @keyframes menuIconAnim {
        0% { transform: scale(1) rotate(-6deg);}
        100% { transform: scale(1.12) rotate(6deg);}
      }
      .menu-reflection {
        position: absolute;
        left: 0; right: 0; bottom: -12px; height: 18px;
        background: linear-gradient(180deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0) 100%);
        border-radius: 0 0 18px 18px;
        pointer-events: none;
        z-index: 2;
      }
    `}</style>
    <h2 style={{
      textAlign: "center",
      color: "#7c4d2b",
      fontSize: "2.7rem",
      fontWeight: 900,
      marginBottom: "2.5rem",
      letterSpacing: "1.5px",
      textShadow: "0 2px 12px #e6d3c4"
    }}>
      Nuestro Menú
    </h2>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2.5rem"
    }}>
      {menu.map((item, idx) => (
        <div
          key={idx}
          className="menu-card"
          style={{
            background: "rgba(255,255,255,0.85)",
            borderRadius: "24px",
            boxShadow: "0 4px 24px #e6d3c4, 0 1.5px 8px #b08b5e",
            padding: "2.2rem 2.5rem",
            minWidth: 260,
            maxWidth: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            transition: "transform 0.18s, box-shadow 0.18s",
            cursor: "pointer",
            overflow: "hidden"
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06) rotateZ(-1.5deg)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px #b08b5e";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px #e6d3c4, 0 1.5px 8px #b08b5e";
          }}
        >
          <span className="menu-icon-anim" style={{
            fontSize: "2.3rem",
            marginBottom: "0.7rem",
            filter: "drop-shadow(0 2px 8px #e6d3c4)"
          }}>{item.icon}</span>
          <h3 style={{
            color: "#7c4d2b",
            fontWeight: 800,
            fontSize: "1.35rem",
            marginBottom: "0.5rem",
            letterSpacing: "1px"
          }}>{item.name}</h3>
          <p style={{
            color: "#5e3c1c",
            margin: "0.7rem 0 1.2rem",
            textAlign: "center",
            fontWeight: 500
          }}>{item.desc}</p>
          <span style={{
            background: "linear-gradient(90deg, #b08b5e 0%, #7c4d2b 100%)",
            color: "#fff",
            borderRadius: "12px",
            padding: "0.4rem 1.2rem",
            fontWeight: 700,
            fontSize: "1.13rem",
            letterSpacing: "1px",
            boxShadow: "0 2px 8px #e6d3c4"
          }}>{item.price}</span>
          <div className="menu-reflection"></div>
        </div>
      ))}
    </div>
  </section>
);

export default MenuSection;
