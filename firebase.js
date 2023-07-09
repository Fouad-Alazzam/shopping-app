// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRzp32yY3cu2OJAp4ASkFaFY79BYBiaLE",
  authDomain: "fir-app-66c05.firebaseapp.com",
  projectId: "fir-app-66c05",
  storageBucket: "fir-app-66c05.appspot.com",
  messagingSenderId: "141859730084",
  appId: "1:141859730084:web:3377fefe63aa080d942c31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
