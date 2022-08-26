// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8eh4l7G2q1Dxbbc77O6LuUsLAGqfYOTs",
  authDomain: "clone-70104.firebaseapp.com",
  projectId: "clone-70104",
  storageBucket: "clone-70104.appspot.com",
  messagingSenderId: "337039895909",
  appId: "1:337039895909:web:776301372f8faf72ea858c",
  measurementId: "G-7HGTS0ZG71"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
  export { db, auth };