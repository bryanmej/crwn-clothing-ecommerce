import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFEduCrhQZMAGZUEd3wiDr820h3Q6hHEA",
  authDomain: "crwn-clothing-a317a.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a317a.firebaseio.com",
  projectId: "crwn-clothing-a317a",
  storageBucket: "crwn-clothing-a317a.appspot.com",
  messagingSenderId: "833450778539",
  appId: "1:833450778539:web:1048818f1484886143bcee"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
