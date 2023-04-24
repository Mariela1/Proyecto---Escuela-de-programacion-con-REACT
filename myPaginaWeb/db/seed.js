import {collection, addDoc} from "firebase/firestore";
import productos from "../productos.js";
import db from "./firebase-config.js";

const itemsRef = collection(db, "items");

const promises = productos.map(producto => addDoc(itemsRef, producto));

Promise.all(promises).then(() => {
        console.log("done");
        process.exit(0)
    })


