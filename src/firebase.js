import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB2d_HzSOdy7QsvxBMEhOxXzKhFBVDY9xY",
  authDomain: "myblogsite-ed122.firebaseapp.com",
  projectId: "myblogsite-ed122",
  storageBucket: "myblogsite-ed122.appspot.com",
  messagingSenderId: "856528173422",
  appId: "1:856528173422:web:14d0ac545bfd010dafa97f",
  measurementId: "G-HJ26XFCGCN",
});

const fb = firebase;

export default fb;
