// login.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const btn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');

btn.addEventListener('click', async () => {
  const email = emailEl.value;
  const password = passEl.value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Logged in:", userCred.user);
    localStorage.setItem('user', JSON.stringify(userCred.user));
    window.location.href = 'index.html'; // redirect after login
  } catch (err) {
    errorMsg.textContent = "❌ " + err.message;
  }
});
