import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfXWVUaxm_5uDO-msFCnaQnfliFv2Ve-w",
    authDomain: "reactfirst-2a13f.firebaseapp.com",
    databaseURL: "https://reactfirst-2a13f-default-rtdb.firebaseio.com",
    projectId: "reactfirst-2a13f",
    storageBucket: "reactfirst-2a13f.appspot.com",
    messagingSenderId: "613054326408",
    appId: "1:613054326408:web:6f26ffed27db2baa8da13d",
    measurementId: "G-QV9MBJNV68"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();

  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  
  export default db;
  export {auth,provider}
