import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const Home = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <main>
        <h1>Bienvenidos!</h1>
        <p>
          Esta pagina no tiene mucho sentido. 
          <br/>
          Evaluar quitarla y dejar como inicio a la GaleriaDeProductos.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
