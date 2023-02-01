import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyB6sKJdAibEGJ8TuVe9BHSB-qfsTYBbqBI",
    authDomain: "projecttodo-f100d.firebaseapp.com",
    projectId: "projecttodo-f100d",
    storageBucket: "projecttodo-f100d.appspot.com",
    messagingSenderId: "282507634434",
    appId: "1:282507634434:web:f54426786cdea3eec4841b",
    measurementId: "G-X4R1BSBJ85"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export{db}