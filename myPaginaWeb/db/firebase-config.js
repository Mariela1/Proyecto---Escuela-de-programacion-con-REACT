
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0uQdCzt7DQczMoupwAM8WpA1LybaYAjs",
  authDomain: "e-commerce-78da3.firebaseapp.com",
  projectId: "e-commerce-78da3",
  storageBucket: "e-commerce-78da3.appspot.com",
  messagingSenderId: "288301240683",
  appId: "1:288301240683:web:84abf886a0087817373c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;