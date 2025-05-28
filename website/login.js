// login.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      window.location.href = "explore.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});
