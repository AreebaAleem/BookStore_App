// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1D-o2Pts2AvE1MsFm4hB8fnwpYsx8OTw",
  authDomain: "geographicalinfo-be093.firebaseapp.com",
  projectId: "geographicalinfo-be093",
  storageBucket: "geographicalinfo-be093.appspot.com",
  messagingSenderId: "330989534063",
  appId: "1:330989534063:web:0a6c3a5a68de46376ac69a",
  measurementId: "G-M1JN3TMPEL",
  databaseURL: " https://geographicalinfo-be093-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig,"GeographicalInfo");
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export {app,auth};

