import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAO-AdzQhyFcIcdlu4eIUtNyyI4yPZesTs",
    authDomain: "budgeting-app-87fba.firebaseapp.com",
    databaseURL: "https://budgeting-app-87fba-default-rtdb.firebaseio.com",
    projectId: "budgeting-app-87fba",
    storageBucket: "budgeting-app-87fba.appspot.com",
    messagingSenderId: "509454322359",
    appId: "1:509454322359:web:1dd506a802d10affaddb32",
    measurementId: "G-G62HV6SP72"
  };
  


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function signup(email , password){
   return createUserWithEmailAndPassword(auth, email , password);
}