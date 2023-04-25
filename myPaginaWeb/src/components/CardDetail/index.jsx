import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../contexts/CartContext";


const CardDetail   = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    console.log(id);

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);

    }
    const {removeProduct} = useCartContext();


const getProducto = async () => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const data = await response.json();    
        setProducto(data);
        setLoading(false);
    } catch (error) {
        setProducto(null);
    } 
    };

    useEffect(() => {
        getProducto();
    }, []);

    if (!producto) {
        return <Navigate to="/404" />;
    }
    if (loading) {
        return <h2>Loading...</h2>;
    }


    
    return ( 
    <div>
         <h3>Titulo: {producto.title}</h3>
        <img src={producto.images} width="100" height={"100"}/>
        <p>Producto: {producto.description}</p> 
        <p>Precio u.: {producto.price}</p>
        <p>Subtotal: ${producto.quantity*producto.price}</p>
        <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
    
        CardDetail

        {
            goToCart 
            ? <Link to='/CarritoCompras'>Terminar mi compra</Link>
            :<ItemCount initial={1} stock={5} onAdd={onAdd}/>

        }
        
    </div>
  );
};

 export default CardDetail;
 