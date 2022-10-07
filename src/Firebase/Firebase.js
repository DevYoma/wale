import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOY78S5vmX55qb4OiAvgduKfJYqe10fZc",
  authDomain: "react-class-62984.firebaseapp.com",
  projectId: "react-class-62984",
  storageBucket: "react-class-62984.appspot.com",
  messagingSenderId: "462934020644",
  appId: "1:462934020644:web:e04ea127b2c54063643eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initailizing Auth
export const auth = getAuth(); 