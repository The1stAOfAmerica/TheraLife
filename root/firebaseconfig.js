import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
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

const app = initializeApp(firebaseConfig);

import { getAuth } from "firebase/auth";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);