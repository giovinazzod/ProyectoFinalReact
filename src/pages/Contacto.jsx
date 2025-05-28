import React from "react";
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
const Contacto = ({cart}) => {
  return (
    <div>
      <Header cartItems={cart} />
      <h1>Contacto</h1>
      <Footer />
    </div>
  );
};

export default Contacto;
