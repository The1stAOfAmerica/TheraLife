// import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


const SignupForm = document.getElementById("signup-form");
const SignupButton = document.getElementById("signup-form-submit");
let name = "no";


function getName(){
    return name;
}

SignupButton.addEventListener("click", (e) => {

    e.preventDefault();
    // const auth = getAuth();
    const email = SignupForm.username.value;
    name = email;
    window.location.href = "landing.html";
    const password = SignupForm.password.value;

    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user;
    //     window.location.href = "/landing.html";
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    // });
})