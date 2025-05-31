import React, { useState } from "react";
import "./styleProducto.css";

const Productos = ({ producto, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(0);
  const stock = producto.rating.count;

  const increase = () =>
    setCantidad((prev) => (prev < stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAgregar = () => {
    if (cantidad > 0) {
      agregarCarrito(producto, cantidad);
      setCantidad(0); // opcional: resetear a 0 después de agregar
    }
  };

  return (
    <section className="card">
      <div className="imgContainer">
        <img src={producto.image} alt="" className="imagen" />
      </div>
      <h3 className="nombre">{producto.title}</h3>
      <p className="precio">$ {producto.price}</p>
      {/* <p className='stock'>{producto.rating.count}</p> */}

      <div className="cantidadContainer">
        <button
          className="qtyButton"
          onClick={decrease}
          disabled={cantidad === 0}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          className="qtyButton"
          onClick={increase}
          disabled={cantidad >= stock}
        >
          +
        </button>
      </div>

      <button
        className="btn-agregar"
        onClick={handleAgregar}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </section>
  );
};

export default Productos;
