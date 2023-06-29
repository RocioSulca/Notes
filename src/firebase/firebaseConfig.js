// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Ias74N68skhpq5K838FGCOq1LnM7xnY",
  authDomain: "notes-9f0e8.firebaseapp.com",
  projectId: "notes-9f0e8",
  storageBucket: "notes-9f0e8.appspot.com",
  messagingSenderId: "904075532828",
  appId: "1:904075532828:web:046469a65a32b101b59dd9",
  measurementId: "G-GN6832VK5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
//const database = getDatabase(app);
export const db = getFirestore(app);