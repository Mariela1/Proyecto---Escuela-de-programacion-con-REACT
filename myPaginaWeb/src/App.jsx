import axios from "axios";
import { useEffect, useState} from "react";
import './App.css';
import ProductItem from "./components/ProductItem";
import Navbar from './components/Navbar';
import CarritoCompras from './components/CarritoCompras';
import Login from './components/Login';
import Home from './components/Home';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import CardDetail from "./components/CardDetail";

const URL_API = "https://api.escuelajs.co/api/v1/products";

function App() {
const [productos, setProductos] = useState([]);

const getProductos = async () => {
  try {
    const res = await axios(URL_API);
    setProductos(res.data);
}   catch (error) {
    console.log("ERROR: " + error);
}
};

useEffect( () => {
  getProductos();
}, []);

return (
    <div>
      <Navbar  />
       <h1>Web de Escuela de Programacion Educativa</h1>
       
       <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductItem productos={productos} />} />
        <Route path="/products/:id" element={<CardDetail />} />
        <Route path="/404" element={ <h2>404 Not Found</h2> } />
        <Route path="/CarritoCompras" element={<CarritoCompras />} />
        <Route path="/Login" element={<Login />} />
       </Routes>

    </div>
    
  );
}

export default App;
