import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
  
    const {cart, totalPrice} = useCartContext();
  
    if (cart.length === 0) {
      return (
        <>
          <p>No hay elementos en el carrito</p>
          <Link to="/">Hacer compras</Link>
        </>
      );
    }
  
    return (
    <>
        {
      cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
        }
      <p>
        Total: ${totalPrice()}
      </p>
      </> 

  )
}

export default Cart