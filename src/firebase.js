import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBv3oiluARF_nN8N2I1gpXkQPR2fV5PSSw",
    authDomain: "dogclothes-f4fb8.firebaseapp.com",
    projectId: "dogclothes-f4fb8",
    storageBucket: "dogclothes-f4fb8.appspot.com",
    messagingSenderId: "829049182537",
    appId: "1:829049182537:web:acfd862185bc07a7c82298"
  };
//Esta funcion me da una instancia de la app ya inicalizada
const app = firebase.initializeApp(firebaseConfig);

// esta funcion me da una isntancia de firestore
/* export const firestore = firebase.firestore(app) */


export const getFirestore = ()=> {
    return firebase.firestore(app)
}