import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAA5aFQbiFHhKXZEJTZiMcvtbtuUGD-F7w",
    authDomain: "netflix-867b0.firebaseapp.com",
    projectId: "netflix-867b0",
    storageBucket: "netflix-867b0.appspot.com",
    messagingSenderId: "1044571613511",
    appId: "1:1044571613511:web:10e8c58008d2439bf84462"
};

const firebaseApp = firebase.initializeApp(config);

export { firebaseApp };