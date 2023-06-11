// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_api_key_here",
  authDomain: "yourdomain.firebaseapp.com",
  projectId: "yourappname-28098",
  storageBucket: "yourappname-28098.appspot.com",
  messagingSenderId: "000000000000000",
  appId: "1:00000000000000:web:0000000000000000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
