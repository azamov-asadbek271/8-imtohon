import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAznpBhysHfEWiq6UGsL73tW-v7eiDHFpA",
  authDomain: "add-recipies-15bf2.firebaseapp.com",
  projectId: "add-recipies-15bf2",
  storageBucket: "add-recipies-15bf2.appspot.com",
  messagingSenderId: "190432497361",
  appId: "1:190432497361:web:5a7af4910dca16bd84fff0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
export const db = getFirestore(app)
