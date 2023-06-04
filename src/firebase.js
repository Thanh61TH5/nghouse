// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDij6WT2jOgwcJc0h-dhL00fjZdUFIJx6M",
    authDomain: "realtor-clone-react-c7734.firebaseapp.com",
    projectId: "realtor-clone-react-c7734",
    storageBucket: "realtor-clone-react-c7734.appspot.com",
    messagingSenderId: "805011422692",
    appId: "1:805011422692:web:600e900178de5646095bf1",
    measurementId: "G-C62YJGL4XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()