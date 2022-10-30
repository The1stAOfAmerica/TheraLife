import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


function start(){
    alert("1")

    const SignupForm = document.getElementById("signup-form");
    const email = SignupForm.signupmail.value;
    const auth = getAuth();
    const password = SignupForm.signuppass.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("signed in")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

