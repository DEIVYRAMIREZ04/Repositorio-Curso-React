import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPtlxjHujZtJzB1aw_FdQ6ZL-rl4cmQw8",
  authDomain: "ecommerce-deivy-ramirez.firebaseapp.com",
  projectId: "ecommerce-deivy-ramirez",
  storageBucket: "ecommerce-deivy-ramirez.firebasestorage.app",
  messagingSenderId: "389760838378",
  appId: "1:389760838378:web:c10062306ce19d77ff4593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;