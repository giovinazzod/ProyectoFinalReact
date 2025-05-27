import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "./../assets/loading.gif";
const GaleriaDeProductos = ({productos, cargando}) => {
  return (
    <div>
      <Header />
      <h1>Galería de Productos</h1>
      
      {cargando ? <img src={loading} /> : <ProductList productos={productos} />}
      <Footer />
    </div>
  );
};

export default GaleriaDeProductos;
