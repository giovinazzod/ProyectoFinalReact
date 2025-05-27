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
  const [count, setCount] = useState(0);
  const [productos, setProductos] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //fetch('/data/data.json')
    fetch('https://fakestoreapi.com/products')
      .then(respuesta => respuesta.json())
      .then(datos => {
          setTimeout(()=>{
              setProductos(datos)
              setCargando(false)
            }, 2000)
      })
      .catch(error=>{
        console.log('Error:', error)
        setCargando(false)
        setError(true)
      })
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/productos" element={<GaleriaDeProductos productos={productos} cargando={cargando}/>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
