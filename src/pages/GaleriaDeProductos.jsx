import React, { useState } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "./../assets/loading.gif";
import Cart from "../components/Cart";
import "../styles/styleLoading.css";

const GaleriaDeProductos = ({ productos, cargando, cart, agregarCarrito }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Header cartItems={cart} onCartClick={() => setCartOpen(true)} />

      {cargando ? (
        <div className="loading-container">
          <img src={loading} alt="Cargando..." />
        </div>
      ) : (
        <ProductList productos={productos} agregarCarrito={agregarCarrito} />
      )}

      <Cart
        cartItems={cart}
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
      />
      <Footer />
    </div>
  );
};

export default GaleriaDeProductos;
