import axios from "axios";
import { useEffect, useState} from "react";
import './App.css';
import ProductItem from "./components/ProductItem";
import Navbar from './components/Navbar';
import CarritoCompras from './components/CarritoCompras';
import Login from './components/Login';

const URL_API = "https://pokeapi.co/api/v2/pokemon/";

function App() {
const [pokemones, setPokemones] = useState([]);

const getPokemones = async () => {
  try {
  const res = await axios(URL_API);
  setPokemones(res.data);
} catch (error) {
    console.log("ERROR: " + error);
}
};

useEffect( () => {
  getPokemones();
}, []);

return (
    <div>
       <h1>Web de Escuela de Programacion Educativa</h1>
      <Navbar  />
      <CarritoCompras icono="https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg"/>
       <Login />

       {pokemones.map((pokemon,i) => (
        <ProductItem pokemon={pokemon} key={pokemon.name}/>
       ))}
    </div>
    
  );
}

export default App;
