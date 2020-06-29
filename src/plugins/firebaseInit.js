import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseconfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
