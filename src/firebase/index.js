import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp-YKx4bJw8df3GQe9NE3ESUAAvt2-qco",
  authDomain: "e-commerce-coder-6194e.firebaseapp.com",
  projectId: "e-commerce-coder-6194e",
  storageBucket: "e-commerce-coder-6194e.appspot.com",
  messagingSenderId: "848906970337",
  appId: "1:848906970337:web:74bd6ceb4bd4e0895cc3a0"
};

const app = initializeApp(firebaseConfig);

