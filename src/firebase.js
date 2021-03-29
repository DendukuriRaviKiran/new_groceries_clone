import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhUlYmCMIyPPOaOimTd3zi_iI4DLOMZNk",
  authDomain: "challenge-9ec4c.firebaseapp.com",
  projectId: "challenge-9ec4c",
  storageBucket: "challenge-9ec4c.appspot.com",
  messagingSenderId: "533057951115",
  appId: "1:533057951115:web:bf04fc2eb952a216198b8e",
  measurementId: "G-DSN80C8VH2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };