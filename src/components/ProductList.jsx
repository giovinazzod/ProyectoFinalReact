import React from "react";
import Productos from "./Productos";
import './estaticos/styleProducto.css'

const ProductList = ({ productos }) => {

  if (!Array.isArray(productos)) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <>
      <h2>Lista de Productos</h2>
      <div className="tarjeta">
        {productos.map(producto => (
            <Productos key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

