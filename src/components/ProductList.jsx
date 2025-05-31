import React from "react";
import Productos from "./Productos";
import "./styleProducto.css";

const ProductList = ({ productos, agregarCarrito }) => {
  if (!Array.isArray(productos)) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <>
      <div className="tarjeta">
        {productos.map((producto) => (
          <Productos
            key={producto.id}
            producto={producto}
            agregarCarrito={agregarCarrito}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
