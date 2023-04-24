import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const CardDetail   = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    console.log(id);
    
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
         <h3>{producto.title}</h3>
        <img src={producto.images} width="100" height={"100"}/>
        <p>{producto.description}</p> 
        CardDetail
    </div>
  );
};

 export default CardDetail;
 