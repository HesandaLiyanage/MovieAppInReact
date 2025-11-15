// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3IvQe-Xt0--i9yhQHDD_ifEJoJSZvS44",
  authDomain: "netflixclonebyhess.firebaseapp.com",
  projectId: "netflixclonebyhess",
  storageBucket: "netflixclonebyhess.firebasestorage.app",
  messagingSenderId: "52578054084",
  appId: "1:52578054084:web:c710bc09d19c60e2aefe91",
  measurementId: "G-VZXG44QQ9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        
    } catch (error) {

    }
}