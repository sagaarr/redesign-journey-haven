// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCldGG52E8ULSLYpAnZUacTT7kbsge2Hsw",
  authDomain: "unm-foundation-7c85f.firebaseapp.com",
  projectId: "unm-foundation-7c85f",
  storageBucket: "unm-foundation-7c85f.firebasestorage.app",
  messagingSenderId: "222550966656",
  appId: "1:222550966656:web:49bb3e69727e49d44ac165",
  measurementId: "G-0ZSW72GT7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics}