const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const auth = getAuth();
    const email = loginForm.username.value;
    const password = loginForm.password.value;
})

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });