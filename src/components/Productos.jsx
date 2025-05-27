import React from 'react'
import './estaticos/styleProducto.css'

const Productos = ({producto}) => {
  return (
    <section className='card'>
        <div className='imgContainer'>
            <img src={producto.image} alt="" className='imagen'/>
        </div>
      <h3 className='nombre'>{producto.title}</h3>
      <p className='precio'>{producto.price}</p>
      <p className='stock'>{producto.rating.count}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton'>-</button>
        <span></span>
        <button className='qtyButton'>+</button>
      </div>

      <button>Agregar al carrito</button>
    </section>
  )
}

export default Productos
