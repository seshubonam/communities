// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAluRc2knOI2Vi1sNnF-OP4oqFQmQ_yGI",
  authDomain: "com.snapp.comm",
  projectId: "communities-36239",
  storageBucket: "communities-36239.appspot.com",
  messagingSenderId: "632891598393",
  appId: "1:632891598393:ios:fcaa491fc7e151f7564fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
