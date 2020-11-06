// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDRI6sMGYpwrBzXIpaBxppa4lLy2tcrTsU",
  authDomain: "chat-system-63d06.firebaseapp.com",
  databaseURL: "https://chat-system-63d06.firebaseio.com",
  projectId: "chat-system-63d06",
  storageBucket: "chat-system-63d06.appspot.com",
  messagingSenderId: "710523291768",
  appId: "1:710523291768:web:f58caba5d94ca6e579858d",
  measurementId: "G-0QVKZ8QK9L",
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db ;