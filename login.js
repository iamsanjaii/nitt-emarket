// Import Firebase scripts
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5O_z72axW4oulcMwCDvP44X084EA6S2w",
    authDomain: "nitt---e-commerce.firebaseapp.com",
    projectId: "nitt---e-commerce",
    storageBucket: "nitt---e-commerce.appspot.com",
    messagingSenderId: "473919345595",
    appId: "1:473919345595:web:b0bb794043c23d05682a9e",
    measurementId: "G-20LM28FJN2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email-l').value;
            const password = document.getElementById('password-l').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('User logged in:', user);
                    alert('Login successful!');
                    // Redirect to dashboard or desired page
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Error:', errorCode, errorMessage);
                    alert('Invalid credentials. Please try again.');
                });
        });
    }
});
