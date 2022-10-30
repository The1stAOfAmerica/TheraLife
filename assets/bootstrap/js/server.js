const firebaseConfig = {
    apiKey: "AIzaSyClnE9uvMMoO-bkyaYsiPhodFQxvc26F4Q",
    authDomain: "theralifeserver.firebaseapp.com",
    databaseURL: "https://theralifeserver-default-rtdb.firebaseio.com",
    projectId: "theralifeserver",
    storageBucket: "theralifeserver.appspot.com",
    messagingSenderId: "443126424428",
    appId: "1:443126424428:web:657f50df75a9b083ac0949",
    measurementId: "G-TV0QCGRQ4P"
};

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });