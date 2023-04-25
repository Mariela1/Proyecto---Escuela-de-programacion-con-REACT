import { useState, useEffect } from 'react';
import './itemCount.css';
import { Link } from 'react-router-dom';
export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const sumar = () => {
        setCount(count + 1);
      };
    
      const restar = () => {
        setCount(count - 1);
      };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

 
  return (
    <div className='counter'>
          <p>{count}</p>
        <button disabled={count <=1 } onClick={restar}>-</button>
        <button disabled={count >= stock} onClick={sumar}>+</button>
        
        <div>
        <button disabled={stock <=0 } onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      
    </div>
  )
}

export default ItemCount;