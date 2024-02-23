// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "cico-blog.firebaseapp.com",
  projectId: "cico-blog",
  storageBucket: "cico-blog.appspot.com",
  messagingSenderId: "252078754207",
  appId: "1:252078754207:web:bf1b11aef8c110ec4c95aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);