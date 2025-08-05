import React from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
];

const Gallery = () => (
  <section id="galeria" style={{ background: "none", boxShadow: "none" }}>
    <style>{`
      .gallery-card {
        animation: galleryCardFadeIn 1.2s cubic-bezier(.77,0,.18,1) both;
      }
      .gallery-card:nth-child(1) { animation-delay: 0.1s;}
      .gallery-card:nth-child(2) { animation-delay: 0.2s;}
      .gallery-card:nth-child(3) { animation-delay: 0.3s;}
      .gallery-card:nth-child(4) { animation-delay: 0.4s;}
      @keyframes galleryCardFadeIn {
        0% { opacity: 0; transform: translateY(40px) scale(0.97);}
        100% { opacity: 1; transform: translateY(0) scale(1);}
      }
      .gallery-shine {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(120deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.18) 100%);
        pointer-events: none;
        animation: galleryShineAnim 3.5s linear infinite alternate;
        border-radius: 22px;
      }
      @keyframes galleryShineAnim {
        0% { opacity: 0.12;}
        100% { opacity: 0.28;}
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
      Galería
    </h2>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "2.2rem",
      flexWrap: "wrap"
    }}>
      {images.map((src, idx) => (
        <div
          key={idx}
          className="gallery-card"
          style={{
            position: "relative",
            borderRadius: "22px",
            overflow: "hidden",
            boxShadow: "0 4px 24px #e6d3c4, 0 1.5px 8px #b08b5e",
            background: "rgba(255,255,255,0.55)",
            transition: "transform 0.18s, box-shadow 0.18s",
            padding: "0.7rem 0.7rem 1.2rem 0.7rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1.04) rotateZ(-1deg)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px #b08b5e";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px #e6d3c4, 0 1.5px 8px #b08b5e";
          }}
        >
          <img
            src={src}
            alt="Café"
            style={{
              width: 320,
              height: 220,
              objectFit: "cover",
              borderRadius: "18px",
              display: "block",
              filter: "brightness(0.97) saturate(1.08)",
              transition: "filter 0.18s, box-shadow 0.18s",
              boxShadow: "0 2px 12px #e6d3c4"
            }}
            onMouseOver={e => (e.currentTarget.style.filter = "brightness(1.05) saturate(1.15)")}
            onMouseOut={e => (e.currentTarget.style.filter = "brightness(0.97) saturate(1.08)")}
          />
          <div className="gallery-shine"></div>
          <div style={{
            marginTop: "0.7rem",
            color: "#b08b5e",
            fontWeight: 700,
            fontSize: "1.08rem",
            letterSpacing: "1px",
            opacity: 0.7,
            fontStyle: "italic"
          }}>
            Café & Momentos
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
