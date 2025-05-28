import React from "react";
import "./styleCart.css";

const Cart = ({ cartItems = [], isOpen, onClose }) => {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de compras</h2>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul className="cart-item">
            {/* {cartItems.map((item, index) => (
              <>
                <li key={item.id}>
                  {" "}
                  {item.title} - ${item.price} x {item.quantity}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              </>
            ))} */}

            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
                <p>Total: $ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                <button>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
