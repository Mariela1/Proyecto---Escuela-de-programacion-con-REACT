import React from 'react'
import "./itemCart.css";
import { useCartContext } from '../../contexts/CartContext';

const itemCart = ({producto}) => {
    const {removeProduct} = useCartContext();
  return (
    

<div className="itemCart">
         <h3>Titulo: {producto.title}</h3>
        <img src={producto.images} width="100" height={"100"}/>
        <p>Producto: {producto.description}</p> 
        <p>Precio u.: {producto.price}</p>
        <p>Subtotal: ${producto.quantity*producto.price}</p>
        <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
    </div>
  )
}

export default itemCart