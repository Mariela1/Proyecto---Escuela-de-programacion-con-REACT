import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import styles from './carrito.module.scss';
import { useContext } from 'react';


export const CarritoCompras = ({icono}) => {
  const nombre = useContext(CartContext);
  console.log('CarritoCompras', nombre);
 
  return (
    <div>
  
    <button className={styles.btn} >
      <img src={icono} alt="" width="40" height="40" />
    </button>
    </div>
    )
};

export default CarritoCompras;