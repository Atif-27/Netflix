// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxTfhS30X_ZtS9vvObV93co_y2HbxIfyo",
  authDomain: "netflix-gpt-4e710.firebaseapp.com",
  projectId: "netflix-gpt-4e710",
  storageBucket: "netflix-gpt-4e710.appspot.com",
  messagingSenderId: "727814258261",
  appId: "1:727814258261:web:4b96799ffef4ea85d35edc",
  measurementId: "G-D40R832CZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
