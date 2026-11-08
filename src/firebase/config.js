import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4t7pimb-kKz__q2GBY08dgGIgKcUPdLQ",
  authDomain: "proyectofinalseylabenitez.firebaseapp.com",
  projectId: "proyectofinalseylabenitez",
  storageBucket: "proyectofinalseylabenitez.appspot.com",
  messagingSenderId: "690101247156",
  appId: "1:690101247156:web:2bcf41a851dedd1c458be1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);