import axios from "axios";
import React, { useEffect, useState} from "react";
import './App.css';
import ProductItem from "./components/ProductItem";
import Navbar from './components/Navbar';
import CarritoCompras from './components/CarritoCompras';
import Login from './components/Login';
import Home from './components/Home';
import {Navigate, Route, Routes, useLocation } from 'react-router-dom';
import CardDetail from "./components/CardDetail";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import TextComponent from "./components/TextComponent";
import db from "../db/firebase-config";
import {collection, getDocs} from "firebase/firestore";
import ListItems from "./components/ListItems/ListItems";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Form from "./components/Form/Form";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import CartProvider from "./contexts/CartContext";
import Cart from "./components/Cart";
import ItemCart from "./components/ItemCart";



const URL_API = "https://api.escuelajs.co/api/v1/products";


function App() {

  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
       id: doc.id,
      }));
    setItems(items);
    setLoading(false);
  };
  
  const deleteItem = async (id) => {
    setLoading(true);
    const docRef = doc(db,"items", id)
    await deleteDoc(docRef);
    getItems();
  };

  const updateItem = async (id) => {
    setLoading(true);
    const docRef = doc(db,"items", id);
    await updateDoc(docRef, {title: "Nuevo titulo", price: "Nuevo precio"});
    getItems();
  };

   useEffect(() => {
    getItems();
  }, []);

  let location = useLocation();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProductos = async () => {

  try {
    const res = await axios(URL_API);
    setProductos(res.data);
    setLoading(false);
}   catch (error) {
    console.log("ERROR: " + error);
}
};

useEffect( () => {
  getProductos();

}, []);

useEffect( () => {
    setTimeout(() => {  
    setLoading(false)
}, 2000);
  }, []);

useEffect(() => {
}, [location]);

  if (loading) {
    return <Spinner />;
  }
  
  if (loading) {
    return <h1>Loading...</h1>
  }
return (
  <div>
  <h1>Web de Escuela de Programacion Educativa</h1>   
      

   

       <TextComponent condition={true} /> 

       <Form getItems={getItems} itemsRef={itemsRef} />
       <CartProvider>

         <React.Fragment>
            <Navbar />
         </React.Fragment>

       <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductItem productos={productos} />} />
          <Route path="/products/:id" element={<CardDetail />} />
          <Route path="/404" element={ <h2>404 Not Found</h2> } />
          <Route path="/CarritoCompras" element={<Cart  />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/items" element={<ListItems items={items} deleteItem={deleteItem} updateItem={updateItem}/>} />
       </Routes>

       </CartProvider>

        <Main />
       

      <Footer />
  </div>
      
  );
}

export default App;


