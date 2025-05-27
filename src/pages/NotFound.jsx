import React from "react";
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';

function NotFound() {
  return (
    <div>
      <Header />
      <h1>Error 404</h1>
      <button><Link to='/'>Volver a Inicio</Link></button>
      <Footer />
    </div>
  );
}

export default NotFound;
