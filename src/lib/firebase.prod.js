import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
   /* your firebase config */
};

const firebaseApp = firebase.initializeApp(config);

export { firebaseApp };
