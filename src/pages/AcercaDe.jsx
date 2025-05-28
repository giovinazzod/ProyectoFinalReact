import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "../styles/style.css";

const AcercaDe = ({cart}) => {
  return (
    <div>
      <Header cartItems={cart} />
      <div className="acerca-de">
        {/* <h1>Acerca de Biskra Home</h1> */}
        <div className="acerca-grid">
          <div className="acerca-card">
            <img src="/src/assets/vela-icon.png" alt="Velas de soja" />
            <h2>Sobre nosotros</h2>
            <p>
              Somos un emprendimiento familiar dedicado a crear velas de soja,
              difusores, esencias para hornitos y fragancias textiles que llenan
              tus espacios de armonía y calidez.
            </p>
          </div>
          <div className="acerca-card">
            <img src="/src/assets/difusor-icon.png" alt="Difusores" />
            <h2>Nuestro compromiso</h2>
            <p>
              Usamos ingredientes naturales y ecológicos, cuidando cada detalle
              desde el diseño hasta la entrega, para que vivas una experiencia
              sensorial única y responsable.
            </p>
          </div>
          <div className="acerca-card">
            <img src="/src/assets/fragancia-icon.png" alt="Fragancias" />
            <h2>Nuestra misión</h2>
            <p>
              Transformar espacios cotidianos en refugios de bienestar,
              ofreciendo productos artesanales, sostenibles y con fragancias que
              despiertan emociones.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcercaDe;
