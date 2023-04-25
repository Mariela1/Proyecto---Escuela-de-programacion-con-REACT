import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';
import ItemCount from '../ItemCount';


export const ItemDetail = () => {
    const {id } = useParams();
    const {item, setItem } = useState({})
    const nombre = useContext(CartContext);
    console.log('ItemDetail', nombre);

    const getItem = async () => {
        const itemDoc = doc(db, "items", id);
        const item = await getDoc(itemDoc);
        if (item.exists()) {
            setItem(item.data());
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        getItem();
    }, []);


  return (
    <div>
        <h2>Title: {item.title}</h2>
        <img src={item.images} alt="producto" width={200} heigth={200} />
        <p>Price: {item.price}</p>
        <p>Descripcion: {item.description}</p>
      

    </div>
  );
};

export default ItemDetail;