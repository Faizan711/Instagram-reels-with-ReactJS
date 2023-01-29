// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBiC-tSrTnfkGNFCdc8B73sloN-PyOSHv0",
    authDomain: "ig-reels-e5ee6.firebaseapp.com",
    projectId: "ig-reels-e5ee6",
    storageBucket: "ig-reels-e5ee6.appspot.com",
    messagingSenderId: "324865771290",
    appId: "1:324865771290:web:40fa6a25002ad9659acea3",
    measurementId: "G-TXCKCKPFZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  /*This is to initialize my firebase app with the given credentials in the config*/

  const db = firebaseApp.firestore();
  /*This is to access the DB of the initialized firebaseApp */

  export default db; //To access the DB from anywhere in the App