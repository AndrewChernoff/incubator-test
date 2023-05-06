// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHi2243oQB-GIfbWSB9lo3nlTFnXlbFBE",
  authDomain: "incubator-test-31748.firebaseapp.com",
  projectId: "incubator-test-31748",
  storageBucket: "incubator-test-31748.appspot.com",
  messagingSenderId: "48215001514",
  appId: "1:48215001514:web:73d83a6a6770cdc4a9c3d3",
  measurementId: "G-FRTTSM2BQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);