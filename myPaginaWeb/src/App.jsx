
import './App.css'
import Navbar from './components/Navbar';
import CarritoCompras from './components/CarritoCompras';
import Login from './components/Login';
function App() {

  return (
    
    <div>
       <h1>Web de Escuela de Programacion Educativa</h1>
      <Navbar  />
      <CarritoCompras icono="https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg"/>
       <Login />
    </div>
  );
}

export default App;
