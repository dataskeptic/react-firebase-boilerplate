import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0tA1zDn9-9g_1jjqWX9mffbqjMacjTto",
  authDomain: "react-boilerplate-cbc6a.firebaseapp.com",
  projectId: "react-boilerplate-cbc6a",
  storageBucket: "react-boilerplate-cbc6a.appspot.com",
  messagingSenderId: "295371581479",
  appId: "1:295371581479:web:e089b02e23351626d68602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
