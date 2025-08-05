import React from "react";

const iconStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  verticalAlign: "middle",
  marginRight: 8,
  filter: "drop-shadow(0 2px 8px #e6d3c4)",
  transition: "filter 0.3s, fill 0.3s"
};

const Footer = () => (
  <footer id="contacto" style={{
    background: "linear-gradient(90deg, #fbeee6 0%, #e6d3c4 100%)",
    color: "#7c4d2b",
    padding: "2.5rem 0",
    textAlign: "center",
    marginTop: "2rem",
    borderRadius: "32px",
    boxShadow: "0 8px 32px 0 rgba(124,77,43,0.08), 0 1.5px 8px 0 rgba(124,77,43,0.04)",
    backdropFilter: "blur(8px)",
    position: "relative",
    overflow: "hidden"
  }}>
    <style>{`
      .footer-shine {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(120deg,rgba(255,255,255,0.09) 0%,rgba(255,255,255,0.18) 100%);
        pointer-events: none;
        animation: footerShineAnim 3.5s linear infinite alternate;
        z-index: 1;
      }
      @keyframes footerShineAnim {
        0% { opacity: 0.13;}
        100% { opacity: 0.22;}
      }
      .footer-icon:hover {
        filter: drop-shadow(0 4px 16px #b08b5e) brightness(1.2);
        fill: #7c4d2b !important;
      }
    `}</style>
    <div className="footer-shine"></div>
    <div style={{ fontSize: "1.25rem", marginBottom: "1.1rem", fontWeight: 700, position: "relative", zIndex: 2 }}>
      <span style={{ marginRight: 8, verticalAlign: "middle" }}>
        <svg width="28" height="28" viewBox="0 0 28 28" style={iconStyle}>
          <ellipse cx="9" cy="12" rx="8" ry="8" fill="#fff8f0" />
          <ellipse cx="13" cy="12" rx="7" ry="7" fill="#e6d3c4" />
          <ellipse cx="15" cy="12" rx="4" ry="4" fill="#b08b5e" />
        </svg>
      </span>
      <strong>Café Aroma</strong> · Calle del Buen Café, 123 · Madrid
    </div>
    <div style={{ marginBottom: "1.1rem", fontSize: "1.08rem", position: "relative", zIndex: 2 }}>
      <a href="mailto:info@cafearoma.com" style={{ color: "#7c4d2b", textDecoration: "underline", fontWeight: 600 }}>
        info@cafearoma.com
      </a>
      {" · "}
      <a href="tel:+34910000000" style={{ color: "#7c4d2b", textDecoration: "underline", fontWeight: 600 }}>
        910 00 00 00
      </a>
    </div>
    <div style={{ marginBottom: "1.1rem", position: "relative", zIndex: 2 }}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#7c4d2b", margin: "0 1.2rem", fontWeight: 700, fontSize: "1.15rem", verticalAlign: "middle" }}>
        <svg className="footer-icon" style={iconStyle} fill="#b08b5e" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.58.21 1 .46 1.44.9.44.44.69.86.9 1.44.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.21.58-.46 1-.9 1.44-.44.44-.86.69-1.44.9-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.58-.21-1-.46-1.44-.9-.44-.44-.69-.86-.9-1.44-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.21-.58.46-1 .9-1.44.44-.44.86-.69 1.44-.9.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.84.31 4.05.54c-.82.24-1.51.56-2.2 1.25-.69.69-1.01 1.38-1.25 2.2-.23.79-.412 1.72-.47 3C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.21.47 3 .24.82.56 1.51 1.25 2.2.69.69 1.38 1.01 2.2 1.25.79.23 1.72.412 3 .47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.21-.24 3-.47.82-.24 1.51-.56 2.2-1.25.69-.69 1.01-1.38 1.25-2.2.23-.79.412-1.72.47-3 .058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.21-.47-3-.24-.82-.56-1.51-1.25-2.2-.69-.69-1.38-1.01-2.2-1.25-.79-.23-1.72-.412-3-.47C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
        Instagram
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#7c4d2b", margin: "0 1.2rem", fontWeight: 700, fontSize: "1.15rem", verticalAlign: "middle" }}>
        <svg className="footer-icon" style={iconStyle} fill="#b08b5e" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
        Facebook
      </a>
    </div>
    <div style={{ marginTop: "1.5rem", fontSize: "0.98rem", opacity: 0.7, fontWeight: 500, position: "relative", zIndex: 2 }}>
      © {new Date().getFullYear()} Café Aroma. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
