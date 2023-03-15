import styles from './carrito.module.scss';

const CarritoCompras = ({icono}) => {
  return (
    <button className={styles.btn}>
    <img src={icono} alt="" width="40" height="40" />
  </button>
    );
};

export default CarritoCompras;