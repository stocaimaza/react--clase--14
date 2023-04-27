import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgj_5_NSSyFcfmNSOq3iJJhRfMW1yukpE",
  authDomain: "tinki--winki--coderhouse.firebaseapp.com",
  projectId: "tinki--winki--coderhouse",
  storageBucket: "tinki--winki--coderhouse.appspot.com",
  messagingSenderId: "239752593672",
  appId: "1:239752593672:web:e97d951a442944cfe06cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);