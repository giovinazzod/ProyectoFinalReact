import React, { useState } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import '../styles/styleContacto.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faComment } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";


const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Podés validar campos antes si querés
    Swal.fire({
      icon: "success",
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarte. Te responderemos a la brevedad.",
      confirmButtonColor: "#3085d6",
    });

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      comentario: "",
    });
  };

  return (
    <>
      <Header cartItems={cart} />
      <div className="contacto-container">
        <h2>Contacto</h2>
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          <div className="campo">
            <i className="fa-solid fa-user icono"></i>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo">
            <i className="fa-solid fa-envelope icono"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo">
            <i className="fa-solid fa-phone icono"></i>
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo textarea">
            <i className="fa-solid fa-comment icono"></i>
            <textarea
              name="comentario"
              placeholder="Comentarios"
              value={formData.comentario}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn-agregar" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
