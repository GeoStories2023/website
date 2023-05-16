// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7oZ5kq5IbeBprO6YUoy8W0Pvwz5g26ZA",
  authDomain: "geostories-test.firebaseapp.com",
  projectId: "geostories-test",
  storageBucket: "geostories-test.appspot.com",
  messagingSenderId: "666685128396",
  appId: "1:666685128396:web:f2a20af76f0c243b3b8c69",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
