// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkBK2E-1WINOhKpIA-t54dBa776HkOVE",
  authDomain: "smart-deals-d0b88.firebaseapp.com",
  projectId: "smart-deals-d0b88",
  storageBucket: "smart-deals-d0b88.firebasestorage.app",
  messagingSenderId: "961763290759",
  appId: "1:961763290759:web:96d017dd82a884211b5222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
