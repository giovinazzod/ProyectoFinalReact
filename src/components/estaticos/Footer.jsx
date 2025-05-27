import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a
            href="https://instagram.com/biskra.home"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100068646460077"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://biskrahome.mitiendanube.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a TiendaNube"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+5491123913393"
            target="_blank"
            rel="noopener noreferrer"
            title="Enviar Whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:biskra.home@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Enviar correo electrónico"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <p>&copy; 2025 - DMG</p>
    </footer>
  );
}

export default Footer;
