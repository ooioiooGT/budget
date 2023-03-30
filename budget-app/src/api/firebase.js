import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider , signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";


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
const auth = getAuth(app);



export const provider = new GoogleAuthProvider();



export function signup(email, password){
   return createUserWithEmailAndPassword(auth, email , password);
}

export function signinwithgoogle (){
  return signInWithPopup(auth,provider);
}
export function signin(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
export function signout(){
  return signOut();
}

const user = auth.currentUser;
if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
