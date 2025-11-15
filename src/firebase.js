// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    getAuth,
    signOut } from "firebase/auth";

import { 
    addDoc,
    collection, 
    getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB3IvQe-Xt0--i9yhQHDD_ifEJoJSZvS44",
  authDomain: "netflixclonebyhess.firebaseapp.com",
  projectId: "netflixclonebyhess",
  storageBucket: "netflixclonebyhess.firebasestorage.app",
  messagingSenderId: "52578054084",
  appId: "1:52578054084:web:c710bc09d19c60e2aefe91",
  measurementId: "G-VZXG44QQ9Q"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"), {
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    }catch (error) {
        console.log(error);
        alert(error)
    }
}

const logout = async () => {
    try {
        signOut(auth);
    }
    catch(error) {
        console.log(error);
        alert(error);
    }
}

export {auth, db , login , signup , logout};