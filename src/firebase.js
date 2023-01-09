import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

    apiKey: "AIzaSyBEviAvr9Pl8T671IeXsVhDk7UfXw8ifos",
  
    authDomain: "disneyplus-clone-1ced6.firebaseapp.com",
  
    projectId: "disneyplus-clone-1ced6",
  
    storageBucket: "disneyplus-clone-1ced6.appspot.com",
  
    messagingSenderId: "600290236921",
  
    appId: "1:600290236921:web:9b036627c21c1ac0658528",
  
    measurementId: "G-7VDRDMM7QE"
  
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;

