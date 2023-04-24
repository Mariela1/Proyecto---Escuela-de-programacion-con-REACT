import styles from './carrito.module.scss';
import { useState } from 'react';

const CarritoCompras = ({icono}) => {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <div>
    <p>{count}</p>
    <button className={styles.btn} >
      <img src={icono} alt="" width="40" height="40" />
    </button>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    </div>
    );
};

export default CarritoCompras;