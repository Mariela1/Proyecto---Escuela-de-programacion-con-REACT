
import * as React from 'react';
import styles from './productCard.module.css';
import { Link } from 'react-router-dom';



const ProductCard = ({producto}) => {
  return (
    <Link to={`${producto.id}`}> 
    <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img src={producto.images} width="100" height={"100"}/>
        <p>{producto.description}</p>
        <p>{producto.price}</p>

        <button>{location == "productos" ? "Agregar al carrito": "Remover del carrito"}</button>
    </div>
    </Link>
    
  );
};

export default ProductCard;