// App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import  Background3D  from "./components/Background3D";

const appStyles = {
  minHeight: "100vh",
  fontFamily: "Montserrat, sans-serif",
  color: "#3e2723", // Marrón café para el texto
  position: "relative",
  zIndex: 1
};

export default function App() {
  return (
    <>
      {/* Fondo vivo */}
      <Background3D />

      {/* Contenido principal */}
      <div style={appStyles}>
        <Header />
        <Hero />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
