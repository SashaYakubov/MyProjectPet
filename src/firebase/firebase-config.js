import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



export const firebaseConfig = {
    apiKey: "AIzaSyDlyS4ZBzj7LUW6Y7tADlQDlH_CaaUetsg",
    authDomain: "petpoject-a4cc5.firebaseapp.com",
    databaseURL: "https://petpoject-a4cc5-default-rtdb.firebaseio.com",
    projectId: "petpoject-a4cc5",
    storageBucket: "petpoject-a4cc5.appspot.com",
    messagingSenderId: "713999547938",
    appId: "1:713999547938:web:0b30e9efbe483f2d40d47b",
    measurementId: "G-MVS4LHWBMJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);