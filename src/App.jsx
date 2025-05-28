import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //fetch('/data/data.json')
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error:", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  // const handleAddToCart = (product, cantidad) => {
  //   console.log("Producto agregado:", producto);
  //   console.log("Cantidad:", cantidad);

  //   const productInCart = cart.find((item) => item.id === product.id);
  //   console.log("productInCart", productInCart);

  //   if (productInCart) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  const handleAddToCart = (product, cantidad) => {
    console.log("Producto agregado:", product);
    console.log("Cantidad:", cantidad);

    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: cantidad }]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route
          path="/productos"
          element={
            <GaleriaDeProductos
            productos={productos}
            cargando={cargando}
            cart={cart}
            agregarCarrito={handleAddToCart}
            />
          }
        />
        <Route path="/acercade" element={<AcercaDe cart={cart} />} />
        <Route path="/contacto" element={<Contacto cart={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
