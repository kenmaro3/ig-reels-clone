import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjjIcwCn5F6gCXOCST4fPATdTEHvR99wY",
  authDomain: "ig-reels-clone-e2b44.firebaseapp.com",
  databaseURL: "https://ig-reels-clone-e2b44.firebaseio.com",
  projectId: "ig-reels-clone-e2b44",
  storageBucket: "ig-reels-clone-e2b44.appspot.com",
  messagingSenderId: "861898663874",
  appId: "1:861898663874:web:ce985ce8695c23c4f6585b",
  measurementId: "G-GK9WEDF4MH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;